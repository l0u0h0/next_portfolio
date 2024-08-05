import { DATABASE_ID, TOKEN } from '@/app/constant';

export async function getProjectItems() {
  const options = {
    method: 'POST',
    headers: {
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
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
