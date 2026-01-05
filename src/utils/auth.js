const USERNAME = "admin";
const PASSWORD = "admin123";

export const login = (username, password) => {
  if (username === USERNAME && password === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    return { success: true };
  }
  return { success: false, message: "Invalid username or password" };
};

export const logout = () => {
  localStorage.removeItem("loggedIn");
};

export const isAuthenticated = () => {
  return localStorage.getItem("loggedIn") === "true";
};
