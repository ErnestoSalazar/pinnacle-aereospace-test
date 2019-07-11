import React, {Component} from 'react';
import MenuCard from '../components/Card/MenuCard';
import Modal from '../components/Modal/Modal';

export default class MenuBoard extends Component {

    state = {
        isModalOpen: false
    };

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen});
    };

    render() {
        return (
            <div className="container">
                <div className="row space-around">
                    <MenuCard handleModal={this.handleModal}/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                </div>

                <Modal isOpen={this.state.isModalOpen}
                       handleClose={this.handleModal}
                >

                </Modal>
            </div>
        )
    }
}