import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'; // Replaces RaisedButton

const theme = createTheme();

export class Success extends Component {
    start = e => {
        e.preventDefault();
        this.props.resubmit();
    }

  render() {
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
                Success
              </Typography>
              
            </Toolbar>
          </AppBar>
          <h1>Thank You for Your Submission</h1>
          <p>You will get an email with further Instructions </p>
          <br/>
          <br/>
          <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={this.start}>
          Resubmit
          </Button>
          <p>Click Resubmit If you want to resubmit </p>
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


export default Success ;
