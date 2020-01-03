#!/bin/sh

pacman -Q > /tmp/list.txt && nl -nrz -w1 /tmp/list.txt > /tmp/package_list.txt
