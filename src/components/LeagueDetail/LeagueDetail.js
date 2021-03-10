import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const{idLeague} =useParams();
    const [leagueInfo, setLeagueInfo] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setLeagueInfo(data.leagues))
    },[idLeague]);
    const headerImg = (leagueInfo[0])&&(leagueInfo[0].strFanart1);
    return (
        <div>
            <img src={headerImg} alt=""/>
            <h1>detail page {idLeague}</h1>
        </div>
    );
};

export default LeagueDetail;