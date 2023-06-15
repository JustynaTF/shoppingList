import business from "../business/business.container";
import auth from "../middleware/auth";

const taskEndpoint = (router) => {
  router.get("/api/tasks", async (request, response, next) => {
    try {
      let result = await business.getTaskManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/api/task", auth, async (request, response, next) => {
    try {
      let result = await business
        .getTaskManager()
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/api/task/:id", auth, async (request, response, next) => {
    try {
      const id = request.params.id;
      let result = await business.getTaskManager().get(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/api/tasks/:listId", async (request, response, next) => {
    try {
      const id = request.params.listId;
      let result = await business.getTaskManager().taskForList(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};

export default taskEndpoint;
