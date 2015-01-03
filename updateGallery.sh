#!/bin/sh

sed '/images:/,$d' ./_galleries/$1.md >./_galleries/$1.new

echo images: >>./_galleries/$1.new

ls -d -1 imgs/$1/* >images.txt
awk '/por/ {print "  - url: /" $0}
     /thm/ {print "    thm: /" $0}' images.txt >>./_galleries/$1.new

echo --- >>./_galleries/$1.new

mv ./_galleries/$1.new ./_galleries/$1.md

rm images.txt
