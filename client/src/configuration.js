import vue from 'vue';

const configs = {};

if (vue.config.devtools) {
  // dev
  configs.apiHost = 'http://localhost:4000';
} else {
  // prod
  configs.apiHost = '';
}

export default configs;
