import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderForm : {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: ''
        },
        address: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Address'
          },
          value: ''
        },
        zip: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Zipcode'
          },
          value: ''
        },
        state: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your State'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
          },
          value: ''
        },
        deliveryMethod: elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: ''
      },
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
        price: this.props.price
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
          <Input elementType="..." elementConfig="..." value="..." />
          <Input inputtype="input" label="email" type="email" name="email" placeholder="Your Email" />
          <Input inputtype="input" label="address" type="text" name="street" placeholder="Your Address" />
          <Input inputtype="input" label="zipcode" type="text" name="postal" placeholder="Your Zipcode" />
          <Button btntype="Success" clicked={this.orderHandler}>ORDER</Button>
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
