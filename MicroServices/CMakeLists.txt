cmake_minimum_required(VERSION 3.16)
project(MicroServices)

set(CMAKE_CXX_STANDARD 17)


set(Boost_INCLUDE_DIR ./lib/boost_1_72_0)
set(Boost_LIBRARY_DIR ./lib/boost_1_72_0/stage/lib)
find_package(Boost REQUIRED)
include_directories(${Boost_INCLUDE_DIR})
link_directories(${Boost_LIBRARY_DIR})

include_directories("lib/websocketpp")

add_executable(MicroServices src/Main.cpp src/Service.cpp include/Service.hpp src/Services/SoftwareService.cpp src/Services/WebService.cpp src/Services/Interconnect.cpp include/MicroService.tpp src/MicroService.cpp include/Interconnect.hpp src/Utils/Utils.cpp include/Utils/Utils.hpp src/SessionManager.cpp include/SessionManager.hpp src/Interfaces/Rest.cpp include/Interfaces/Rest.hpp include/Interfaces/Socket.hpp src/Interfaces/Socket.cpp)

target_link_libraries( MicroServices ${Boost_LIBRARIES} )
