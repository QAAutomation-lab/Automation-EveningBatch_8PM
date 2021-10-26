package webScripts;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;
import webpages.GoogleSearchPage;

public class GoogleSearchTest {
	WebDriver driver;
	GoogleSearchPage getGoogleSearchPage;
	@Test
	public void testCase() {
		WebDriverManager.chromedriver().setup(); 
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.google.com");
		getGoogleSearchPage=new GoogleSearchPage(driver);		
		getGoogleSearchPage.searchText("Selenium");
	}
}
