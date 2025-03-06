import { makeAutoObservable } from 'mobx';

export class UserStore {
  user: User = {
    name: '',
    email: '',
  }
  token: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  setUser(data: User) {
    this.user = data;
  }

  setToken(token: string) {
    this.token = token;
  }

  clear() {
    this.user = {
      name: '',
      email: '',
    };
    this.token = '';
  }
}

const userStore = new UserStore();

export default userStore;