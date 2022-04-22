import { Handler } from "aws-lambda";
import { insert } from "../services/draft";

export const insertHandler: Handler = async (event) => {
  if (event.body) {
    const body = JSON.parse(event.body);

    return insert(body);
  } else {
    return {};
  }
};
