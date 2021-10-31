import store from 'store';
import { SAVE_USER_AND_TOKEN, DELETE_USER_AND_TOKEN } from '../constant';
import { userName, tokenName } from '@/config';

// 初始化，从LocalStorage中获取用户的信息
let user = store.get(userName) || {};
let token = store.get(tokenName) || '';

const initState = {
  user,
  token,
  isLogin: user && token ? true : false,
};

export default function login(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case SAVE_USER_AND_TOKEN:
      //将用户登录的信息保存到LocalStorage中
      store.set(userName, data.user);
      store.set(tokenName, data.token);
      //将用户登录的信息保存到redux中
      return {
        user: data.user,
        token: data.token,
        isLogin: true,
      };
    case DELETE_USER_AND_TOKEN:
      //将用户登录的信息从LocalStorage中删除
      store.remove(userName);
      store.remove(tokenName);
      return {
        user: {},
        token: '',
        isLogin: false,
      };

    default:
      return preState;
  }
}
