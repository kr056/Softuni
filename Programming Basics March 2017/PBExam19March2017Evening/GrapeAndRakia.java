package PBExam19March2017Evening;

import java.util.Scanner;

public class GrapeAndRakia {
    public static void main(String[] args) {

        Scanner console = new Scanner(System.in);

        double wineyardArea = Double.parseDouble(console.nextLine());

        double kgperSquareMeter = Double.parseDouble(console.nextLine());

        double brac = Double.parseDouble(console.nextLine());

        double kgGrape = (wineyardArea*kgperSquareMeter)-brac;

        double rakia = ((kgGrape*0.45)/7.5)*9.80;

        double grape = (kgGrape*0.55)*1.50;

        System.out.printf("%.2f%n",rakia);
        System.out.printf("%.2f",grape);




    }
}
