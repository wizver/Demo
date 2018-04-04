package demo.login.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import demo.common.EnDecrypt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import demo.login.model.UserInfo;
import demo.login.service.LoginService;

@Controller
@RequestMapping(value="/login")
public class LoginController {
    private Logger logger  = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    private LoginService loginService;
        
    /**
     * Login
     * @param request
     * @param response
     * @param paramMap
     * @param model
     * @return String
     * @throws Exception
     */
    @RequestMapping(value="/login.ajax")
    public String login(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> paramMap, ModelMap model) throws Exception {
        // PassWord 암호화 !!
    	EnDecrypt enDecrypt = new EnDecrypt();
        paramMap.put("pPassWord", enDecrypt.EncryptAES(paramMap.get("pPassWord")));
        
        // Select Login User Information !!
        UserInfo userInfo = loginService.selectLoginUserInfo(paramMap);
        
        if(userInfo == null){
            logger.debug("Login Error !!");
            
            model.addAttribute("success", "N");
        } else {
            request.getSession().setAttribute("userInfo", userInfo);
            
            logger.debug("Login Success !!");
            
            // locale 수동 변경 : 다국어 처리
            //SessionUtil.changeLocale(userInfo.getUserLang(), request, response, model);
            
            model.addAttribute("success", "Y");
        }
        
        return "jsonView";
    }
    
    /**
     * Logout
     * @return String
     */
    @RequestMapping("/logout.do")
    public String logout(HttpServletRequest request) {
        request.getSession().removeAttribute("userInfo");
        
        return "/login/logout";
    }
}