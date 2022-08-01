import Sidebar from "../../sidebar/sidebar"
import "../../pages/single/single.css"
import Singlpost from "../../singlepost/singlepost"

function Single() {
  return (
    <div className="single">
        {/* <post/> */}
        <Singlpost/>
        <Sidebar/>
    </div>
  )
}

export default Single