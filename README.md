# Spring Boot Develop Practice
## Settings

- This project used Spring Boot.
- Used port is 8080.

- Guide to application.properties for MariaDB
```properties
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
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

## How to send a request
### User
- How to Create User (Used form-data to send data, Method POST)
```http request
/user
```
```
email="example@gmail.com"
password="password"
```
- How to Login User (Used form-data to send data, Method POST)
```http request
/login
```
```
username="example@gmail.com"
password="password"
```
- How to Logout User (Method Get)
```http request
/logout
```
### Article
- How to Create Article (Used JSON to send data, Method POST)
```http request
/api/articles
```
```json
{
  "title": "title",
  "content": "content"
}
```
- How to Get All Article (Receive JSON data, Method GET)
```http request
/api/articles
```
- How to Get Article on ArticleId (Receive JSON data, Method GET)
```http request
/api/articles/{id}
```
- How to Get Article on UserId (Receive JSON data, Method GET)
```http request
/api/articles/user/{userId}
```

#### Comments on Article
- How to Add Comment on Article (Used JSON to send data, Method POST)
```http request
/api/articles/{articleId}/comments
```
```json
{
  "comment": "comment's content"
}
```

- How to Get Comments on ArticleId (Receive JSON data, Method GET)
```http request
/api/articles/{articleId}/comments
```
- How to Get Comments on UserId (Receive JSON data, Method GET)
```http request
/api/articles/comments/user/{userId}
```
- How to Delete Comments (Method DELETE)
```http request
/api/articles/comments/{commentId}
```
- How to Update Comments (Used JSON to send data, Method PUT)
```http request
/api/articles/comments/{commentId}
```
```json
{
  "comment": "Update comment's content"
}
```
### Notification
- How to Create Notification (Used JSON to send data, Method POST)
```http request
/api/notifications
```
```json
{
  "title": "공지 3",
  "content": "내용 3",
  "emergency": false
}
```
- How to Get All Notification (Receive JSON data, Method GET)
```http request
/api/notifications
```
- How to Get Notification (Receive JSON data, Method GET)

```http request
/api/notifications/{id}
```



Write by YUNGI-KIM.