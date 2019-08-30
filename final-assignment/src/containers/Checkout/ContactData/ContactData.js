import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: {
        street: '',
        zip: ''
      },
      loading: false
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
      //alert('you continue!');
      const order = {
        ingredients: this.props.ingredients,
        // we should check this price on the server, dont want it manipulated
        price: this.props.price,
        customer: {
          name: 'Sunjay Dhama',
          address: {
            line1: '34 Elm St.',
            line2: 'Apt 1',
            zip: '00000',
            state: 'CA'
          },
          email: 'sunjay@example.com'
        },
        deliveryMethod: 'fastest'
      }
      axios.post('/orders.json', order)
      .then(response => {
          this.setState({loading: false});
          this.props.history.push('/');
        })
      .catch(error => {
          this.setState({loading: false});
        });
      }

  render () {
    let form = (
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
          <input className={classes.Input} type="text" name="street" placeholder="Your Address" />
          <input className={classes.Input} type="text" name="postal" placeholder="Your Zipcode" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
          </form>
        );
    if(this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
