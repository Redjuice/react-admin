/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
// 引入applyMiddleware，作用是将所有中间件组成一个数组，依次执行。
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入汇总之后的reducer
import allReducers from './reducers'
// 创建并暴露store对象
export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
)
