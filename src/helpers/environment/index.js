class Environment {
    constructor() {
        this.defaultSettings = {
            appName: process.env.REACT_APP_APPLICATION_NAME
        };
    }

    settings = () => this.defaultSettings;
};

const environment = new Environment();

export default environment;