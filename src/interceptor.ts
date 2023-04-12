import axios from "axios"

axios.interceptors.request.use(async (config: any)=> {
  config.headers = { 
    'Authorization': '',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  config.url = 'https://notify-api.line.me/api/notify' + config.url
  return config;
  
});
export const httpClient = axios