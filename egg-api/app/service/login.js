'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class LoginService extends Service {

  async check(account, pwd) {

    const res = await this.app.mysql.get('users', { account });
    this.logger.warn(res);
    const cryptoPassword = crypto.createHash('md5').update(pwd).digest('hex');
    console.log(cryptoPassword);
    if (!res || account !== res.account || cryptoPassword !== res.password) {

      return {
        code: 200,
        status: false,
        message: '用户名或密码错误',
        data: {},
      };
    }

    const token = this.app.jwt.sign(
      { account },
      this.app.config.jwt.secret
    );

    return {
      code: 200,
      status: true,
      message: '登录成功',
      data: {
        account,
        token,
      },
    };
  }

}

module.exports = LoginService;
