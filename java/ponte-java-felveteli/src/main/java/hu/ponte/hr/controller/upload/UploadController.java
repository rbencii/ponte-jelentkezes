package hu.ponte.hr.controller.upload;

import hu.ponte.hr.model.ImageMeta;
import hu.ponte.hr.model.ImageModel;
import hu.ponte.hr.services.ImageStore;
import hu.ponte.hr.services.SignService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Component
@RequestMapping("api/file")
public class UploadController
{
    @Autowired
    private SignService signService;
    @Autowired
    private ImageStore imageStore;

    @RequestMapping(value = "post", method = RequestMethod.POST)
    @ResponseBody
    public String handleFormUpload(@RequestParam("file") MultipartFile file) throws IOException {
        byte[] _arr = Base64.encodeBase64(file.getBytes());
        String result = new String(_arr);

        return "ok";
    }
}
