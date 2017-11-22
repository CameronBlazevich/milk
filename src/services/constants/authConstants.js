export const authorizationRedirectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/callback"
    : "https://handrangememorizer.herokuapp.com/callback";
