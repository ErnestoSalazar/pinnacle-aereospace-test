import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as ItemActionCreators from '../actions/item';
import {connect} from "react-redux";

// components
import MenuCard from '../components/Card/MenuCard';
import Modal from '../components/Modal/Modal';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import ItemAddUpdate from "./ItemAddUpdate";
import InfiniteScroll from "react-infinite-scroll-component";

class MenuBoard extends Component {

    state = {
        isModalOpen: false,
        isFormModalOpen: false,
        items: [],
        hasMore: true
    };

    componentDidMount() {
        this.setState({
            items: this.props.items.slice(0, 30)
        });
    }

    handleModal = (index) => {
        this.setState({isModalOpen: !this.state.isModalOpen});
        const selectItem = bindActionCreators(ItemActionCreators.selectItem, this.props.dispatch);
        selectItem(index);
    };

    handleItemModalForm = () => {
        this.setState({isFormModalOpen: !this.state.isFormModalOpen});
    };

    fetchMoreData = () => {
        const nextItemsInArray = this.props.items.slice(0, this.state.items.length + 30);
        setTimeout(() => {

            const hasMore = (nextItemsInArray.length !== this.props.items.length);

            this.setState({
                items:nextItemsInArray,
                hasMore
            });
        }, 1000);
    };

    handleAddItem = (item) => {
        this.setState({
            items: [
                item,
                ...this.state.items
            ]
        });
    };

    render() {

        const {items, selectedItemIndex, selectedItems, dispatch} = this.props;

        const insertToSelctedItem = bindActionCreators(ItemActionCreators.insertToSelectedItem, dispatch);
        const addItem = bindActionCreators(ItemActionCreators.addItem, dispatch);
        const updateItem = bindActionCreators(ItemActionCreators.updateItem, dispatch);


        let selectedItem;
        if(selectedItemIndex !== -1) selectedItem = items[selectedItemIndex];


        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="row space-around">
                        {this.state.items.map((item, index) => {
                            const isSelected = selectedItems.find(sItem => sItem.id === item.id);
                            const selectedClassName = (isSelected) ? 'selected-item' : '';

                            return (
                                <MenuCard
                                    className={selectedClassName}
                                    key={index}
                                    index={index}
                                    handleModal={this.handleModal}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    imageDescription={item.imageDescription}
                                />
                            );
                        })}
                    </div>
                </InfiniteScroll>

                <Modal isOpen={this.state.isModalOpen}
                       handleClose={this.handleModal}
                       item={selectedItem}
                       insertToSelectItem={insertToSelctedItem}
                       updateItem={updateItem}

                />
                <ItemAddUpdate
                    isOpen={this.state.isFormModalOpen}
                    handleClose={this.handleItemModalForm}
                    handleAddItem={this.handleAddItem}
                    addItem={addItem}
                />
                <FloatingButton
                    btnPosition='fixed-bottom-right'
                    onClick={this.handleItemModalForm}
                />
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