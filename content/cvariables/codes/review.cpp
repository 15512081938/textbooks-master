#include <iostream>
using namespace std;

int main() {
  
  double height, weight, bmi;
  
  // Ask user for their height
  
  cout << "Type in your height (m): ";
  cin >> height;
  
  // Now ask the user for their weight and calculate BMI
  cout << "Type in your weight(kg): ";
  cin >> weight;

  bmi=weight/height*height;
  
  
  return 0;

}