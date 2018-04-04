package demo.test.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import demo.test.service.TestService;

@Controller
@RequestMapping(value="/")
public class TestController {
	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private TestService testService;
	
	@RequestMapping(value="/test.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String sayHello(@RequestParam Map<String, String> paramMap, ModelMap model) throws Exception {
        
        model.addAttribute("say", paramMap.get("say"));
        model.addAttribute("name", paramMap.get("name"));
        
        return "/test/test";
    }
	
	@RequestMapping(value="/menu.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String viewMenu(@RequestParam Map<String, String> paramMap, ModelMap model) throws Exception {
                
        return "/test/menu";
    }
	
	@RequestMapping(value="/login.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String login(@RequestParam Map<String, String> paramMap, ModelMap model) throws Exception {
                
        return "/test/login";
    }
	
	@RequestMapping(value="/selectUserList.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String selectUserList(@RequestParam Map<String, String> paramMap, ModelMap model) throws Exception {
        
        model.addAttribute("list", testService.selectUserList(paramMap));
        
        return "/test/user";
    }

}
