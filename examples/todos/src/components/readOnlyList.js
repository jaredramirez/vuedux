import {connect} from '../../../../dist/vuedux';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const ReadOnlyList = {
  name: 'ReadOnlyList',
  props: ['title', 'todos'],
  render(h) {
    return (
      <div style={styles.container}>
        <h3>{this.title}</h3>
        {this.todos.map((todo, key) => <span key={key}>{todo.text}</span>)}
      </div>
    );
  },
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(null, mapStateToProps)(ReadOnlyList);
