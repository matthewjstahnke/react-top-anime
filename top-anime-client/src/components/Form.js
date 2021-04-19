import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAnime } from '../actions';

class Form extends Component {
    state = {
        title: "",
        genre: "",
        release: "",
        episodes: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addAnime(this.state, this.props.history);
        console.log(this.state)
        console.log(this.props.history)

    }

    render() {
        return (
            <div>
                <h3>Add Anime</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="title">Title </label>
                        <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <p><label htmlFor="genre">Genre</label></p>
                        <input id="genre" name="genre" value={ this.state.genre } onChange={ this.handleChange }></input>
                    </div>
                    <div>
                        <p><label htmlFor="release">Release Year</label></p>
                        <input id="release" name="release" value={ this.state.release } onChange={ this.handleChange }></input>
                    </div>
                    <div>
                        <p><label htmlFor="episodes">Episode Count</label></p>
                        <input id="episodes" name="episodes" value={ this.state.episodes } onChange={ this.handleChange }></input>
                    </div>
                    <br />
                    <input type="submit" value="Add Anime" />
                </form>            
            </div>
        )
    }
}

export default connect(null, { addAnime })(Form)
