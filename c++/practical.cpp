#include <iostream>
using namespace std;
int main(){
int n ;
int sum=0;
cout<<"enter number :";
cin>>n;
for(int i=1;i<=5;i++){
int digit=n%10;
sum=sum+digit;
n=n/10;
}
cout<<sum;
return 0;
}
