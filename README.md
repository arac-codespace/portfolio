# Online Portfolio

A online portfolio created using Django and the React.js library.

---

Version History
V1.0 - Initial Release - 5/11/2018

---
# TODO

(1) Hmm, adBlock's iOS browser's scrolling function isn't smooth for some reason.  And what a surprise, IE also has the same issue.  Not a huge issue, but still...

(2) Default android(samsung s4) internet browser only displays the background image?  Odd...


# ADRESSED TODOS
(1) Having issues with mobile safari/adblock browsers related to attachment-fixed/transform animations.  
- Used media queries to allow transform animations for devices >= 800px.

- Update: This issue seems more complicated than I first thought.  The bug persists even without transform animations.  I need to test if it has actually has something to do with transition animations or if it's a bug more closely related to react-router.
- Update: I was able to get around the issue by moving the background settings to #root and adding an overflow-y: scroll + -webkit-overflow-scrolling:touch; to the direct child div.  Also, adding to root and the div child a height of 100vh/100% respectively to fix the white background issue in iOS (4). 

This fix breaks scrolling through window.scroll and many other javascript options.  The only way I was able to get around it is by using the following:

- document.getElementsByClassName("logo-container")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

Since animations are not exactly part of the issue, I was able to remove the transform media queries previously implemented.  


(2) Back to top btn's icon position changed in mobile for some reason.
- Added margin: 0 auto 5px to img.  Hopefully this will fix the issue?

- Update: Didn't work.  I'll probably have to connect an android device to debug things remotely...
- Fixed! Changed img container padding to 0. 


(3) Had issues with favicons not showing when run by python server.  
- Fixed by moving icons to favicon folder and adding its directory to staticfile_dir.

(4) Android device has issues with bg height not spanning 100% of viewport.
- Fixed by setting html height to 100vh.
- Funny enough, android devices don't seem to have an issue with transition animations or the 'back to top arrow being offset' issue.
- Look at transform animation issues for more details(1).

# For future reference:
Base reference...
- https://github.com/mbrochh/django-graphql-apollo-react-demo#part2

Include bootstrap...
- https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0

Include react-router...
- https://reacttraining.com/react-router/web/guides/quick-start
- https://github.com/mbrochh/django-graphql-apollo-react-demo#part2

About the index.js file...
- https://stackoverflow.com/questions/41738421/how-react-js-index-js-file-contacting-index-html-for-id-references

Django + React structure = deploying shennanigans

- https://medium.com/@nicholaskajoh/heres-a-dead-simple-react-django-setup-for-your-next-project-c0b0036663c6
- https://medium.com/@nicholaskajoh/deploy-your-react-django-app-on-heroku-335af9dab8a3
- https://github.com/nicholaskajoh/React-Django
- https://thinkster.io/tutorials/configuring-django-settings-for-production
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment