import React, {useState,useContext } from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../context/context';
// Generates new id ebery single time
import { v4 as uuidv4} from 'uuid';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles'
import { incomeCategories, expenseCategories } from '../../../constants/categories';


const intialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate (new Date()),
}
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(intialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = {...formData, amount: Number(formData.amount), id:uuidv4()}

    addTransaction(transaction);
    setFormData(intialState);
  }
  
  const selectedCategories = formData.type === 'Income' ? incomeCategories: expenseCategories;


  return (
    <Grid container spacing={2}>
      {/* Taking up the full size */}
      <Grid item xs={12}>
          <Typography align = "center" variant='subtitle2' gutterBottom>
            {/* .... */}
          </Typography>
      </Grid>
      {/*  */}
      <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expenses</MenuItem>
            </Select>
        </FormControl>
      </Grid>
      {/*  */}
      <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      {/*  */}
      <Grid item xs={6}> 
          <TextField type='number' label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value})}></TextField>
      </Grid>
      <Grid item xs={6}> 
          <TextField type='date' label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value)})}></TextField>
      </Grid>
      <Button className={classes.button} variant="outlined" color ="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form