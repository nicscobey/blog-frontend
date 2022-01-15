const BlogCardLarge = () => {

    // theme border will likely need to be written in JS to make the color dynamic based on theme

    const CreateCards = () => {
        return (
            <div className="blog-card-large">
                <img className="card-image-large" src="" alt=""/>
                <div className="large-card-bottom">
                    <p className="theme-border large-card-text">Theme</p>
                    <b><p className="large-card-text">Name of the blog</p></b>
                    {/* <p className="theme-border large-card-text">Theme</p> */}
                    <p className="large-card-published">Firstname Lastname * ##/##/####</p>
                </div> 
            </div>
        )
    }

    return (
        <div className="flex-center">
            <CreateCards />
        </div>
    )
}

export default BlogCardLarge