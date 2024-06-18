// ==UserScript==
// @name         Discord Theme Manager
// @namespace    https://your.namespace.com
// @version      3.0
// @description  Adds a menu to switch between Discord themes
// @author       Mr. Govind Dubey
// @match        https://discord.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Theme data
    const themes = [
        {
            name: 'Dark Neon',
            author: 'Bates',

            css: `

@import url('https://B4T3S.github.io/DiscordDarkNeon/mainRewrite.css');
/* ^ This is the main Import ^ DO NOT TOUCH. Without this, the theme won't load!!! */

@import url('https://B4T3S.github.io/DiscordDarkNeon/css/hideUsers.css');
/* This import adds the collapsible user-list. Remove it/comment it out to disable that feature */

/* CUSTOMIZE COLORS IN HERE! */
:root {
  --rgb-highlight: 4, 217, 255; /* The main highlight color */
  --rgb-background: 0, 0, 0; /* The main background color */
  --rgb-text: 197, 200, 198; /* The main text color */
  --rgb-close-button: 212, 18, 39; /* The main "close this" or "deny" color */
  --rgb-online-color: 57, 255, 20; /* The color used in the "online" user status symbol */
  --rgb-afk-color: 255, 255, 51; /* The color used in the "idle" user status symbol */
  --rgb-dnd-color: 255, 0, 0; /* The color used in the "do not disturb" user status symbol */
  --rgb-streaming-color: 188, 19, 254; /* The color used in the "streaming X" user status symbol */

  --transition-time: .3s; /* How fast animations added by the theme happen. Default is 0.3 seconds */

  --background-image: unset; /* To add an image, replace unset with url(https://www.YOUR-URL-HERE.com) */
  --background-position: center; /* Positions the background image */
  --background-size: cover; /* Scales the background image */
  --background-blur: 5px; /* Blurs the image which helps with readability of text infront of it */
  --background-brightness: 100%; /* Changes the background images brightness */
}

            `
        },
        {
            name: 'Discord+',
            author: 'PlusInsta',

            css: `
                /* Discord+ theme CSS code */
                @import url(https://plusinsta.github.io/discord-plus/src/DiscordPlus-source.theme.css);
                :root {
                    /* Fonts */
/* You can use any installed font on your device. */
  --dplus-font-ui: 'Poppins';
  --dplus-font-body: 'Roboto';
  --dplus-font-header: 'Righteous';

/* Round corner sizes, measured in pixel radius.
Set avatar/server radius to 50% to make them circular.
   UI radius must be in pixels, otherwise things break. */
  --dplus-radius-ui: 10px;
  --dplus-radius-avatar: 20%;
  --dplus-radius-server: 20%;

/* This decides how much breathing room there should be between things like buttons and content. */
  --dplus-spacing-ui: 10px;

/* This sets how much space there should be between the app contents and the edges of the window. It also affects the distance between major UI elements, such as the server list to the channel list and channel list to the chat. */
   --dplus-spacing-app: 10px;

/* Size of user and server icons */
--dplus-icon-avatar-chat: 64px;
--dplus-icon-avatar-list: 32px;
--dplus-icon-avatar-profile: 80px;

--dplus-icon-server-sidebar: 48px;
--dplus-icon-server-list: 32px;

/* The Home icon on the top left */
--dplus-icon-home-dark: url(https://i.imgur.com/oUSC1Ra.png);
--dplus-icon-home-light: url(https://i.imgur.com/oUSC1Ra.png);

                }
            `
        },
        {
            name: 'Translucence',
            author: 'CapnKitten',

            css: `
                /* Translucence theme CSS code */
                @import url(https://capnkitten.github.io/BetterDiscord/Themes/Translucence/css/source.css);
                :root {
                    	--app-bg: url(https://i.imgur.com/bgmVeyt.jpg);
	--app-blur: 6px;
	--app-margin: 24px;
	--app-radius: 8px; /*	-	*/

	--accent-hue: 156;
	--accent-saturation: 77.5%;
	--accent-lightness: 47.1%;
	--accent-opacity: 1;
	--accent-text-color: #000; /*	-	*/

	--sidebar-color: rgba(0,0,0,0.4);
	--main-content-color: rgba(0,0,0,0.2); /*	-	*/

	--message-color: rgba(0,0,0,0.4);
	--message-radius: 8px;
	--message-padding-top: 8px;
	--message-padding-side: 8px; /*	-	*/

	--reply-hue: 226;
	--reply-saturation: 77.4%;
	--reply-lightness: 61.8%;
	--reply-opacity: 1; /*	-	*/

	--textarea-color: 255,255,255;
	--textarea-alpha: 0.1;
	--textarea-alpha-focus: 0.15;
	--textarea-text-color: #fff;
	--textarea-radius: 22px;  /*	-	*/

	--card-color: rgba(0,0,0,0.4);
	--card-color-hover: rgba(0,0,0,0.5);
	--card-color-select: rgba(0,0,0,0.7); /*	-	*/

	--button-height: 32px;
	--button-padding: 0 16px;
	--button-action-color: #000;
	--button-radius: 16px; /*	-	*/

	--interactive-normal: #aaa;
	--interactive-hover: #ddd;
	--interactive-active: #fff;
	--interactive-muted: #777; /*	-	*/

	--background-modifier-hover: rgba(255,255,255,0.075);
	--background-modifier-selected: rgba(255,255,255,0.125);

                }
            `
        },
        {
            name: 'Tritone',
            author: 'Saltssaumure',

            css: `
                /* Tritone theme CSS code */
                @import url("https://saltssaumure.github.io/ieytd-discord-theme/ieytd.min.css");
                :root {
                    --ieytd-color-1: #C34938;
                    --ieytd-color-2: #E1CC9A;
                    --ieytd-color-3: #000000;
                }
            `
        },





{
    name: 'Basic Background',
    author: 'DevilBro',
    css: `
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.css);

:root {
	--transparencycolor:		0, 0, 0;			/* default: 0, 0, 0															*/
	--transparencyalpha:		0.15;				/* default: 0.15				(general darkness of the app)								*/
	--messagetransparency:		0.5;				/* default: 0.5					(additional shadows behind messages, set to 0 to remove boxes)				*/
	--guildchanneltransparency:	0.15;				/* default: 0.15				(additional darkness for guild/channel list)						*/
	--chatinputtransparency:	0.0;				/* default: 0.0					(additional darkness for chat input container)						*/
	--memberlisttransparency:	0.0;				/* default: 0.0					(additional darkness for member list)							*/
	--accentcolor:			190, 78, 180;			/* default: 190, 78, 180			(RGB-format - blurple: 88, 101, 242 bd-blue: 58, 113, 193)				*/

	--settingsicons:		1;				/* Use Settings Icons in User Settings: 1 = yes, 0 = no											*/
	--font:				"gg sans", "Noto Sans";		/* font used in most places														*/
	--textshadow:			transparent;			/* default: transparent				(textshadow for text ontop of accentcolor nodes, ONLY accepts a color, no px)		*/

	--background:			url(https://i.imgur.com/k4s8KGJ.jpg);	/* general background image					*/
	--backgroundposition:		center;				/* default: center				(position of background - values: [center/top/right/bottom/left])			*/
	--backgroundsize:		cover;				/* default: cover				(sizefit of background - values: [cover/contain/auto])					*/
	--backgroundblur:		0;				/* default: 0					(blur in px, only works when --background is set to an image)				*/

	--popout:			var(--background);		/* default: var(--background)			(change to use another background/color for modals/popouts)				*/
	--popoutposition:		var(--backgroundposition);	/* default: center				(position of popout - values: [center/top/right/bottom/left])				*/
	--popoutsize:			var(--backgroundsize);		/* default: cover				(sizefit of popout - values: [cover/contain/auto])					*/
	--popoutblur:			var(--backgroundblur);		/* default: 0					(blur in px, only works when --popout is set to an image)				*/

	--backdrop:			rgba(0, 0, 0, 0.85);		/* default: rgba(0, 0, 0, 0.85)			(change to use another background/color for backdrops)					*/
	--backdropposition:		center;				/* default: center				(position of backdrop - values: [center/top/right/bottom/left])				*/
	--backdropsize:			cover;				/* default: cover				(sizefit of backdrop - values: [cover/contain/auto])					*/
	--backdropblur:			0;				/* default: 0					(blur in px, only works when --backdrop is set to an image)				*/

	--textbrightest: 		255, 255, 255;			/* default: 255, 255, 255			(text color for the brightest texts)							*/
	--textbrighter: 		222, 222, 222;			/* default: 222, 222, 222			(text color for brighter texts)								*/
	--textbright: 			200, 200, 200;			/* default: 200, 200, 200			(text color for bright texts)								*/
	--textdark: 			160, 160, 160;			/* default: 160, 160, 160			(text color for dark texts)								*/
	--textdarker: 			125, 125, 125;			/* default: 125, 125, 125			(text color for darker texts)								*/
	--textdarkest: 			90, 90, 90;			/* default: 90, 90, 90				(text color for the darkest texts)							*/

	--version1_0_5:			none;				/* DO NOT CHANGE THIS VARIABLE , USED TO HIDE UPDATE NOTICE										*/
}

        }
    `
},



{
    name: 'DaBluLite',
    author: 'Cyan',
    css: `
@import url("https://dablulite.github.io/Cyan/import.css");
:root {
	--cyan-background-primary: hsla(0deg 0% var(--cyan-background-lightness) / 20%);
	--cyan-elevation-shadow: 0 0 0 1.5px var(--cyan-accent-color), 0 2px 10px 0 rgb(0 0 0 / 60%);
	--cyan-font: 'Montserrat', 'Open Sans';
	--cyan-background-img: url(https://i.imgur.com/Mq6aSO6.jpeg);
	--cyan-accent-color: #009f88;
	--cyan-blur-radius: 10px;
	--cyan-status-mask-background: var(--profile-body-background-color);
	--cyan-text-shadow: 1;
	--window-margin: 8;
	--window-border-radius: 8px;
}

    `
},




        {
            name:'Discord-2008',
            author:'11pixels',
            css: `

@import url(https://xyzenix.github.io/XYZenixThemes/DTM-08-V2/dtm-08-v2.css);





`
},



        {
            name:'LilyPichu',
            author:'Nyria',
            css: `

@import url("https://nyri4.github.io/LilyPichu/main.css");

/* Remove decorations */
@import url("https://nyri4.github.io/LilyPichu/stuff/overlay.css");

:root {
  /* --- User variables --- */

  /* Jumping GIF */
  --jumping-gif: url("https://i.imgur.com/dCd49s0.gif");

  /* Background (if you want an image replace it by :

--background-tertiary-alt: url("image-link"); without that => */
  --background-tertiary-alt: #ffc7d4;

  /* Border-radius for the whole theme */
  --border-radius: 20px;
}

.theme-dark {
  /* Text */
  --text-normal: #f8e1e5;
  --header-primary: #f8e1e5;
  --interactive-normal: #fab1bd;
  --channels-default: #f8e1e5;

  --text-muted: #e2c1c7;
  --interactive-muted: #ad8c91;

  --header-secondary: #e2c1c7;
  --interactive-hover: #e2c1c7;
  --interactive-active: #e2c1c7;

  /* Background color */
  --background-primary: #5e3640;
  --background-secondary: #49292f;
  --background-secondary-alt: #3b1d24;
  --background-tertiary: #220f14;
  --background-floating: #221115;
  --background-accent: #c5536c;
  --channeltextarea-background: var(--background-secondary);
  --modal-background: var(--background-primary);
  --background-modifier-hover: #5e36403b;
  --background-modifier-active: #5e364058;
  --background-modifier-selected: #5e364068;
  --toast-background: #5e3640 !important;
  --toast-header: #3b1d24 !important;
  --toast-contents: #49292f !important;
  --toast-border: #49292f !important;
  --input-background: var(--background-secondary);

  /* Scrollbar */
  --scrollbar-auto-thumb: var(--background-tertiary);
  --scrollbar-auto-track: var(--background-secondary-alt);
  --scrollbar-thin-thumb: var(--background-tertiary);
  --scrollbar-thin-track: transparent;

  /* Other */
  --channel-text-area-placeholder: var(--interactive-normal);
  --deprecated-quickswitcher-input-background: var(--background-primary);
}
.colorBrand-3cPPsm {
  color: #c5536c;
}
.colorDefault-CDqZdO.focused-3qFvc8,
.colorDefault-CDqZdO:active:not(.hideInteraction-2jPGL_) {
  background-color: var(--background-modifier-hover) !important;
}

/* Buttons */
.lookFilled-1H2Jvj {
  background-color: #c5536c !important;
}
.lookFilled-1H2Jvj:active,
.lookFilled-1H2Jvj:hover {
  background-color: #b64a61 !important;
}
.lookOutlined-3yKVGo:not(.colorWhite-1H92hK) {
  color: #c5536c;
  border-color: #c5536c;
}

/* Hover background */
.colorDefault-CDqZdO.focused-3qFvc8,
.colorDefault-CDqZdO:active:not(.hideInteraction-2jPGL_) {
  color: var(--interactive-normal);
}

.theme-light {
  /* Text */
  --text-normal: #a86373;
  --header-primary: #a86373;
  --interactive-normal: #a86373;
  --channels-default: #a86373;

  --text-muted: #a86373;
  --interactive-muted: #cf92a0;

  --header-secondary: #cf92a0;
  --interactive-hover: #be7d8c;
  --interactive-active: #b36f7f;

  /* Background color */
  --background-primary: #ffffff;
  --background-secondary: #ffeeee;
  --background-secondary-alt: #fdc7c7;
  --background-tertiary: #ffbbbb;
  --background-floating: #ffbbbb;
  --background-accent: #c5536c;
  --channeltextarea-background: var(--background-secondary);
  --background-modifier-hover: rgba(56, 31, 31, 0.062);
  --background-modifier-active: rgba(19, 12, 12, 0.123);
  --background-modifier-selected: rgba(31, 21, 21, 0.11);

  /* Scrollbar */
  --scrollbar-auto-thumb: var(--background-tertiary);
  --scrollbar-auto-track: var(--background-secondary-alt);
  --scrollbar-thin-thumb: var(--background-tertiary);
  --scrollbar-thin-track: transparent;

  /* Other */
  --deprecated-quickswitcher-input-background: var(--background-primary);
}

.colorDefault-CDqZdO.focused-3qFvc8,
.colorDefault-CDqZdO:active:not(.hideInteraction-2jPGL_) {
  background-color: var(--background-modifier-hover) !important;
}

/* Buttons */
.lookFilled-1H2Jvj {
  background-color: #c5536c !important;
}
.lookFilled-1H2Jvj:active,
.lookFilled-1H2Jvj:hover {
  background-color: #b64a61 !important;
}
.lookOutlined-3yKVGo:not(.colorWhite-1H92hK) {
  color: #c5536c;
  border-color: #c5536c;
}

/* Hover background */
.colorDefault-CDqZdO.focused-3qFvc8,
.colorDefault-CDqZdO:active:not(.hideInteraction-2jPGL_) {
  color: var(--interactive-normal);
}




`
},







        {
            name:'Ocean',
            author:'DevEvil',
            css: `

@import url('https://devevil99.github.io/devevil/BetterDiscordAddons/Theme/Ocean/Ocean.theme.css');

:root {
  --ocean-bg: url(https://i.imgur.com/HbaBwdc.png);
  --ocean-home-icon: url(https://i.imgur.com/4Moa0sI.png);
  --ocean-color1: #00d5ce;
  --ocean-color2: #0a173a;
  --ocean-color3: #1487b1;
  --watermark-filter-invert: 0%;
  --watermark-filter-sepia: 50%;
  --watermark-filter-saturate: 3000%;
  --watermark-filter-hue-rotate: 150deg;
  --watermark-filter-brightness: 100%;
  --watermark-filter-contrast: 200%;
  --ocean-emoji-picker-color: 150deg;
}

`
},










        {
            name:'FallOut Terminal',
            author:'Bates',
            css: `

@import url('https://B4T3S.github.io/Fallout4TerminalTheme/mainRewrite.css');
/* ^ This is the main Import ^ DO NOT TOUCH. Without this, the theme won't load!!! */

@import url('https://B4T3S.github.io/Fallout4TerminalTheme/css/crtEffect.css');
/* ^ This is the CRT effect. If you don't like it, remove or uncomment this line! ^ */

/* CUSTOMIZE COLORS IN HERE! */
:root {
  --rgb-highlight: 74, 239, 152; /* The main highlight color */
  --rgb-background: 0, 9, 0; /* The main background color */
  --rgb-text: 74, 239, 152; /* The color (almost) all text should use */
  --rgb-close-button: 212, 18, 39; /* The main "close this" or "deny" color */
  --rgb-online-color: 57, 255, 20; /* The color used in the "online" user status symbol */
  --rgb-afk-color: 255, 255, 51; /* The color used in the "idle" user status symbol */
  --rgb-dnd-color: 255, 0, 0; /* The color used in the "do not disturb" user status symbol */
  --rgb-streaming-color: 188, 19, 254; /* The color used in the "streaming X" user status symbol */

  --transition-time: .3s; /* How fast animations added by the theme happen. Default is 0.3 seconds */

  --background-image: unset; /* To add an image, replace unset with url(https://www.YOUR-URL-HERE.com) */
  --background-position: center; /* Positions the background image */
  --background-size: cover; /* Scales the background image */
  --background-blur: 5px; /* Blurs the image which usually helps with readability of text infront of it */
  --background-brightness: 100%; /* Changes the background images brightness */

  --title-image: url("https://B4T3S.github.io/Fallout4TerminalTheme/svg/title.svg"); /* The .svg file used for the "ROBCO Industries (TM) terminal" title */
  --title-image-repeat: no-repeat; /* If the title image should repeat */
  --title-image-size: cover; /* The size of the title image */
  --title-image-color: var(--highlight); /* The color used for the title image */
  --title-image-width: 240px; /* The width of the title image */
  --title-image-height: 14px; /* The height of the title image */
}



`
},


 {
            name:'Synthesisn',
            author:'Saltssaumure',
            css: `

@import url("https://saltssaumure.github.io/synthesis-discord-theme/synth.min.css");

/* See https://github.com/Saltssaumure/synthesis-discord-theme#customisation for customisation settings. */
:root {
    --synth-background-image:   url(https://i.imgur.com/t2pu2zx.png);
    --synth-backdrop-opacity:   0.3         ;
    --synth-overlay-color:      255 165 0   ;
    --synth-crt-light:          255 255 255 ;
    --synth-crt-dark:           0   0   0   ;
    --synth-crt-flicker:        none        ;   /* This is a fast flickering effect and may not be suitable for those with photosensitive epilepsy. */

    --synth-color-background:   20  6   36  ;
    --synth-color-foreground:   255 165 0   ;
    --synth-color-shadow:       0   0   128 ;
    --synth-color-button:       84  63  251 ;
    --synth-color-pop:          206 63  251 ;
    --synth-color-blurple:      88  101 242 ;
    --synth-color-text:         255 255 255 ;

    --synth-color-red:          243 67  131 ;
    --synth-color-yellow:       255 165 0   ;
    --synth-color-green:        52  172 140 ;
    --synth-color-twitch:       89  54  149 ;
}




`
},





 {
            name:'WizardUI',
            author:'NEBULYS',
            css: `


@import url("https://fonts.googleapis.com/css?family=Quicksand&amp;display=swap");

/* This is an addon that adds the Marianne font.
@import url("https://goldenlys.github.io/WizardUI/addons/Marianne.css"); */

@import url("https://goldenlys.github.io/WizardUI/base.css");

/* This is an addon that moves the servers to the top with an horizontal width.*/
@import url("https://goldenlys.github.io/WizardUI/addons/PurpleServerList.css");

/* This is a modification for PurpleServerList which replaces the folders icons with letters.
@import url("https://goldenlys.github.io/WizardUI/addons/LettersInPSL.css"); */

/* This is an addon that makes the members list hidden until you hover it. */
@import url("https://goldenlys.github.io/WizardUI/addons/HoverMembers.css");

/* This is an addon that moves the "user is typing" text to the bottom of the app, like the default discord. */
@import url("https://goldenlys.github.io/WizardUI/addons/UserIsTyping.css");

/* This is an addon that recolors alot of elements in the app with the main theme color but you can even add an RGB animated effect if you change the number before the ".css" (with a maximum of 10 colors).
@import url("https://goldenlys.github.io/WizardUI/addons/EvenMoreColors/1.css"); */

:root {
    /* MAIN VARIABLES */
    --AppName: "DISCORD";
    --Watermark: "WizardUI";
    --font: 'Quicksand', 'emoji', sans-serif;
    --Text: rgb(255, 255, 255);
    --logo: url(https://i.imgur.com/3flZoII.gif);

    /* STATUS VARIABLES */
    --Online: rgb(0, 255, 6);
    --Idle: rgb(18, 100, 239);
    --Unavailable: rgb(228, 15, 0);
    --Offline: rgb(90, 95, 100);
    --Streaming: rgb(110, 0, 196);

    /* UI COLOR VARIABLES */
    --grey: rgb(18, 19, 31);
    --grey5: rgba(18, 19, 31, .75);
    --darkgrey: rgb(10, 10, 20);
    --darkgrey5: rgba(10, 10, 20, .75);
    --ui-success: rgb(69, 208, 34);
    --ui-warning: rgb(238, 165, 30);
    --ui-error: rgb(208, 34, 34);

    /* THEME COLORS */
    --Primary: rgb(117 76 205);
    --text-link: var(--Primary);
    --Highlighted: rgba(117 76 205 / 50%);
    --MessageHover: transparent;
    --Unread: rgb(255 255 255);
    --Hover: rgb(18 19 31 / 50%);
    --Selected: rgb(56 33 146);

    /* BACKGROUNDS */
    --background: url(https://i.imgur.com/R243l52.jpeg);
    --bg-titlebar: rgba(0, 0, 0, 0.65);
    --bg-servers: rgba(0, 0, 0, 0.65);
    --bg-ui: rgba(0, 0, 0, 0.65);
    --bg-chatbox: rgba(0, 0, 0, 0.5);
    --bg-sendmessage: rgba(0, 0, 0, 0.65);
    --bg-members: rgba(0, 0, 0, 0.65);
    --bg-chat-elements: rgba(0, 0, 0, 0.5);
    --bg-colorprofile: rgba(0, 0, 0, 0.5);

    /* SERVER SETTINGS */
    --ServerSize: 45px;
    --ServerPills: var(--Primary);

    /* ROUNDING */
    --Rounding: 5px;
    --StatusRounding: 4.5;

    /* RGB ADDON */
    --ColorTime: 2s;
    --Color2: rgb(0, 225, 255);
    --Color3: rgb(0 0 0);
    --Color4: rgb(0 0 0);
    --Color5: rgb(0 0 0);
    --Color6: rgb(0 0 0);
    --Color7: rgb(0 0 0);
    --Color8: rgb(0 0 0);
    --Color9: rgb(0 0 0);
    --Color10: rgb(0 0 0);
}




`
},




                {
            name:'NieR',
            author:'Accrazed',
            css: `

@import url('https://accrazed.github.io/YoRHA-UI-BetterDiscord/font/stylesheet.css'); /* Font */
@import url('https://accrazed.github.io/YoRHA-UI-BetterDiscord/NieR-Cursor.css'); /* Cursor */
@import url('https://accrazed.github.io/YoRHA-UI-BetterDiscord/NieR-Import.theme.css'); /* Main File */
@import url('https://accrazed.github.io/YoRHA-UI-BetterDiscord/LightImport.theme.css'); /* Light Part of Theme */

/* GLOBAL VARIABLES */
:root {
	--color-high: rgb(218, 212, 187);
	--color-low: rgb(87, 84, 74);
	--color-mid: rgb(151, 147, 129);
	--color-alert: rgb(205, 102, 77);
	--color-high-trans: rgba(218, 212, 187, 0.8);
	--color-low-trans: rgba(87, 84, 74, 0.6);
	--color-alert-trans: rgba(205, 102, 77, 0.7);
	--nier-font: sce-ps3_rodin_latinregular;

            --color-high: rgb(218, 212, 187);
            --color-low: rgb(87, 84, 74);
            --color-mid: rgb(151, 147, 129);
            --color-alert: rgb(205, 102, 77);
            --color-high-trans: rgba(218, 212, 187, 0.8);
            --color-low-trans: rgba(87, 84, 74, 0.6);
            --color-alert-trans: rgba(205, 102, 77, 0.7);
            --nier-font: sce-ps3_rodin_latinregular;
        }

        /* Additional CSS for NieR theme */
        #app-mount {
            background: url("https://i.imgur.com/AwKzf2W.png") center/cover no-repeat;
        }

        .tutorialContainer_b06ae6 .svg__34dd4 {
            background: url("https://i.imgur.com/WkjU2Js.png") center/contain no-repeat;
        }

        #app-mount:before {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: -webkit-gradient(linear, left top, right top, from(rgba(78, 75, 66, 0.2)), color-stop(30%, transparent), color-stop(80%, transparent), to(rgba(78, 75, 66, 0.4))), radial-gradient(transparent 50%, rgba(78, 75, 66, 0.4));
            background: linear-gradient(to right, rgba(78, 75, 66, 0.2), transparent 30%, transparent 80%, rgba(78, 75, 66, 0.4)), radial-gradient(transparent 50%, rgba(78, 75, 66, 0.4));
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            pointer-events: none;
        }

        ::-moz-selection {
            background-color: var(--color-alert);
            color: var(--color-high);
        }

        ::selection {
            background-color: var(--color-alert);
            color: var(--color-high);
        }
}

`
},






        {
            name:'WinNineX',
            author:'Saltssaumure',
            css: `

@import url("https://saltssaumure.github.io/w9x-discord-theme/w9x.min.css");

/* See https://github.com/Saltssaumure/w9x-discord-theme#customisation for customisation settings. */
:root {
    --w9x-background-image: none;
    --w9x-background-color: #008080;
    --w9x-start-text:       "Windows95";

    --w9x-titlebar-color:   #000080;
    --w9x-warning-color:    #FF0000;
    --w9x-positive-color:   #008000;
    --w9x-highlight-color:  #0000FF;

    --w9x-box-color-1:      #FFFFFF;
    --w9x-box-color-2:      #DFDFDF;
    --w9x-box-color-3:      #C0C0C0;
    --w9x-box-color-4:      #808080;
    --w9x-box-color-5:      #000000;
}

.theme-light {
    --w9x-bg-color:     #FFFFFF;
    --w9x-text-color:   #000000;
}

.theme-dark {
    --w9x-bg-color:     #000000;
    --w9x-text-color:   #DFDFDF;
}

`
},






        {
            name:'WinExponent',
            author:'Saltssaumure',
            css: `

@import url("https://saltssaumure.github.io/xp-discord-theme/xp.min.css");

/* See https://github.com/Saltssaumure/xp-discord-theme#customisation for customisation settings. */
:root {
    --xp-background-image:  url(https://i.imgur.com/Qv4ka71.png);
    --xp-background-color:  #0066CC;
    --xp-window-color-1:    #005AE7;
    --xp-window-color-2:    #0372FF;
    --xp-taskbar-color-1:   #108CE4;
    --xp-taskbar-color-2:   #578CD0;
    --xp-taskbar-color-3:   #1665CA;
    --xp-start-color-1:     #008000;
    --xp-start-color-2:     #38C438;
    --xp-shortcut-color-1:  #0CA80C;
    --xp-shortcut-color-2:  #008000;
    --xp-ping-color:        #E64D1C;
    --bsod-color:           #000080;
    --bsod-text:            "A problem has been detected and Windows has been shut down to prevent damage to your computer. \A\A A clock interrupt was not received on a secondary processor within the allocated time interval. \A\A If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps: \A\A Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need. \A\A If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then throw away the whole computer. \A\A Technical information: \A\A *** STOP: USING_DISCORD \A\A ***       discord.exe - Address DEADBEEF base at 8BADF00D, DateStamp 1337C0D3 \A\A\A\A\A\A\A\A\A\A Collecting data for crash dump ... \A Initializing disk for crash dump ... \A Beginning dump of all your belongings ... \A Dumping physical memory to disk: 100% \A Physical memory dump complete. \A Contact your system administrator or technical support group for further assistance.";
}

.theme-dark {
    --xp-bg-color:          #000000;
    --xp-set-color:         #FFFFFFB3;
    --xp-hover-color:       #112233;
    --xp-selected-color:    #1665CA;
    --xp-zing-color:        #AA5500;
    --xp-txt-color:         #FFFFFF;
    --xp-bg-bright-color:   #223344;
    --xp-bg-tint-color:     #222222;
    --xp-bg-shade-color:    #111111;
    --xp-border-color:      #1665CA;
}

.theme-light {
    --xp-bg-color:          #FFFFFF;
    --xp-set-color:         #000000B3;
    --xp-hover-color:       #D3D3D3;
    --xp-selected-color:    #1665CA;
    --xp-zing-color:        #FFA500;
    --xp-txt-color:         #000000;
    --xp-bg-bright-color:   #F0EFED;
    --xp-bg-tint-color:     #EBE8D7;
    --xp-bg-shade-color:    #808080;
    --xp-border-color:      #000000;
}

`
},






        {
            name:'SkeuoCord',
            author:'Marda33',
            css: `

@import url("https://marda33.github.io/SkeuoCord/updates/SkeuoCordBase.css");
/*replace SkeuoCordBase with SkeuoCord_BGImport to use custom BG image*/

:root {
	/*User Avatar Border Radius Values - change all below to 999px for circle avatars, set back to default values for square avatars*/
	--maskradius: 2px !important; /*default: 2px*/
	--avatarradius: 3px !important; /*default: 3px*/
	--smallavatarradius: 2px !important; /*default: 2px*/
	--medavatarradius: 4px !important; /*default: 4px*/
	--largeavatarradius: 5px !important; /*default: 5px*/
	/*Custom BG - enter the link to the image you want to use as the app background, keep quotes*/
	--bg-image: url('here') center/cover no-repeat !important;
	/*------*/
}

`
},




        {
            name:'GGO Kirito',
            author:'VaporousCreeper',
            css: `

@import url('https://raw.githack.com/Ruben7173/Ruben7173.github.io/master/BetterDiscord-Themes/Modules/transparency2.css');
@import url('https://raw.githack.com/VaporousCreeper/BetterDiscord-ThemesAndPlugins/master/Themes/GGO_Kirito/core.css');

:root{
    --background: url('https://i.imgur.com/1JVM8CU.jpg');
    --activetext-colour: white;

    --primary1-colour: red;
    --primary2-colour: rgba(255,0,0,0.5);
    --primary3-colour: rgba(100,0,0,0.6);

    --secondary1-colour: rgba(50,50,50,0.3);
    --secondary2-colour: rgba(100,100,100,0.5);
    --secondary3-colour: rgba(0,0,0,0.5);

    --transparency-1: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    --transparency-2: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    --transparency-3: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    --transparency-4: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    --transparency-5: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
}

`
},




    ];

    // Function to create the theme dropdown menu
   // Function to create the theme dropdown menu
    function createThemeDropdown(themes) {
        // Add CSS styles for the dropdown menu
        GM_addStyle(`
            .theme-dropdown {
                position: fixed;
                bottom: 20px;
                right: 0px;
                z-index: 9999;
                opacity: 0.75;
                transform: translateX(80%);
                transition: all 0.5s ease;
            }
            .theme-dropdown:hover {
                transform: translateX(0%);
                opacity: 1;
            }
            .theme-dropdown select {
                border: 2px solid white;
                border-radius: 300px;
                padding: 10px;
                text-align: center;
                cursor: pointer;
                background-color: #7289DA; /* Discord theme color */
                color: #fff0; /* Text color */
                outline: none;
                font-size: 16px;
                font-weight: bold;
                appearance: none;
                transition: background-color 0.3s ease;
                position: relative;
                z-index: 1;
            }
            .theme-dropdown::after {
                content: "";
                z-index: 11111;
                position: absolute;
                top: 50%; left: 15px;
                transform: translateY(-50%);
                height: 60%;
                aspect-ratio: 1;
                background-image: url("https://i.imgur.com/ZEZsae6.png");
                background-size: cover; /* Adjust the background size as needed */
                background-repeat: no-repeat; /* Prevent the background image from repeating */
            }
            .theme-dropdown:hover select {
                color: #fff;
            }
            .theme-dropdown:hover::after {
                opacity: 0;
            }
            .theme-dropdown select:hover {
                background-color: #6272a4; /* Darker color on hover */
            }
        `);

        // Create the dropdown menu
        const dropdown = document.createElement('div');
        dropdown.classList.add('theme-dropdown');

        const select = document.createElement('select');

        // Add theme options
        themes.forEach((theme, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${theme.name} by ${theme.author}`;
            select.appendChild(option);
        });

        const option = document.createElement('option');
        option.value = -1;
        option.textContent = `Discord Deafult`;
        select.appendChild(option);

        // Add event listener to apply selected theme
        select.addEventListener('change', function() {
            const selectedIndex = parseInt(select.value);
            const selectedTheme = themes[selectedIndex];
            // GM_addStyle(selectedTheme.css);
            localStorage.setItem('selectedTheme', selectedIndex);
            location.reload(); // Auto refresh the page after applying the theme
        });

        // Check if a theme is stored in localStorage
        const storedThemeIndex = localStorage.getItem('selectedTheme');
        if (storedThemeIndex != null) {
            const selectedIndex = parseInt(storedThemeIndex);
            if (selectedIndex != -1) {
                select.value = storedThemeIndex;
                const selectedTheme = themes[selectedIndex];
                GM_addStyle(selectedTheme.css);
           }
        }

        dropdown.appendChild(select);
        document.body.appendChild(dropdown);
    }

    // Create the dropdown menu
    createThemeDropdown(themes);


})();
