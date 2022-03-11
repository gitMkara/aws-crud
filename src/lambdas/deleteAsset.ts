import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { answer } from "../middlewares/answer";
import dynomoDB from "../services/dynamo";

export const deleteAsset = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id as string;
  await dynomoDB.deleteAssetById(id);
  return answer(204, "Asset Deleted!");
};
