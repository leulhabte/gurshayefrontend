import React from 'react';
import useStyles from '../Styling'
import {Container, Typography, Grid, Card, CardActionArea, CardActions, CardContent, Button, CardHeader} from '@material-ui/core';
import {Create, Airplay, InsertChart, Settings} from '@material-ui/icons';
import {Link} from 'react-router-dom'

const Home = (props)=>{

    const classes = useStyles();

    return(
        <div>
           <Container className={classes.containers} maxWidth='xl'>
               <Typography component='div' className={classes.overlay}></Typography>
                <Typography component="div" className={classes.title}>
                    <Typography variant='h3' className={classes.mainTitle}>Welcom To Gurshaye</Typography>
                    <Typography variant='h6' className={classes.subTitle}>Betting tip provider</Typography>
                </Typography>
           </Container> 
           <div className={classes.cardMain}>
                <Grid container spacing={2} className={classes.inputHolder}>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='div'>Insert Tip<Create className={classes.cardIcon}/></Typography>
                                    <Typography variant='body2' component='p'>
                                        To provide the user with a best reliable
                                        betting tips of different leagues from 
                                        around the world
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary"><Link to='/add'>Get Started</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader2}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>View Tip<Airplay className={classes.cardIcon}/></Typography>
                                    <Typography variant='body2' component='p'>
                                        Allows you to view the betting tips
                                        that are inserted in a clear, sorted and managed way
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary"><Link to='/view'>Get Started</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader3}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>Manage Tips<Settings className={classes.cardIcon}/></Typography>
                                    <Typography variant='body2' component='p'>
                                        Allows you to manage the betting tips
                                        inserted easily and efficiently in a more
                                        flexible way 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary"><Link to='/manage'>Get Started</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader4}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>Statistics<InsertChart className={classes.cardIcon}/></Typography>
                                    <Typography variant='body2' component='p'>
                                        Provides you with analytical data of 
                                        the betting predictions in a summarized
                                        and graphical way
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary"><Link to='stats'>Get Started</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid> 
           </div>
        </div>
    );
}

export default Home;