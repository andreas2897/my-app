import React from 'react'


class lifecycleScreen extends React.Component{
    state = {
        username : "",
        time : new Date,
    }

    componentDidMount() {
        this.timer = setInterval(() => this.triggerClock(), 1000)
    }

    triggerClock = () => {
    this.setState({ time : new Date() })
    }

    componentWillMount() {
        clearInterval(this.timer)
    }

    // componentDidUpdate() {
    //     alert("mnegubah state")
    // }

    render() {
        return (
            <div>
                <h1>Lifecycle Screen</h1>
                <h2>welcome, {this.state.username}</h2>
                
                
                {/* <input type="text" 
                onChange={(e) => this.setState({username : e.target.value})} 
                id=""/>
                <a href="http://www.google.com"></a> */}
            </div>
        )
    }

}
export default lifecycleScreen