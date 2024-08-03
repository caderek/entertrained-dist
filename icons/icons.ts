export type IconsId =
  | "zen"
  | "watch"
  | "warning"
  | "twitter"
  | "toggle-on"
  | "toggle-off"
  | "symbols"
  | "stats"
  | "star"
  | "star-off"
  | "star-half"
  | "speed"
  | "skip"
  | "shift"
  | "shift-off"
  | "settings"
  | "search"
  | "save"
  | "reset"
  | "repeat"
  | "reload"
  | "reading-on"
  | "reading-off"
  | "profile"
  | "prev"
  | "pb"
  | "pause"
  | "option"
  | "ok"
  | "next"
  | "new-line"
  | "more"
  | "meta-windows"
  | "meta-macos"
  | "meta-linux"
  | "menu"
  | "logo"
  | "loading"
  | "link-external"
  | "light-mode"
  | "less"
  | "keyboard"
  | "keyboard-off"
  | "info"
  | "home"
  | "heart"
  | "heart-off"
  | "google"
  | "github"
  | "fullscreen"
  | "fullscreen-off"
  | "flame"
  | "flame-off"
  | "flame-half"
  | "facebook"
  | "extra"
  | "enter"
  | "enter-1"
  | "download"
  | "dark-mode"
  | "close"
  | "books"
  | "bookmark-on"
  | "bookmark-off"
  | "backspace"
  | "backspace-word"
  | "back"
  | "arrow-up"
  | "arrow-right"
  | "arrow-left"
  | "arrow-down"
  | "annotations"
  | "accuracy"

export type IconsKey =
  | "Zen"
  | "Watch"
  | "Warning"
  | "Twitter"
  | "ToggleOn"
  | "ToggleOff"
  | "Symbols"
  | "Stats"
  | "Star"
  | "StarOff"
  | "StarHalf"
  | "Speed"
  | "Skip"
  | "Shift"
  | "ShiftOff"
  | "Settings"
  | "Search"
  | "Save"
  | "Reset"
  | "Repeat"
  | "Reload"
  | "ReadingOn"
  | "ReadingOff"
  | "Profile"
  | "Prev"
  | "Pb"
  | "Pause"
  | "Option"
  | "Ok"
  | "Next"
  | "NewLine"
  | "More"
  | "MetaWindows"
  | "MetaMacos"
  | "MetaLinux"
  | "Menu"
  | "Logo"
  | "Loading"
  | "LinkExternal"
  | "LightMode"
  | "Less"
  | "Keyboard"
  | "KeyboardOff"
  | "Info"
  | "Home"
  | "Heart"
  | "HeartOff"
  | "Google"
  | "Github"
  | "Fullscreen"
  | "FullscreenOff"
  | "Flame"
  | "FlameOff"
  | "FlameHalf"
  | "Facebook"
  | "Extra"
  | "Enter"
  | "Enter1"
  | "Download"
  | "DarkMode"
  | "Close"
  | "Books"
  | "BookmarkOn"
  | "BookmarkOff"
  | "Backspace"
  | "BackspaceWord"
  | "Back"
  | "ArrowUp"
  | "ArrowRight"
  | "ArrowLeft"
  | "ArrowDown"
  | "Annotations"
  | "Accuracy"

