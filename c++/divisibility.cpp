#include <iostream>
using namespace std;
int main (){
    int x,y;
    cout<<"enter the first number: ";
    cin>>x;
    cout<<"enter the second number: ";
    cin>>y;
    if(x%y==0)
    cout<<"the first number is divisible by second";
    else
    {
        cout<<"not divisible";
    }
    return 0;
}
