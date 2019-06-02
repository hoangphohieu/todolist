import { connect } from 'react-redux';
import ItemsList from './../components/Items';
import addSubmit from './../actions/addSubmit'

 const mapDispatchToProps=(dispatch)=> {
    return {
        changeItems:(value1,value2)=>dispatch(changeItems(value1,value2)),
       
    };
}
export default connect(null ,mapDispatchToProps)(ItemsList);