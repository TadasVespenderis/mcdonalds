import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionsCat from '../../actions/categories';
import * as actionsMenu from '../../actions/menu';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import axios from 'axios';
const actions = {...actionsCat, ...actionsMenu};


class AdminMenu extends Component {

    state = {
        message: '',
        item: [],
        file: ''
    };

    uploadImage = (files)=>{
        this.setState ({file:files[0]})
    };

    addProduct = (values)=>{
        //sukuriam objekta ir jam priskiriame formos savybes
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('price', values.price);
        formData.append('category', this.props.active);
        formData.append('itemimage', this.state.file);

        axios.post('/api/admin/additem', formData).then((res)=>{
            this.setState({message: res.data.message});
            console.log(res.data)
//issitraukaim data is response ir siunciame i reduceri gauta response
            const {name, price, category, img, _id} = res.data;
            this.props.addItem({name, price, category, img:img, _id});
            this.setState({file: ''});
        })
    };

// componentDidMount({
//     // axios.get uzklausai serveri pasirinktu route
//     //seervery padarome route.get pasirinktu adresu ir response graziname is DB gautus irasus
//     //queries ziureti dokumentacija
//                   });

    render() {

        const categories = this.props.categories.map ((item, i)=>{
            return  (
                <li
                    className={this.props.active===item.name? 'active-cat': null}
                    onClick={()=>this.props.switchCategory(item.name)}
                    key={i}>{item.name}</li>
            )
        });

        const items = this.props.menu.filter(item=>{
            if(this.props.active !=='all') {
                return item.category === this.props.active
            }else {return this.props.menu}
        }).map((item, i)=>{
            return (<div
                key={i}>
                <img src={item.img} alt="photo"/>
                <p>{item.name} - {item.price} €</p>
                <button
                onClick={()=>this.props.removeItem(item._id)}
                >Remove</button>
            </div>)
        });

        return (
            <div>
                <ul>
                {categories}
                </ul>
                {this.props.active!=='all' &&
               <div>
                   <form onSubmit={this.props.handleSubmit(this.addProduct)}>
                       <Field name="name" component="input" placeholder="name" type="text"/>
                       <Field name="price" component="input" placeholder="price" type="number"/>
                       <Dropzone className="dropzone"
                        style={{backgroundImage: `url(${this.state.file.preview})`}}
                        onDrop={this.uploadImage}>
                       <p>Drop image there</p>
                   </Dropzone>
                       <button type="submit">Add</button>
                   </form>
                   <p>{this.state.file.name}</p>
               </div>
                }
                <h2>{this.state.message}</h2>
                <div className="menuAdmin">
                    {items}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        categories: state.categories,
        menu: state.menu,
        active: state.active
    }
};

AdminMenu = reduxForm({
    // a unique name for the form
    form: 'menu'
})(AdminMenu);

export default connect (mapStateToProps, actions)(AdminMenu);