import React, { Component } from 'react'

class Anime extends Component {

    addLike = e => {
        console.log(this)
    }
    render() {
        const { title, release, genre, episodes, likes } = this.props;
        return (
            <div>
                <h4>{ title }</h4>
                <p>{ genre } </p>
                <p>Episode Count: { episodes } </p>
                <p>Release Year: { release } </p>
                <button  onClick={ this.addLike } > Likes { likes } </button>
            </div>
        )
    }
}

export default Anime
