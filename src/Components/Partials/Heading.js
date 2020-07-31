import React from 'react';
import {Container, Box, Typography} from '@material-ui/core';
import useStyles from '../../Styling';

const Heading = props =>{
    const classes = useStyles();
        return (
        <Container className={classes.header} maxWidth='xl'>
            <Box>
                <Typography component='div' className={classes.headTitle}>
                    <h4 className='ml-3'>{props.title}</h4>
                </Typography>
            </Box>
        </Container>
        );
    }

export default Heading;