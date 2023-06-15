import userEndpoint from "./user.endpoint";
import listEndpoint from "./list.endpoint";
import taskEndpoint from "./task.endpoint";

const routes = function (router) {
  userEndpoint(router);
  listEndpoint(router);
  taskEndpoint(router);
};

export default routes;
