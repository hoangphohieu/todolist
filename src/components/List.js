import React, { Component } from 'react';
import ItemsList from './Items.js';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
    }

    render() {

        const listProps = this.props.todos;
        // console.log('xuat list')


        let noidung = listProps.map((value, index) => { return <ItemsList item={value} key={index} indexx={index}/> });
        return (
            <div className="container" style={{backgroundColor: '#fff'}}>
              <div className="row">
                <div className="col-12">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Level</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noidung}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        );
    }
}

export default List;