const headers = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "content-type": "application/json",
  "Access-Control-Allow-Credentials": true,
  Accept: "*/*",
};
export const answer = (statusCode: number, body: string | object) => {
  return {
    statusCode: statusCode,
    headers,
    body: JSON.stringify(body),
  };
};
