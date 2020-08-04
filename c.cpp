#include <bits/stdc++.h>
using namespace std;
//
//int main() {
//     string ch;
//     int a[200];
//     int b[200];
//     int n, i, t, res;
//     cin >> ch;        //1001101011001101101011110001 
//     n = ch.length();
//     for (i = 0; i < 200; i++)
//          b[i] = 0;
//     for (i = 1; i <= n; i++) {
//          a[i] = ch[i - 1] - '0';
////		  cout<<a[i]<<endl;
//          b[i] = b[i - 1] + a[i];
////          cout<<b[i]<<endl;
////          cout<<endl;
//     }
//     res = b[n];
//     t = 0;
//     for (i = n; i > 0; i--) {
//          if (a[i] == 0)
//              t++;
//              cout<<t<<endl;
//          if (b[i - 1] + t < res){
//          	 res = b[i - 1] + t;
////          	 cout<<res<<endl;
//		  }
//      }
//     cout << res << endl;
//     return 0;
//}   

// #include <iostream>
// using namespace std;

// int main() {
//      int n, m;
//      cin >> n >> m;
//      int x = 1;
//      int y = 1;
//      int dx = 1;
//      int dy = 1;
//      int cnt = 0;
//      while (cnt != 2) {
//            cnt = 0;
//            x = x + dx;
//            y = y + dy;
//            if (x == 1 || x == n) {
//                ++cnt;
//                dx = -dx;
//                cout << x << " " << y << endl;
//            }
//            if (y == 1 || y == m) {
//                ++cnt;
//                dy = -dy;
//                cout << x << " " << y << endl;
//              }
//         }
//        cout << x << " " << y << endl;
//        return 0;
// }
//
//#include <iostream>
//using namespace std;
//
//int main() {
//        int i, length1, length2;
//        string s1, s2;
//        s1 = "I have a dream.";
//        s2 = "I Have A Dream.";
//        length1 = s1.size();
//        length2 = s2.size();
//        for (i = 0; i < length1; i++)
//            if (s1[i] >= 'a' && s1[i] <= 'z')
//                s1[i] -= 'a' - 'A';
//                cout << s1 << endl;
//        for (i = 0; i < length2; i++)
//            if (s2[i] >= 'a' && s2[i] <= 'z')
//                s2[i] -= 'a' - 'A';
//                cout << s2 << endl;
//        if (s1 == s2)
//            cout << "=" << endl;
//        else if (s1 > s2)
//            cout << ">" << endl;
//        else
//            cout << "<" << endl;
//        return 0;
//}  
// #include <iostream>
// using namespace std;

// int main(){
//  int a,b,c;
//  a=1;
//  b=2;
//  c=3;
//   if(a>b){
//     if(a>c)
//       cout<<a<<' ';
//     else
//       cout<<b<<' ';
//   }
//   cout<<c<<endl;
//   return 0;
// }

// #include <iostream>
// using namespace std;

// struct point{
//     int x; //3
//     int y; //2
// };

// int mian(){
//     struct EX{
//         int a; //1
//         int b; //2
//         point c;
//     }e;
//     e.a=1;
//     e.b=2;
//     e.c.x=e.a+e.b;
//     e.c.y=e.a*e.b;
//     cout<<e.c.x<<','<<e.c.y<<endl;
//     return 0;
// }

// #include <iostream>
// #include <string>
// using namespace std;

// int main(){
//     string str;
//     int i;
//     int count;
//     count=0;
//     getline(cin,str); //NOI2016 will be held in Main Yang.
//     for(i=0;i<str.length();i++){
//         if(str[i]>='a'&&str[i]<='z')
//            count++;
//     }
//    cout<<"It has "<<count<<" lowercases"<<endl;
//    return 0;
// }
//
//#include <iostream>
//using namespace std;
//
//void fun(char *a,char *b){
//    a=b;    
//    (*a)++; 
//}
//
//int main(){
//     char c1,c2,*p1,*p2;
//     c1='A';
//     c2='a';
//     p1=&c1;
//     p2=&c2;
//     cout<<p1<<endl;
//     cout<<p2<<endl;
//     fun(p1,p2);
//     cout<<p1<<endl;
//     cout<<p2<<endl;
//     cout<<c1<<c2<<endl;
//     return 0;
//}

