#!/bin/bash

# Safely execute this bash script
# e exit on first failure
# x all executed commands are printed to the terminal
# u unset variables are errors
# a export all variables to the environment
# E any trap on ERR is inherited by shell functions
# -o pipefail | produces a failure code if any stage fails
set -Eeuoxa pipefail

LOCAL_DIRECTORY="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Activate the virtual environment
# source /app/venv/bin/activate

LLAMA_ENVIRONMENT="LOCAL" PYTHONPATH=$LOCAL_DIRECTORY python rag/build_rag.py

# Deactivate the virtual environment
# deactivate

