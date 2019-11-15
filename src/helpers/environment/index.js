class Environment {
	constructor() {
		this.defaultSettings = {
			appName: process.env.REACT_APP_APPLICATION_NAME,
			basePath: process.env.REACT_APP_BASE_PATH
		};
	}

	settings = () => this.defaultSettings;
}

const environmnet = new Environment();

export default environmnet;
