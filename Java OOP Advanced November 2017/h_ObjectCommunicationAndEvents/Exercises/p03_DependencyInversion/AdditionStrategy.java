package h_ObjectCommunicationAndEvents.Exercises.p03_DependencyInversion;

public class AdditionStrategy implements Calculator {

    @Override
    public int calculate(int firstOperand, int secondOperand) {
        return firstOperand+secondOperand;
    }
}
