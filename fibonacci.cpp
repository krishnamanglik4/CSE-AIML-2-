#include<iostream>
using namespace std;
int main(){
int num,a=0,b=1,c=0;
cout<<"enter the limit: ";
cin>>num;
for(int i=0;i<num;i++){
   if(a>num) return 0;
    cout<<a<<" ";
    c=a+b;
    a=b;
    b=c;
    
}
return 0;
}