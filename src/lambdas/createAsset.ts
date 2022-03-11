import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { v4 } from "uuid";
import { answer } from "../middlewares/answer";
import dynomoDB from "../services/dynamo";

interface Asset {
  name: string;
  serialNo: string;
  assignDate: Date;
}

export const createAsset = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const reqBody: Asset = JSON.parse(event.body as string);
  const newAsset = { assetId: v4(), ...reqBody };

  await dynomoDB.addNewAsset(newAsset);

  return answer(200, newAsset);
};
