import React from 'react';
import Ball from './Component/Ball'
import Bat from './Component/Bat'
import User from './Component/User'
import {Provider} from 'react-redux'
// import store from './store'
import estore from './ecommercestore'
import Ecommerce from './Ecommerce';

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Ball></Ball>
    //     <Bat></Bat>
    //     <User></User>
    //   </div>
    // </Provider>
    <Provider store={estore}>
      <Ecommerce></Ecommerce>
    </Provider>
  )
}

export default App;
