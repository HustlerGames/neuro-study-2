import { Layer } from './Layer.js';

class Network {
    constructor(inputSize, outputSize, learningRate = 0.1) {
        this.layers = [ new Layer(outputSize, inputSize) ];
        this.learningRate = learningRate;
    }

    forward(inputs) {
        return this.layers[0].forward(inputs);
    }

    train(inputs, targets) {
        const outputs = this.forward(inputs);

        const layer = this.layers[0];
        for (let n = 0; n < layer.neurons.length; n++) {
            const neuron = layer.neurons[n];
            const output = neuron.output;
            const error = targets[n] - output;

            const delta = error * neuron.activationDerivative(output);

            for (let w = 0; w < neuron.weights.length; w++) {
                const input = neuron.inputs[w];
                neuron.weights[w] += this.learningRate * delta * input;
            }

            neuron.bias += this.learningRate * delta;
        }
    }
}

export { Network };
