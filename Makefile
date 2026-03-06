install:
	npm install

lint-js:
	npx eslint .

lint-css:
	npx stylelint "**/*.css"

lint-html:
	npx htmlhint "**/*.html"