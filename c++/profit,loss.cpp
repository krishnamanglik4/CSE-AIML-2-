#include<iostream>
using namespace std;
int main(){
    int sp ;
    cout<<"enter the selling price :";
    cin>>sp;
    int cp;
    cout<<"enter the cost price : ";
    cin>>cp;

    if(sp>cp)
    cout<<"profit : "<< sp-cp;
    if(cp>sp)
    cout<<"loss : "<< cp-sp;
    if(cp==sp)
    cout<<"no profit no loss";
    return 0;
}