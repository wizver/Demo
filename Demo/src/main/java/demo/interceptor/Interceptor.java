package demo.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import demo.login.model.UserInfo;

public class Interceptor extends HandlerInterceptorAdapter{
    private static final Logger logger = LoggerFactory.getLogger(Interceptor.class);
        
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                
        // Session Check !!
    	logger.info("===================== START! =======================");
    	logger.info("Request URL is \t: " + request.getRequestURI());
    	
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	if(userInfo != null) {
    		logger.info("Login User is \t: " + userInfo.getUserNm());
    	}
        
        return true;
    }
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView model) throws Exception {
        // model에 데이터 셋팅???
    	logger.info("===================== END! =======================");
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
         
    }
}