# Install script for directory: G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen

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
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/eigen3/Eigen" TYPE FILE FILES
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Cholesky"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/CholmodSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Core"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Dense"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Eigen"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Eigenvalues"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Geometry"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Householder"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/IterativeLinearSolvers"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Jacobi"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/LU"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/MetisSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/OrderingMethods"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/PaStiXSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/PardisoSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/QR"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/QtAlignedMalloc"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SPQRSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SVD"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/Sparse"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SparseCholesky"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SparseCore"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SparseLU"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SparseQR"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/StdDeque"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/StdList"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/StdVector"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/SuperLUSupport"
    "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/UmfPackSupport"
    )
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xDevelx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/eigen3/Eigen" TYPE DIRECTORY FILES "G:/Computer Science/Bundled/frz-neon/lib/eigen-3.3.7/Eigen/src" FILES_MATCHING REGEX "/[^/]*\\.h$")
endif()

