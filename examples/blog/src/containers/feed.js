import Posts from './posts';

const styles = {
  container: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-around',
  },
};

export default {
  name: 'FeedContainer',
  render(h) {
    return (
      <div style={styles.container}>
        <Posts />
      </div>
    );
  },
};
