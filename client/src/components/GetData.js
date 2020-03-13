import React from 'react';
import axios from 'axios';
import SoccerPlayersCard from './SoccerPlayersCard';

class GetData extends React.Component {

    state = {
        data: []
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/api/players')
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({
    //                 data: res.data
    //             })
    //         })
    //         .catch(err => console.log('axios.get data error', err));

    // }

    render() {
        return (
            <div className="GetData">
                <h1>Women's World Cup!</h1>
                <SoccerPlayersCard data={this.state.data} />
            </div>
        );
    }
}

export default GetData;
