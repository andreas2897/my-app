import React from "react"



class CounterScreen extends React.Component {
    state = {
        counter1 : 0,
        counter2 : 0,
        counter3 : 0,
    };
    render() {
    return (
        <div className="row">
        <div className="col-4">
            <h1> counter 1 :{this.state.counter1}</h1>
        <input 
        type="button" 
        value="click to + state"
        onClick={() => this.setState({counter1: this.state.counter1 +1})}
        />

        <input 
        type="button" 
        value="click to - state"
        onClick={() => this.setState({counter1: this.state.counter1 -1})}
        />
        </div>

        <div className="col-4">
            <h1>counter 2 :{this.state.counter2}</h1>
        <input 
        type="button" 
        value="click to + state"
        onClick={() => this.setState({counter2: this.state.counter2 +1})}
        />
        <input 
        type="button" 
        value="click to - state"
        onClick={() => this.setState({counter2: this.state.counter2 -1})}
        />
        </div>
        <div className="col-4">
            <h1>counter 3 :{this.state.counter3}</h1>
        <input 
        type="button" 
        value="click to + state"
        onClick={() => this.setState({counter3: this.state.counter3 +1})}
        />
        <input 
        type="button" 
        value="click to - state"
        onClick={() => this.setState({counter3: this.state.counter3 -1})}
        />
        </div>
        
        <div>
        <input 
        type="button" 
        value="click to + all state"
        onClick={() => this.setState(
             {counter1: this.state.counter1 +1 
            , counter2: this.state.counter2 +1 
            , counter3: this.state.counter3 +1})}
        />
        <input 
        type="button" 
        value="click to - all state"
        onClick={() => this.setState( 
             {counter1: this.state.counter1 -1 
            , counter2: this.state.counter2 -1 
            , counter3: this.state.counter3 -1})}
        />
        </div>
        </div>
    );
    }
}

// const CounterScreen = () => {
//     return (
//         <div>
//             <h1>hello !</h1>
//         </div>
//     )
// }

// class CounterScreen extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.kota}</h1>
//             </div>
//         )
//     }
// }

export default CounterScreen