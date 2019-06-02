import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeItems from './../actions/changeItems';
import deleteItems from './../actions/deleteItems';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeItems: false,
            changeLevel: null,
            changeName: ''
        }

    }
    changeItems = () => { this.setState({ changeItems: !this.state.changeItems }) }
    deleteItems = () => {this.props.deleteItems(this.props.item.id)}
    changeName = (e) => { this.setState({ changeName: e.target.value }) }
    setMedium = () => {
        (this.state.changeLevel == null) ? this.setState({ changeLevel: 0 }): this.setState({ changeLevel: null }) }
    setSmall = () => {
        (this.state.changeLevel == null) ? this.setState({ changeLevel: 1 }): this.setState({ changeLevel: null }) }
    setHigh = () => {
        (this.state.changeLevel == null) ? this.setState({ changeLevel: 2 }): this.setState({ changeLevel: null }) }
    setUpdate = () => {
        if (this.state.changeName === '') { alert('Bạn chưa điền tên') } else if (this.state.changeName.trim() === '') { alert('Bạn chưa điền tên') } else {
            this.props.changeItems(this.state.changeName, this.state.changeLevel, this.props.item.id);
            this.setState({ changeItems: !this.state.changeItems });
        }

    }
    render() {
        const item = this.props.item;
        const index = this.props.indexx;

        let level = <span className="badge badge-secondary">Medium</span>;
        if (item.level === 1) level = <span className="badge badge-primary">Small</span>;
        else if (item.level === 2) level = <span className="badge badge-danger">High</span>;
        let addLevel = < >
            <button onClick={this.setMedium} type="button" className="badge badge-secondary mr-2 border-0">Medium</button> <
            button onClick = { this.setSmall } type = "button"
        className = "badge badge-primary mr-2 border-0" > Small < /button> <
            button onClick = { this.setHigh } type = "button"
        className = "badge badge-danger mr-2 border-0" > High < /button> <
            />
        if (this.state.changeLevel === 0)
            (addLevel = <button onClick={this.setMedium} type="button" className="badge badge-secondary mr-2 border-0">Medium</button>)
        else if (this.state.changeLevel === 1)
            addLevel = <button onClick={this.setSmall} type="button" className="badge badge-primary mr-2 border-0">Small</button>
        else if (this.state.changeLevel === 2)
            addLevel = <button onClick={this.setHigh} type="button" className="badge badge-danger mr-2 border-0">High</button>

        let changeItems = <tr>
                    <th scope="row">$</th>
                    <td>
                    <input type="text" className="form-control" onChange={this.changeName} value={this.state.changeName}
                      placeholder="Username" />
                    </td>
                    <td colSpan="2">
                        
                    {addLevel}
                    <button type="button" className="btn btn-primary" 
                        onClick={this.setUpdate}>Update</button >
                    
                    </td>
                  </tr>;
        if (!this.state.changeItems) { changeItems = null }


        return ( < >
            <tr>
                <th scope="row">{index +1}</th>
                <td>{item.name}</td>
                <td>{level}</td>
                <td>
                  <button type="button" className="btn btn-success" onClick={this.changeItems}>Edit</button>
                  <button type="button" className="btn btn-warning" onClick={this.deleteItems}>Delete</button>
                </td>
            </tr>{ changeItems }<
            />
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeItems: (name, level, id) => dispatch(changeItems(name, level, id)),
        deleteItems:(id)=> dispatch(deleteItems(id))

    };
}
export default connect(null, mapDispatchToProps)(ItemsList);