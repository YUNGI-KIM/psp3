# Spring Boot Develop Practice

- This project used Spring Boot.
- Used port is 8080.

- Guide to application.properties for MariaDB
```properties
pring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.datasource.url=jdbc:mariadb://localhost:3306/database
spring.datasource.username=username
spring.datasource.password=password

#update the schema with the given values.
spring.jpa.hibernate.ddl-auto=update
#To beautify or pretty print the SQL
spring.jpa.properties.hibernate.format_sql=true
#show sql
spring.jpa.properties.hibernate.show-sql=true
#show parameter binding
logging.level.org.hibernate.type.descriptor.sql=DEBUG

logging.level.org.hibernate.SQL=DEBUG
```

### How to send a request
- How to Create User (Used form-data)
```
email="example@gmail.com"
password="password"
```
- How to Login User (Used form-data)
```
username="example@gmail.com"
password="password"
```
- How to Create Article (Used JSON. Method POST)
```json
{
  "title": "title",
  "content": "content"
}
```


Write by YUNGI-KIM.