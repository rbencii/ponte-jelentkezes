package hu.ponte.hr.controller.upload;

import hu.ponte.hr.services.ImageStore;
import hu.ponte.hr.services.SignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;

@Component
@RequestMapping("api/file")
public class UploadController
{
    @Autowired
    private SignService signService;
    @Autowired
    private ImageStore imageStore;

    /**
     * A fájl aláírása és tárolása
     * @param file a kép
     * @param response küldött válasz
     * @throws Exception Exception
     */
    @RequestMapping(value = "post", method = RequestMethod.POST)
    @ResponseBody
    public void handleFormUpload(@RequestParam("file") MultipartFile file, HttpServletResponse response) throws Exception {
        String digitalSign = signService.signFile(file);
        int result = imageStore.addImage(file,digitalSign);
        if(result!=1){
            response.sendError(500);
        }
    }
}
