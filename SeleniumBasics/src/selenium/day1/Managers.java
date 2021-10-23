package selenium.day1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Managers {
	static WebDriver driver;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		WebDriverManager.chromedriver().setup();
//		driver =new ChromeDriver();
//		driver.get("http://www.google.com");
//		driver.findElement(By.name("q")).sendKeys("selenium");
		WebDriverManager.firefoxdriver().setup();
		driver =new FirefoxDriver();
		driver.get("http://www.google.com");
		driver.findElement(By.name("q")).sendKeys("selenium");

	}

}
