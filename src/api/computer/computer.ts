export class Computer {

    ram;

    attached() {
        Neutralino.computer.getRamUsage((_data) => {
            this.ram = _data.ram;
        }, () => {

        });
    }
}