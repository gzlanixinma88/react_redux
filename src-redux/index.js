import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {counter} from './redux/reducers'

const store = createStore(counter)
console.log(store);

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

render()

store.subscribe(render)
