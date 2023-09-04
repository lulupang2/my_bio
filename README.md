#!/bin/bash

#File: tree-md

tree=$(tree -tf --noreport -I '_~' --charset ascii $1 |
sed -e 's/| \+/ /g' -e 's/[|`]-\+/ _/g' -e 's:\(_ \)\(\(._/\)\([^/]\+\)\):\1[\4](\2):g')

printf "# Project tree\n\n${tree}"
