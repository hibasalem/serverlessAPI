"use strict";

const dynamoose = require('dynamoose');

const clothesSchema = new dynamoose.Schema({
    id: String,
    name: String,
    type: String
});

module.exports = dynamoose.model('clothes', clothesSchema);
