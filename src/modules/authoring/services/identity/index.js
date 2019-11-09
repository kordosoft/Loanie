export default class IndentityService {
    constructor() {
        this.user = {};
    }

    login = ({ username, password }) => {
        return new Promise(
            (resolve, reject) => {
                if (username === password && username === String(200)) {
                    this.user = { username: username };

                    resolve(this.user);
                }
                else {
                    reject(`Invalid credentials`);
                }
            }
        );       
    }

    get isLoggedIn() {
        return this.user.username !== undefined;
    }
}
