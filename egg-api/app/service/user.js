'use strict';

// app/service/users.js
const Service = require('egg').Service;

class usersService extends Service {

  async find() {

    const results = await this.app.mysql.select('users');

    return {
      code: 200,
      status: true,
      message: '登录成功',
      data: results,
      total: results.length,
    };
  }
}

module.exports = usersService;
