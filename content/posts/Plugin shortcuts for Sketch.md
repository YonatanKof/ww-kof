---
title: Shortcuts for Sketch - Plugin and OS
author_name: Yonatan Ben Knnan
urlname: shortcuts-for-sketch
date: 2020-07-12
updated: 2019-02-06
published: true
tags: ['Sketch','Productivity', 'Git']
cover_image: ./images/rotateme.svg
cover_caption: Polls on the beach
canonical_url: false
description: How to create, edit or remove shortcuts for a Sketch plugin
---

There's a thing you're doing all day long - moving your hands and cursor to control your apps - When you add up all these small movements you'll quickly end up whit a big wasteful repetition. You might have missed it because it's small. You might haven't deal with it because you don't know how - Whatever the reason you've let it slide, it's a wast of your time and **this post is for you!** 

# The painful movement of the hand
Seeing top notch developers working without lifting their hands form the keyboard made me think _is there a way for me to work that way?_ So elegant, so efficient, keeping your hands from a wrist infection. At around 2015 the answer was a **soft no** - I've customized every possible shortcut in _Illustrator_. The nicest thing about Illustrator shortcuts was the ease of creating and managing shortcuts with the `Keyboard Shortcuts` panel _(Fig.Ill)_. but some basic functionalities like resizing a shape wasn't available to begin with, so no shortcut could be assigned.

![Fig.Ill - Illustrator Keyboard Shortcut panel](./pss-assets/Extra-Illustrator_Shortcuts.png)

That same year it looked like *Sketch* was stable enough for production. One of the first things I've noticed that blown my mind when I've stated using it was the ability to resize shapes with stroke of some keys. **Amazing!** It made me feel that this product was build by my kind of people - at least, we share the same OCD. But unfortunately, there there was no easy way to manage keyboard shortcut in *Sketch*. Managing shortcuts on macOS *(fig.keyOS)* ain't a breeze too - beside being cumbersome it's unaware of existing Plugin shortcuts but even worst it doesn't allow you the select nested Plugin commands.

**In this article we'll review 2 ways to rectify the situation.**
- One is by using the macOS's keyboard panel
- The other in by using the plugin's `manifest.json`

We'll figure out the Jobs to be done, state the problem, go trough my solutions, cover some edge cases and install a tool that might help a little.  

Hope you guys enjoy it 🙆‍♂️ Let's go!


---
# Jobs to be done

## 1st job - macOS shortcuts

1. Scrolling the *Layers* and *Components* panel on a big file is nice but sometimes I'd like the get an overview at a glance. That's why the `Collapse All Groups` command is good for. Unfortunately it has no shortcut 😢
2. I do a lot aligning when I design, moving my courser to the top right *(fig.align)* all the time is annoying. I'd like to have a shortcut for the Center / Horizontal / Top / Bottom / Left / Right alignment.


### 1st job problem

1. How do I set up a shortcut on macOS? And how do I make it specific for *Sketch*?
2. Commands need to be unique. Let's take for example the `Left` command. You can find it under `Text -> Align` or under `Arrange -> Align`. So the second problem is, how do I set up a none unique shortcut?

![Fig.align - Sketch Alignment Tools](./pss-assets/Extra-Sketch_Alignment_Tools.png) *fig.align*

## 2nd job - Plugin shortcut

Recently I've installed the [Color Contrast Analyser for Sketch](https://github.com/getflourish/Sketch-Color-Contrast-Analyser), which a useful plugin if you'd like to make accessible products without leaving Sketch app for a solution online. The plugin ships without a shortcut and when working on a new design with a lot of contrast checking it can get real annoying real fast. As a keyboard fanatics I'd like to set a shortcut for it.

### The problem

macOS shortcuts works only for installed apps. Plugins are installed in the app, so the Keyboard Shortcut Manager won't work on them.  

How do I create a short cut anyways?

## 3rd job - Editing plugin shortcut

1. Some shortcuts are troublesome, let's say the [Comma plugin](https://github.com/margusholland/Comma). On the one hand I don't use it that often but on the other hand it holds a lot of valuable shortcuts (as you can see on *fig.comma*). I'd like to remove all these shortcuts because I might want to use them somewhere else and I also keep clicking them by mistake **all** the fricking time 😤
2. There are two Comma shortcuts I'd like to keep while using a different key combo.

![fig.comma - Comma plugin banner taken form their Github Page](./pss-assets/Comma_plugin.png)
### The problem

1. How do I delete unwanted plugin shortcuts? 
2. How do I edit existing plugin shortcuts? 

---

# The solutions

## 1st job solution - macOS shortcuts
### Create custom macOS shortcut 

1. Open the *Keyboard* Preferences on the *Shortcut* tab and click the *App Shortcut* on left panel *<a href="#fig-keyOS">(fig.keyOS)</a>*.
   
   You can use the *Spotlight Search* with the `control + spacebar` shortcut and start typing `ke...` *<a href="#fig-spot">(fig.spot)</a>*  or just look for it in the System Preferences found in the Apple menu.
