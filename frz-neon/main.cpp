#include <iostream>
#include <string>
#include "./include/NeuralNetwork.h";

typedef std::vector<RowVector*> data;
int main()
{
    NeuralNetwork n({ 2, 3, 1 });
    data in_dat, out_dat;
    n.train(in_dat, out_dat);
    return 0;
}