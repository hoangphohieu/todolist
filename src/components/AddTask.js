import React, { Component } from 'react';
class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lclick: true,
            taskName: '',
            level: 0
        };
        this.con = this.con.bind(this);
        this.addSubmit=this.addSubmit.bind(this);
    }
    con() {
        this.setState({
            lclick: !this.state.lclick
        });
    }
    taskName = (e) => { this.setState({ taskName: e.target.value }) }
    levelHigh = () => { this.setState({ level: 2 }) }
    levelSmall = () => { this.setState({ level: 1 }) }
    levelMedium = () => { this.setState({ level: 0 }) }
    addSubmit() {
        this.props.addSubmit(this.state.taskName, this.state.level);
        this.setState({ taskName: '' })
    }
    render() {


        let giatri = this.state.lclick;
        let rttButton = <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.con} >End task</button>;
        if (giatri === false) { rttButton = <button type="button" className="btn btn-warning btn-lg btn-block" onClick={this.con}>Add task</button> };

        let actionTask =
            <div className="d-flex mt-2">
                <input type="text" className="form-control" onChange={this.taskName} value={this.state.taskName}  placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                {/* Example single danger button */}
                <div className="btn-group">
                  <button type="button" className="btn  dropdown-toggle border-info ml-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Level
                  </button>
                  <div className="dropdown-menu">
                    <p className="dropdown-item" onClick={this.levelHigh}>High</p>
                    <div className="dropdown-divider" />
                    <p className="dropdown-item" onClick={this.levelSmall}>Small</p>
                    <div className="dropdown-divider" />
                    <p className="dropdown-item" onClick={this.levelMedium}>Medium</p>
                  </div>
                </div>
                <button className="btn btn-primary ml-2" type="submit" onClick={this.addSubmit}>Submit</button>
                <button type="button" className="btn btn-warning ml-1" onClick={this.con}>Cancel</button>
              </div>
        if (giatri === false) { actionTask = '' }
        return (
            <div className="col-6">
              {rttButton}
              {actionTask}


              
       </div>
        );
    }
}

export default AddTask;