import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
          <span className='headerTitlesm'>React & Node</span> 
          <span className='headerTitleLg'>Blog</span> 
        </div>
     <img className='headerImg' src="./pic/img5.jpg"  alt="" />
    </div>
  )
}

export default Header