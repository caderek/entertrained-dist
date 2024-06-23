export type IconsId =
  | "accuracy"
  | "annotations"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "back"
  | "backspace-word"
  | "backspace"
  | "bookmark-off"
  | "bookmark-on"
  | "books"
  | "close"
  | "dark-mode"
  | "download"
  | "enter-1"
  | "enter"
  | "extra"
  | "favorite-off"
  | "favorite"
  | "fullscreen-off"
  | "fullscreen"
  | "heart-off"
  | "heart"
  | "home"
  | "info"
  | "less"
  | "light-mode"
  | "loading"
  | "logo"
  | "menu"
  | "meta-linux"
  | "meta-macos"
  | "meta-windows"
  | "more"
  | "new-line"
  | "next"
  | "option"
  | "pause"
  | "pb"
  | "prev"
  | "profile"
  | "reading-off"
  | "reading-on"
  | "reload"
  | "repeat"
  | "reset"
  | "save"
  | "settings"
  | "shift-off"
  | "shift"
  | "skip"
  | "speed"
  | "stats"
  | "symbols"
  | "toggle-off"
  | "toggle-on"
  | "warning"
  | "watch"
  | "zen";

export type IconsKey =
  | "Accuracy"
  | "Annotations"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "Back"
  | "BackspaceWord"
  | "Backspace"
  | "BookmarkOff"
  | "BookmarkOn"
  | "Books"
  | "Close"
  | "DarkMode"
  | "Download"
  | "Enter_1"
  | "Enter"
  | "Extra"
  | "FavoriteOff"
  | "Favorite"
  | "FullscreenOff"
  | "Fullscreen"
  | "HeartOff"
  | "Heart"
  | "Home"
  | "Info"
  | "Less"
  | "LightMode"
  | "Loading"
  | "Logo"
  | "Menu"
  | "MetaLinux"
  | "MetaMacos"
  | "MetaWindows"
  | "More"
  | "NewLine"
  | "Next"
  | "Option"
  | "Pause"
  | "Pb"
  | "Prev"
  | "Profile"
  | "ReadingOff"
  | "ReadingOn"
  | "Reload"
  | "Repeat"
  | "Reset"
  | "Save"
  | "Settings"
  | "ShiftOff"
  | "Shift"
  | "Skip"
  | "Speed"
  | "Stats"
  | "Symbols"
  | "ToggleOff"
  | "ToggleOn"
  | "Warning"
  | "Watch"
  | "Zen";

export enum Icons {
  Accuracy = "accuracy",
  Annotations = "annotations",
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUp = "arrow-up",
  Back = "back",
  BackspaceWord = "backspace-word",
  Backspace = "backspace",
  BookmarkOff = "bookmark-off",
  BookmarkOn = "bookmark-on",
  Books = "books",
  Close = "close",
  DarkMode = "dark-mode",
  Download = "download",
  Enter_1 = "enter-1",
  Enter = "enter",
  Extra = "extra",
  FavoriteOff = "favorite-off",
  Favorite = "favorite",
  FullscreenOff = "fullscreen-off",
  Fullscreen = "fullscreen",
  HeartOff = "heart-off",
  Heart = "heart",
  Home = "home",
  Info = "info",
  Less = "less",
  LightMode = "light-mode",
  Loading = "loading",
  Logo = "logo",
  Menu = "menu",
  MetaLinux = "meta-linux",
  MetaMacos = "meta-macos",
  MetaWindows = "meta-windows",
  More = "more",
  NewLine = "new-line",
  Next = "next",
  Option = "option",
  Pause = "pause",
  Pb = "pb",
  Prev = "prev",
  Profile = "profile",
  ReadingOff = "reading-off",
  ReadingOn = "reading-on",
  Reload = "reload",
  Repeat = "repeat",
  Reset = "reset",
  Save = "save",
  Settings = "settings",
  ShiftOff = "shift-off",
  Shift = "shift",
  Skip = "skip",
  Speed = "speed",
  Stats = "stats",
  Symbols = "symbols",
  ToggleOff = "toggle-off",
  ToggleOn = "toggle-on",
  Warning = "warning",
  Watch = "watch",
  Zen = "zen",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Accuracy]: "61697",
  [Icons.Annotations]: "61698",
  [Icons.ArrowDown]: "61699",
  [Icons.ArrowLeft]: "61700",
  [Icons.ArrowRight]: "61701",
  [Icons.ArrowUp]: "61702",
  [Icons.Back]: "61703",
  [Icons.BackspaceWord]: "61704",
  [Icons.Backspace]: "61705",
  [Icons.BookmarkOff]: "61706",
  [Icons.BookmarkOn]: "61707",
  [Icons.Books]: "61708",
  [Icons.Close]: "61709",
  [Icons.DarkMode]: "61710",
  [Icons.Download]: "61711",
  [Icons.Enter_1]: "61712",
  [Icons.Enter]: "61713",
  [Icons.Extra]: "61714",
  [Icons.FavoriteOff]: "61715",
  [Icons.Favorite]: "61716",
  [Icons.FullscreenOff]: "61717",
  [Icons.Fullscreen]: "61718",
  [Icons.HeartOff]: "61719",
  [Icons.Heart]: "61720",
  [Icons.Home]: "61721",
  [Icons.Info]: "61722",
  [Icons.Less]: "61723",
  [Icons.LightMode]: "61724",
  [Icons.Loading]: "61725",
  [Icons.Logo]: "61726",
  [Icons.Menu]: "61727",
  [Icons.MetaLinux]: "61728",
  [Icons.MetaMacos]: "61729",
  [Icons.MetaWindows]: "61730",
  [Icons.More]: "61731",
  [Icons.NewLine]: "9166",
  [Icons.Next]: "61732",
  [Icons.Option]: "61733",
  [Icons.Pause]: "61734",
  [Icons.Pb]: "61735",
  [Icons.Prev]: "61736",
  [Icons.Profile]: "61737",
  [Icons.ReadingOff]: "61738",
  [Icons.ReadingOn]: "61739",
  [Icons.Reload]: "61740",
  [Icons.Repeat]: "61741",
  [Icons.Reset]: "61742",
  [Icons.Save]: "61743",
  [Icons.Settings]: "61744",
  [Icons.ShiftOff]: "61745",
  [Icons.Shift]: "61746",
  [Icons.Skip]: "61747",
  [Icons.Speed]: "61748",
  [Icons.Stats]: "61749",
  [Icons.Symbols]: "61750",
  [Icons.ToggleOff]: "61751",
  [Icons.ToggleOn]: "61752",
  [Icons.Warning]: "61753",
  [Icons.Watch]: "61754",
  [Icons.Zen]: "61755",
};
