import { connect } from 'react-redux';
import List from './../components/List'
 const mapStateToProps=(state)=> {
    return {
        todos: state.searchTodo
    };
}

export default connect(mapStateToProps ,null)(List);