import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function SoccerPlayersCard(props) {
    return (
        <div className="soccer-players-card">
            {props.data.map(d => {
                return (
                    <Card>
                        <CardBody>
                            <CardTitle>Name: {d.name}</CardTitle>
                            <CardSubtitle>Country: {d.country}</CardSubtitle>
                            <CardSubtitle>Searches: {d.searches}</CardSubtitle>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default SoccerPlayersCard;