import React from 'react'

class CommentAction extends React.Component {
    constructor() {
        super()
        this.state = {
            like: 0,
            unlike: 0
        }
        this.unLikeMe = this.unLikeMe.bind(this)
        this.likeMe = this.likeMe.bind(this)
    }
    unLikeMe() {
        console.log("unliked")
        this.setState(
            {
                unlike: this.state.unlike + 1
            })
    }

    likeMe() {
        console.log("liked")
        this.setState(
            {
                like: this.state.like + 1
            })
    }
    render() {
        return (<div>
            Action: <button onClick={this.likeMe}>Like{this.state.like}</button>
            <button onClick={this.unLikeMe}>unLike{this.state.unlike}</button>
        </div>);

    }
}
export default CommentAction;