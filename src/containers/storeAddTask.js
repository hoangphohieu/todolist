import { connect } from 'react-redux';
import AddTask from './../components/AddTask';
import addSubmit from './../actions/addSubmit'

 const mapDispatchToProps=(dispatch)=> {
    return {
        addSubmit:(value1,value2)=>dispatch(addSubmit(value1,value2)),
       
    };
}
export default connect(null ,mapDispatchToProps)(AddTask);