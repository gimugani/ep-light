import Api from '@/services/Api';

export default {
  home() {
    return Api().get('/');
  },
  // signup(credentials) {
  //   return Api().post('signup', credentials);
  // },
  // login(credentials) {
  //   return Api().post('login', credentials);
  // },
};
