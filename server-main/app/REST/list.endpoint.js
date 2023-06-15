import business from "../business/business.container";
import auth from "../middleware/auth";

const listEndpoint = (router) => {
  router.get("/api/lists", async (request, response, next) => {
    try {
      let result = await business.getPostManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/api/list", auth, async (request, response, next) => {
    try {
      let result = await business
        .getPostManager()
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/api/list/:id", async (request, response, next) => {
    try {
      const id = request.params.id;
      let result = await business.getPostManager().get(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
  router.delete("/api/list/:id", async (request, response, next) => {
    try {
      const id = request.params.id;
      let result = await business.getPostManager().deleteList(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
export default listEndpoint;
