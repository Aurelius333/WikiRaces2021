# WikiRaces2021
This is the repository for the interalliance WikiRaces 2021 competition

Run `npm install` in the project directory to install the dependencies.

Run `npm run-script run` to host the site.

---

## Project Anatomy

```
. (src)
├── `app.js`
│   (the program that runs the server)
├── `game`
│   ├── `cache`
│   │   (cached files, so I don't have to download them again.)
│   ├── `dynamic.js`
│   │   (the functions related to generating the pages from wikipedia.)
│   ├── `game_static`
│   │   (folder for any file that is not run directly.)
│   │   ├── `index.css`
│   │   │   (css for the game client)
│   │   ├── `wiki.css`
│   │   │   (css for the wikipedia pages)
│   │   ├── `index.js`
│   │   │   (scripts for the game client)
│   │   └── `logo.png`
│   │       (interalliance logo)
│   ├── `index.html`
│   │   (the game client)
│   └── `template.js`
│       (has a base template for each wikipedia page)
```


---

## Random notes, mainly for me

The main issue right now is that I am unable to detect when a link is clicked.

Plan: Dynamically fetch wikipedia pages, and break out of the iframe to set variables.

If I can host the page and the game, I shouldn't have issues with XSS

Limitations:
 - due to xss, I cannot tell what url an iframe is on without hosting it.

 - Design I know will work: Shortest time wins
 - Design I want: get shortest time, and shortest number of links.
 - If I'm hosting this on my home network, I am not going to be able to host all of the Wikipedia pages due to network limitations.
	 - Can I scrape the wiki pages and modify them so they set window variables?
         - This would mean I can host all of the pages with github's free hosting, and just host the database on my personal server.

Other aspects:
 - I want a leaderboard -> need to host a website
 - I want to tell who won immediately -> I need to host a website
 - I want a timer to count down to event start

Basic game structure:
  - Before game starts, show timer
  - As game starts: Log Date object to cookies? 
  - Game end is found when the iframe location is equal to the target URL
  - At game end, (StartTime - CurrentTime) is submitted to the database as the time taken, along with a user entered name.
	  - (we should ask they use their real names.)

To do: 
 - get a good server hosting solution.
 - Look into port forwarding with NGINX 
 - Create homepage
 - Create game client
	 - Be able to detect what webpage the user is on.
		 - How to get info from url?
	 - Time till completion should work by storing a date object at game start, and getting the delta at game over.
 - Create backend (hopefully something better than just a JSON file, but we'll see.)

Online games we can clone:
  - Wikispedia
	  - They seemd to have used the same strategy of hosting webpages in an iframe.
		  - I think they take an article name and automatically generate the html they want from it.
	  - [see this link](https://dlab.epfl.ch/wikispeedia/play/wiki.php?article=Spanish_conquest_of_the_Inca_Empire) 
  - [thewikigame](https://www.thewikigame.com) seems to use a parser that returns raw html, which is inserted with JS.

This is intended to be run on a linux system.

----

## Completed:
 - Cache all loaded files -> Store as JSON or as Files?
 - Get Wikipedia content and parse it
 - How to return content from function with expressjs?
 - remove search boxes and extra stuff from page