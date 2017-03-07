import {bindActionCreators} from 'redux';
import {connect} from './../../../../dist/vuedux';

import * as todosActionCreators from '../actions/todos';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  sub: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 15,
  },
};

const List = {
  name: 'List',
  // props: ['todos', 'actions'],
  props: {
    todos: {
      type: Array,
      required: true,
    },
    actions: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    return (
      <div style={styles.container}>
        <div style={styles.sub}>
          <h3 style={{marginRight: '15px'}}>List</h3>
          <input
            type='button'
            value='add'
            onClick={() => this.actions.addTodo({text: 'Next', completed: false})}
          />
        </div>
        {this.todos.map((todo, key) => <span key={key}>{todo.text}</span>)}
      </div>
    );
  },
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
});

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapDispatchToProps, mapStateToProps)(List);
