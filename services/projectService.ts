import { DATABASE_ID, TOKEN } from '@/app/constant';

export async function getProjectItems() {
  const options = {
    method: 'POST',
    headers: {
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${TOKEN}`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
    body: JSON.stringify({
      page_size: 50,
      sorts: [
        {
          property: 'WorkPeriod',
          direction: 'descending',
        },
      ],
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  return res.json();
}
