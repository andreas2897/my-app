import React from "react"

class AuthScreen extends React.Component {
  
  state = {
    user : [],
    pass : [],
    username : "",
    regisUser : "",
    regisPass : "",
    repeatPass : "",
    loginUser :"",
    loginPass : "",
    logintext : '',
}

  render() {
    const {user, pass, regisUser, regisPass, loginUser, loginPass} = this.state;

    const inputHandler = (event, field) => {
      this.setState({[field]:event.target.value})
    }

    const inputRegister = (event) => {
      if (this.state.regisPass == this.state.repeatPass) {
        this.setState({ user: [...this.state.user, regisUser ] , pass: [...this.state.pass, regisPass ] })
        // console.log(pass)
        // console.log(user)
        document.getElementById("Username").value = ""
        document.getElementById("Password").value = ""
        document.getElementById("repeatPassword").value = ""
      }
      else {
        alert("Password tidak sama")
      }
    }

  const loginHandler = (event, field) => {
      this.setState({[field]:event.target.value})
  }

 
    const loginMenu = () => {
      for (let i = 0; i < user.length; i++) {
          if (user[i] == loginUser && pass[i] == loginPass) {
              this.setState({logintext : "Welcome " + loginUser})
              document.getElementById("loginUser").value = ""
              document.getElementById("loginPass").value = ""
              break
          } else {
            alert("mohon maaf username dan passward masukkan salah")
            break
          }
      }
  }


    return(
      <div className="d-flex flex-column align-items-center">
          <h3 className="mb-4"> Join Us </h3>
          <div className="d-flex flex-column align-items-center justify-content-center border" style={{width:"500px", borderRadius:"5px"}}>
              <h5 className="mb-4"> Register </h5>
                  <div className="form-group">
                      <form>
                          <input className="form-control mb-3" onChange={(e) => inputHandler(e, "regisUser")} type="text" name="" id="Username" placeholder="Username"/>
                          <input className="form-control mb-3" onChange={(e) => inputHandler(e, "regisPass")} type="text" name="" id="Password" placeholder="Password"/>
                          <input className="form-control mb-3" onChange={(e) => inputHandler(e, "repeatPass")} type="text" name="" id="repeatPassword" placeholder="Repeat Password"/>
                          <input  className="btn btn-primary"  onClick={() => inputRegister()}  type="button" value="Register" style={{width:"100%"}}/>
                      </form>
                  </div>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center border mt-3 mb-5" style={{width:"500px", borderRadius:"5px"}}>
              <h5 className="mb-4"> Login </h5>
                  <div className="form-group">
                      <input className="form-control mb-3" onChange={(e) => loginHandler(e, "loginUser")} type="text" name="" id="loginUser" placeholder="Username"/>
                      <input className="form-control mb-3" onChange={(e) => loginHandler(e, "loginPass")} type="text" name="" id="loginPass" placeholder="Password"/>
                      <input className="btn btn-primary mb-4" onClick={() => loginMenu()} type="button" value="Login" style={{width:"100%"}}/>
                      <h6>{this.state.logintext}</h6>
                  </div>

          </div>
                  
      </div>
  )

  }
  
}

export default AuthScreen