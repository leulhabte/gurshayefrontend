import React from 'react';
import axios from 'axios';
import {Container, Typography, Grid, Paper} from '@material-ui/core';
import Chart from 'react-apexcharts';

const StatBody = ()=>{

    const [option, setOption] = React.useState({
        labels: []
    });
    const [series, setSeries]= React.useState([]);
    const [option2, setOption2] = React.useState({
        chart: {
            id: "basic-bar"
            },
            xaxis: {
                categories: []
            }
    });
    const [lineSeries, setLineSeries] = React.useState([
        {
            name: "",
            data: []
        }
    ]);
    
    const callApi = ()=>{
        axios.get('tips/leagues/')
        .then(res=>{
            const leagues = [];
            const count = [];
            res.data.Leagues.map(data=>{
                leagues.push(data.name);
                count.push(data.count);
                return data;
            });
            const lable = {labels: leagues}
            setOption(lable);
            setSeries(count);
        });
    }

    const callStat = ()=>{
        axios.get('tips/stat/')
        .then(res=>{
            const label = [];
            const datas = [];
            res.data.statistics.map(data=>{
                label.push(data.name);
                datas.push(data.count);
                return data;
            });
            const opt = {
                chart: {
                    id: "basic-bar"
                    },
                xaxis: {
                    categories: label
                }
            };
            const ser = [{
                name: 'Predictions Inserted',
                data: datas
            }]
            setOption2(opt);
            setLineSeries(ser);
        })
    }
    React.useEffect(()=>{callApi(); callStat()},[])

    return(
        <div>
            <Container maxWidth='xl'> 
            <Grid container>
                <Grid item xs={4}>
                    <Typography className="mt-3 mb-4" variant='h6'>Overall Leagues</Typography>
                </Grid>
            </Grid>             
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                    <Paper>
                    <Chart
                        options={option}
                        series={series}
                        type='donut'
                        width='450px'
                    />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Typography className="mt-3 mb-4" variant='h6'>Total datas inserted dates</Typography>
                </Grid>
                    <Grid item xs={12}>
                        <Paper>
                        <Chart
                            options={option2}
                            series={lineSeries}
                            type='line'
                            width='100%'
                            height="400px"
                        />
                        </Paper>
                    </Grid>
            </Grid>
            </Container>
        </div>
    );
}

export default StatBody;