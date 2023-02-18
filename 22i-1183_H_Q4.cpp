#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;
int main()
{int i;
int a;
int b;
int u=3;
int p=4;

double X;
cout<<" put the value of i:";
cin>>i;
cout<<"put the values of a and b respectively:";
cin>>a;
cin>>b;
 X=(pow(u*(pow (i,a/b))*((i*i)-1),0.5)/(pow(((p*1)-2),0.5)+(pow(((p*i)-2),0.5))));

cout<<"\nresult:"<<X<<endl;
return 0;
}
