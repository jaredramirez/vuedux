import Nav from '../components/nav';

export default {
  name: 'NavContainer',
  render(h) {
    return (
      <Nav title='Blog' links={['dashboard', 'profile']} />
    );
  },
};
