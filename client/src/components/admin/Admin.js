import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Menu from './AdminMenu';
import Orders from './AdminOrders';
import * as menuActions from '../../actions/menu';
import * as catActions from '../../actions/categories';
import {connect} from 'react-redux';
const actions = {...menuActions, ...catActions};


class Admin extends Component {
    componentDidMount(){
        // if(this.props.categories.length>0) return
        this.props.fetchMenu();
        this.props.fetchCategories();
    };
    render() {
        return (
            <div className="admin">
                <aside>
                    <NavLink to="/admin/orders" activeClassName="active">Orders</NavLink>
                    <NavLink to="/admin/menu" activeClassName="active">Menu</NavLink>
                </aside>
                <Switch>
                    <Route exact path="/admin/orders" component={Orders}/>
                    <Route exact path="/admin/menu" component={Menu}/>
                </Switch>
            </div>
        );
    }
}

export default connect (null, actions)(Admin);

//jei state nekvieciame tada null