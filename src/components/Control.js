import React, { Component } from 'react';
import Search from './../containers/storeSearch';
import AddTask from './../containers/storeAddTask';
class Control extends Component {
    constructor(props){
        super(props);
        this.state={};

        
    }


    render() {
        return (
            <div className="container  pb-3 mt-5 pt-3" style={{backgroundColor: '#fff'}}>
          <div className="row">
            {/*start Search */}
            <Search/>
            {/*End Search */}

            {/*start AddTask */}
            <AddTask/>
            {/*End AddTask */}
            
          </div>
        </div>
        );
    }
}

export default Control;