// #include <iostream>
// using namespace std;

// int main() {
//     int a, b, c, d, ans;
//     cin >> a >> b >> c;   //2 3 4
//     d = a - b;    //2-3 =   -1
//     a = d + c;    //-1 + 4 = 3
//     ans = a * b;  // 3 * 3 = 9
//     cout << "Ans = " << ans << endl;
//     return 0;
// }

// int fun(int n) {
//     if (n == 1)
//         return 1;
//     if (n == 2)
//         return 2;
//     return fun(n - 2) - fun(n - 1);
// }

// int main() {
//     int n;
//     cin >> n;  // 7
//     cout << fun(n) << endl;
//     return 0;
// }

// int main()
// {
//     string st;
//     int i, len;
//     getline(cin, st); //Hello, my name is Lostmonkey.
//     len = st.size();
//     for (i = 0; i < len; i++){
//             if (st[i] >= 'a' && st[i] <= 'z')
//             st[i] = st[i] - 'a' + 'A';
//     }
//     cout << st << endl;
//     return 0;
// }

// const int SIZE = 100;
// int main()
// {
//     int p[SIZE];
//     int n, tot, i, cn;
//     tot = 0;
//     cin >> n;  //30
//     for (i = 1; i <= n; i++)
//         p[i] = 1;
//     for (i = 2; i <= n; i++){
//         if (p[i] == 1)
//             tot++;
//         cn = i * 2;
//         while (cn <= n) {
//             p[cn] = 0;
//             cn += i;
//         }
// }
// cout << tot << endl;
// return 0;
// }

// int main()  
// {
//     int a, b;
//     cin>>a>>b;  
//     cout<<a<<"+"<<b<<"="<<a+b<<endl;
// }

// int main()
// {
//     int a, b, u, i, num;
//     cin>>a>>b>>u; //1 100 15
//     num = 0;
//     for (i = a; i <= b; i++)
//         if ((i % u) == 0)
//             num++;
//     cout<<num<<endl;
//     return 0;
// }

// int main()
// {
//     const int SIZE = 100;
//     int n, f, i, left, right, middle, a[SIZE];
//     cin>>n>>f; //12 17
//     for (i = 1; i <= n; i++)
//         cin>>a[i]; //2 4 6 9 11 15 17 18 19 20 21 25 
//     left = 1;
//     right = n;
//     do {
//         middle = (left + right) / 2;
//         if (f <= a[middle])
//             right = middle;
//         else
//             left = middle + 1;
//     }
//     while (left < right);
//     cout<<left<<endl;
//     return 0;
// }

// int main()  
// {
//     const int SIZE = 100;
//     int height[SIZE], num[SIZE], n, ans;
//     cin>>n; //6
//     for (int i = 0; i < n; i++) {
//         cin>>height[i]; //2 5 3 11 12 4
//         num[i] = 1;
//         for (int j = 0; j < i; j++) {
//             if ((height[j] < height[i]) && (num[j] >= num[i]))  
//                 num[i] = num[j]+1;
//         }
//     }
//     ans = 0;
//     for (int i = 0; i < n; i++) {
//     	cout<<num[i]<<endl;
//         if (num[i] > ans) ans = num[i];
//     }
//     cout<<ans<<endl;
// }

// void swap(int &a, int &b)
// {
//     int t;
//     t = a;
//     a = b;
//     b = t;
// }

