interface IDev {
    monitorPerformance: boolean;
    logReduxActions: boolean;
    logUselessRenders: boolean;
}

export interface ISettings {
    dev: IDev;
}

const configs: ISettings = {
    dev: {
        monitorPerformance: false,
        logReduxActions: false,
        logUselessRenders: true
    }
};

export default configs;
