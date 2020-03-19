import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

function SoccerPlayersCard(props) {
    return (
        <div className='soccer-players-card'>
            {props.data.map(d => {
                return (
                    <CardStyling>
                        <CardBody>
                            <CardTitle>Name: {d.name}</CardTitle>
                            <CardSubtitle>Country: {d.country}</CardSubtitle>
                            <CardSubtitle>Searches: {d.searches}</CardSubtitle>
                        </CardBody>
                    </CardStyling>
                )
            })}
        </div>
    )
}

const CardStyling = styled.div`
text-align: center;
border: 2px solid red;
margin: 3% 0;
color: red;
`

export default SoccerPlayersCard;