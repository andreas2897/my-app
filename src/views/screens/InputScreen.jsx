import React from "react"
import {connect} from "react-redux"

class InputScreen extends React.Component {
    state = {
        username : "",
        email : "",
        textbox : "",
    }
    
    render() {
        const {username, email, textbox} = this.state;

        const inputHandler = (e, field) => {
            this.setState({ [field]: e.target.value})
        }
        return (
            <div className="container">
                <h1>{this.haloDunia}</h1>
                <h1>input screen</h1>
                <h3>Welcome {username}</h3>
                <h3>Email : {email}</h3>
                <input type="text" 
                onChange={(e) => inputHandler(e, "username")} 
                placeholder="username"/>
               <input type="text" 
                onChange={(e) => inputHandler(e, "email")} 
                placeholder="email"/>
                <textarea onChange={(e) => inputHandler(e, "textbox")} cols="30" rows="10"></textarea>
                <p>{textbox.length}/140</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      haloDunia: state.haha.todoINput
    }
  }

export default connect(mapStateToProps)( InputScreen )