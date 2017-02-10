import {connect} from './../../../../dist/vuedux';

import Post from './post';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
};

const Posts = {
  name: 'PostsContainer',
  props: ['postsIds'],
  render(h) {
    return (
      <div style={styles.container}>
        {
          this.postsIds.map(curId =>
            <Post id={curId} />,
          )
        }
      </div>
    );
  },
};

const mapStateToProps = state => ({
  postsIds: state.postsIds,
});

export default connect(null, mapStateToProps)(Posts);
