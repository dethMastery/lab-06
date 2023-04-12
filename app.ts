import { httpClient } from "./src/interceptor";

interface resultInterface {
  data: {
    status?: number;
    message?: string;
  };
}

let message: string = `This is testing message`;

httpClient.post(`?message=${message}`).then((result: resultInterface) => {
  console.log(result.data.status, result.data.message);
});