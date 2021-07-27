const clothesModel = require('./clothes.schema.js');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data = {};

    await clothesModel.delete({ id: id });

    return {
      statusCode: 201,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      message: err.message,
    };
  }
};
