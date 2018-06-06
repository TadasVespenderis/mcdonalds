import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/orders';
import {Link} from 'react-router-dom';

class Menu extends Component {

    render() {

        const items = this.props.menu.filter(item=>{
            if(this.props.active !=='all') {
                return item.category === this.props.active
            }else {return this.props.menu}
        }).map((item, i)=> {
            return (<div
                key={i}
                className="menuitems"
                onClick={() => this.props.addOrder(item)}>
                <img src={item.img} alt="photo"/>
                <p>{item.name} - {item.price} €</p>
            </div>)
        });

        return (
            <div className="menu">
                {items}
                {this.props.orders.length>0 && <Link to="/checkout">Checkout</Link>}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        menu: state.menu,
        active: state.active,
        orders: state.orders
    }
};

export default connect (mapStateToProps, actions)(Menu);