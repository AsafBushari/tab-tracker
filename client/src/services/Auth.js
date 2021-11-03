import Api from '@/services/Api';

export default {
  register(credentials){
    return Api().post('register', credentials);
  }
}

// Auth.register({
//   email: 'test@test.com',
//   password: 123456
// });
