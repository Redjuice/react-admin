import { SAVE_USER_AND_TOKEN, DELETE_USER_AND_TOKEN } from '../constant';

//同步action，就是指action的值为object类型的一般对象
export const saveUserAndToken = data => ({ type: SAVE_USER_AND_TOKEN, data });
export const deleteUserAndToken = () => ({ type: DELETE_USER_AND_TOKEN });

//异步action，就是指action的值为函数，异步action一般都会调用同步action
