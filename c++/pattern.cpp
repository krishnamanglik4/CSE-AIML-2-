#include <iostream>
using namespace std;
void print1()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
}
void print2()
{

    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << j;
        }
        cout << endl;
    }
}
void print3()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << i;
        }
        cout << endl;
    }
}
void print4()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= (n - i + 1); j++)
        {
            cout << "*";
        }
        cout << endl;
    }
}
void print5()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= (n - i + 1); j++)
        {
            cout << i;
        }
        cout << endl;
    }
}
void print6()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= (n - i + 1); j++)
        {
            cout << j;
        }
        cout << endl;
    }
}
void print7()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        // space
        for (int j = 0; j < n - i - 1; j++)
        {
            cout << " ";
        }

        // star
        for (int j = 0; j < 2 * i + 1; j++)
        {
            cout << "*";
        }

        // space
        for (int j = 0; j < n - i - 1; j++)
        {
            cout << " ";
        }
        cout << endl;
    }
}
void print8()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        // space
        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }

        // star
        for (int j = 0; j < 2 * n - (2 * i + 1); j++)
        {
            cout << "*";
        }

        // space
        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }
        cout << endl;
    }
}
void print10()
{
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 0; i<2*n -1; i++){
        int s=i;
        if(i>n) s=2*n -i;
        for(int j=0;j<s;j++){
            cout<<"*";
        }
        cout<<endl;
}
}
void print11(){
    int n;
    cout<<"enter a number :";
    cin>>n;
    for(int i=0;i<n;i++){
        int starts=1;
        if(i%2==0) starts=1;
        else starts=0;
        for(int j=0;j<i;j++){
        cout<<starts;
        starts=1-starts;
    }
      cout<<endl;
}}
void print12(){
int n;
    cout<<"enter a number :";
    cin>>n;
    int space=2*(n-1);
    //for numbers
    int i;
    for( i=0;i<n;i++){
    for(int j=1;j<=i;j++){
    cout<<j;
    }
    
    //for spaces
    
    for( int j=1;j<=space;j++){
     cout<<" ";
    }

    //for numbers
    int j;
    for( j=i;j>=1;j--){
    cout<<j;
    }
     cout<<endl;
     space-=2;
}
}
void print13(){
    int n;
    cout << "enter a number :";
    cin >> n;
    int num =1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << num <<" ";
            num++;
        }
        cout << endl;
    }
}
void print14(){
    int n;
    cout << "enter a number :";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for(char ch='A';ch<='A'+i;ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}
void print15(){
}
int main(){
    print8();
    return 0;
}