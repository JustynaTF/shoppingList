import postDAO from "../DAO/listDAO";

function create(context) {
  async function query() {
    let result = postDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await postDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await postDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }
  async function deleteList(data) {
    let result = await postDAO.removeById(data);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    deleteList: deleteList,
  };
}

export default {
  create: create,
};
