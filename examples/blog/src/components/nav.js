import Vue from 'vue';
import NewsIcon from './icons/news';

const RouterLink = Vue.component('router-link');

const styles = {
  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    backgroundColor: '#4E5869',
    color: 'white',

    position: 'fixed',
    width: '100%',
    height: '6em',
  },
  pill: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#5B6980',
    borderRadius: '62px',
    paddingRight: '2em',
    paddingLeft: '2em',
    paddingTop: '.5em',
    paddingBottom: '.5em',
  },
  title: {
    marginLeft: '.75em',
    fontSize: '30px',
  },
  pageName: {
    width: '10em',
    textAlign: 'center',
    fontSize: '28px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '12em',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',

    color: 'white',
    textDecoration: 'none',
    height: '3.5em',
  },
};

export default {
  name: 'NavComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  render(h) {
    return (
      <div style={styles.bar}>
        <div style={styles.pill}>
          <NewsIcon />
          <span style={styles.title}>{this.title}</span>
        </div>
        <span style={styles.pageName}>
          {this.capitalizeFirstLetter(this.$route.name)}
        </span>
        <div style={styles.links}>
          {
            this.links.map(link =>
                <RouterLink style={styles.link} to={link.text}>
                  {link.icon}
                  {this.capitalizeFirstLetter(link.text)}
                </RouterLink>,
            )
          }
        </div>
      </div>
    );
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
