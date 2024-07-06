export const authPaths = { SIGNIN: "/signIn", SIGNUP: "/signUp" };

export const pathnames = { ...authPaths, DASHBOARD: "/dashboard" }

export const SECRET_KEY = process.env.SECRET_KEY || "Secret";