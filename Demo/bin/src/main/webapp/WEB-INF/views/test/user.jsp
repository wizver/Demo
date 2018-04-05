<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%
    String contextPath = request.getContextPath();
%>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />        
	<title>Demo</title>
	
	<link href="<%=contextPath%>/resources/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript" src="<%=contextPath%>/resources/js/jquery/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="<%=contextPath%>/resources/bootstrap/js/bootstrap.min.js"></script>
</head>
	
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">청구관리</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-lock"></span> 비밀번호 변경</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> 로그아웃</a></li>
      </ul>
    </div>
  </div>
</nav>

<h2>사용자 목록 : ${fn:length(list)} 명</h2>

<div class="container">
<table class="table table-bordered">
    <colgroup>
        <col width="15%"/>
 		<col width="15%"/>
        <col width="*"/>
        <col width="15%"/>
        <col width="20%"/>
    </colgroup>
    <thead>
        <tr>
            <th scope="col">아이디</th>
            <th scope="col">사용자명</th>
            <th scope="col">부서명</th>
            <th scope="col">직위</th>
			<th scope="col">이메일</th>
        </tr>
    </thead>
    <tbody>
        <c:choose>
            <c:when test="${fn:length(list) > 0}">
                <c:forEach items="${list}" var="row">
                    <tr>
                        <td align="center">${row.user_id }</td>
                        <td align="center">${row.user_nm }</td>
                        <td align="center">${row.dept_nm }</td>
                        <td align="center">${row.posi_nm }</td>
						<td align="center">${row.user_email }</td>
                    </tr>
                </c:forEach>
            </c:when>
            <c:otherwise>
                <tr>
                    <td colspan="5">조회된 결과가 없습니다.</td>
                </tr>
            </c:otherwise>
        </c:choose>
         
    </tbody>
</table>
</div>

</body>
</html>