export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function fetchAPI(query, { previewData, variables } = {}) {
  let craftUrl = API_URL;


  if (previewData && previewData !== '') {
    craftUrl += '?token=' + previewData;
  }

  const res = await fetch(craftUrl, {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
