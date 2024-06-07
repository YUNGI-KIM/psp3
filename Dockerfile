FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/spring-boot-develop-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar","build/libs/spring-boot-develop-0.0.1-SNAPSHOT.jar"]
