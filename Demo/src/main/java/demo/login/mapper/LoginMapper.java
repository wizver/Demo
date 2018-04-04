package demo.login.mapper;

import java.util.Map;

import demo.login.model.UserInfo;

public interface LoginMapper {
    /**
     * Select Login User Information
     * @param paramMap
     * @return UserSessionInfo
     * @throws Exception
     */
    public UserInfo selectLoginUserInfo(Map<String, String> paramMap) throws Exception;
    
}