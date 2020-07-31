import React, {Component} from 'react';
import Heading from './Partials/Heading';
import TipTable from './Partials/ViewTable';

class ViewTips extends Component{

    render() {
        return (
            <div>
                <Heading title="Gurshaye View Tips"/>
                <TipTable/>
            </div>
        );
    }
}

export default ViewTips;