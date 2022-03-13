import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import jsonBodyParser from "@middy/http-json-body-parser";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import createError from "http-errors";
import { answer } from "../middlewares/answer";
import dynomoDB from "../services/dynamo";

const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const response = await dynomoDB.getAllAssets().catch((err) => {
    throw createError(400, "Asset Listing Error.");
  });

  return answer(200, response);
};

export const listAssets = middy(handler).use(jsonBodyParser()).use(httpErrorHandler());
