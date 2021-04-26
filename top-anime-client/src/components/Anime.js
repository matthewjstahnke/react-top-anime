import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addLike } from '../actions';

class Anime extends Component {

    state = {
        likes: null,
        id: null
      
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log(this.props.history, "in hC")
        console.log(this.state, "in hC")
        this.props.addLike(this.state, this.props.history);
    }


    // addLike = e => {
    //     let newLike = this.state.likes +1
    //     this.setState({
    //         likes: newLike
    //     })

    // }
    render() {
        const { id, title, release, genre, episodes, likes } = this.props;
        return (
            <div>
                <h4>{ title }</h4>
                <p>{ genre } </p>
                <p>Episode Count: { episodes } </p>
                <p>Release Year: { release } </p>
                <button  onClick={ this.handleChange } value={ this.state.likes } name="likes"> Likes { likes } </button>
                <p> { id } </p>
            </div>
        )
    }
}

export default connect(null, { addLike })(Anime)
