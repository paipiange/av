import fs from 'fs';
import { execSync } from 'child_process';

// Get proxy from git config if available
try {
  const gitProxy = execSync('git config --get http.proxy').toString().trim();
  if (gitProxy) {
    process.env.HTTPS_PROXY = process.env.HTTPS_PROXY || gitProxy;
    process.env.HTTP_PROXY = process.env.HTTP_PROXY || gitProxy;
  }
} catch (e) {
  process.env.HTTPS_PROXY = process.env.HTTPS_PROXY || 'http://127.0.0.1:7890';
  process.env.HTTP_PROXY = process.env.HTTP_PROXY || 'http://127.0.0.1:7890';
}

const token = execSync('gh auth token').toString().trim();

async function fetchAllStarred() {
  let page = 1;
  const allStarred = [];
  console.log('Fetching starred repositories...');

  while (true) {
    const url = `https://api.github.com/user/starred?per_page=100&page=${page}`;
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3.star+json',
        'User-Agent': 'OpenCode-Star-Fetcher'
      }
    });

    if (!res.ok) {
      console.error(`Error on page ${page}: ${res.status} ${res.statusText}`);
      const text = await res.text();
      console.error(text);
      break;
    }

    const items = await res.json();
    if (!items || items.length === 0) break;

    for (const item of items) {
      // With 'application/vnd.github.v3.star+json', item has { starred_at, repo }
      const repo = item.repo || item;
      allStarred.push({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        owner: {
          login: repo.owner?.login,
          avatar_url: repo.owner?.avatar_url,
          html_url: repo.owner?.html_url
        },
        html_url: repo.html_url,
        description: repo.description || '',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || '',
        topics: repo.topics || [],
        updated_at: repo.updated_at,
        starred_at: item.starred_at || null
      });
    }

    console.log(`Page ${page}: fetched ${items.length} items (Total: ${allStarred.length})`);
    if (items.length < 100) break;
    page++;
  }

  fs.writeFileSync('starred_repos.json', JSON.stringify(allStarred, null, 2), 'utf-8');
  console.log(`Saved ${allStarred.length} repositories to starred_repos.json`);
}

fetchAllStarred().catch(console.error);
