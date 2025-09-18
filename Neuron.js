class Neuron {
    constructor(weights = [], bias = 0) {
        this.weights = weights;
        this.bias = bias;
        this.output = 0;
        this.inputs = [];
    }

    sum(inputs) {
        let total = this.bias;
        for (let i = 0; i < inputs.length; i++) {
            total += inputs[i] * this.weights[i];
        }
        return total;
    }

    // сигмоида
    activation(x) {
        return 1 / (1 + Math.exp(-x));
    }

    activationDerivative(y) {
        return y * (1 - y); // y = f(z)
    }

    forward(inputs) {
        this.inputs = inputs;
        const z = this.sum(inputs);
        this.output = this.activation(z);
        return this.output;
    }
}

export { Neuron };
