const baseURL = process.env.REACT_APP_BASE_URL;

const apiUserServices = {};

apiUserServices.userLogin = (user) => {
  return fetch(`${baseURL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiUserServices.UserRegister = (user) => {
  return fetch(`${baseURL}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiUserServices.testSearch = () => {
  return fetch(`${baseURL}/vendors`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};
export default apiUserServices;
