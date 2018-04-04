package demo.login.service;

import java.util.Map;

import demo.login.model.UserInfo;

public interface LoginService {
    /**
     * Select Login User Information
     * @param paramMap
     * @return UserSessionInfo
     * @throws Exception
     */
    public UserInfo selectLoginUserInfo(Map<String, String> paramMap) throws Exception;
    
}