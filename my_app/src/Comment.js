import { render } from '@testing-library/react';
import React from 'react';

// 4강

const styles = {
    root : {
        width : '20%',
        margin : 'auto',
        marginTop : 16,
        padding : 16,
        textAlign:'left',
        backgroundColor:'white',
        borderRadius : 16,
    },
    imageContainer : {
        display : 'inline-block',
        width : '50',
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 25,
    },
    commentContainer : {
        display : 'inline-block',
        marginLeft : 16,
        textAlign : 'left',
        verticalAlign : 'top',
    },
    nameText : {
        color : 'black',
        fontSize : 20,
        fontWeight : '700',
    },
    contentText : {
        color : 'black',
        fontSize : 16,
    
    }
}

class Comment extends React.Component {

    constructor(props){
        super(props);
    }


    //5-2 lifeCycle 메소드
    componentDidMount(){
        {this.props. id}
        console.log('componentDidMount() called.');
    }

    componentDidUpdate() {
        {this.props. id}
        console.log('componentDidUpdate() called.');
    }

    componentWillUnmount() {
        {this.props. id}
        console.log('componentWillUnmount() called.');
    }

    render() {
        const {name, content} = this.props;

        return (
            <div style = {styles.root}>
                <div style = {styles.imageContainer}>
                    <img
                        src = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                        style = {styles.image}/>
                </div>

                <div style = {styles.commentContainer}>
                    <div style = {styles.nameText}>
                        {/* {'Inje Lee'} */}
                        {name}
                    </div>
                    <span style={styles.contentText}>
                        {/* {"My Comment !"} */}
                        {content}
                    </span>
                </div>
            </div>
        )
    }
}

export default Comment;