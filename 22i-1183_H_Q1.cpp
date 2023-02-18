#include<iostream>
using namespace std;
int main()
{
    char uppercase,lowercase;

    int ascii;
    cout<<"Enter the Character (in Uppercase): ";
    cin>>uppercase;
    ascii = uppercase;
    ascii = ascii+32;
    lowercase = ascii;
    cout<<"\nIts lowercase: "<<lowercase<<"\n";
    return 0;
}
