FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/spring-boot-develop-0.0.1-SNAPSHOT
COPY ./${JAR_FILE} ${JAR_FILE}
ENTRYPOINT ["java", "-jar","build/libs/spring-boot-develop-0.0.1-SNAPSHOT.jar"]
