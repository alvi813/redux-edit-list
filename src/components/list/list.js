import React, {Component} from 'react';
import { addToEditList, removeFromEditList, editListItem } from '../actionCreators/editList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import "./list.css"

const mapStateToProps = (state) => {
    return {
        editList: state.editList
    }
}

const mapDispatchToProps = () => {
    return (dispatch) => {
        return {
            addToEditList: bindActionCreators(addToEditList, dispatch),
            removeFromEditList: bindActionCreators(removeFromEditList, dispatch),
            editListItem: bindActionCreators(editListItem, dispatch),
        }
    }
}

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            editIndex: null
        }
    }

    closeEdit = () => {
        this.setState({editIndex: null})
    }

    onSubmit = (e) => {
        e.preventDefault();    // the page doesn't reload and the entered data doesn't disappear
        this.props.addToEditList(this.state.itemName);
        this.setState({
            itemName: ''
        });
    }

    render() {
        const {editList, addToEditList, removeFromEditList, editListItem} = this.props;

        return (
            <div className="list">
                <form className="item-add-form d-flex new-input"
                      onSubmit={this.onSubmit}
                >

                    <input className="form-control"
                        value={this.state.itemName}
                        onChange={(e) => this.setState({itemName: e.target.value})}
                    />
                    <button className="btn btn-outline-success btn-sm float-right button-add"
                       //// onClick={() => addToEditList(this.state.itemName)}  // we don't need this line, because of add onSubmit
                    >
                        Добавить элемент
                    </button>
                </form>
                {editList.map((editItem, index) => (
                    <div
                        key={editItem.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <div>
                            <p>
                                {editItem.name}
                            </p>
                            {(index === this.state.editIndex) &&
                            <form onSubmit={this.closeEdit}>
                                <input
                                    value={editItem.name}
                                    onChange={(e) => editListItem(index, e.target.value)}
                                    onBlur={this.closeEdit}
                                />
                            </form>
                            }
                        </div>
                        <div style={{marginLeft: '10px'}}>
                            <button onClick={() => this.setState({editIndex: index})}>Редактировать</button>
                        </div>
                        <div style={{marginLeft: '10px'}}>
                            <button onClick={() => removeFromEditList(index)}>Удалить</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);