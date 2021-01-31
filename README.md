# WikiRaces2021
This is the repository for the interalliance WikiRaces 2021 competition

Run `npm install` in the project directory to install the dependencies.

Run `npm run-script run` to host the site.

---

## Project Anatomy

```
TODO - redo project anatomy
```

---

## Random notes, mainly for me

<!--- TODO -->
### Order of development:

------
- center leaderboard titles
------
- make script to redact names
------
- add css for `go to leaderboard` button on homepage
------
- add "You are in #th place" on leaderboard
------
- add informational text on homepage
	- note a re-direct does not count
------
- display username on page login
- kick user to main page if no username is detected
------
- click to view more submission info on leaderboard
------
- Make iframe load on mobile. is it not https?
	- might be solved by removing php assets
------
- Add message for Edge
------
- encode urls properly
------
- Reorder directory structure so pages are not jumbled together.
------
- multithread page generation with worker process (optional)
------

### Code maintenance / small changes
- test to see if not using JSDOM improves performance
	- I need to stop using JSDOM
- fix [xml request](https://github.com/ElderINTERalliance/WikiRaces2021/blob/3d731bdac930a36299f17b73827c23e2dd1e2c54/src/game/game_static/client.js#L13)
- set up nojs and IE support


### Design:
- encode urls properly
- add loading icon behind Iframe
- see if I can do anything to make http requests less intensive
	-  http/2
- send POST requests on level finish
- create homepage where you can set your name in a cookie
	- add this to the post request
- set up mongodb
- Make homepage to view submissions
	- simplified view -> click for more details

This is intended to be run on a linux system.

----

## Completed:
- Cache all loaded files -> Store as JSON or as Files?
- Get Wikipedia content and parse it
- How to return content from function with expressjs?
- remove search boxes and extra stuff from page
- The main issue right now is that I am unable to detect when a link is clicked.
- Plan: Dynamically fetch wikipedia pages, and break out of the iframe to set variables.
- If I can host the page and the game, I shouldn't have issues with XSS
- Autogenerate [url](https://github.com/ElderINTERalliance/WikiRaces2021/blob/3d731bdac930a36299f17b73827c23e2dd1e2c54/src/game/game_static/client.js#L8)
- improve `if (err) return log.error(err);`
- set github language [with this](https://hackernoon.com/how-to-change-repo-language-in-github-c3e07819c5bb) [or this](https://stackoverflow.com/questions/34713765/github-changes-repository-to-wrong-language)
- create test suite
- due to xss, I cannot tell what url an iframe is on without hosting it.
- add more padding to the bottom of the navbar
- Add horizontal history view in bottom bar
- Before game starts, show timer
- Be able to detect what webpage the user is on.
	- How to get info from url?
- Time till completion should work by storing a date object at game start, and getting the delta at game over.
- Create game client
- Look into port forwarding with NGINX
- Get accurate times
- add level view to homepage
- make script to start in `n` minutes
- Forward `/` to `/wiki-races` with NGINX
- set up https with nginx and certbot
- Takes username in box
- generates userid
- Get backend capable of accepting submissions
- create homepage that allows users to register username
	- Submits userid with username to database
- create leaderboard that loads level data and views it.
- Get backend capable of accepting submissions
	- semi complete
- create homepage that allows users to register username
  - Submits userid with username to database
- make levels submit data on level clear
	- log that data to database
- make levels submit data on level clear
	- log that data to database
- create leaderboard that loads level data and views it.
- replace JSDOM with custom formatter
- add wikipedia attribution at the bottom of each page
- add https://wiki-races.interalliance.org with certbot
- fix css for small browsers
- Add link to go back to main page when we run out of time.
- Disable opening links in new tab?
- Nicely comment everything.
- get a good server hosting solution.
- Create homepage
- Create backend (hopefully something better than just a JSON file, but we'll see.)