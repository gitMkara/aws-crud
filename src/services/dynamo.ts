import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient();

const addNewAsset = async (items: object) => {
  return await docClient
    .put({
      TableName: "AssetsTable",
      Item: items,
    })
    .promise();
};

const getAllAssets = async () => {
  return await docClient
    .scan({
      TableName: "AssetsTable",
    })
    .promise();
};

const deleteAssetById = async (id: string) => {
  return await docClient
    .delete({
      TableName: "AssetsTable",
      Key: {
        assetId: id,
      },
    })
    .promise();
};

const dynomoDB = {
  connection: docClient,
  addNewAsset,
  getAllAssets,
  deleteAssetById,
};

export default dynomoDB;
