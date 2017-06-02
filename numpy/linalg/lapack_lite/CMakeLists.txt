
cmake_minimum_required(VERSION 3.0.0)

project(lapacklite.js)

set(CMAKE_C_COMPILER "emcc")
#set(CMAKE_C_COMPILER "/usr/bin/gcc")
set(CMAKE_VERBOSE_MAKEFILE ON)

set(SRC_LIST 
  f2c_blas.c
  f2c.c
  f2c_c_lapack.c
  f2c_config.c
  f2c_d_lapack.c
  f2c_lapack.c
  f2c_s_lapack.c
  f2c_z_lapack.c
  )


include_directories(
  ${CMAKE_CURRENT_SOURCE_DIR}
)

set(CMAKE_EXE_LINKER_FLAGS "-s EXPORTED_FUNCTIONS='[\"_sdot_\",\"_ddot_\"]'")

add_executable(${PROJECT_NAME} ${SRC_LIST} ${INC_LIST})
