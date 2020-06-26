cmake_minimum_required(VERSION 3.16)
project(frz_neon)

set(CMAKE_CXX_STANDARD 14)

find_package (Eigen3 3.3 REQUIRED NO_MODULE)

add_executable(frz_neon main.cpp src/NeuralNetwork.cpp include/NeuralNetwork.h)
target_link_libraries (frz_neon Eigen3::Eigen)