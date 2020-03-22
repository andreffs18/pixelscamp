import React, { PureComponent } from "react";
import base from "../utils/rebase";
import mockPosts from "../utils/mockPosts";
import { likeIncrement } from "../utils/rebaseUtils";
import PhotoFeed from "../components/PhotoFeed";

export default class PhotoFeedPage extends PureComponent {
    state = {
        posts: []
    };

    componentDidMount() {
        this.ref = base.syncState("/posts", {
            context: this,
            asArray: true,
            state: "posts",
            defaultValue: mockPosts
        });
    }

    _onLikeIncrement = (postId) => {
        const posts = likeIncrement(this.state.posts, postId);

        /* TODO 2 -  */
        this.setState({
            posts
        })
        console.logs("LASNDJLSAKJDKSA")
    };

    render() {
        return (
            <div>
                <PhotoFeed posts={this.state.posts} onLikeIncrement={this._onLikeIncrement}> </PhotoFeed>
            </div>
        );
    }
}
