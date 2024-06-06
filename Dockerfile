FROM openjdk:17-jre
ARG JAR_FILE=build/libs/spring-boot-develop-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} spring-boot.jar
ENTRYPOINT ["java", "-jar","spring-boot.jar"]