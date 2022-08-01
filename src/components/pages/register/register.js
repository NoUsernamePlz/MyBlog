import "./register.css"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className='Register'>
        <span className="RegisterTitle">Register Yourself</span>
        <form className="RegisterForm">
        <label>UserName</label> 
            
           <input type="text" className="RegisterInput" placeholder="Enter Your UserName....."/>
           <label>Email</label> 
           <input type="email" className="RegisterInput" placeholder="Enter Your Email....."/>
           <label>Password</label> 
           <input type="password" className="RegisterInput" placeholder="Enter Your Password.... "/>
           <button className="RegisterButton">Register</button>
        </form>
        <button className="RegisterRegisterButton"><Link className="link" to="/login">Login Here!</Link></button>
        </div>
  )
}

export default Register