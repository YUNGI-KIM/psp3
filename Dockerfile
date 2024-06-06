FROM ubuntu:latest
LABEL authors="m1npr0"
ARG JAR_FILE=build/libs/docker-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} spring-boot.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/spring-boot.jar"]