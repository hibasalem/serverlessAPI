const clothesModel = require('./clothes.schema.js');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let { name, type } = JSON.parse(event.body);

    let data = await clothesModel.update({ id: id }, { name, type });

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
