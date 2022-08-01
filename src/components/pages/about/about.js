
import "./about.css"


function About() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="./pic/img1.jpg" alt=""></img>
                <p className="sidebarp">
                    Mauris tempus at sem ac tristique. Phasellus vulputate accumsan purus in tempus. Integer placerat dui magna, vel ultrices sapien volutpat at. Donec turpis lorem, varius at sem nec, sollicitudin sollicitudin ligula. Sed tellus lorem, placerat vitae metus id, imperdiet rutrum magna. Aenean aliquam tincidunt vestibulum. Nulla viverra risus a molestie facilisis. Etiam interdum fermentum elementum. Duis ultrices rhoncus enim semper fringilla.
                    Integer sem risus, elementum vitae eros vitae, mattis aliquam orci. Donec pulvinar sapien in varius porttitor. Maecenas sed magna nec justo elementum laoreet vel sed ligula. Fusce quis augue non velit facilisis tempor at id lectus. Proin tortor nisi, rutrum a est eget, ultricies pellentesque velit. Nunc blandit nibh id magna hendrerit, ac dignissim orci imperdiet. Quisque volutpat dapibus quam, in convallis turpis mattis a. Phasellus mollis gravida nunc non commodo. Curabitur ultrices, magna at maximus vehicula, nunc augue tincidunt neque, vitae porttitor lorem ex at nunc. Suspendisse nec metus augue. Nulla non turpis cursus, euismod nisi eget, scelerisque velit. Aliquam tempus ex ut leo gravida pharetra. Proin semper, nibh id finibus bibendum, orci nunc pulvinar purus, ut semper orci tortor ac orci. Proin ullamcorper elit magna, ac euismod purus feugiat vitae.
                </p>


            </div>


            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarLists">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Fshion</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Games</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOWS US </span>
                <div className="sidebarSocial">
                    <i className="sideBarIcon fa-brands fa-square-facebook"></i>
                    <i className="sideBarIcon fa-brands fa-square-twitter"></i>
                    <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sideBarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>

    )
}

export default About