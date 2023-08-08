package hu.ponte.hr.controller;


import hu.ponte.hr.model.ImageMeta;
import hu.ponte.hr.services.ImageStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController()
@RequestMapping("api/images")
public class ImagesController {

    @Autowired
    private ImageStore imageStore;

    @GetMapping("meta")
    public List<ImageMeta> listImages() {return imageStore.getMeta();
    }

    @GetMapping("preview/{id}")
    @ResponseBody
    public byte[] getImage(@PathVariable("id") String id) throws Exception {
        return imageStore.getImageById(id);
	}

}
