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
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: Array,
    actions: Object,
  },
  render(h) {
    return (
      <div style={styles.container}>
        <div style={styles.sub}>
          <h3 style={{marginRight: '15px'}}>{this.title}</h3>
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

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

