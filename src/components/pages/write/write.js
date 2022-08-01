import "./write.css"

function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="./pic/img4.jpg" alt=""></img>
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i className=" writeIcon fa-solid fa-plus"></i>  
                </label>

              <input type="file"  id="fileinput" style={{display:"none"}}  />
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true}  /> 
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell Your Story...." type="text" className="writeInput writetext"></textarea>
            </div>
            <button className="writebutton">Publish</button>
        </form>
        
        </div>
  )
}

export default Write