import React, { PureComponent } from "react";
import { Col, Row } from "antd";
import Photo from '../components/Photo.js'
//TODO-1 export default PhotoFeed;


export default class PhotoFeed extends React.Component {
    _onClickLike () {
        console.log("OMG!")
    }


    render() {
        const { posts , onLikeIncrement } = this.props;

        return (
            <div className="App-body">
                <Row gutter={40}>
                    {posts.map(post => (
                        <Col key={`col_${post.id}`} span={8}>
                            <Photo {...post} onLikeIncrement={onLikeIncrement}/>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}