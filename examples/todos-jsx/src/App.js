import List from './components/list';
import ReadOnlyList from './components/readOnlyList';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};

const App = {
  name: 'App',
  funcional: true,
  render: h =>
    <div style={styles.container}>
      <List title={'Editable list'} />
      <ReadOnlyList title='Read Only List' />
    </div>,
};

export default App;
