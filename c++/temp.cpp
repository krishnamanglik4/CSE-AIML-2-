#include<iostream>
using namespace std;
int main() {
	int num;
	int a,b,c;
	cin>>num;
	c= num%10;
	b=(num%100)/10;
    a= num/100;

    int x= (a*a*a)+(b*b*b)+(c*c*c);
    if (x== num){
        cout<<"armstrong"<<endl;
    }
    else cout<<"not armstrong";
    return 0;
}