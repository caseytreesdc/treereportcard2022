# treereportcard2022
## The TRC: Casey Trees' Annual Report on the state of DC's trees.
### To make a new trc for the next year, this process works:

1. create `treereportcard2023` repository in github.
1. `git clone git@github.com:caseytreesdc/treereportcard2022.git` if it's not already.
1. `mkdir treereportcard2023`
1. `cd treereportcard2022`
1. `rsync -nav * ../treereportcard2023`, if all is good next step:
1. `rsync -av * ../treereportcard2023`
1. `cd ../treereportcard2023`
1. `git init`
1. `git add .`
1. `git commit -m 'init treereportcard2023`
1. `git remote add origin git@github.com:caseytreesdc/treereportcard2023.git`
1. `git push --set-upstream origin main`
1. go to [Github Pages Settings for the new Repo](https://github.com/caseytreesdc/treereportcard2023/settings/pages).
1. In the Build and deployment publish from the main branch (default) just hit save.
1. Will be published shortly.
