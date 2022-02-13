package net.guides.springboot2.springboot2jpacrudexample;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import com.cts.om.Application;
import com.cts.om.model.Order;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OrderControllerIntegrationTest {
	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void contextLoads() {

	}

	@Test
	public void testGetAllOrders() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/orders", HttpMethod.GET, entity,
				String.class);

		assertNotNull(response.getBody());
	}

	@Test
	public void testGetOrderById() {
		Order order = restTemplate.getForObject(getRootUrl() + "/orders/1", Order.class);
		System.out.println(order.getFirstName());
		assertNotNull(order);
	}

	@Test
	public void testCreateOrder() {
		Order order = new Order();
		order.setEmailId("admin@gmail.com");
		order.setFirstName("admin");
		order.setLastName("admin");

		ResponseEntity<Order> postResponse = restTemplate.postForEntity(getRootUrl() + "/orders", order, Order.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateOrder() {
		int id = 1;
		Order order = restTemplate.getForObject(getRootUrl() + "/orders/" + id, Order.class);
		order.setFirstName("admin1");
		order.setLastName("admin2");

		restTemplate.put(getRootUrl() + "/orders/" + id, order);

		Order updatedOrder = restTemplate.getForObject(getRootUrl() + "/orders/" + id, Order.class);
		assertNotNull(updatedOrder);
	}

	@Test
	public void testDeleteOrder() {
		int id = 2;
		Order order = restTemplate.getForObject(getRootUrl() + "/orders/" + id, Order.class);
		assertNotNull(order);

		restTemplate.delete(getRootUrl() + "/orders/" + id);

		try {
			order = restTemplate.getForObject(getRootUrl() + "/orders/" + id, Order.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
