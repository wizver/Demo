<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"      %>
<%@ taglib prefix="fmt"    uri="http://java.sun.com/jsp/jstl/fmt"       %>
<%@ taglib prefix="fn"     uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"    %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Login</title>
 
<script type="text/javascript" src="<c:url value='/resources/js/jquery/js/jquery-1.11.1.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/jquery/js/plugin/jquery.cookie.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/jquery/js/plugin/jquery.placeholder.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/myajax.js'/>"></script><!-- ajax script -->
<script type="text/javascript" src="<c:url value='/resources/js/common.js'/>"></script><!-- common script -->
        
        <script type="text/javascript">
            /*===========================================================
             * Page Loading !!
             *===========================================================*/
            $(document).ready(function(){
                setLoginPos();
                
                $("input[type=text], input[type=password]").each(function () {
                    $(this).placeholder();
                });
                
                $(window).resize(function () {
                    setLoginPos();
                });
                
                // Cookie Value Setting
                /*
                var sgaCorpCd = $.cookie("sgaCorpCd");
                var sgaUserId = $.cookie("sgaUserId");
                
                if(gf_getNullToString(sgaCorpCd) == "" || gf_getNullToString(sgaUserId) == ""){
                    $("#pCorpCd").val("");
                    $("#pUserId").val("");
                    $("#pCorpCd").focus();
                } else {
                    $("#pCorpCd").val(sgaCorpCd);
                    $("#pUserId").val(sgaUserId);
                    $("#pPassWord").focus();
                }
                */
                
                $("#pCorpCd").focus();
            });
            
            /*************************************************************
             * Event Function !!
             *************************************************************/
            /*===========================================================
             * Button Click Event
             *===========================================================*/
            $(document).on("click", "#btnLogin", function(e){
                e.preventDefault();
                
                var id = $(this).attr("id");
                
                // Button Click Event
                if(id == "btnLogin"){   // [ Button ] Login
                    login();
                }
            });
            
            /*===========================================================
             * ID Input Box Keyup Event
             *===========================================================*/
            $(document).on("keyup", "#pUserId", function(e){
                e.preventDefault();
                
                // 영문만 입력 가능하게 처리 !!
                if (!(e.keyCode >= 37 && e.keyCode <= 40)) {
                    $(this).val($(this).val().replace(/[^a-z0-9]/gi,''));
                }
                
                $(this).val($(this).val().toUpperCase());
            });
            
            /*************************************************************
             * Ajax Send Event Function !!
             *************************************************************/
            /*===========================================================
             * Login !!
             *===========================================================*/
            function login(){
                                
                if($("#pUserId").val() == ""){
                    alert("아이디를 입력하세요.");
                    $("#pUserId").focus();
                    return false;
                }
                
                if($("#pPassWord").val() == ""){
                    alert("비밀번호를 입력하세요.");
                    $("#pPassWord").focus();
                    return false;
                }
                
                gf_sendForm("loginForm");   // Form Submit
            }
            
            /*************************************************************
             * Ajax Send Callback Function !!
             *************************************************************/
            /*===========================================================
             * Login Callback Function !!
             *===========================================================*/
            function loginAfter(data){
                var success = data.success;
                
                if(success == "Y"){
                    /*
                    if($("#rememberId").is(":checked")){
                        $.cookie("UserId", $("#pUserId").val());
                    } else {
                        $.cookie("UserId", null);
                    }
                    */
                    
                    location.href = "<c:url value="/menu.do"/>";
                } else {
                    alert("로그인을 실패했습니다.");  // Login Failed. !!
                }
            }
            
            /*************************************************************
             * Others Event !!
             *************************************************************/
            /*===========================================================
             * Login창 Position Setting !!
             *===========================================================*/
            function setLoginPos() {
                $("#login").css({ "top":"50%"
                                 ,"margin-top": -($("#login").outerHeight() / 2)
                               });
            }
            
            /*===========================================================
             * Enter Key Event !!
             *===========================================================*/
            $(document).on("keypress", "#pUserId, #pPassWord", function(e){
                if(e.keyCode == 13){
                    login();
                }
            });
        </script>
    </head>
    
    <body id="main">
        <div id="content"></div>
        
        <form id="loginForm" name="loginForm" action="<c:url value='/login/login.ajax'/>">
            <div class="main_cont">
                <div class="logo"><img src="<c:url value='/resources/images/logo.png'/>" /></div>
                
                <div class="login_box">
                    <div class="login_feild row cont01"style="display:;">
                                                
                        <div class="id_feild">
                            <div class="label">아이디</div>
                            <input id="pUserId" name="pUserId" type="text" placeholder="아이디를 입력하세요" />
                        </div>
                        <div class="pass_feild">
                            <div class="label">비밀번호</div>
                            <div class="input"><input id="pPassWord" name="pPassWord" type="password" placeholder="비밀번호를 입력하세요" /></div>
                        </div>
                        <div class="bt_box row">
                            <div class="login_bt"><a id="btnLogin" name="btnLogin">로그인</a></div>
                        </div>
                        
                    </div><!-- // .login_feild -->
                </div><!-- // .login_box -->
            </div><!-- // .main_cont -->
        </form>
    </body>
</html>