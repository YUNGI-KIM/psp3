FROM ubuntu:latest
LABEL authors="m1npr0"
ARG JAR_FILE=build/libs/spring-boot-develop-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} spring-boot.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/spring-boot.jar"]