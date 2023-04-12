import axios from "axios"
import env from "dotenv"

env.config()
let envData = process.env

axios.interceptors.request.use(async (config: any)=> {
  config.headers = { 
    'Authorization': envData.AUTH_KEY,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  config.url = 'https://notify-api.line.me/api/notify' + config.url
  return config;
  
});
export const httpClient = axios