all: build

build:
	node_modules/.bin/lessc public/css/main.less public/css/main.css
	node_modules/.bin/tsc server/server.ts public/app/app.ts -m commonjs


test: build
	# cd server && bin/test test/*.test.js
	echo "Add some tests lazy"
  
install:
	git submodule update --init
	npm install --s
	
upload:
	# sync all the files
	# rsync -rav -e ssh --delete --exclude-from config/exclude.txt . root@SERVER:~/app
	echo "Upload"

deploy: upload
	# run the remote commands
	# ssh -t root@SERVER "cd ~/app && bash config/deploy.sh"

.PHONY: test test-w
