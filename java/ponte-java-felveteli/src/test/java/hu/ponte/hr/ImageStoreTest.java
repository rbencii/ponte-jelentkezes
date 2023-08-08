package hu.ponte.hr;

import hu.ponte.hr.fakedb.DB;
import hu.ponte.hr.services.ImageStore;
import hu.ponte.hr.services.SignService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.multipart.MultipartFile;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest()
public class ImageStoreTest
{

	String[] filenames = {"cat.jpg", "enhanced-buzz.jpg", "rnd.jpg"};

	@Test
	public void test_01() throws Exception {
		DB db = new DB();
		ImageStore imageStore = new ImageStore(db);
		for (String filename : filenames) {
			byte[] image = Objects.requireNonNull(getClass().getResourceAsStream("/images/" + filename)).readAllBytes();
			MultipartFile file = new MockMultipartFile(filename, image);
			imageStore.addImage(file,"test");
		}

		assertEquals(3, imageStore.getMeta().size());
	}


}
