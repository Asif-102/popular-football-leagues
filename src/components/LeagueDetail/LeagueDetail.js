import React from 'react';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const{idLeague} =useParams();
    return (
        <div>
            <h1>detail page {idLeague}</h1>
        </div>
    );
};

export default LeagueDetail;