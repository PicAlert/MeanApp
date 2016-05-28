# User Web Applcation (MEAN README.md)


## Description
MeanApp is a web interface for users to use with the PicAlert product. The website allows users of the  PicAlert devices to register and edit their accounts and devices on the website. The website also allow users to customize their settings, and review past alerts sent from the PicAlert devices.


The project was developed by a group of aspiring programmers for a Product Development course at the University of Washington Bothell. After the quarter had ended, the project remains open for further needed development before full usage of the product can be done. The full project runs with two other repos linked below:

## Development
This project is one of three component required to run PicAlert. The other two components are linked below:

* [Pi Device](https://github.com/PicAlert/PiApp)

	* Project to run the PiAlert physical device


* [Web API](https://github.com/PicAlert/FlaskApi)

	* Project to run Server that connects Pi Device to the Twilio API


##Latest Version
Most up to date version is 1.0.0 created on 4/26/16

##Licensing
Please see file called License

## Setup
###Mac OSX

####To install
Download homebrew from website: http://brew.sh/


###In terminal:

###Clone and Install Dependencies

```
git clone https://github.com/PicAlert/MeanApp.git

brew install node

npm install bower

npm install

bower install

```

###To run:
In the terminal, navigate to folder.

```
node server.js
```
###To use:
In web browser, go to link http://localhost:8080

###Windows and Linux
Not currently supported on Windows or Linux