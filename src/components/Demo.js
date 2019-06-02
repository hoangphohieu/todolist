import React, { Component } from 'react';
import Data from './Data';

class Demo extends Component {



    render() {
	    	 var a = [{
	            name: 'acsaca',
	            level: 0,
	            id: 'uuidv4'
	        }];
	        Data.pop(a);

        return (<div>lorem	loremloremloremloremloremloremloremloremloremloremloremloremlorem</div>);
    }
}

export default Demo;