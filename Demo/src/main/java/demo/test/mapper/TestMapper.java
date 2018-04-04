package demo.test.mapper;

import java.util.List;
import java.util.Map;

public interface TestMapper {
	
	public List<Object> selectUserList(Map<String, String> paramMap) throws Exception;

}
