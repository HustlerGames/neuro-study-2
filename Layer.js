import { Neuron } from './Neuron.js';

class Layer {
    constructor(size, inputSize) {
        this.neurons = Array.from({ length: size }, () => {
            const weights = Array.from({ length: inputSize }, () => Math.random() - 0.5);
            const bias = Math.random() - 0.5;
            return new Neuron(weights, bias);
        });
    }

    forward(inputs) {
        return this.neurons.map(neuron => neuron.forward(inputs));
    }
}

export { Layer };
