package webpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import static org.testng.Assert.assertEquals;

public class BrowserStackHomePage {
	WebDriver driver;
	@FindBy(xpath = "//h1")
	private WebElement header;
	
	@FindBy(xpath = "//*[@id='signupModalButton']")
	private WebElement getStarted;

	public BrowserStackHomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void veryHeader() {
		String getheadertext = header.getText();
		assertEquals("App & Browser Testing Made Easy", getheadertext);
	}

	public void clickOnGetStarted() {
		getStarted.click();
	}
}