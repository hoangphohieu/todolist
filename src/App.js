import React, { Component } from 'react';
import List from './containers/storeList';
import Control from './components/Control';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="container-fluid">

        {/* control */}
        <Control searchData={this.searchData}/>
        {/* control */}

        {/* table */}
        <List />
        {/* table */}
        </div>
        );
    }
}

export default App;