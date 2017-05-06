import {connect} from './../../../../dist/vuedux';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const ReadOnlyList = {
  name: 'ReadOnlyList',
  functional: true,
  props: ['title', 'todos'],
  render(h, {props}) {
    return (
      <div style={styles.container}>
        <h3>{props.title}</h3>
        {props.todos.map((todo, key) => <span key={key}>{todo.text}</span>)}
      </div>
    );
  },
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(ReadOnlyList);
