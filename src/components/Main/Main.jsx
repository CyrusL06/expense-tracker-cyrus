    import React, { useState, useEffect, useContext } from 'react'
    import{Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
    import { ExpenseTrackerContext } from '../../context/context';

    // Imports the file into here 
    import useStyles from './styles';
    import Form from './Form/Form';
    import List from './List/List';

    
    const Main = () => {
        // Uses the styles in Java function
        // Material UI
        const classes = useStyles();
        const { balance } = useContext(ExpenseTrackerContext);


    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader = "Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* InfoCard.... */}
                    {/* Try saying: Add Income for $100 in Category Salary for Monday.... */}
                </Typography>
                {/* Seperates Them */}
                <Divider/>
                {/* Form */}
                <Form/>
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing ={2}>
                    <Grid item xs={12}>
                        {/* List */}
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
    }

    export default Main