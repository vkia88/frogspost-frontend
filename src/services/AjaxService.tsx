import axios, { AxiosError } from "axios";
import { addMessage } from "../redux/feature/messageSlice";
import {} from "../redux/hooks";
import { store } from "../redux/store";

class AjaxService {
  host = "localhost";
  port = "8080";

  server = `http://${this.host}:${this.port}/`;

  // Todo: authorization bearer tokens can be appended here

  catch = (error: AxiosError) => {
    const dispatch = store.dispatch;
    dispatch(
      addMessage({
        id: window.crypto.randomUUID(),
        severity: "error",
        content: error.response?.data?.toString() ?? "Unknown network error.",
      })
    );
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
