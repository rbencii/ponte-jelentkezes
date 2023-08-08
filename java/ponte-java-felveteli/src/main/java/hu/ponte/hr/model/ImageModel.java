package hu.ponte.hr.model;

import lombok.Builder;

@Builder
public class ImageModel {

    /**
     * A kép base64 string formátumban
     */
    private final String data;
    /**
     * A képhez tartozó ImageMeta adatok
     */
    private final ImageMeta meta;

    /**
     * Konstruktor
     * @param data A kép base64 string formátumban
     * @param meta A képhez tartozó ImageMeta adatok
     */
    public ImageModel(String data, ImageMeta meta) {
        this.data = data;
        this.meta = meta;
    }

    /**
     * A kép gettere
     * @return A kép base64 string formátumban
     */
    public String getData() {
        return data;
    }

    /**
     * A képhez tartozó adatok gettere
     * @return A képhez tartozó ImageMeta adatok
     */
    public ImageMeta getMeta() {
        return meta;
    }
}
