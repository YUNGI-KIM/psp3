package kr.clos21.springbootdevelop;

import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddUserRequest;
import kr.clos21.springbootdevelop.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.dto.AddArticleRequest;
import kr.clos21.springbootdevelop.dto.UpdateArticleRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.ResultHandler;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class ArticleApiControllerTest {

	@Autowired
	protected MockMvc mockMvc;

	@Autowired
	protected ObjectMapper objectMapper;

	@Autowired
	private WebApplicationContext context;

	@Autowired
	ArticleRepository articleRepository;

	@BeforeEach
	public void mockMvcSetUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
				.build();
		articleRepository.deleteAll();
	}

	@DisplayName("addArticle: Article add success.")
	@Test
	public void addArticle() throws Exception {
		// given
		final String url = "/api/articles";
		final String title = "title";
		final String content = "content";
		final AddArticleRequest userRequest = new AddArticleRequest(title, content);

		final String requestBody = objectMapper.writeValueAsString(userRequest);

		// when
		ResultActions result = mockMvc.perform(post(url)
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(requestBody));

		// then
		result.andExpect(status().isCreated());

		List<Article> articles = articleRepository.findAll();

		assertThat(articles.size()).isEqualTo(1);
		assertThat(articles.get(0).getTitle()).isEqualTo(title);
		assertThat(articles.get(0).getContent()).isEqualTo(content);
	}

	@DisplayName("findAllArticles: All Article find success.")
	@Test
	public void findAllArticles() throws Exception {
		// given
		final String url = "/api/articles";
		final String title = "title";
		final String content = "content";

		articleRepository.save(Article.builder()
				.title(title)
				.content(content)
				.build());

		// when
		final ResultActions resultActions = mockMvc.perform(get(url)
				.accept(MediaType.APPLICATION_JSON));

		// then
		resultActions
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].content").value(content))
				.andExpect(jsonPath("$[0].title").value(title));
	}

	@DisplayName("findArticle: Article find by id success.")
	@Test
	public void findArticle() throws Exception {
		// given
		final String url = "/api/articles/{id}";
		final String title = "title";
		final String content = "content";

		Article savedArticle = articleRepository.save(Article.builder()
				.title(title)
				.content(content)
				.build());

		// when
		final ResultActions resultActions = mockMvc.perform(get(url, savedArticle.getId()));

		// then
		resultActions
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.content").value(content))
				.andExpect(jsonPath("$.title").value(title));
	}


	@DisplayName("deleteArticle: Article delete by id success.")
	@Test
	public void deleteArticle() throws Exception {
		// given
		final String url = "/api/articles/{id}";
		final String title = "title";
		final String content = "content";

		Article savedArticle = articleRepository.save(Article.builder()
				.title(title)
				.content(content)
				.build());

		// when
		mockMvc.perform(delete(url, savedArticle.getId()))
				.andExpect(status().isOk());

		// then
		List<Article> articles = articleRepository.findAll();

		assertThat(articles).isEmpty();
	}


	@DisplayName("updateArticle: Article update by id success")
	@Test
	public void updateArticle() throws Exception {
		// given
		final String url = "/api/articles/{id}";
		final String title = "title";
		final String content = "content";

		Article savedArticle = articleRepository.save(Article.builder()
				.title(title)
				.content(content)
				.build());

		final String newTitle = "new title";
		final String newContent = "new content";

		UpdateArticleRequest request = new UpdateArticleRequest(newTitle, newContent);

		// when
		ResultActions result = mockMvc.perform(put(url, savedArticle.getId())
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(request)));

		// then
		result.andExpect(status().isOk());

		Article article = articleRepository.findById(savedArticle.getId()).get();

		assertThat(article.getTitle()).isEqualTo(newTitle);
		assertThat(article.getContent()).isEqualTo(newContent);
	}

}

@SpringBootTest
@AutoConfigureMockMvc
class UserApiControllerTest {
	@Autowired
	protected MockMvc mockMvc;

	@Autowired
	protected ObjectMapper objectMapper;

	@Autowired
	private WebApplicationContext context;

	@Autowired
	UserRepository userRepository;


	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@BeforeEach
	public void mockMvcSetUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
				.build();
		userRepository.deleteAll();
	}

	@DisplayName("addUser: User add success.")
	@Test
	public void addUser() throws Exception {
		// given
		final String url = "/user";
		final String email = "user@clos21.kr";
		final String password = "password";
		final AddUserRequest userRequest = new AddUserRequest();
		userRequest.setEmail(email);
		userRequest.setPassword(password);


		final String requestBody = objectMapper.writeValueAsString(userRequest);

		// when
//		ResultActions result = mockMvc.perform(post(url)
//				.contentType(MediaType.MULTIPART_FORM_DATA)
//				.content(requestBody));
		ResultActions result = mockMvc.perform(post(url)
				.param("email", email)
				.param("password", password));

		// then
		result.andExpect(status().isCreated());

		Optional<User> users = userRepository.findByEmail(email);

		assertThat(users.isPresent()).isEqualTo(true);
		assertThat(users.get().getUsername()).isEqualTo(email);
		assertThat(bCryptPasswordEncoder.matches(password, users.get().getPassword())).isEqualTo(true);

	}

	@DisplayName("loginUser: User login success.")
	@Test
	public void loginUser() throws Exception {
		//given
		final String url = "/login";
		final String email = "user@clos21.kr";
		final String password = "password";
		User targetUser = userRepository.save(User.builder()
				.email(email)
				.password(password)
				.build());

		//when
		ResultActions result = mockMvc.perform(post(url)
				.param("username", email)
				.param("password", password));
		//when
		ResultActions confirm = mockMvc.perform(get("/api/articles"));
		//then
		confirm.andExpect(status().isOk());

		Optional<User> users = userRepository.findByEmail(email);

		assertThat(users.isPresent()).isEqualTo(true);
		assertThat(users.get().getUsername()).isEqualTo(targetUser.getUsername());
		assertThat(bCryptPasswordEncoder.matches(password, users.get().getPassword())).isEqualTo(bCryptPasswordEncoder.matches(password, targetUser.getPassword()));

	}

	@DisplayName("logoutUser: User logout success")
	@Test
	public void logoutUser() throws Exception {
		//given
		final String url = "/logout";
		final String email = "user@clos21.kr";
		final String password = "password";
		User targetUser = userRepository.save(User.builder()
				.email(email)
				.password(password)
				.build());

		//when
		ResultActions loginResult = mockMvc.perform(post("/login")
				.param("username", email)
				.param("password", password));

		//when
		ResultActions logoutResult = mockMvc.perform(get(url));
		logoutResult.andDo(print()).andExpect(status().isOk());

	}
}