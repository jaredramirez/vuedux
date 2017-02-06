import {connect} from 'vuedux';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const Hello = {
  name: 'Hello',
  props: ['postsIds'],
  render(h) {
    console.log(this.postsIds);
    return (
      <div style={styles.container}>
        <span>Hello World</span>
        {
          this.postsIds.map(curId =>
            <span>{curId}</span>,
          )
        }
      </div>
    );
  },
};

const mapStateToProps = state => ({
  postsIds: state.postsIds,
});

export default connect(null, mapStateToProps)(Hello);
