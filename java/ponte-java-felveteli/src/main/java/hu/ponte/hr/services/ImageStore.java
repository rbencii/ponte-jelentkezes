package hu.ponte.hr.services;

import hu.ponte.hr.model.ImageMeta;
import hu.ponte.hr.fakedb.DB;
import hu.ponte.hr.model.ImageModel;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class ImageStore {

    private final DB db;
    private static final AtomicInteger id = new AtomicInteger(10);

    @Autowired
    public ImageStore(DB db) {
        this.db = db;
    }

    public int addImage(MultipartFile file, String digitalSign) throws Exception{
        int metaId = id.incrementAndGet();
        byte[] _arr = Base64.encodeBase64(file.getBytes());
        String data = new String(_arr);
        return db.insertImageModel(data, new ImageMeta(Integer.toString(metaId),file.getOriginalFilename(),file.getContentType(),file.getSize(),digitalSign));
    }

    public List<ImageMeta> getMeta(){
        return db.listImages().stream().map(ImageModel::getMeta).collect(Collectors.toList());
    }

    public byte[] getImageById(String id) throws Exception{
        Optional<ImageModel> img = db.listImages().stream().filter((e)->e.getMeta().getId().equals(id)).findFirst();
        if(img.isEmpty()){
            throw new Exception("File not found");
        }
        return Base64.decodeBase64(img.get().getData());
    }
}
