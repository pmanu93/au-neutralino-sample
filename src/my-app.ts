
export class MyApp {

    exit() {

        if (confirm("you sure?")) {
            Neutralino.app.exit(() => {

            }, () => { });
        }
    }


}
