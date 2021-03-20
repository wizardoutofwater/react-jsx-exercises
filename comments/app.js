let ProfilePic = () => {
    return <div>
        <img width="100" height="100" src = "./profilePic.jpeg"></img>
    </div>
}

let CommentBody = () => {
    return <div>
        <div><b>@username</b></div>
        <div> THis is the Comment Body, its interesting and informative.</div>
    </div>
}

let Comment = () => {
    return <div>
        <ProfilePic />
        <CommentBody />
    </div>
}

let Comments = () => {
    return <span>
        <Comment />
        <Comment />
        <Comment />
    </span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))