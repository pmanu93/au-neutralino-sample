export class Settings {
    json: string;

    attached() {
        Neutralino.settings.getSettings(
            (settingsData) => {
                if (settingsData) {
                    this.json = JSON.stringify(settingsData, null, 1);
                }
            },
            () => {
                console.log('An error occured while trying to retrieve the settings.');
            }
        );
    }
}