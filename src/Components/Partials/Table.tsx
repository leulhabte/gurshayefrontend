import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {GridComponent, ColumnDirective, ColumnsDirective, Inject, Filter, Grid} from '@syncfusion/ej2-react-grids';
import {Container, Button} from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Tips{
    correct: String,
    _id: String,
    league: String,
    team1: String,
    team2: String,
    date: String,
    tip: String,
    insertedAt: Date,
}

interface ChildComponentProps extends RouteComponentProps<any> {
}

type info = Tips[];

const Table: React.FC<ChildComponentProps> = ({history})=>{

    const [data, setData] = useState<info>([]);
    const [check, setCheck] = useState<boolean>(false);
    const [selected, setSelected] = useState<Array<any>>([]);
    var grid!: Grid | null;

    const rowSelected = ()=>{
        if(grid){
            const selectedRows: Array<any> = grid.getSelectedRecords();
            setSelected(selectedRows);
        }
    }

    const rowDeselected = ()=>{
        if(grid){
            const selectedRows: object[] = grid.getSelectedRecords();
            setSelected(selectedRows);
        }
    }

    const handleClick = ()=>{
        selected.map(data=>{
            callApi(data._id);
            return data;
        });
        history.push('/stats');   
    }

    const callApi = (id: String)=>{
        axios.post('tips/incorrect/'+id)
        .then(res=>{
            console.log(res.data);
        });
    }

    const getList = ()=>{
        axios.get('tips/unchecked2/')
        .then(res=>{
            setData(res.data.tip);
            setCheck(true);
        })
    }

    React.useEffect(()=>{getList()},[])

    return(
        <div>
            <Container fixed >
                {check && <GridComponent dataSource={data} allowFiltering={true} rowSelected={rowSelected} rowDeselected={rowDeselected} ref={g=> grid = g}>
                            <ColumnsDirective>
                                <ColumnDirective type='checkbox'/>
                                <ColumnDirective field='time' headerText='Time' />
                                <ColumnDirective field='league'/>
                                <ColumnDirective field='date'/>
                                <ColumnDirective field='match'/>
                                <ColumnDirective field='tip'/>
                            </ColumnsDirective>
                            <Inject services={[Filter]}/>
                        </GridComponent>}
                    <Button variant='contained' color='primary' fullWidth onClick={handleClick}>Submit Data</Button>
            </Container>
        </div>
    );
}

export default withRouter(Table);