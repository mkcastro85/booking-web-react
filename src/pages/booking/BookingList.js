import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {bookingService} from '../../services/booking.service';
import withStyles from '@material-ui/core/styles/withStyles';
import {loginService} from '../../services/login.service';


const bookingStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
class BookingList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: localStorage.getItem('currentUser'),
      bookings: [],
    };
    const currentUser = this.state.currentUser;
    if (!currentUser ||  currentUser=='undefined') { 
      this.props.history.push('/login');
    }else{
      this._getAll(currentUser);
    }
    
  }
  
  render() {
    const classes = makeStyles({
      table: {
        minWidth: 650,
      },
    });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>BookingId</TableCell>
            <TableCell align="right">Cliente</TableCell>
            <TableCell align="right">Fecha de Creación</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.bookings.map((row) => (
            <TableRow key={row.bookingId}>
              <TableCell component="th" scope="row">
                {row.bookingId}
              </TableCell>
              <TableCell align="right">{row.tutenUserClient.firstName}</TableCell>
              <TableCell align="right">{row.bookingTime}</TableCell>
              <TableCell align="right">{row.locationId.streetAddress}</TableCell>
              <TableCell align="right">{row.bookingPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
  }

  _getAll = async (currentUser) => {
    await bookingService.getAll(currentUser).then(data => {
      console.log(data);
      this.setState({ bookings:data })
      });
  };

}
BookingList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(bookingStyles)(BookingList);