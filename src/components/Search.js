import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            idea: 'hoang hieu'
        };
        this.handleChange = this.handleChange.bind(this);



    }


    handleChange(event) {
        (event.target.value === '') ? this.setState({ value: null }): this.setState({ value: event.target.value });

    }


    render() {

        return (
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <h1>ProJect 01 - ToDo List <span className="badge">React JS</span></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex">
                  <div className="w-100 mr-2">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control border-info"onChange={this.handleChange}  
                      placeholder="Tìm kiếm..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-info" type="button" id="button-addon2 " 
                         onClick={()=>this.props.search(this.state.value)} >search</button>
                        <button className="btn btn-danger" type="button"  >sort</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="btn-group">
                      <button type="button" className="btn  dropdown-toggle border-info" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        Tùy chọn
                      </button>
                      <div className="dropdown-menu">
                        <p className="dropdown-item" onClick={()=>this.props.sapXepTen(this.state.value)}  >Sắp xếp theo tên</p>
                        <div className="dropdown-divider" />
                        <p className="dropdown-item" onClick={()=>this.props.sortLevel(this.state.value)}>Sắp xếp theo level  A-Z</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        );
    }
}


export default Search;