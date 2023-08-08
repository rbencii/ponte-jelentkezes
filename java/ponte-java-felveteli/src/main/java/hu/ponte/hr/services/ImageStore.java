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

    /**
     * "Adatbázis" példánya
     */
    private final DB db;
    /**
     * Az id-t osztó AtomicInteger
     */
    private static final AtomicInteger id = new AtomicInteger(10);

    /**
     * Konstruktor
     * @param db DB példány
     */
    @Autowired
    public ImageStore(DB db) {
        this.db = db;
    }

    /**
     * Egy kép adatainak feldolgozása és hozzáadása az "adatbázishoz"
     * @param file A kérésből kapott MultipartFile kép
     * @param digitalSign Az aláírt fájl base64 stringje
     * @return 1
     * @throws Exception
     */
    public int addImage(MultipartFile file, String digitalSign) throws Exception{
        int metaId = id.incrementAndGet();
        byte[] _arr = Base64.encodeBase64(file.getBytes());
        String data = new String(_arr);
        return db.insertImageModel(data, new ImageMeta(Integer.toString(metaId),file.getOriginalFilename(),file.getContentType(),file.getSize(),digitalSign));
    }

    /**
     * A DB listája elemeinek csak az ImageMeta-k kilistázása
     * @return ImageMeta lista
     */
    public List<ImageMeta> getMeta(){
        return db.listImages().stream().map(ImageModel::getMeta).collect(Collectors.toList());
    }

    /**
     * Egy kép lekérése id alapján
     * @param id A kép azonosítója
     * @return byte tömb / a kép
     * @throws Exception
     */
    public byte[] getImageById(String id) throws Exception{
        Optional<ImageModel> img = db.listImages().stream().filter((e)->e.getMeta().getId().equals(id)).findFirst();
        if(img.isEmpty()){
            throw new Exception("File not found");
        }
        return Base64.decodeBase64(img.get().getData());
    }
}
