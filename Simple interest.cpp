#include<iostream>
using namespace std;
int main(){
    float p,r,t;
    cout<<"enter principal:";
    cin>>p;
    cout<<"enter rate :";
    cin>>r;
    cout<<"enter time:";
    cin>>t;
    double si= (p*r*t)/100;
    cout<<"the simple interest is "<< si ;

    return 0;
}