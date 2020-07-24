'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this, 1);
    ctx.body = await ctx.service.user.find();
  }
}

module.exports = HomeController;
