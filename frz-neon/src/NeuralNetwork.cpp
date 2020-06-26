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

void NeuralNetwork::propagateForward(RowVector &output) {
    
}