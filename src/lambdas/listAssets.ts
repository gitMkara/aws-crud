import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { answer } from "../middlewares/answer";
import dynomoDB from "../services/dynamo";

export const listAssets = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const response = await dynomoDB.getAllAssets();

  return answer(200, response);
};
