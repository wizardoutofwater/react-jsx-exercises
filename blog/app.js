let Header = () => {
    return <div>Design a header for your blog</div>
}
let Article = () => {
    return <div>Write and design your blog article</div>
}
let Footer = () => {
    return <div>Design a footer for your blog</div>
}

let Blog = () => {
    return (<span>
       <Header />
       <Article />
       <Footer />
       </span>)
}


ReactDOM.render(<Blog />, document.getElementById('root'))


