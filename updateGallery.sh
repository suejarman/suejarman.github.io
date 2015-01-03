#!/bin/sh

function updateMarkdown {

    markdownFile=./_galleries/$1.md
    if [ -f $markdownFile ]; then
        echo
    else
        echo "Error: $markdownFile does not exist"
        exit
    fi

    sed '/images:/,$d' $markdownFile >$markdownFile.new
    
    echo images: >>$markdownFile.new
    
    ls -d -1 imgs/$1/* >images.txt
    awk '/por/ {print "  - url: /" $0}
         /thm/ {print "    thm: /" $0}' images.txt >>$markdownFile.new
    
    echo --- >>$markdownFile.new
    
    mv $markdownFile.new $markdownFile
    
    rm images.txt
}

if [ ${#@} == 0 ]; then
    echo "Usage: $0 <gallery-name>"
    echo "e.g. ./updateGallery.sh art-direction"
    exit
fi

updateMarkdown $1