2. At the bottom of the right panel you'll see `+` and `-` buttons. Clicking the `+` button will open a prompt window *<a href="#fig-prompt">(fig.prompt)</a>*.
3. Pick the app at hand, in our case *Sketch*.
4. Type the the  `Collapse All Groups` command.
   
   Be mindful - you'll have to type the command name exactly as it appears in the app's menu, including capital letters and spacing.
  
5. Type the shortcut you want into the *Keyboard Shortcut* input. You'll have to use a combination of a <a href="#mod-keys">modifier and a regular keys</a> .
   
   For this shortcut I'll use the `ctrl` `option` `cmd` + `c` combo - by typing them while in the input *<a href="#fig-filled-prompt">(fig.filled prompt)</a>*.

6. Click `Add` and there you have it! Your first shortcut for Sketch using macOS's native panel

> BTW - This technique can be used by **all** apps or a **specific** app, and not just *Sketch* 😎. You can see in the screenshot I've added the super useful `Merge All Windows` command for all application. Also super useful is the `Show Help menu`, which is a system shortcut that I'll review later.

<span id="fig-keyOS">![fig.keyOS - macOS Keyboard Shortcut Manager](./pss-assets/MasOS-Shortcut_Manager.png) *fig.keyOS*</span>

<span id="fig-spot">![fig.spot - macOS Spotlight Search](./pss-assets/Extra-Spotlight_Search.png) *fig.spot*</span>

<span id="fig-prompt">![fig.prompt - A prompt widow to add command to an app](./pss-assets/MasOS-Add_Shortcut_Prompt.png) *fig.prompt*</span>

<span id="fig-filled-prompt">![fig.filled prompt - A full add shortcut prompt](./pss-assets/MasOS-Filled_Prompt.png) *fig.filled prompt*</span>

### 1.2 - Create shortcuts for none unique commands 

In order to do so we'll need to write the command's full location using this pattern `->` (`dash` + `greater than`) to mark nest descent.
So the left align arrange command needs to look like this: 
```
Arrange->Align->Top 
```
I'll use the `ctrl` + `option` + `cmd` + `shift` + `↑` combo for align *Top*, the `↓` for *Bottom*, the `→` *Right* and, you guessed it, `←` for *Left*. For the *Horizontally* i'll use `h` and `v` for *Vertically*

![fig.keyOS - macOS Keyboard Shortcut Manager](./pss-assets/MasOS-Shortcut_Manager_Full.png) *fig.keyOS*

---

## 2nd solution - Create plugin shortcut

As mentioned, the macOS's shortcut manager won't work for an app plugin, in order to create a custom shortcut for  plugins we'll use the plugin's `manifest.json` file that can be found inside the plugin. 

> Every plugin is a `.sketchplugin` file but under the hood it's actually a folder on you computer, and in that folder the `manifest` resides.

So how do we do it?

1. Find the plugin
   
   The easiest way to locate the plugins folder is by opening *Sketch*'s Preferences panel (`⌘`+`,`) and under the *Plugins* tab click the *Reveal Plugin Folder* in the contextual menu (*fig.preferences panel*). 
   
   Another way is to navigate using the finder, usually to be found in this path `Users ► {user name} ► Library  ► Application Support  ► com.bohemiancoding.sketch3 ► Plugins`   

2. Locate and open the file 
   
   Plugins are files with the `.sketchplugin` suffix and the file we're looking for will a name that is similar or identical to the plugin name. 
   
   These files are actually enclosed folders and right clicking them will reveal the `Show Package Contents` command in the contextual menu. Click it! (*fig.plugin folder*).
   
3. Find the manifest file
   
   Being a package means that and behind the scenes the plugin is a set of folders and files - some plugins holed many and some just a few. 
  
   Anyways, once we're in the package content we'll look for a file called `manifest.js`, usually to be found in `... ► Contents ► Sketch`.  When you locate it open it using a text editor - I'm using VS code but you can use TextEdit or whatever text or code editor you like (*fig.manifest*).

4. Edit the `manifest.js` file
   
   We're looking for the `shortcut` key/value pair - where the key is the title and value, that is now empty, will be the shortcut combo itself (*fig.empty shortcut*). 

   Now let's type the combo - I'd like it to be `ctrl` + `option` + `cmd` + `shift` + `c` combo to get plugin running, but you can use any modifier key combination you'd like. Save the file and now the shortcut should be available in Sketch *(fig.with shortcut)*.

5. Save the file and enjoy it in *Sketch*

![fig.preferences panel - The preferences panel showing the Plugin tab](./pss-assets/Plugins-Select_and_reveal_the_plugin_in_Finder.png) *fig.preferences panel*

![fig.plugin folder - The folder containing all of the plugins ](./pss-assets/Plugins-Folder.png) *fig.plugin folder*

![fig.manifest - The location of the manifest file in the plugin package contents folder](./pss-assets/Plugins-Find_and_open_manifest.js_in_an_editor.png) *fig.manifest*

![fig.empty shortcut - The color checker manifest file open in VS code with no shortcut](./pss-assets/Plugins-Find_the_relevant_command.png) *fig.empty shortcut*

