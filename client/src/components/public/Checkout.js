import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import {connect} from 'react-redux';

class Checkout extends Component {

    render() {
        const getValues = (values)=>{
            const order = {
                name: values.name,
                address: values.address,
                phone: values.phone,
                orders: this.props.orders
            };
            axios.post('/api/orders', order)
        };
        const {handleSubmit} = this.props;
        return (
            <div className="checkout">
                <div className="wrapper">
                    <div className="back">Back</div>
                        <div className="total">Total: 0€</div>
                        <form onSubmit={handleSubmit(getValues)}>
                            <Field name="name" type="text" component="input"/>
                            <Field name="address" type="text" component="input"/>
                            <Field name="phone" type="text" component="input"/>
                            <button type="submit">Order</button>
                        </form>
                </div>
            </div>
        );
    }
}

Checkout = reduxForm ({
    form: 'contact'
})(Checkout);

const mapStateToProps = (state)=>{
  return{
      orders: state.orders
  }
};

export default connect (mapStateToProps)(Checkout);