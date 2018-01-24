1)	Provider
让所有组件都可以得到state数据
<Provider store={store}>
    <App />
  </Provider>
2)	connect()
用于包装 UI 组件生成容器组件
import { connect } from 'react-redux'
  connect(
    mapStateToprops,
    mapDispatchToProps
  )(Counter)
3)	mapStateToprops()
将外部的数据（即state对象）转换为UI组件的标签属性
  const mapStateToprops = function (state) {
   return {
     value: state
   }
  }
4)	mapDispatchToProps
将分发action的函数转换为UI组件的标签属性
简洁语法可以直接指定为actions对象或包含多个action方法的对象


使用react-redux
1)	下载依赖包
npm install --save react-redux
2)	redux默认是不能进行异步处理的,
3)	应用中又需要在redux中执行异步任务(ajax, 定时器)


6. redux异步编程
1) 下载redux插件(异步中间件)
npm install --save redux-thunk
