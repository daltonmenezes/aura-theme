declare interface TermColorsMethods {
  import(data: string): string
  export(data: string): string
}

declare interface TermColors {
  [key: string]: TermColorsMethods
  export: TermColorsMethods
  alacritty: TermColorsMethods
  chromeshell: TermColorsMethods
  defaults: TermColorsMethods
  gnome: TermColorsMethods
  guake: TermColorsMethods
  iterm: TermColorsMethods
  json: TermColorsMethods
  konsole: TermColorsMethods
  kitty: TermColorsMethods
  linux: TermColorsMethods
  mintty: TermColorsMethods
  putty: TermColorsMethods
  st: TermColorsMethods
  terminalapp: TermColorsMethods
  terminator: TermColorsMethods
  termite: TermColorsMethods
  text: TermColorsMethods
  textmate: TermColorsMethods
  tilix: TermColorsMethods
  urxvt: TermColorsMethods
  windowsTerminal: TermColorsMethods
  wal: TermColorsMethods
  xfce: TermColorsMethods
  xresources: TermColorsMethods
  xshell: TermColorsMethods
}
