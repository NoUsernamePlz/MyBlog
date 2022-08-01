import "../post/post.css"




 function Post() {
    return (
        <div className='post'>
            <img className='postImg'
                src='./pic/img13.jpg' alt=''></img>
            <div className='postInfo'>
                <span className='postCats'>
                    FOOD
                </span>
                <span className='postCats'>
                    Life
                </span>
                <span className="postTitle">
                    ed et libero finibus leo dapibus aliquam.</span>
                <hr />
                <span className='postDate'>1 hour ago</span>

            </div>
            <p className="postDsc">
            Sed et libero finibus leo dapibus aliquam. Suspendisse magna lorem, dignissim in imperdiet eleifend, viverra eget nibh. Praesent molestie ac magna ac aliquam. Suspendisse at convallis nulla. Cras mauris odio, lobortis at molestie vel, ultricies at elit. Nulla vel tortor in elit facilisis tincidunt. Mauris suscipit felis tempor, vulputate eros scelerisque, varius enim. Sed sit amet eros id nisi imperdiet porttitor iaculis eu leo. Vivamus pellentesque enim quis mi dapibus, quis tempus justo dignissim. Suspendisse pretium venenatis ante, vitae gravida sem auctor vitae. Nulla maximus tellus non vehicula commodo. Phasellus quam lacus, pellentesque vitae ante eu, porttitor semper ex. Nullam sed dapibus dolor. Sed pellentesque in dolor quis fringilla.  
            Donec quis odio at ante vulputate fermentum quis in purus. Maecenas interdum elementum sapien et pulvinar. Aenean massa mi, placerat ac lobortis in, molestie vitae elit. In ut cursus nulla. Etiam convallis porta eros id tincidunt. Curabitur eu nisl ut velit fermentum congue eu eget augue. In venenatis enim non lorem iaculis tempor. Suspendisse sapien sapien, dignissim non mollis eget, fringilla ut sem.
            </p>
        </div>
    )
}

export default Post
