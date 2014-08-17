Angular tk seed
======================================

To spin up a development server:

	grunt


To load a different configuration file:

	// Sets to dev
	grunt setEnv --env=dev

	// Sets to prod
	grunt setEnv --env=prod


To create a build:

	grunt build


To create a new production release:

	grunt bump build --env=prod


To serve a build:

	grunt serveBuild --env=prod


To run unit tests:

	karma start