// int main()
// {
//     int a1, a2, a3, x;      
//     cin>>a1>>a2>>a3;   //91 2 20
//     if (a1 > a2)
//         swap(a1, a2);
//     if (a2 > a3)
//         swap(a2, a3);
//     if (a1 > a2)
//         swap(a1, a2);  
//     cin>>x;             //77
//     if (x < a2)
//         if (x < a1)
//             cout<<x<<' '<<a1<<' '<<a2<<' '<<a3<<endl;
//         else
//             cout<<a1<<' '<<x<<' '<<a2<<' '<<a3<<endl;
//     else
//         if (x < a3)
//             cout<<a1<<' '<<a2<<' '<<x<<' '<<a3<<endl;
//         else
//             cout<<a1<<' '<<a2<<' '<<a3<<' '<<x<<endl;    
//     return 0;
// }

// int rSum(int j)
// {
//     int sum = 0;
//     while (j != 0) {
//         sum = sum * 10 + (j % 10);
//         j = j / 10;
//     }
//     return sum;
// }

// int main()
// {
//     int n, m, i;    
//     cin>>n>>m;      // 90 120
//     for (i = n; i < m; i++)
//         if (i == rSum(i))
//             cout<<i<<' ';
//     return 0;
// }


// const int NUM = 5;
// int r(int n)
// {
//     int i;
//     if (n <= NUM)
//         return n;
//     for (i = 1; i <= NUM; i++)
//         if (r(n - i) < 0)
//             return i;
//     return -1;
// }

// int main()
// {
//     int n;    
//     cin>>n;  // 7 16 
//     cout<<r(n)<<endl;
//     return 0;
// }

// void main()
// {
//     int i,p[5],a,b,c,x,y=20;
//     for(i=0;i<=4;i++)
//         cin>>p[i];  //6 6 5 5 3 
//     a=(p[0]+p[1])+(p[2]+p[3]+p[4])/7;
//     b=p[0]+p[1]/((p[2]+p[3])/p[4]);
//     c=p[0]*p[1]/p[2];
//     x=a+b-p[(p[3]+3)%4];
//     if(x>10)
//         y+= (b*100-a)/(p[p[4]%3]*5);
//     else
//         y+=20+(b*100-c)/(p[p[4]%3]*5);
//     cout<<x<<","<<y<<endl;
// }
// 注：本例中，给定的输入数据可以避免分母为 0或数组元素下标越界。

// void fun(int *a,int *b)
// {
//    int *k;
//    k=a; a=b; b=k;
// }
// int main()
// {
//   int a=3, b=6, *x=&a, *y=&b;
//   fun(x,y);
//   cout<<a<<","<<b<<endl;
// }

// int main()
// {
//     int arr[51]={0};
//     int i,j,t,t2,n=50;
//     for (i=2;i<=sqrt(n);i++)
//         if(arr[i]==0)
//         {
//             t2=n/i;
//             for(j=2;j<=t2;j++) arr[i*j]=1;
//         }
//     t=0;
//     for (i=2;i<=n;i++)
//         if(arr[i]==0)
//         {
//             cout<<setw(4)<<i;   //占位四位
//             t++;
//             if(t%10==0) cout<<endl;
//         }
//     cout<<endl;
// }


// int expand(char s1[],char s2[])
// {
//     int i,j,a,b,c;
//     j=0;
//     for(i=0;(c=s1[i])!='\0';i++)//wer2345d-h454-82qqq
//         if(c=='-'){
//             a=s1[i-1]; b=s1[i+1];
//             if ( isalpha(a)&&isalpha(b) || isdigit(a)&&isdigit(b) )
//             //函数 isalpha(a)用于判断字符 a是否为字母，isdigit(b) 用于判断字符 b是否为数
//             //字，如果是，返回 1，否则返回 0
//             {
//                 j--;
//                 do  
//                     s2[j++]=a++;
//                 while(tolower(a)<tolower(s1[i+1]));
//             }
//             else s2[j++]=c;
//         }

//         else s2[j++]=c;

