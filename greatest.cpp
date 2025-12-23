#include <iostream>
using namespace std;
int main(){
    int x,y,z;
    cout<<"enter first number: ";
    cin>> x;
    cout<<"enter second number: ";
    cin>> y;
    cout<<"enter third number: ";
    cin>> z;

    if( x>y && x>z )
       cout<<"first is greatest number";
    else if( y>x && y>z )
       cout<<"second is greatest number";
    else  cout<<"third is greatest number";

    return 0;

}