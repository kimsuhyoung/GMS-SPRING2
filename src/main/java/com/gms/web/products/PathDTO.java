package com.gms.web.products;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class PathDTO {
	public String ctx,img,js,css;
}
