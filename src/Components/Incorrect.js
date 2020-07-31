import React from 'react';
import Heading from './Partials/Heading';
import Table from './Partials/Table.tsx';

const Incorrect = (props)=>{
    return(
        <div>
            <Heading title="Gurshaye Manage Tips"/>
            <Table history= {props.history}/>
        </div>
    );
}

export default Incorrect;