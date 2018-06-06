import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Menu from './Menu';
import Checkout from './Checkout';
import Categories from './Categories';
import Orders from './Orders';
import {connect} from 'react-redux';
import * as catAction from '../../actions/categories';
import * as menuAction from '../../actions/menu';

const actions = {...catAction, ...menuAction};

class Shop extends Component {

    componentDidMount(){
        this.props.fetchCategories('Gerimai');
        this.props.fetchMenu('bla');
        console.log('Komponentas uzsikrove');
    };

    render() {
        return (
            <div className="shop">
                <Route exact path="/shop" component={Menu}/>
                <Categories/>
                <Orders/>
            </div>
        );
    }
}

export default connect (null, actions)(Shop);