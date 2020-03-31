package cucumber.option;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features/placeValidation5.feature", glue= {"stepDefinition"}, tags= {"@AddPlace"}, plugin="json:target/jsonReports/cucumber-report.json")
public class TestRunner3 {
	

}
