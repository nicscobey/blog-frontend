const BlogCardSmall = () => {

    // theme border will likely need to be written in JS to make the color dynamic based on theme

    const CreateCards = () => {
        return (
            <div className="blog-card-small">
                <img className="card-image-small" src="" alt=""/>
                <b><p className="small-card-text">Name of the blog</p></b>
                <p className="theme-border small-card-text">Theme</p>
            </div>
        )
    }

    return (
        <div className="flex-center">
            <CreateCards />
            <CreateCards />
        </div>
    )
}

export default BlogCardSmall