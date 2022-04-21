import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export let ddbClient: DynamoDBClient;

process.env.NODE_ENV = (process.env.NODE_ENV || "").trim();

switch (process.env.NODE_ENV) {
  case "TEST":
    ddbClient = new DynamoDBClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    });
    break;
  default:
    ddbClient = new DynamoDBClient({ region: "us-east-1" });
    break;
}
