
CREATE TABLE survey (
                        id SERIAL PRIMARY KEY,
                        first_name STRING NOT NULL,
                        last_name STRING NOT NULL,
                        street_address STRING NOT NULL,
                        city STRING NOT NULL,
                        state STRING NOT NULL,
                        zip STRING NOT NULL,
                        telephone_number STRING NOT NULL,
                        email STRING NOT NULL,
                        date_of_survey TIMESTAMP NOT NULL,
                        liked_options JSON,
                        interested_source JSON,
                        recommend String NOT NULL,
                        additional_comments STRING
);



INSERT INTO survey ( first_name, last_name, street_address, city, state, zip, telephone_number, email, date_of_survey, liked_options, interested_source, recommend, additional_comments)
VALUES ('John', 'Doe', '123 Main St', 'Anytown', 'CA', '12345', '1235551234', 'john.doe@gmu.edu', NOW(), '["campus", "atmosphere"]', '"friends"', 'Very Likely', 'Great experience overall.');

INSERT INTO survey (first_name, last_name, street_address, city, state, zip, telephone_number, email, date_of_survey, liked_options, interested_source, recommend, additional_comments)
VALUES ('Jane', 'Doe', '456 Elm St', 'Othertown', 'NY', '54321', '1235555678', 'jane.doe@gmu.edu', NOW(), '["location", "dorm rooms"]', '"Internet"', 'Likely', 'Could use more parking.');

INSERT INTO survey (first_name, last_name, street_address, city, state, zip, telephone_number, email, date_of_survey, liked_options, interested_source, recommend, additional_comments)
VALUES ('Bob', 'Smith', '789 Maple St', 'Somewhere', 'TX', '67890', '1235559012', 'bob.smith@gmu.edu', NOW(), '["sports","location"]', '"television"', 'Unlikely', 'Didnt feel like the right fit.');

INSERT INTO survey (first_name, last_name, street_address, city, state, zip, telephone_number, email, date_of_survey, liked_options, interested_source, recommend, additional_comments)
VALUES ('Josh', 'Smith', '789 Maple St', 'Somewhere', 'TX', '67890', '1235559012', 'josh.smith@gmu.edu', NOW(), '["sports","dorm rooms" ]', '"friends"', 'Unlikely', 'Not cool at all.');

select * from survey;