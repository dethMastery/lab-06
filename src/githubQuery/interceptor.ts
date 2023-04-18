import axios from "axios";

axios.interceptors.request.use(async (config: any) => {
  config.url = "https://api.github.com/users/" + config.url;

  config.headers = {
    "Accept": "application/json",
    "Accept-Encoding": "identity",
  };
  config.meta = config.meta || {};
  config.meta.requestStartedAt = new Date().getTime();

  console.log(config.url);

  return config;
});

axios.interceptors.response.use(
  (resp: any) => {
    resp.durationInMs =
      new Date().getTime() - resp.config.meta.requestStartedAt;

    return resp;
  },
  (resp: any) => {
    resp.durationInMs =
      new Date().getTime() - resp.config.meta.requestStartedAt;

    throw resp;
  }
);

export const respClient = axios;
