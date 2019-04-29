package tests;

import org.junit.runner.RunWith;

import cucumber.api.*;
import cucumber.api.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions(features = "use_cases", 
	plugin = { "html:target/cucumber/wikipedia.html"}, 
	monochrome=true, 
	snippets = SnippetType.CAMELCASE)
public class AcceptanceTest {
	
}
