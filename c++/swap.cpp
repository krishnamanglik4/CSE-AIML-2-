#include <iostream>
using namespace std;
int main (){
    int a;
    cout<<"enter first number :";
    cin>>a;
    int b;
    cout<<"enter second number :";
    cin>>b;
    cout<<endl;
    cout<<a<<" and ";
    cout<<b;
    a=a+b;
    b=a-b;
    a=a-b;
    cout<<endl;
    cout<<a<<" and ";
    cout<<b;

    
    return 0;
}