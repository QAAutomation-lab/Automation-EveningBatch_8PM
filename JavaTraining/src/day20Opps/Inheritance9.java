package day20Opps;

//parent class
class Company {
	void display() {
		System.out.println("I am company class display()...");
	}
}
// child class of Company
class Employee extends Company {
	void display() {
		System.out.println("I am Employee class display()...");
		super.display();
	}
	void callme() {
		System.out.println("I am Employee class callme()...");
	}
}
public class Inheritance9 {

	public static void main(String[] args) {
		Employee e1=new Employee();
		e1.display();
		e1.callme();
		System.out.println("****************************");
		Company c1=new Company();
		c1.display();
		System.out.println("****************************");
		Company e2=new Employee();
		e2.display();
	}
}
