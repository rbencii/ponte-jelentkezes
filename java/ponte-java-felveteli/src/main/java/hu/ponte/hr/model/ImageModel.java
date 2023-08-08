package hu.ponte.hr.model;

import lombok.Builder;

@Builder
public class ImageModel {

    private final String data;
    private final ImageMeta meta;

    public ImageModel(String data, ImageMeta meta) {
        this.data = data;
        this.meta = meta;
    }

    public String getData() {
        return data;
    }

    public ImageMeta getMeta() {
        return meta;
    }
}
