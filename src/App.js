import Hello from './components/hello';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const App = {
  name: 'App',
  data() {
    return {
      todos: [{text: '1'}, {text: '2'}],
    };
  },
  render(h) {
    return (
      <div>
        <Hello text='hello world' />
        <div style={styles.container}>{
          this.todos.map((todo, index) =>
            <span key={index}>{todo.text}</span>
          )
        }</div>
      </div>
    );
  },
};

export default App;
