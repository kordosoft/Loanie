export default class IndentityService {
	constructor() {
		this.user = { name: '', claims: [] };
		this.token = { value: '', expires: -1 };
	}

	login = ({ username, password }) => {
		const storeToken = (token) => {
			this.token = token;
		};

		return new Promise((resolve, reject) => {
			// TODO: implement this
			if (username === password && username === String(200)) {
				const token = { value: 'newTokenMockedValue', expires: 600 };

				resolve(token);
			} else {
				reject(new Error(`Invalid credentials`));
			}
		})
			.then((value) => {
				storeToken(value);

				return value;
			})
			.then(() => {
				return this.requestUser();
			});
	};

	requestUser = () => {
		const storeUser = (user) => {
			this.user = user;
		};

		return new Promise((resolve, reject) => {
			// TODO: implement this
			if (this.token.value !== '') {
				const user = {
					username: String(200),
					claims: ['use_app', 'Bobo', 'Has', 'Claims']
				};

				resolve(user);
			} else {
				reject(new Error(`Can't retrieve the user`));
			}
		}).then((value) => {
			storeUser(value);

			return value;
		});
	};

	hasPermission = (permission) => {
		// TODO: implement this
		return new Promise((resolve, reject) => {
			if (this.user.claims.indexOf(permission) !== -1) {
				resolve(true);
			} else {
				reject(new Error(`Unauthorized`));
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
		return this.user.name !== '' && this.token.value !== '';
	}
}
