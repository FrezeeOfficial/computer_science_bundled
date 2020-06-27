//
// Created by James on 27/06/2020.
//

#ifndef FRZ_NEON_NEURALPARSER_H
#define FRZ_NEON_NEURALPARSER_H

#endif //FRZ_NEON_NEURALPARSER_H
#include <string>
#include <iostream>
#include <fstream>
#include <sstream>
#include <Eigen/Eigen>
#include "./NeuralNetwork.h"

typedef std::string data_out;

class NeuralParser {
public:
    void read_file(std::string filename, std::vector<RowVector*>& data);
};
