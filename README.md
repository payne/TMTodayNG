
Small steps each day to practice.

An angular port of the https://payne.github.io/TMtoday1/index.html idea.

## Deploy to github pages
Deploy using the technique described in https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4

### First time setup
```
 1033  git checkout -b gh-pages
 1034  git push origin gh-pages
 1035  npm install -g angular-cli-ghpages
 1037  ng build  --base-href https://payne.github.io/TMTodayNG/
 1040  ngh --dir=dist/tmtoday-ng
```

### Subsequent deploys
On the main branch:
```
 1041  ng build --base-href https://payne.github.io/TMTodayNG/
 1042  ngh --dir=dist/tmtoday-ng
```

## Work log

First night, very small steps, but I got something deployed.
Used my old https://github.com/payne/tvMediaTable1 as reference for routes.

Following the command from [this random google result that has a ton of popups](https://www.scaler.com/topics/git/git-log-one-line/):

```base
git log --graph --pretty="%C(green) Hash: %h %C(red)Date: %ad %C(yellow) Message: %s " --date=human
```


*  Hash: 2381ebe Date: 4 minutes ago  Message: Added about note and a link to the github repo 
*  Hash: 47f592f Date: 6 minutes ago  Message: ng generate component about 
*  Hash: e278105 Date: 7 minutes ago  Message: First time deploy worked 
*  Hash: e3d64ca Date: 13 minutes ago  Message: Updated READMEs. 
*  Hash: f57156b Date: 15 minutes ago  Message: Added routes and simple text placeholders. 
*  Hash: 84f881f Date: 21 minutes ago  Message: ng generate component meeting-dates 
*  Hash: 3a69d14 Date: 21 minutes ago  Message: ng generate component speakers 
*  Hash: 4f2396f Date: 22 minutes ago  Message: ng generate component home 
*  Hash: 0dae1a9 Date: 23 minutes ago  Message: 1995 style "menu" 
*  Hash: 105d1c2 Date: 27 minutes ago  Message: ng generate component simpleMenu1 
*  Hash: a4419ea Date: 33 minutes ago  Message: initial commit 
