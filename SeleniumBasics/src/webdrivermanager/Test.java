package webdrivermanager;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		
		//WebDriverManager.iedriver().setup();
		// creating an object of chromedriver class and upcasting it to WebDriver
		// interface
		WebDriver driver = new ChromeDriver();
		// enter required application url
		driver.get("https://demo.actitime.com/login.do");

		driver.close();
	}
}
