import React, {Component} from 'react';

import {connect} from "react-redux";

import MenuCard from '../components/Card/MenuCard';
import Modal from '../components/Modal/Modal';

class MenuBoard extends Component {

    state = {
        isModalOpen: false
    };

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen});
    };

    render() {

        const itemComponents = this.props.items.map(item => (
            <MenuCard
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
                       handleClose={this.handleModal} >

                </Modal>
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