package hu.ponte.hr.fakedb;

import hu.ponte.hr.model.ImageMeta;
import hu.ponte.hr.model.ImageModel;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class DB {
    /**
     * Adatbázis szimulálására egy listát használok
     */
    private static final List<ImageModel> DB = new ArrayList<>();

    /**
     * Egy kép hozzáadása
     * @param data A kép base64 string formátumban
     * @param meta A képhez tartozó ImageMeta adatok
     * @return 1
     */
    public int insertImageModel(String data, ImageMeta meta){
        DB.add(new ImageModel(data, meta));
        return 1;
    }

    /**
     * A képek kilistázása
     * @return egy új ArrayList másolat
     */
    public List<ImageModel> listImages(){
        return new ArrayList<>(DB);
    }
}
