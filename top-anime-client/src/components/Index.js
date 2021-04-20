import React, { Component } from 'react'
import { connect } from 'react-redux';
import Anime from './Anime';

class Index extends Component {

    whatDo = e => {
        console.log(mapStateToProps)

    }


    render() {
        const animes = this.props.animes.map( (anime, i) => <Anime key={i} title={ anime.title } genre={ anime.genre } release={ anime.release } episodes={ anime.episodes } likes={ anime.likes } />)
        return (
            <div>
                { animes }
                <button  onClick={ this.whatDo } >Test Click</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        animes: state.animes
    }
}

export default connect(mapStateToProps)(Index);
