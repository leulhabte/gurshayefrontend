import React, {Component} from 'react';
import Heading from './Partials/Heading';
import ManageTable from './Partials/ManageTips';

class ManageTip extends Component{
    render() {
        return (
            <div>
                <Heading title="Gurshaye Manage Tips"/>
                <ManageTable history={this.props.history}/>
            </div>
        );
    }
}

export default ManageTip;