![fig.with shortcut - The color checker manifest file open in VS code with a shortcut](./pss-assets/Plugins-Add_shortcut_string_and_save_file.png) *fig.with shortcut*

---

## Good to know

### <span id="mod-keys">Modifier & Regular Keys</span>

Are their name suggest, modifier keys change the normal behavior of a key - It turns `1` into a `!` - Hell yeah! The available modifiers are; `ctrl`, `option`, `cmd` & `shift`. 

Regular key are the reset of the keys; A to Z, 1 to 0 and all the special characters ([;'\/.,`§]).

When it comes to shortcuts we can use one modifier key or a combination of them plus a Regular key.

### Duplicated shortcuts

Using the same shortcut for more then one action is a pain we have to live with. Unfortunately there's no nice solution that addresses this issue - and [the one that was has been discontinued](https://github.com/exevil/Keys-For-Sketch). My solution is daed simple → use uncommon patterns like `ctrl` `option` `cmd` and when they run out then use `ctrl` `option` `cmd` `shift`. Now clicking so many buttons might be annoying, to get around that I'm using [Karabiner Elements](https://karabiner-elements.pqrs.org/), it enables me to to re-map the `caps lock` as if I'm pressing all the 4 keys together. 

Here's a link to a simple guide to get this hack going by **How-To Geek** - [How to Turn Your Mac’s Caps Lock into an Extra Modifier Key](https://www.howtogeek.com/409904/how-to-turn-your-mac%E2%80%99s-caps-lock-into-an-extra-modifier-key/). Nice hack, thanks internet!

### Updating a plugin

Unfortunately updating a plugin will **reset** your shortcuts :-( As mentioned, there's no proper way to manage shortcuts 😤

### Edit a shortcut

In this article we've added a short cut, bet using this process we edit existing or delete unwanted shortcuts.

Editing is dead simple, just type the desired *value*

```json
"shortcut": "ctrl option l"
```

```json
"shortcut": "shift option l"
```

---

### Remove a shortcut

Deleting a shortcut can be done by removing just the *value,* not minding the *key.*

```json
"name": "God is love",
"identifier": "god_is_love",
"script": "God_Is_Love.js",
"shortcut": ""
```

Or by removing the *key/value pair* altogether

```json
"commands": [
   {
      "name": "God is love",
      "identifier": "god_is_love",
      "script": "God_Is_Love.js"
   },
]
```

---

### No shortcut key/value pair?

Conversely, you can add a shortcut *key/value pair* if none exist, like in the case of the [Automate-Sketch](https://github.com/Ashung/Automate-Sketch) plugin.

> Mind the position of the `,` so you won't mess things up. The logic is simple - don't place a *comma* at the end of a curly bracket.

---

## Take aways

1. **Save time**

    Using a shortcuts might save a few second here and there instead of using the mouse or trackpad when reaching to a command in the UI. The deal is - when working  full time, all day long it might save you minutes a day and up to few hours a month.

2. **Better workflows**

    These commands are additional tools in our box, and tools we use shape the way we think.

3. **Take control** 

    Our brain is plastic and it bends in certain way - When we use our memory to trigger a command instead of lookin for it in the UI we improve our chances to form a clearer path to the command and us using it. We're bound to the way we do things


---
---
---
---
---
---
---
---
---
---
---
---
---
---
---

# Unused

```javascript
"shortcut": "ctrl option cmd shift c"
// It should look like this 
```

Doing the same small-but-slow (`🐜`) thing over and over again leads up to a big-and-slower thing. You might have missed it because it's small. You might haven't deal with it because you don't know how - what ever the reason it's a wast of your time and **this post is for you!** 

You might have missed it because it's small. You might haven't deal with it because you don't know how - But when adding small things you end up with a big one. I'm talking about what you do all day long - moving your hands and curser to control your apps. Whatever the reason you've let it slide, it's a wast of your time and **this post is for you!** 

. How do I set a shortcuts for Sketch *Plugins* when most of them are nested command? 
> Sad fact - macOS Keyboard Shortcut Manager will work **just** for an app's nested command and **not** for its plugins, which are the majority 🤦



> What are **Nested command** you ask? As we can see an example in *fig.ZZZ* below, where the Alignment options are nested in the *Align* sub-menu.
>
> ![fig.ZZZ - screen shot of Manager](./pss-assets/Extra-Nested_Commands.png) *fig.ZZZ*

- How do I do it for nested commands?

Either way we're looking for this pattern → in this example there are 2 commands with no shortcuts. We're looking for the `name` and `shortcut` key/value pair - The name will be identical to the command as it's presented in the [Plugins select menu](https://www.notion.so/yonatankof/Plugin-shortcuts-for-Sketch-81689b34a9814b4492afb1059e96b638#11a25485adbe49caad3bdf4a011e5891), and the shortcut, well, let's edit it 💪

The contrast-checker plugin have just one command but some might hold dozens of commands, like the all encompassing [Automate-Sketch](https://github.com/Ashung/Automate-Sketch) plugin. 
