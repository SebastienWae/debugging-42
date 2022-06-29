#!/usr/bin/env bash

alacritty --class rec --option window.dimensions.lines=40 window.dimensions.columns=150 &
sleep 1
WINDOW_ID=$(xdotool search --limit 1 --classname rec)
TYPING_DELAY="--delay 200"

xdt_k () {
	xdotool key --window "$WINDOW_ID" "$1"
}

xdt_t () {
	xdotool type --window "$WINDOW_ID" --delay "$1" "$2"
}

xdt_c () {
	xdt_t "$1" "$2"
	sleep 1
	xdt_k "Return"
	sleep 1
}

# go to path
xdt_c 50 "cd $1"

# start recording
xdt_c 50 "asciinema rec -c bash"

# commands

#stop recording
xdt_c 100 "quit"
xdt_c 50 "exit"

echo "Press [ENTER] to terminate"
while [ true ]; do
	read -s -N 1 -t 1 key
	if [[ $key == $'\x0a' ]]; then
		WINDOW_PID=$(xdotool getwindowpid $WINDOW_ID)
		kill "$WINDOW_PID"
		exit 0
	fi
done
