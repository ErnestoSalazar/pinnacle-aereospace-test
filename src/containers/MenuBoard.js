import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as ItemActionCreators from '../actions/item';
import {connect} from "react-redux";

// components
import MenuCard from '../components/Card/MenuCard';
import Modal from '../components/Modal/Modal';
import FloatingButton from '../components/FloatingButton/FloatingButton';

class MenuBoard extends Component {

    state = {
        isModalOpen: false
    };

    handleModal = (index) => {
        this.setState({isModalOpen: !this.state.isModalOpen});
        const selectItem = bindActionCreators(ItemActionCreators.selectItem, this.props.dispatch);
        selectItem(index);
    };

    render() {

        const {items, selectedItemIndex, selectedItems, dispatch} = this.props;

        const insertToSelctedItem = bindActionCreators(ItemActionCreators.insertToSelectedItem, dispatch);

        const itemComponents = items.map((item, index) => {
            const isSelected = selectedItems.find(id => id === item.id);
            const selectedClassName = (isSelected) ? 'selected-item' : '';

            return (
                <MenuCard
                    className={selectedClassName}
                    key={index}
                    index={index}
                    handleModal={this.handleModal}
                    name={item.name}
                    price={item.price}
                />
            );
        });

        let selectedItem;
        if(selectedItemIndex !== -1) selectedItem = items[selectedItemIndex];


        return (
            <div className="container">
                <div className="row space-around">
                    {itemComponents}
                </div>
                <Modal isOpen={this.state.isModalOpen}
                       handleClose={this.handleModal}
                       item={selectedItem}
                       insertToSelectItem={insertToSelctedItem}

                />
                <FloatingButton btnPosition='fixed-bottom-right'/>
            </div>
        )
    }
}


const mapStateToProps = state => (
    {
        items: state.items,
        selectedItemIndex: state.selectedItemIndex,
        selectedItems: state.selectedItems
    }
);




export default connect(mapStateToProps)(MenuBoard);