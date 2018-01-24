import React, {Component} from 'react';

import {INCREMENT, DECREMENT} from '../redux/action-types'

export default class App extends Component {

    increment = ()=> {
        const number = this.select.value*1
        this.props.store.dispatch({type:INCREMENT, data:number})
    }
    decrement = ()=> {
        const number = this.select.value*1

        this.props.store.dispatch({type:DECREMENT, data:number})
    }
    incrementIfOdd = ()=> {
        const number = this.select.value*1

        const count = this.props.store.getState()

        if (count % 2 ===1){
            this.props.store.dispatch({type:INCREMENT,data:number})
        }

    }
    incrementAsync = ()=> {
        const number = this.select.value*1

        setTimeout(()=>{
            this.props.store.dispatch({type:INCREMENT,data:number})
        },1000)
    }

    render() {
        const count = this.props.store.getState()
        console.log(count);
        return (
           <div>
               <p>click {count} times</p>
               <select ref={select =>this.select = select}>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
               </select>&nbsp;&nbsp;

               <button onClick={this.increment}>+</button>&nbsp;&nbsp;
               <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
               <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
               <button onClick={this.incrementAsync}>increment async</button>&nbsp;&nbsp;
           </div>
        );
    }
}
