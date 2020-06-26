# Install script for directory: G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "C:/Program Files (x86)/Eigen3")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Release")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xDevelx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/eigen3/unsupported/Eigen" TYPE FILE FILES
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/AdolcForward"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/AlignedVector3"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/ArpackSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/AutoDiff"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/BVH"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/EulerAngles"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/FFT"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/IterativeSolvers"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/KroneckerProduct"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/LevenbergMarquardt"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/MatrixFunctions"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/MoreVectorization"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/MPRealSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/NonLinearOptimization"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/NumericalDiff"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/OpenGLSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/Polynomials"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/Skyline"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/SparseExtra"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/SpecialFunctions"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/Splines"
    )
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xDevelx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/eigen3/unsupported/Eigen" TYPE DIRECTORY FILES "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/unsupported/Eigen/src" FILES_MATCHING REGEX "/[^/]*\\.h$")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("G:/Computer Science/Bundled/frz-neon/lib/eigen/unsupported/Eigen/CXX11/cmake_install.cmake")

endif()

