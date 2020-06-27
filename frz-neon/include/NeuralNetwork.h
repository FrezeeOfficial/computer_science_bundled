//
// Created by James on 26/06/2020.
//

#ifndef FRZ_NEON_NEURALNETWORK_H
#define FRZ_NEON_NEURALNETWORK_H

#endif //FRZ_NEON_NEURALNETWORK_H

#include <vector>
#include <iostream>
#include <Eigen/Eigen>

typedef float Scalar;
typedef Eigen::MatrixXf Matrix;
typedef Eigen::RowVectorXf RowVector;
typedef Eigen::VectorXf ColVector;

class NeuralNetwork {
public:
    NeuralNetwork(std::vector<int> topology, Scalar learningRate = Scalar(0.005));

    void propagateForward(RowVector& input);
    void propagateBackward(RowVector& output);

    void calcErrors(RowVector& output);
    void updateWeights();
    void train(std::vector<RowVector*> input_data, std::vector<RowVector*> output_data);

    Scalar activationFunctionDerivative(Scalar x);
    Scalar activationFunction(Scalar x);

    std::vector<RowVector*> neuronLayers;
    std::vector<RowVector*> cacheLayers;
    std::vector<RowVector*> deltas;
    std::vector<Matrix*> weights;
    std::vector<int> topology;
    Scalar learningRate;
};