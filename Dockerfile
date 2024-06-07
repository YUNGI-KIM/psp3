FROM openjdk:17-jdk
ARG JAR_FILE=build/libs/spring-boot-develop-1.0.jar
COPY ./${JAR_FILE} ${JAR_FILE}
ENTRYPOINT ["java", "-jar","build/libs/spring-boot-develop-1.0.jar"]
