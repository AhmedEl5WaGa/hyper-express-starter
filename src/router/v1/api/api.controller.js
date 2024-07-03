const httpstatus = require("http-status");
const API = require("./api.model");
const catchAsync = require("../../../utilities/catchAsync");
const AppError = require("../../../utilities/appError");

const getAllFunction = catchAsync(async (req, res) => {
  const data = await API.find();
  res.status(httpstatus.OK).json({
    result: "success",
    length: data.length,
    data: data,
  });
});
const postFunction = catchAsync(async (req, res) => {
  let body = await req.json();
  if (!body.name) {
    return res.throw(new AppError("Name is required", httpstatus.BAD_REQUEST));
  }
  const data = await API.create({
    name: body.name,
    description: body.description,
  });
  return res.status(httpstatus.CREATED).json({
    result: "success",
    data: data,
  });
});
const getFunction = catchAsync(async (req, res) => {
  let id = req.path_parameters.id;
  if (!id) {
    return res.throw(new AppError("id is required", httpstatus.BAD_REQUEST));
  }
  const data = await API.find({ _id: id });
  return res.status(httpstatus.OK).json({
    result: "success",
    data: data,
  });
});
const putFunction = catchAsync(async (req, res) => {
  let id = req.path_parameters.id;
  let body = await req.json();
  if (!id) {
    return res.throw(new AppError("id is required", httpstatus.BAD_REQUEST));
  }
  const update = {};
  if (body.name) update.name = body.name;
  if (body.description) update.description = body.description;
  const data = await API.findByIdAndUpdate(id, update, { new: true });

  return res.status(httpstatus.CREATED).json({
    result: "success",
    data: data,
  });
});
const deleteFunction = catchAsync(async (req, res) => {
  let id = req.path_parameters.id;
  if (!id) {
    return res.throw(new AppError("id is required", httpstatus.BAD_REQUEST));
  }
  await API.findByIdAndDelete(id);
  return res.status(httpstatus.NO_CONTENT).json();
});

module.exports = {
  getAllFunction,
  postFunction,
  getFunction,
  putFunction,
  deleteFunction,
};
