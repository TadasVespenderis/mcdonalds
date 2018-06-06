import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Catactions from '../../actions/categories';

// const actions = {...menu, ...cat}; apjungti actions is to pacio actions failo

class Categories extends Component {

    render() {
// console.log(this.props.active)
        const categories = this.props.categories.map ((item, i)=>{
            return <div key={i}
                        className={this.props.active===item.name? "active":"category"}
                        onClick={()=>this.props.switchCategory(item.name)}
            >
                <img src={item.img} alt="photo"/>
                <p>{item.name}</p>
            </div>
        });

        return (
            <div className="categories">
                {categories}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        categories: state.categories,
        active: state.active
    }
};

export default connect (mapStateToProps, Catactions)(Categories);