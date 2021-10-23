package selenium.day1;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class LaunchingRequiredBrowser {

	public static void main(String[] args) {
		//open ie browser
		launchRequiredBrowser("ie");
		//open firefox browser
		launchRequiredBrowser("firefox");
		//open chrome browser
		launchRequiredBrowser("chrome");
	}	
	static void launchRequiredBrowser(String browserName) {
		
		if(browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
			//create an object of ChromeDriver class to open Chrome browser	
			ChromeDriver cdriver=new ChromeDriver();
		}else if(browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "./drivers/geckodriver.exe");
			FirefoxDriver fdriver=new FirefoxDriver();
		}else if(browserName.equalsIgnoreCase("ie")) {
			System.setProperty("webdriver.ie.driver", "./drivers/IEDriverServer.exe");
			//create an object of InternetExplorerDriver class to open IE browser	
			InternetExplorerDriver idriver=new InternetExplorerDriver();
		}
	}
}
