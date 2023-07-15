
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
