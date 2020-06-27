//
// Created by James on 27/06/2020.
//

#include "../include/NeuralParser.h"

void read_file(std::string filename, std::vector<RowVector*>& data)
{
    data.clear();
    std::ifstream file(filename);
    std::string line, word;
    // determine number of columns in file
    getline(file, line, '\n');
    std::stringstream ss(line);
    std::vector<Scalar> parsed_vec;
    while (std::getline(ss, word)) {
        parsed_vec.push_back(Scalar(std::stof(&word[0])));
    }
    int cols = parsed_vec.size();
    data.push_back(new RowVector(cols));
    for (int i = 0; i < cols; i++) {
        data.back()->coeffRef(1, i) = parsed_vec[i];
    }

    // read the file
    if (file.is_open()) {
        while (getline(file, line, '\n')) {
            std::stringstream ss(line);
            data.push_back(new RowVector(1, cols));
            int i = 0;
            while (std::getline(ss, word)) {
                data.back()->coeffRef(i) = Scalar(std::stof(&word[0]));
                i++;
            }
        }
    }
}
