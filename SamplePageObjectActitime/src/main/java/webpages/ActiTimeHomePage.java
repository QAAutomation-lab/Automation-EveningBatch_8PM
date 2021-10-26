package webpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ActiTimeHomePage {
	WebDriver driver;

	public ActiTimeHomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "logoutLink")
	private WebElement logoutLink;
	
	@FindBy(xpath = "//div[text()='Tasks']")
	private WebElement taskLink;
}
