import { APIGatewayProxyHandler } from "aws-lambda";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

export const cv: APIGatewayProxyHandler = async (event, ctx, callback) => {
  try {
    const client = new S3Client({ region: "us-east-1" });
    const command = new GetObjectCommand({
      Bucket: "bryansuralta-docs",
      Key: "Resume - CV.pdf",
    });
    const result = await client.send(command);
    const body = await result.Body.transformToString("base64");

    callback(null, {
      headers: { "Content-type": "application/pdf" },
      statusCode: 200,
      body,
      isBase64Encoded: true,
    });
  } catch (err) {
    console.error(err);
  }

  return null;
};
