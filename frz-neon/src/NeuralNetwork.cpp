//
// Created by James on 26/06/2020.
//
#include "../include/NeuralNetwork.h"


NeuralNetwork::NeuralNetwork(std::vector<int> topology, Scalar learning_rate) {
    this->topology = topology;
    this->learning_rate = learning_rate;

    // create the neuron layers
    for (int i = 0; i < topology.size(); i++) {
        if (i == topology[i] -1) {
            // add new element to back of the vector: neuron_layers and makes a rovvector with topology size
            neuron_layers.push_back(new RowVector(topology[i]));
        } else {
            // same as previous but adds 1 to size of RowVector
            neuron_layers.push_back(new RowVector(topology[i] + 1));
        }

        // now add the deltas and cache vectors
        cache_layers.push_back(new RowVector(neuron_layers.size()));
        deltas.push_back(new RowVector(neuron_layers.size()));

        // edit newly added element and gets the value of the reference and set to 1;
        if (i != topology.size() - 1) {
            neuron_layers.back()->coeffRef(topology[i]) = 1.0;
            cache_layers.back()->coeffRef(topology[i]) = 1.0;
        }
    }
}