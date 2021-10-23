package selenium.day1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SeleniumDemo1 {
	static WebDriver driver;
	public static void main(String[] args) {
		
		System.setProperty("webdriver.gecko.driver", "./drivers/geckodriver.exe");
		driver =new FirefoxDriver();
		driver.get("http://www.google.com");
		driver.findElement(By.name("q")).sendKeys("selenium");
		
//		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
//		driver =new ChromeDriver();
//		driver.get("http://www.google.com");
//		driver.findElement(By.name("q")).sendKeys("selenium");
		
	}

}
