package com.gms.web.service;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface //jdk8 버전 떄문에 쓸수 있다.
public interface IPostService {
	public void execute(Object o);

}
