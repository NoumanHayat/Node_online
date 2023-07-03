/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
const catchAsync = require('../utils/catchAsync');
exports.JavascriptCompiler = (catchAsync(async (req, res, next) => {
  res.send(200, 'OK');
}));


