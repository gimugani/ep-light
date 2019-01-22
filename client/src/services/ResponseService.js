import Api from '@/services/Api';

export default {
  index() {
    return Api().get('/responses');
  },
  post(response) {
    return Api().post('/responses', response);
  },
  show(responseId) {
    return Api().get(`/responses/${responseId}`);
  },
  delete(responseId) {
    return Api().delete(`/responses/${responseId}`);
  },
};
