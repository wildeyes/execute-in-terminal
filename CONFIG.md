Credit to [org-protocol][1] on how to do this.

# Linux

## KDE
 - Replace `konsole` with terminal of choice.
 - Create `~/.kde/share/kde4/services/execute-in-terminal.protocol`, fill it with:
```shell
# -*- conf -*-
[Protocol]
protocol=execute-in-terminal
exec=/usr/bin/konsole -e bash -c '%u; read -n 1 -p "Press any key to continue..."'
input=none
output=true
helper=true
listing=
reading=false
writing=false
makedir=false
deleting=false
Description=Execute commands in terminal from links
```

# Mac

# Windows

[1]: http://orgmode.org/worg/org-contrib/org-protocol.html