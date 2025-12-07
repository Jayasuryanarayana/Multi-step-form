import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button'; // Replaces RaisedButton
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
    const {values} = this.props;
    const {firstName, lastName, email, occupation, city, bio} = values ;
    const {handleChange} = this.props ;
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
                Confirm
              </Typography>
              
            </Toolbar>
          </AppBar>
          <br/>
          <br/>
          <List>
                <ListItem>
                    <ListItemText 
                        primary="First Name" 
                        secondary={firstName} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Last Name" 
                        secondary={lastName} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Email" 
                        secondary={ email } 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Occupation" 
                        secondary={occupation} 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="City" 
                        secondary={ city } 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Bio" 
                        secondary={ bio } 
                    />
                </ListItem>
              </List>
          <br/>
          <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={this.continue}>
          Confirm & Continue
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
