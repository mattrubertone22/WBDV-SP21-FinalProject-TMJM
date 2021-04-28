const USER_API = "http://localhost:8080/api/users";

const profile = () => {
  return fetch(`${USER_API}/profile`, {
    method: "POST",
    credentials: "include",
                  headers: {
                      'content-type': 'application/json'
                  }
  }).then((response) => response.json());
};

const login = (credentials) => {
  return fetch(`${USER_API}/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

const logout = () => {
  return fetch(`${USER_API}/logout`, {
    method: "GET",
    credentials: "include",
  }).then((response) => response.json());
};

const getCurrentUser = () => {
  return fetch(`${USER_API}/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((responseText) => (responseText ? JSON.parse(responseText) : null));
};

const signup = (credentials) => {
  return fetch(`${USER_API}/signup`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

const otherProfile = (userId) => {
  console.log("userName inside the service:", userId);
  return fetch(`${USER_API}/profile/${userId}`, {
    method: "GET",
  }).then((response) => response.json());
};

const updateProfile = (existingUser) => {
  return fetch(`${USER_API}/profile/${existingUser.id}`, {
    method: "PUT",
    body: JSON.stringify(existingUser),
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export default {
  signup,
  login,
  logout,
  profile,
  updateProfile,
  otherProfile,
  getCurrentUser,
};