.PHONY: setup start stop

API_TOKEN=$(shell cat api_token)

setup:
	git clone git@github.com:howdyai/botkit.git
	cd botkit;npm install
	npm install forever -g
	npm install

start:
	# debugしたいときはforeverコマンドではなくnodeコマンドを使ったほうがいいかも
	# token=$(API_TOKEN) node slack_bot.js
	token=$(API_TOKEN) forever start slack_bot.js

stop:
	forever stopall
