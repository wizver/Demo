package demo.login.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.login.mapper.LoginMapper;
import demo.login.model.UserInfo;

@Service
public class LoginServiceImpl implements LoginService {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    private LoginMapper loginMapper;
    
    /**
     * Select Login User Information
     * @param paramMap
     * @return UserSessionInfo
     * @throws Exception
     */
    public UserInfo selectLoginUserInfo(Map<String, String> paramMap) throws Exception {
        return loginMapper.selectLoginUserInfo(paramMap);
    }
    
}