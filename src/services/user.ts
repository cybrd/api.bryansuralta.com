import {
  QueryCommand,
  ScanCommand,
  AttributeValue,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../config";

const TableName = "bryansuralta-users";

type findByUserParam = {
  user: AttributeValue;
  [key: string]: AttributeValue;
};
export const findByUser = (params: findByUserParam) => {
  const command = new QueryCommand({
    TableName,
    KeyConditionExpression: "#user = :user",
    ExpressionAttributeValues: {
      ":user": params.user,
    },
    ExpressionAttributeNames: { "#user": "user" },
    Limit: 1000,
  });

  return ddbClient.send(command);
};

type findByEmailParam = {
  email: AttributeValue;
  [key: string]: AttributeValue;
};
export const findByEmail = (params: findByEmailParam) => {
  const command = new ScanCommand({
    TableName,
    FilterExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": params.email,
    },
    Limit: 1000,
  });

  return ddbClient.send(command);
};

type insertParam = {
  user: { S: string };
  email: { S: string };
};
export const insert = (item: insertParam) => {
  const command = new PutItemCommand({
    TableName,
    Item: item,
  });

  return ddbClient.send(command);
};
