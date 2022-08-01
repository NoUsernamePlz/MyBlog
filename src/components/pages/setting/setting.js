import Sidebar from "../../sidebar/sidebar"
import "./setting.css"

function Setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingForm">
            <label> Profile Picture</label>
            <div className="settingPP">
              <img src="./pic/pp2.jpg" alt="" />
              <label htmlFor="fileInput">
              <i className=" settingPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file"  id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="Username" placeholder="Komal" />
            <label>Email</label>
            <input type="Email" placeholder="xyz@gmail.com"/>
            <label>password</label>
            <input type="password" />
            <button className="settingSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
        </div>
  )
}

export default Setting