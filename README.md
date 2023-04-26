# Spring Boot + CockroachDB + Angular Student Survey Application
This is a sample application that demonstrates how to build a web-based student survey application using Spring Boot, CockroachDB, and Angular.

## Requirements
Java 8 or later
Node.js 
Angular CLI 
CockroachDB Serveless

## Setup
1. Clone the repository: git clone https://github.com/janitbidhan/Angular-SpringBoot-SurveyPage
2. Navigate to the project directory: 
   1. Backend contains dockerized springBoot application.
   2. survey-app contains angular
3. Create a new database in CockroachDB servless.
   1. Update the application.properties file with the appropriate CockroachDB connection information.
4. Start the Spring Boot application:  (Run following commands from the backend folder)
   1. mvn clean install 
   2. docker build -t survey_backend_642 . 
   3. docker run -p 8080:8080 --rm  --name survey_backend_container survey_backend_642
5. Navigate to http://localhost:8080/surveys to view all the surveys
6. Start the angular app by:(Run following commands from the survey-app folder)
   1. sudo ng serve
7. Navigate to  http://localhost:4200/  and try the application hands on.

## Features
The application allows users to:
1. View all surveys
2. Submit a survey 

## API Documentation
The application provides a RESTful API that allows clients to interact with the survey data. 

## Technologies Used
Spring Boot
CockroachDB
Angular


## License
This project is licensed under the MIT License. See the LICENSE file for details.