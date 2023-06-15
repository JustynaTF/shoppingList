'use strict';

import userManager from './user.manager';
import postManager from './list.manager';
import taskManager from './task.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getPostManager: getter(postManager),
    getTaskManager:getter(taskManager)
};
