export default class IndentityService {
  constructor() {
    this.user = {};
  }

  login = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      if (username === password && username === String(200)) {
        this.user = { username }; // TODO: implement this

        resolve(this.user);
      } else {
        reject(new Error(`Invalid credentials`));
      }
    });
  };

  forgotPassword = ({ username }) => {
    return new Promise((resolve, reject) => {
      if (username === String(200)) {
        // TODO: implement this
        resolve();
      } else {
        reject(new Error(`Invalid username`));
      }
    });
  };

  register = ({ username, password, confirmPassword }) => {
    return new Promise((resolve, reject) => {
      if (username === String(200) && password === confirmPassword && password === username) {
        // TODO: implement this
        resolve();
      } else {
        reject(new Error(`Invalid username/password`));
      }
    });
  };

  get isLoggedIn() {
    return this.user.username !== undefined;
  }
}
