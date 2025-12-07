import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Replaces RaisedButton
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values, handleChange} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static" >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Enter Personal Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br/>
          <TextField 
          placeholder="Enter your Occupation"
          label="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          />
          <br/>
          <br/>
          <TextField 
          placeholder="Enter your City"
          label="City name"
          onChange={handleChange('city')}
          defaultValue={values.city}
          />
          <br/>
          <br/>
          <TextField 
          placeholder="Enter your Bio"
          label="Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          />
          <br/>
          <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={this.continue}>
          Continue
          </Button>
          <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={this.back}>
          back
          </Button>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormPersonalDetails ;
