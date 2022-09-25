import service from "./axios";

type LoginParams = {
  username: string;
  password: string;
};

export const login = (params: LoginParams) => {
  const { username, password } = params;
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);
  return new Promise((resolve, reject) => {
    service.defaults.headers.common["Content-Type"] = "multipart/form-data";
    service.post("login.php?phase=1", data).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        reject(error.data);
      }
    );
  });
};

type VerifyParams = {
  token: string;
  tfa: string;
};

export const verify = (params: VerifyParams) => {
  const { token, tfa } = params;
  const data = new FormData();
  data.append("tfa", tfa);
  return new Promise((resolve, reject) => {
    service.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    service.defaults.headers.common["Content-Type"] = "multipart/form-data";
    service.post("login.php?phase=2", data).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        reject(error.data);
      }
    );
  });
};
