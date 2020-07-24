'use strict';

const Controller = require('egg').Controller;


class LoginController extends Controller {

  async index() {

    const { ctx } = this;
    ctx.body = await ctx.service.login.check(ctx.request.body.account, ctx.request.body.password);
  }
}

module.exports = LoginController;
