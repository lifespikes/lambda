# This script is used to setup authentication for private
# repositories on developer machines. This authenticates you
# against Private Packagist and GitHub packages.

clear

printf "1/2) NPM Private Repo Setup\n"
printf "================================================\n"
printf "Replacing USERNAME with your GitHub username, "
printf "TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address."

npm login --scope=@lifespikes --registry=https://npm.pkg.github.com

printf "(2/2) NPM Private Repo Setup\n"
printf "================================================\n"
printf "Create a personal access token and make sure it has a packages:read scope.\n"
printf "You can create one here: https://github.com/settings/tokens\n"
printf "Make sure to copy it, we will be using it on two prompts.\n"

printf "\nEnter your GitHub Personal Access Token: "
read -r GITPAT

echo "//npm.pkg.github.com/:_authToken=${GITPAT}" >> ~/.npmrc

printf "Testing npm config on yarn...\n"

YARN_STR=$(yarn info @lifespikes/js-beam 2>&1)
SUB="Opinionated JS bootstrap package for LifeSpikes projects"


if [[ "$YARN_STR" == *"$SUB"* ]]; then
  echo "We were able to get package info from yarn! OK!"
else
  printf "Something went wrong :(\n"
  exit 1
fi
