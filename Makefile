all: build

build:
	tsc server/server.ts public/app/app.ts
	lessc public/css/style.less public/css/style.css

test: build
	cd server && bin/test test/*.test.js
  
install:
	npm install
	bower install
	# bower components will get synched with rsync

upload:
	# sync all the files
	rsync -rav -e ssh --delete --exclude-from config/exclude.txt . root@detmer.orbit.al:~/detmer

deploy: upload
	# run the remote commands
	ssh -t root@detmer.orbit.al "cd ~/detmer && bash config/deploy.sh"


# oh, cool, if a directory exists, it doesn't rebuild it
.PHONY: test test-w
