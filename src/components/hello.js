import {bindActionCreators} from 'redux';

import * as todosActionCreators from '../actions/todos';
import metaActionCreators from '../actions/meta';
import link from '../bindings/link';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const Hello = {
  name: 'Hello',
  props: ['text', 'todos', 'name', 'actions'],
  render(h) {
    console.log(metaActionCreators);
    return (
      <div style={styles.container}>
        <span>{this.text}</span>
        <span>{this.title}</span>
        <input
          type='button'
          value='change'
          onClick={() => this.actions.editName('new')}
        />
        {this.list.map((todo, key) => <span key={key}>{todo.text}</span>)}
        <input
          type='button'
          value='add'
          onClick={() => this.actions.addTodo({text: 'Another', completed: false})}
        />
      </div>
    );
  },
  computed: {
    title() {
      return this.name;
    },
    list() {
      console.log('computed', this.todos);
      return [...this.todos];
    },
  },
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...metaActionCreators, ...todosActionCreators}, dispatch),
});

const mapStateToProps = state => ({
  todos: state.todos,
  name: state.meta.name,
});

export default link(mapDispatchToProps, mapStateToProps, Hello);