//     s2[j]='\0';
// }
// int main()
// {
//     char s1[100],s2[300];
//     cin>>s1; //wer2345d-h454-82qqq
//     expand(s1,s2);
//     cout<<s2<<endl; //wer2345defgh45456782qqq
// }

// int main()
// {
//     int i,u[4],a,b,x,y=10;
//     for(i=0;i<=3;i++)
//         cin>>u[i]; //9 3 9 4
//         a=(u[0]+u[1]+u[2]+u[3])/7;
//         b=u[0]/((u[1]-u[2])/u[3]);
//         x=(u[0]+a+2)-u[(u[3]+3)%4];

//         if(x>10)      
//             y+=(b*100-u[3])/(u[u[0]%3]*5);
//         else
//             y+=20+(b*100-u[3])/(u[u[0]%3]*5);
//     cout<<x<<","<<b<<","<<a<<","<<x<<","<<y<<endl;
// } //  注：本例中，给定的输入数据可以避免分母为 0或下标越界。

// int main()
// {
//     int i,j,m[]={2,3,5,7,13};
//     long t;
//     for (i=0;i<=4;i++){
//         t=1;
//         for(j=1;j<m[i];j++)   t*=2;
//         cout <<(t*2-1)*t<<"   ";
//     }
//     cout <<endl;
// }

// #define N 7
// int fun(char s[],char a,int n)
// {
//    int j;
//    j=n;
//    while(a<s[j] && j>0) j--;
//    return j;
// }
// int main()
// {
//    char s[N+1];
//    int k;
//    for(k=1;k<=N;k++)
//       s[k]='A'+2*k+1; 
//    cout <<fun(s,'M',N)<<endl;
// }


// int digit(long n,long m)
// {
//     if(m>0) cout<<n%10; // cout<<setw(2)<<n%10;
//     if(m>1) digit(n/10,m/10);
//     cout<<n%10;    // cout<<setw(2)<<n%10;
// }
// int main()
// {
//     long x,x2;
//     cout<<"Input a number:"<<endl;
//     cin>>x;  //9734526
//     x2=1;
//     while(x2<x)  x2*=10;
//     x2/=10;
//     digit(x,x2);
//     cout<<endl;
//  }


// 【NOIP2017.4.1-完善程序】（快速幂）请完善下面的程序，该程序使用分治法求 xp mod m 的值。
// （第 一空 2 分，其余 3 分）
// 输入：三个不超过 10000 的正整数 x，p，m。
// 输出：xp mod m 的值。
// 提示：若 p 为偶数，xp=(x2)p/2；若 p 为奇数，xp=x*(x2)(p-1)/2。

// #include <iostream>
// using namespace std;

// int x, p, m, i, result;  
// int main() {
//      cin >> x >> p >> m;
//      result =     (1)(1)    ;
//      while (    (2)(2)  )
//            if (p % 2 == 1)
//                result =     (3)(3)   ;
//            p /= 2;
//            x =     (4)(4)    ;
//       }
//       cout <<     (5)(5)     << endl;
//       return 0;
// }    

// int main() {
//     char s[100];
//     int i,n = 0;
//     while((s[n] = getchar()) != '\n') n++;
// //    n--; 
//     for (i = 0; i < n/2-1; i++)
//         if(s[i] == s[n-i-1]) continue;
//         else break;
//     if(i<n/2-1)  cout<<0<<endl;
//     else cout<<1<<endl;
// }    


string fun(string s)
{
	string r;
    int step=0;
    int sum=0;
    
	char set[16]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
    if(s.length()==0) return "";
    while((s.length() % 4)!=0) s="0"+s;
    for(int i=0;i<=s.length();)
    {
        if(step==4)
        {
            r+=set[sum];
            step=0;
            sum=0;
            if(i==s.length()) return r;
        }
        else
        {
        	int index = s.at(i)-'0'; 
            sum += index * pow(2,4-1-step);
            step++;
            i++;
        }
    }
    return "";
}

int main()
{
    string s;
    getline(cin,s);
    cout<<fun(s)<<endl;
}
