package hu.ponte.hr.fakedb;

import hu.ponte.hr.model.ImageMeta;
import hu.ponte.hr.model.ImageModel;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class DB {

    private static final List<ImageModel> DB = new ArrayList<>();

    public int insertImageModel(String data, ImageMeta meta){
        DB.add(new ImageModel(data, meta));
        return 1;
    }

    public List<ImageModel> listImages(){
        return new ArrayList<>(DB);
    }
}
