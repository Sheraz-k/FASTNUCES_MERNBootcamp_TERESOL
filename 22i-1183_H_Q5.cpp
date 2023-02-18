#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;
int main()
{
 int x,y,z;
cout<<"hourly wages:";
cin>>x;
cout<<"No of hours :";
cin>>y;
cout<<"withholding tax:";
cin>>z;
double X=1-(static_cast<double>(z)/100);
double f=(x*y*X);
cout<<" total pay :"<<f;


return 0;
}
