import { Network } from './Network.js';
import { makeDataset } from './Dataset.js';

class Application {
    net = null;

    constructor() {
        this.net = new Network(25, 4, 0.5); // вход=25, выход=4
    }

    run() {
        const data = makeDataset();

        // обучение
        for (let epoch = 0; epoch < 5000; epoch++) {
            for (const sample of data) {
                this.net.train(sample.input, sample.output);
            }
        }

        // проверка
        for (let i = 0; i < data.length; i++) {
            const result = this.net.forward(data[i].input);
            const predicted = result.indexOf(Math.max(...result));
            console.log(`Letter ${String.fromCharCode(65+i)} -> predicted: ${String.fromCharCode(65+predicted)}`);
        }
    }
}

export { Application };
