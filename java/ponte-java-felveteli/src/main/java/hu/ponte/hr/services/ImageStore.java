package hu.ponte.hr.services;

import hu.ponte.hr.model.ImageMeta;
import hu.ponte.hr.fakedb.DB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicInteger;

@Service
public class ImageStore {

    private final DB db;
    private static AtomicInteger id = new AtomicInteger(10);

    @Autowired
    public ImageStore(DB db) {
        this.db = db;
    }

    public int addImage(String data, String name, String mimeType, long size, String digitalSign){
        int metaId = id.incrementAndGet();
        return db.insertImageModel(data, new ImageMeta(Integer.toString(metaId),name,mimeType,size,data));
    }
}
