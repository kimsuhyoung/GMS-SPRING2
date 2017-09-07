package com.gms.web.constant;

import org.springframework.stereotype.Component;

@Component
public class SQL {
	public static final String MEMBER_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s,%s,%s) VALUES(?,?,?,?,?,?,?,SYSDATE)",DB.TABLE_MEMBER,DB.MEMBER_ID,DB.MEMBER_NAME,DB.MEMBER_PASSWORD,DB.MEMBER_SSN,DB.PHONE,DB.EMAIL,DB.PROFILE,DB.MEMBER_REGDATE);
	//,Database.MEMBER_ID,Database.MEMBER_NAME,Database.MEMBER_PASSWORD,Database.MEMBER_SSN,Database.ARTICLE_REGDATE
	public static final String MEMBER_LIST=String.format("SELECT * FROM %s",DB.TABLE_MEMBER);
	public static final String MEMBER_FINDBYNAME=String.format("select * from %s where %s=?",DB.TABLE_MEMBER,DB.MEMBER_NAME);
	public static final String MEMBER_FINDBYID=String.format("select * from %s where %s=?",DB.TABLE_MEMBER,DB.MEMBER_ID);
	public static final String MEMBER_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s",DB.TABLE_MEMBER);
	public static final String MEMBER_UPDATE=String.format("UPDATE %s SET %s=? WHERE %s=?",DB.TABLE_MEMBER,DB.EMAIL,DB.MEMBER_ID);
	public static final String MEMBER_DELETE=String.format("DELETE FROM %s WHERE %s=?",DB.TABLE_MEMBER,DB.MEMBER_ID);
	
	
	public static final String ARTICLE_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s",DB.TABLE_ARTICLE);
	public static final String ARTICLE_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES(article_seq.nextval,?,?,?,0,SYSDATE)",DB.TABLE_ARTICLE,DB.ARTICLE_SEQ,DB.ARTICLE_ID,DB.TITLE,DB.ARTICLE_CONTENT,DB.ARTICLE_HITCOUNT,DB.ARTICLE_REGDATE);
	
	//public static final String ARTICLE_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES (article_seq.nextval,?,?,?,0,SYSDATE)",Database.TABLE_ARTICLE,Database.ARTICLE_SEQ,Database.ARTICLE_ID,Database.ARTICLE_TITLE,Database.ARTICLE_CONTENT,Database.ARTICLE_HITCOUNT,Database.ARTICLE_REGDATE);
	
	//public static final String ARTICLE_INSERT=String.format("INSERT INTO %s VALUES(article.nextval,?,?,?,0,SYSDATE)",Database.TABLE_ARTICLE);
	//,Database.ARTICLE_SEQ,Database.ARTICLE_ID
	//atabase.ARTICLE_TITLE,Database.ARTICLE_CONTENT,Database.ARTICLE_REGDATE,Database.ARTICLE_HITCOUNT
	public static final String ARTICLE_LIST=String.format("SELECT * FROM %s",DB.TABLE_ARTICLE);
	public static final String ARTICLE_FINDBYID=String.format("SELECT * FROM %s WHERE %s=?",DB.TABLE_ARTICLE,DB.ARTICLE_ID);
	public static final String ARTICLE_FINDBYSEQ=String.format("SELECT * FROM %s WHERE %s=?",DB.TABLE_ARTICLE,DB.ARTICLE_SEQ);
	public static final String ARTICLE_UPDATE=String.format("UPDATE %s SET %s=?, %s=? WHERE %s=?",DB.TABLE_ARTICLE,
			DB.TITLE,DB.ARTICLE_CONTENT,DB.ARTICLE_SEQ);
	public static final String ARTICLE_DELETE=String.format("DELETE FROM %s WHERE %s=?",DB.TABLE_ARTICLE,DB.ARTICLE_SEQ);


	public static final String MAJOR_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s) VALUES(?,?,?,?)", DB.TABLE_MAJOR,DB.MAJOR_ID,DB.TITLE,DB.MEMBER_ID,DB.SUBJ_ID);
	
	public static final String STUDENT_LIST=String.format("select st.* from(select @RNUM := @RNUM + 1 AS NO, t.* from student t ,(SELECT @RNUM:=0) b)st where st.NO between ? and ?");
	public static final String STUDENT_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s where name like ?" ,DB.TABLE_STUDENT);
	public static final String STUDENT_FINDBYNAME=String.format("select * from student where %s like ?","name");
	public static final String STUDENT_FINDBYID=String.format("SELECT * FROM %s WHERE %s like ?",DB.TABLE_STUDENT,DB.MEMBER_ID);
	/*public static final String STUDENT_SEARCH=String.format("SELECT * FROM test where name like ? and rownum between ? and ?");*/
	
	
}
