//
// Created by James on 26/06/2020.
//
#include "../include/NeuralNetwork.h"


NeuralNetwork::NeuralNetwork(std::vector<int> topology, Scalar learningRate) {
    this->topology = topology;
    this->learningRate = learningRate;
    for (int i = 0; i < topology.size(); i++) {
        // make neuron layers
        if (i == topology.size() - 1) {
            neuronLayers.push_back(new RowVector(topology[i]));
        } else {
            neuronLayers.push_back(new RowVector(topology[i] + 1));
        }

        cacheLayers.push_back(new RowVector(neuronLayers.size()));
        deltas.push_back(new RowVector(neuronLayers.size()));

        if (i != topology.size() - 1) {
            neuronLayers.back()->coeffRef(topology[i]) = 1;
            cacheLayers.back()->coeffRef(topology[i]) = 1;
        }

        if (i > 0) {
            if (i != topology.size() - 1) {
                weights.push_back(new Matrix(topology[i-1] + 1, topology[i] + 1));
                weights.back()->setRandom();
                weights.back()->col(topology[i]).setZero();
                weights.back()->coeffRef(topology[i - 1], topology[i]) = 1.0;
            } else {
                weights.push_back(new Matrix(topology[i-1] + 1, topology[i]));
                weights.back()->setRandom();
            }
        }
    }
}

void NeuralNetwork::propagateForward(RowVector& input)
{
    neuronLayers.front()->block(0, 0, 1, neuronLayers.front()->size() - 1) = input;

    for (int i = 1; i < topology.size(); i++) {
        // already explained above
        (*neuronLayers[i]) = (*neuronLayers[i - 1]) * (*weights[i - 1]);
    }
    for (int i = 1; i < topology.size() - 1; i++) {
        int(*ExampleFunctionPointer)(float, bool);
        neuronLayers[i]->block(0, 0, 1, topology[i]).unaryExpr(std::ptr_fun(activationFunction));
    }
}

void NeuralNetwork::calcErrors(RowVector &output) {
    (*deltas.back()) = output - (*neuronLayers.back());

    for (int i = topology.size() - 2; i > 0; i--) {
        (*deltas[i]) = (*deltas[i+1]) * (weights[i]->transpose());
    }
}

void NeuralNetwork::updateWeights()
{
    for (int i = 0; i < topology.size() - 1; i++) {
        if (i != topology.size() - 2) {
            for (int c = 0; c < weights[i]->cols() - 1; c++) {
                for (int r = 0; r < weights[i]->rows(); r++) {
                    weights[i]->coeffRef(r, c) += learningRate * deltas[i + 1]->coeffRef(c) * activationFunctionDerivative(cacheLayers[i + 1]->coeffRef(c)) * neuronLayers[i]->coeffRef(r);
                }
            }
        }
        else {
            for (int c = 0; c < weights[i]->cols(); c++) {
                for (int r = 0; r < weights[i]->rows(); r++) {
                    weights[i]->coeffRef(r, c) += learningRate * deltas[i + 1]->coeffRef(c) * activationFunctionDerivative(cacheLayers[i + 1]->coeffRef(c)) * neuronLayers[i]->coeffRef(r);
                }
            }
        }
    }
}

void NeuralNetwork::propagateBackward(RowVector &output) {
    calcErrors(output);
    updateWeights();
}

Scalar activationFunction(Scalar x)
{
    return tanhf(x);
}

Scalar NeuralNetwork::activationFunctionDerivative(Scalar x) {
    return 1 - tanhf(x) * tanhf(x);
}

void NeuralNetwork::train(std::vector<RowVector*> input_data, std::vector<RowVector*> output_data)
{
    for (int i = 0; i < input_data.size(); i++) {
        std::cout << "Input to neural network is : " << *input_data[i] << std::endl;
        propagateForward(*input_data[i]);
        std::cout << "Expected output is : " << *output_data[i] << std::endl;
        std::cout << "Output produced is : " << *neuronLayers.back() << std::endl;
        propagateBackward(*output_data[i]);
        std::cout << "MSE : " << std::sqrt((*deltas.back()).dot((*deltas.back())) / deltas.back()->size()) << std::endl;
    }
}

