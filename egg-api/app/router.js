'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller, jwt } = app;
  router.redirect('/', '/users', 302);

  router.get('/users', jwt, controller.home.index);
  router.post('/login', controller.login.index);
};
