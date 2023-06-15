import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import * as _ from "lodash";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String },
    listId: { type: String },
  },
  {
    collection: "task",
  }
);
taskSchema.plugin(uniqueValidator);

const TaskModel = mongoose.model("task", taskSchema);

async function query() {
  const result = await TaskModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function get(id) {
  return TaskModel.findOne({ _id: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new TaskModel(data).save().then((result) => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return TaskModel.findByIdAndUpdate(data.id, _.omit(data, "id"), {
        new: true,
      });
    }
  });
}

async function taskForList(id) {
  return TaskModel.find({ listId: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,
  taskForList,

  model: TaskModel,
};
