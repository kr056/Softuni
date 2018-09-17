package EncapsulationLab.p01_SortByNameAndAge;

public class Person {
    private String firstName;
    private String lastName;
    private int age;

    public String getFirstName() {
        return firstName;
    }

    public int getAge() {
        return age;
    }

    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old.";
    }
}
