import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import createError from "http-errors";
import { v4 } from "uuid";
import { answer } from "../middlewares/answer";
import dynomoDB from "../services/dynamo";

interface Asset {
  name: string;
  serialNo: string;
  assignDate: Date;
}

const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const reqBody: Asset = JSON.parse(event.body as string);

  const newAsset = { assetId: v4(), ...reqBody };

  await dynomoDB.addNewAsset(newAsset).catch((err) => {
    throw createError(400, "Asset Not Created.");
  });

  return answer(200, newAsset);
};

export const createAsset = middy(handler).use(httpErrorHandler());
