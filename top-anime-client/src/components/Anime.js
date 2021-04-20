import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addLike } from '../actions';

class Anime extends Component {

    state = {
        likes: this.props.likes
      
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        addLike(this.props);
    }


    // addLike = e => {
    //     let newLike = this.state.likes +1
    //     this.setState({
    //         likes: newLike
    //     })

    // }
    render() {
        const { title, release, genre, episodes, likes } = this.props;
        return (
            <div>
                <h4>{ title }</h4>
                <p>{ genre } </p>
                <p>Episode Count: { episodes } </p>
                <p>Release Year: { release } </p>
                <button  onClick={ this.handleChange } value={ this.state.likes } name="likes"> Likes { likes } </button>
            </div>
        )
    }
}

export default connect(null, { addLike })(Anime)
