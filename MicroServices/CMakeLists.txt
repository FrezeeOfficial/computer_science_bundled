cmake_minimum_required(VERSION 3.16)
project(MicroServices)

set(CMAKE_CXX_STANDARD 17)

add_executable(MicroServices src/Main.cpp src/Service.cpp include/Service.hpp src/Services/SoftwareService.cpp src/Services/WebService.cpp src/Services/Interconnect.cpp include/MicroService.tpp src/MicroService.cpp include/Interconnect.hpp src/InterfaceManager.cpp include/InterfaceManager.hpp src/Utils/Utils.cpp include/Utils/Utils.hpp src/Interfaces/Socket.cpp src/Interfaces/Rest.cpp)