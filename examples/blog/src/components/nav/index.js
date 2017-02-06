import Vue from 'vue';

const RouterLink = Vue.component('router-link');

const styles = {
  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#00A6F7',
    color: 'white',
    padding: '15px',
    fontFamily: 'Andale Mono, AndaleMono, monospace',
  },
  title: {
    fontSize: '28px',
    marginLeft: '5em',
  },
  links: {
    marginRight: '5em',
  },
  link: {
    marginLeft: '10px',
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
        <span style={styles.title}>{this.title}</span>
        <div style={styles.links}>
          <div>
            {
              this.links.map(link =>
                  <RouterLink style={styles.link} to={link} exact>
                    {this.capitalizeFirstLetter(link)}
                  </RouterLink>,
              )
            }
          </div>
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
