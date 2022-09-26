import axios, { AxiosError } from "axios";

class AjaxService {
  host = "localhost";
  port = "8080";

  server = `http://${this.host}:${this.port}/`;

  // Todo: authorization bearer tokens can be appended here

  catch = (error: AxiosError) => {
    alert(error);
  };

  get = async (endpoint: string) => {
    return await axios.get(this.server + endpoint).catch(this.catch);
  };

  post = async (endpoint: string, data: Object) => {
    return await axios.post(this.server + endpoint, data).catch(this.catch);
  };
}

const ajaxService = new AjaxService();

export default ajaxService;
