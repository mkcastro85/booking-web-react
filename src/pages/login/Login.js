import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, useHistory } from "react-router-dom";
import loginStyle from '../../assets/LoginStyle';
import {loginService} from '../../services/login.service';


class Login extends Component {

  constructor(props) {
    super(props);
    const currentUser = loginService.currentUser;
    console.log("Token "+currentUser);
    if (currentUser && currentUser!='undefined') { 
      this.props.history.push('/');
    }
    this.state={
      email:'',
      password:''
  }

  }
  render() {
    const { classes } = this.props;
    
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus  
              value={this.state.email}
              onChange = {(event) =>this.setState({email: event.target.value})}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" value={this.state.password} id="password" autoComplete="current-password"
              onChange = {(event) =>this.setState({password: event.target.value})} />
            </FormControl>
          
           
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => this._signIn(event)}
            >
            
            Sign In
            
            </Button>
           
          </form>
        </Paper>
      </main>
    );
  }

  _signIn = async () => {
  
    await loginService.login(this.state.email,this.state.password).
    then(user => {
        localStorage.setItem('currentUser', user.sessionTokenBck);  
        this.props.history.push('/');
    });
  };

}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(loginStyle)(Login);