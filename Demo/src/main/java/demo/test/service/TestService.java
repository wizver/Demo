package demo.test.service;

import java.util.List;
import java.util.Map;

public interface TestService {
	
	public List<Object> selectUserList(Map<String, String> paramMap) throws Exception;

}
