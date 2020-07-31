import React from 'react';
import Heading from './Partials/Heading';
import StatHeader from './Partials/StatHeader';
import StatBody from './Partials/StatBody';

const Statistics = (props)=>{
    return(
        <div>
            <Heading title="Gurshaye Statistics"/>
            <StatHeader history={props.history}/>
            <StatBody/>
        </div>
    );
}

export default Statistics;