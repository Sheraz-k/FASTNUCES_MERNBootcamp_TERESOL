#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;
int main()
{
 int a;
 int b;
 int c;
 int d;
 int e;
 int f;
 int g;
 int h;
cout << "enter the ammount :";
cin>>a;
b=a/500;
a=a%500;
c=a/100;
a=a%100;
d=a/50;
a=a%50;
e=a/20;
a=a%20;
f=a/10;
a=a%10;
g=a/5;
a=a%5;
h=a;


cout<<"Currency note"<<setw(1)<<":Number"<<endl;

cout<<"500"<<setw(11) <<":"<<b<<endl; cout<<"100"<<setw(11)<<":"<<c<<endl;

cout<<"50"<<setw(12)<<":"<<d<<endl;

cout<<"20"<<setw(12) <<":"<<e<<endl;

cout<<"10"<<setw(12) <<":"<<f<<endl;

cout<<"5"<<setw(13)<<":"<<g<<endl;

cout<<"1"<<setw(13) <<":"<<h<<endl;

return 0;
}

















