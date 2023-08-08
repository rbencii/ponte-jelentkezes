package hu.ponte.hr.model;

import lombok.Builder;
import lombok.Getter;

/**
 * @author zoltan
 */
@Getter
@Builder
public class ImageMeta
{
	private String id;
	private String name;
	private String mimeType;
	private long size;
	private String digitalSign;

	public ImageMeta(String id, String name, String mimeType, long size, String digitalSign) {
		this.id = id;
		this.name = name;
		this.mimeType = mimeType;
		this.size = size;
		this.digitalSign = digitalSign;
	}
}
