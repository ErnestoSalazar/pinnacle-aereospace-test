import React, {Component} from 'react';

import {connect} from "react-redux";

// components
import MenuCard from '../components/Card/MenuCard';
import Modal from '../components/Modal/Modal';
import FloatingButton from '../components/FloatingButton/FloatingButton';

class MenuBoard extends Component {

    state = {
        isModalOpen: false
    };

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen});
    };

    render() {

        const itemComponents = this.props.items.map((item, index) => (
            <MenuCard
                key={index}
                handleModal={this.handleModal}
                name={item.name}
                price={item.price}
            />
        ));


        return (
            <div className="container">
                <div className="row space-around">
                    {itemComponents}
                </div>
                <Modal isOpen={this.state.isModalOpen}
                       handleClose={this.handleModal}
                />
                <FloatingButton btnPosition='fixed-bottom-right'/>
            </div>
        )
    }
}


const mapStateToProps = state => (
    {
        items: state.items
    }
);




export default connect(mapStateToProps)(MenuBoard);