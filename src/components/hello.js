import link from '../bindings/link';

const Hello = {
  name: 'Hello',
  props: ['text', 'todos'],
  render(h) {
    console.log('hello', this);
    return (
      <div>
        <span>{this.text}</span>
        {this.todos.map((todo, key) => <span key={key}>{todo.text}</span>)}
      </div>
    );
  },
};

// const mapDispatchToProps = (dispatch, state) => {};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default link(null, mapStateToProps, Hello);
