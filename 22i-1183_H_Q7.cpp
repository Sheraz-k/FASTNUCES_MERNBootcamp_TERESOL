#include<iostream>
#include<string>
#include<iomanip>

using namespace std;
int main()
{ 
int l;
cout<<"Two byte value enter plz:\n";
cin>>l;
int m=l&31;
int n=(l>>6);
int o=n&63;
int p=(l>>12);
int q=p&63;
cout<<"Time is :"<<q<<setw(2)<<" Hours"<<o<<setw(2)<<" minutes"<<m<<setw(2)<<" seconds"<<endl;

















return 0;
}
