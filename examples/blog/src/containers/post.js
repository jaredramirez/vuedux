// import {connect} from 'vuedux';
import {connect} from './../../../../dist/vuedux';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',

    padding: '5em',
  },
  title: {
    fontSize: '24px',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
};

const Post = {
  name: 'PostContainer',
  props: ['id', 'post'],
  render(h) {
    const {title, body, created} = this.post;
    return (
      <div style={styles.container}>
        <span style={styles.title}>
          {title}
        </span>
        <span>
          {body}
        </span>
        <div style={styles.footer}>
          <span>
            {created}
          </span>
        </div>
      </div>
    );
  },
};

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.id],
});

export default connect(null, mapStateToProps)(Post);
