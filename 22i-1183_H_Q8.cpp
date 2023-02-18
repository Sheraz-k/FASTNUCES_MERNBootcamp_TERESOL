#include <iostream>
#include <iomanip>
#include <bitset>
using namespace std;
int main ()
{
int firstno,secondno;
cout<<"Input first number: "; 
cin>>firstno;
cout<<"Input second number: ";
cin>>secondno;
int exponent;
exponent=(firstno&secondno);
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
secondno=exponent<<1;
exponent=firstno&secondno;
firstno=firstno^secondno;
cout<<"Sum= "<<firstno<<"\n";
return 0;
}
