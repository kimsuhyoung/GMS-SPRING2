<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="container" style="margin-top:100px">
	<form id="login_box" name="login_box" > 
	<img src="<%=application.getContextPath()%>/resources/img/login.jpg" alt="" /><br /> 
		<div style="font-size: 15px;width: 200px; height: 20px; margin: 0 auto;color: red;">${result}</div>
		<span id="login_id">ID</span>
		<input type="text" id="input_id" name="id" value="mem1"/> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" id="input_pass" name="pass" value="1"/> <br /><br />
		<input id="loginBtn" type="submit" value="LOGIN" /> <!-- 온클릭을 없애고 아이디를 준다.  -->
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
		<input type="reset" value="CANCEL" />
	</form>
</div>
<script>
app.auth.init();
</script>
</body>
</html>