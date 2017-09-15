package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;

@Repository
public interface GradeMapper {
	public int insertMajor(List<?> list);
}
