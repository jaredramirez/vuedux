import Nav from '../components/nav';
import FeedIcon from '../components/icons/feed';
import ProfileIcon from '../components/icons/profile';

export default {
  name: 'NavContainer',
  render(h) {
    const links = [
      {text: 'feed', icon: <FeedIcon />},
      {text: 'profile', icon: <ProfileIcon />},
    ];

    return (
      <Nav title='Blog' links={links} />
    );
  },
};
