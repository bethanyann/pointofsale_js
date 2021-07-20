import React, { Component } from 'react';
import Counter from './counter';

//convert to .tsx and fix errors
class Counters extends Component {
   
    render() {
        //add these valutes to the props for whatever component will be implementing this
        //interface for counters: 
        //const {counters, onDelete, onDecrement, onIncrement, onReset} = this.props;  
        
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}> {/* instead of passing each counter property individually, just pass the whole counter object so you don't have to update it every time a new prop is added*/}
                        <h4>Counter #{counter.id}</h4>
                    </Counter> 
                )}
            </div>
        );
      }
}
 
export default Counters;