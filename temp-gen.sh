#!/bin/bash

############################################################
#                         Help                             #
############################################################
show_usage()
{
   echo "Script that generate a web development framework template."
   echo
   echo "Usage: [-f] [-p]"
   echo "options:"
   echo "f     Framework to install [<express|socketio|react|lixir|luci>]"
   echo "p     Directory where to place the template."
   echo

   exit 0;
}

############################################################
#                      Main program                        #
############################################################

start() {
    validate_os
    downlod_subversion
    if [[ $EUID -ne 0 ]]; then
        from_input
    else
        options=get_options
        from_options $options
    fi
}

get_options() {
    framework=""
    path=""
    while getopts ":p:f" option; do
        case $option in
            f)
                framework=$OPTARGS
                ;;
            p)
                path=$OPTARGS
                ;;
            *)
                show_usage
                ;;
        esac
    done

    echo $framework $path
}

from_options() {
    if [ -z "$1" ] || [ -z "$2" ]; then
        echo "ERROR: framework and/or path are invalid"
        exit 1
    fi
}

validate_os() {
    # Check if ran as root
    if [[ $EUID -ne 0 ]]; then
    echo "ERROR: script must be run as root!"
    exit 1
    fi

    # Check OS version
    case "$OSTYPE" in
    linux*)          echo "LINUX" ;;
    bsd*)            echo "BSD" ;;
    msys* | cygwin*) echo "WINDOWS" ;;
    *)               echo "ERROR: $OSTYPE not supported." && exit 1 ;;
    esac
}

downlod_subversion() {
    # Check if subversion is installed and install if not
    echo "Installing subversion..."
    packages='subversion'
    if [ -x "$(command -v apk)" ];       then sudo apk add --no-cache $packages
    elif [ -x "$(command -v apt-get)" ]; then sudo apt-get install $packages
    elif [ -x "$(command -v dnf)" ];     then sudo dnf install $packages
    elif [ -x "$(command -v zypper)" ];  then sudo zypper install $packages
    else echo "ERROR: Package manager not found. You must manually install: $packages" && exit 1;
    fi
    echo "Subversion installed!"
}

# If no flag is passed, Require user input on what template to pull and where to save it

# Pull template

exit 0

