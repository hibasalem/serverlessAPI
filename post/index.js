const uuid = require('uuid').v4;
const clothesModel = require('./clothes.schema.js');

exports.handler = async (event) => {
  try {
    const { name, type } = JSON.parse(event.body);
    const id = uuid();
    const record = new clothesModel({ id, name, type });
    const data = await record.save();
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
