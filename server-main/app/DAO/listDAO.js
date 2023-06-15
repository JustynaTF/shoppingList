import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import * as _ from "lodash";
import { analyse } from "babel-core";

const postSchema = new mongoose.Schema(
  {
    title: { type: String },
  },
  {
    collection: "list",
  }
);
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model("list", postSchema);

async function query() {
  const result = await PostModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function get(id) {
  return PostModel.findOne({ _id: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new PostModel(data).save().then((result) => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return PostModel.findByIdAndUpdate(data.id, _.omit(data, "id"), {
        new: true,
      });
    }
  });
}

const removeById = async (id) => {
  const result = await PostModel.findOneAndDelete({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
};
export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,
  removeById,

  model: PostModel,
};
