import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Replaces RaisedButton
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br/>
          <TextField 
          placeholder="Enter your First Name"
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          />
          <br/>
          <br/>
          <TextField 
          placeholder="Enter your Last Name"
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          />
          <br/>
          <br/>
          <TextField 
          placeholder="Enter your First Email"
          label="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          />
          <br/>
          <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={this.continue}>
          Continue
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

export default FormUserDetails ;
