package demo.test.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.test.mapper.TestMapper;

@Service
public class TestServiceImpl implements TestService {
	
	@Autowired
	private TestMapper testMapper;

	@Override
	public List<Object> selectUserList(Map<String, String> paramMap) throws Exception {
		// TODO Auto-generated method stub
		return testMapper.selectUserList(paramMap);
	}

}
