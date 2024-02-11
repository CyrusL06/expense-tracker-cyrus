import React from 'react'
import {Grid} from '@material-ui/core';


import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles';

import{ Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

// FORGOT TO IMPORT THIS DAMN 2 DAYS OF THIS BS
ChartJS.register(ArcElement, Tooltip, Legend)


const App = () => {
  const classes = useStyles();
  return (

    <div>   
    <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
      
        <Grid item xs={12} sm={4}> 
            <Details title = "Income"/>
        </Grid>
        <Grid item xs={12} sm={3}> 
            <Main/>
        </Grid>
        <Grid item xs={12} sm={4}> 
            <Details title="Expense"/>
        </Grid>
    </Grid>  
    </div>
  );
}

export default App