export class Os {


    command: string;
    output: string;

    envKey: string;

    dialogTitle='Dialog title...';

    ntitle: string;
    nbody: string;

    onKeyDown(_event: KeyboardEvent) {

        console.info("data", _event);

        if (_event.code == 'Enter' && _event.ctrlKey) {
            this.output = '';

            Neutralino.os.runCommand(this.command, (_data) => {
                console.info("data", _data);
                if (_data && _data.stdout) {
                    this.output = _data.stdout;
                    this.command = null;
                }
            }, () => {
                console.log("error")
            });
        }
    }

    showEnvKeyValue() {
        Neutralino.os.getEnvar(this.envKey, (_data) => {
            alert(_data.value);
            this.envKey=null;
        }, () => { })
    }

    showDialogOpen(){
        Neutralino.os.dialogOpen(this.dialogTitle, (_data) => {
            alert(_data.file);
        }, () => { })
    }

    showDialogSave(){
        Neutralino.os.dialogSave(this.dialogTitle, (_data) => {
            alert(_data.file);
        }, () => { })
    }

    showNotification() {
        //@ts-ignore
        Neutralino.os.showNotification({ summary: this.ntitle, body: this.nbody }, (_data) => {
            console.log(_data);
            this.ntitle = null
            this.nbody = null;
        },
            () => {
                console.error('error');
            }
        );
    }

}