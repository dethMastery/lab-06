import { reqClient } from "./interceptor";

interface resultInterface {
  data: {
    status?: number;
    message?: string;
  };
}

let message: string = `This is testing message`;

reqClient.post(`?message=${message}`).then((result: resultInterface) => {
  console.log("Line Notify request status : ", result.data.status, result.data.message);
});