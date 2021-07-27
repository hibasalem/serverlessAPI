const clothesModel = require('./clothes.schema.js');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
      const results = await clothesModel.query('id').eq(id).exec();
      data = results[0];
    } else {
      data = await clothesModel.scan().exec();
    }

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
