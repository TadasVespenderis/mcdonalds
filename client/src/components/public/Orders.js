import React, { Component } from 'react';
import {connect} from 'react-redux';

class Orders extends Component {

    render() {
        const orders = this.props.orders.map ((order, i)=>{
            return <img src={order.img} key={i}/>
        });
        return (
            <div className="orders">
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        orders: state.orders
    }
};

export default connect (mapStateToProps)(Orders);