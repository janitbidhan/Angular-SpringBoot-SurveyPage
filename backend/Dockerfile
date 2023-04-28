FROM openjdk:latest

CMD ["mvn clean install"]

COPY target/assignment3-1.jar .

# Copy the SSL root certificate file to the container
COPY root.crt /root/.postgresql/

EXPOSE 8080

CMD ["java", "-jar", "assignment3-1.jar"]

# mvn clean install
# docker build -t survey_backend_642 .
# docker run -d -p 8080:8080 --rm  --name survey_backend_container survey_backend_642