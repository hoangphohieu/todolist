import { connect } from 'react-redux';
import Search from './../components/Search';
import searchTodo from './../actions/searchTodo';
import sapXepTen from './../actions/sapXepTen';
import sortLevel from './../actions/SortLevel';


 const mapDispatchToProps=(dispatch)=> {

    return {

        search:(value)=>dispatch(searchTodo(value)),
        sapXepTen:(value)=>dispatch(sapXepTen(value)),
        sortLevel:(value)=>dispatch(sortLevel(value))
    };
}
export default connect(null ,mapDispatchToProps)(Search);