export const GITHUB_API_URL =
  process.env.GITHUB_API_URL || "https://api.github.com" ||
  process.env.GITEA_API_URL;
export const GITHUB_SERVER_URL =
  process.env.GITHUB_SERVER_URL || "https://github.com" ||
  process.env.GITEA_SERVER_URL;

  export const USE_REST_API = process.env.USE_REST_API === "true";