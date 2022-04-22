import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../config";

const TableName = "bryansuralta-drafts";

type insertParam = {
  user: { S: string };
  body: { S: string };
};
export const insert = (item: insertParam) => {
  const command = new PutItemCommand({
    TableName,
    Item: item,
  });

  return ddbClient.send(command);
};
