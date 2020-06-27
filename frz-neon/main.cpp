#include <iostream>
#include <string>
// #include "./include/NeuralNetwork.h";
#include "./include/NeuralParser.h"

typedef std::vector<RowVector*> data;


int main()
{
    NeuralNetwork n({ 4, 5, 3 });
    data in_dat, out_dat;
    read_file("./files/training.data", in_dat);
    read_file("./files/training.data", out_dat);
    n.train(in_dat, out_dat);


    return 0;
}

