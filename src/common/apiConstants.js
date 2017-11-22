export const apiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:50338/api/"
    : "https://www.handrangememorizer.com/api/";
