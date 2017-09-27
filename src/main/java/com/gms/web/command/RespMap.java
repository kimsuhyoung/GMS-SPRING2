package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class RespMap {
private String id,title,content,regdate,hitcount,email,profile,birthday,gender,count;
private int articleSeq;
}
