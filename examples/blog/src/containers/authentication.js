import {connect} from 'vuedux';

const authentication = (component) => {
  const wrapper = {
    name: 'AuthenticationWrapper',
    functional: true,
    props: ['isLoggedIn'],
    // props: {
      // isLoggedIn: {
        // type: Boolean,
        // required: true,
      // },
    // },
    render: (h, {props}) => {
      if (props.isLoggedIn) {
        return component;
      }
      return (
        <div>YU NEED 2 LOG IN</div>
      );
    },
  };

  const mapSateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
  });

  return connect(null, mapSateToProps)(wrapper);
};

export default authentication;
