package testscripts;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;
import utilities.SeleniumUtility;
import webpages.BrowserStackHomePage;
import webpages.BrowserStackSignUpPage;

public class TestBrowserStackSetup extends SeleniumUtility{
	
	WebDriver driver;
	BrowserStackHomePage objBrowserStackHomePage;
	BrowserStackSignUpPage objBrowserStackSignUpPage;

	@BeforeTest
	public void setup() {
		
//		WebDriverManager.chromedriver().setup(); 
//		driver = new ChromeDriver();
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		driver.get("https://www.browserstack.com/");
					//or
		setUp("chrome", "https://www.browserstack.com/");
	}

	@Test(priority = 1)
	public void test_navigate_to_homepage_click_on_getstarted() {
		objBrowserStackHomePage = new BrowserStackHomePage(SeleniumUtility.getDriver());
		objBrowserStackHomePage.veryHeader();
		objBrowserStackHomePage.clickOnGetStarted();
	}

	@Test(priority = 2)
	public void test_enter_userDetails() {
		objBrowserStackSignUpPage = new BrowserStackSignUpPage(SeleniumUtility.getDriver());
		objBrowserStackSignUpPage.veryHeader();
		objBrowserStackSignUpPage.enterFullName("TestUser");
		objBrowserStackSignUpPage.enterBusinessEmail("TestUser@gmail.com");
		objBrowserStackSignUpPage.enterPasswrod("TestUserPassword");
	}
	@AfterTest
	public void cleanUp() {
		cleapUp();
	}
}