export enum Icons {
  Zen = "zen",
  Watch = "watch",
  Warning = "warning",
  Twitter = "twitter",
  ToggleOn = "toggle-on",
  ToggleOff = "toggle-off",
  Symbols = "symbols",
  Stats = "stats",
  Star = "star",
  StarOff = "star-off",
  StarHalf = "star-half",
  Speed = "speed",
  Skip = "skip",
  Shift = "shift",
  ShiftOff = "shift-off",
  Settings = "settings",
  Search = "search",
  Save = "save",
  Reset = "reset",
  Repeat = "repeat",
  Reload = "reload",
  ReadingOn = "reading-on",
  ReadingOff = "reading-off",
  Profile = "profile",
  Prev = "prev",
  Pb = "pb",
  Pause = "pause",
  Option = "option",
  Ok = "ok",
  Next = "next",
  NewLine = "new-line",
  More = "more",
  MetaWindows = "meta-windows",
  MetaMacos = "meta-macos",
  MetaLinux = "meta-linux",
  Menu = "menu",
  Logo = "logo",
  Loading = "loading",
  LinkExternal = "link-external",
  LightMode = "light-mode",
  Less = "less",
  Keyboard = "keyboard",
  KeyboardOff = "keyboard-off",
  Info = "info",
  Home = "home",
  Heart = "heart",
  HeartOff = "heart-off",
  Google = "google",
  Github = "github",
  Fullscreen = "fullscreen",
  FullscreenOff = "fullscreen-off",
  Flame = "flame",
  FlameOff = "flame-off",
  FlameHalf = "flame-half",
  Facebook = "facebook",
  Extra = "extra",
  Enter = "enter",
  Enter1 = "enter-1",
  Download = "download",
  DarkMode = "dark-mode",
  Close = "close",
  Books = "books",
  BookmarkOn = "bookmark-on",
  BookmarkOff = "bookmark-off",
  Backspace = "backspace",
  BackspaceWord = "backspace-word",
  Back = "back",
  ArrowUp = "arrow-up",
  ArrowRight = "arrow-right",
  ArrowLeft = "arrow-left",
  ArrowDown = "arrow-down",
  Annotations = "annotations",
  Accuracy = "accuracy",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Zen]: "61697",
  [Icons.Watch]: "61698",
  [Icons.Warning]: "61699",
  [Icons.Twitter]: "61752",
  [Icons.ToggleOn]: "61700",
  [Icons.ToggleOff]: "61701",
  [Icons.Symbols]: "61702",
  [Icons.Stats]: "61703",
  [Icons.Star]: "9733",
  [Icons.StarOff]: "9734",
  [Icons.StarHalf]: "11242",
  [Icons.Speed]: "61704",
  [Icons.Skip]: "61705",
  [Icons.Shift]: "61706",
  [Icons.ShiftOff]: "61707",
  [Icons.Settings]: "61708",
  [Icons.Search]: "61709",
  [Icons.Save]: "61710",
  [Icons.Reset]: "61711",
  [Icons.Repeat]: "61712",
  [Icons.Reload]: "61713",
  [Icons.ReadingOn]: "61714",
  [Icons.ReadingOff]: "61715",
  [Icons.Profile]: "61716",
  [Icons.Prev]: "11164",
  [Icons.Pb]: "61717",
  [Icons.Pause]: "61718",
  [Icons.Option]: "61719",
  [Icons.Ok]: "10003",
  [Icons.Next]: "11166",
  [Icons.NewLine]: "9166",
  [Icons.More]: "11167",
  [Icons.MetaWindows]: "61720",
  [Icons.MetaMacos]: "61721",
  [Icons.MetaLinux]: "61722",
  [Icons.Menu]: "61723",
  [Icons.Logo]: "61724",
  [Icons.Loading]: "9676",
  [Icons.LinkExternal]: "10150",
  [Icons.LightMode]: "61725",
  [Icons.Less]: "11165",
  [Icons.Keyboard]: "61726",
  [Icons.KeyboardOff]: "61727",
  [Icons.Info]: "61728",
  [Icons.Home]: "61729",
  [Icons.Heart]: "61730",
  [Icons.HeartOff]: "61731",
  [Icons.Google]: "61753",
  [Icons.Github]: "61754",
  [Icons.Fullscreen]: "61732",
  [Icons.FullscreenOff]: "61733",
  [Icons.Flame]: "9670",
  [Icons.FlameOff]: "9671",
  [Icons.FlameHalf]: "11030",
  [Icons.Facebook]: "61755",
  [Icons.Extra]: "61734",
  [Icons.Enter]: "61735",
  [Icons.Enter1]: "61736",
  [Icons.Download]: "61737",
  [Icons.DarkMode]: "61738",
  [Icons.Close]: "61739",
  [Icons.Books]: "61740",
  [Icons.BookmarkOn]: "61741",
  [Icons.BookmarkOff]: "61742",
  [Icons.Backspace]: "61743",
  [Icons.BackspaceWord]: "61744",
  [Icons.Back]: "61745",
  [Icons.ArrowUp]: "61746",
  [Icons.ArrowRight]: "61747",
  [Icons.ArrowLeft]: "61748",
  [Icons.ArrowDown]: "61749",
  [Icons.Annotations]: "61750",
  [Icons.Accuracy]: "61751",
}
