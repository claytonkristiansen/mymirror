## myMirror
https://claytonkristiansen.github.io/mymirror/
https://devpost.com/software/mymirror

## Inspiration

Have you ever missed an important meeting because it just "slipped your mind"? Have you rushed out the door into harsh weather you weren't expecting? _myMirror_ seamlessly integrates a solution to these issues into your everyday morning routine.

## What it does

_myMirror_ is a motion sensing smart mirror that interfaces with your personal Google Calendar to prepare you for the day ahead. It features a clean user interface that displays your current time, weather and calendar events, all on your bathroom mirror! When _myMirror_ senses that you're no longer in the room, it automatically turns off the display, saving valuable power and bandwidth. 

## How we built it

The software for _myMirror_ is built using JavaScript, HTML, and CSS, and utilizes the Open Weather Maps and Google Calendar APIs.  These were used to make a webpage that displays the current time, weather, and calendar events elements on _myMirror_'s smart display. The Raspberry Pi has some custom firmware modifications to run on a 420x380 pixel display as well as Python and Bash scripts that handle the motion sensing and screen blanking.

On the hardware side, _myMirror_ is powered by a Raspberry Pi 3 with a motion sensor and a 3.5-inch LCD screen as IO. This interface is then mounted to a mirror made of a sheet of glass with a one-way film. 

## Challenges we ran into

During the building of _myMirror_ we ran into our most significant challenge: integrating the Google Calendar API to our webpage. Due to conflicting documentation, authorizing Google Calendar through our site using Oauth2 was massively frustrating. However, after perusing various online resources and requesting help from the HelpDesk, we found current documentation for the authorization software and were able to successfully integrate calendar tasks from Google.

Some other challenges included modifying the RPi firmware to work on the nonstandard resolution of 420x380p. We also weren't able to control the power state of the monitor from the Pi, which had to be circumvented by a screensaver program from 1996(!). Hey, if it works, it works!

## Accomplishments that we're proud of

In this project we are proud of the motion sensor interface. It features a saturating counter, which dynamically determines display uptime dependent on motion frequency. Dynamic display management is much more environmentally friendly than simply running the display 24/7. We're also very proud of just figuring out how to use the Google API, since none of our team members were even computer science majors. 

## What we learned

In the building of _myMirror_, three of our members became familiar with API calls for the first time. In addition, half of the team was totally unfamiliar with web development. Because of these factors, this hackathon was very much a learning process. 

## What's next for _myMirror_

The prototype of _myMirror_ will go on to live in the house of Ethan, our beloved hardware guy, as he needs all the help remembering his daily tasks. As for the future development, we would love to integrate the TAMU bus schedule to alert you of the next bus time. The code is already there, we just didn't have the time to integrate a backend into this project that pulls the schedules from the TAMU transit website.  We also hope to implement an auto-refresh feature that pulls events from Google Calendar periodically.  Currently, it only pulls the event on browser refresh. In addition, future models would include a larger display for easier readability.
