git branch
git remote set-url origin https://rachelbarrow:d42b6be6025ec634ecbb980b1b9fc7dcee27d947@github.com/ucsd-cse112/thanOS.git
git config --global user.email "rbarrow@ucsd.edu"
git config --global user.name "Rachel Barrow"
git add -A
git commit -m "Automated JSDocs with [skip ci]"
git pull
git push origin HEAD:${BRANCH}