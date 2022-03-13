import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import createError from "http-errors";
import { answer } from "../middlewares/answer";
import dynomoDB from "../services/dynamo";

const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id as string;
  await dynomoDB.deleteAssetById(id).catch((err) => {
    throw createError(400, "Asset Not Deleted");
  });
  return answer(204, "Asset Deleted!");
};

export const deleteAsset = middy(handler).use(httpErrorHandler());
