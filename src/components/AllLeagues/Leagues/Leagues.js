import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Leagues = (props) => {
    const{strLeague,strSport, idLeague} =props.lg;
    const [image, setImage] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setImage(data.leagues))

    },[idLeague]);
    const badgeImg = (image[0])&&(image[0].strBadge);
    const cardStyle = {
        width: '18rem', 
        marginTop:'20px',
        marginBottom:'10px', 
        height:'250px'
    };
    const cardImgStyle = {
        height:'90px',
        width:'90px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto'
    }
    return (
            <Col xs={12} md={4}>
               <Card style={cardStyle}>
                    <Card.Img variant="top" src={badgeImg} style={cardImgStyle} />
                    <Card.Body>
                        <Card.Title>{strLeague}</Card.Title>
                        <Card.Text>Sports type: {strSport}</Card.Text>
                        
                    </Card.Body>
                    <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card>
            </Col>
    );
};

export default Leagues;