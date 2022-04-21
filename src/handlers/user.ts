import { Handler } from "aws-lambda";
import { findByUser, findByEmail } from "../services/user";

export const findUserHandler: Handler = async (event) => {
  if (event.body) {
    const body = JSON.parse(event.body);

    if (body.user) {
      return findByUser(body);
    } else if (body.email) {
      return findByEmail(body);
    }

    return {};
  } else {
    return {};
  }
};
