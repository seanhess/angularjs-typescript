all: build

build:
	tsc server/server.ts public/app/app.ts -m commonjs
	lessc public/css/main.less public/css/main.css

test: build
	# cd server && bin/test test/*.test.js
	echo "Add some tests lazy"
  
install:
	git submodule update --init
	npm install --s
	bower install
	
upload:
	# sync all the files
	# rsync -rav -e ssh --delete --exclude-from config/exclude.txt . root@detmer.orbit.al:~/detmer
	echo "Upload"

deploy: upload
	# run the remote commands
	# ssh -t root@SERVER "cd ~/detmer && bash config/deploy.sh"

.PHONY: test test-w
