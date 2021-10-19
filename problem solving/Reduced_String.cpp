#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

string superReducedString(string s) {
    stack<char> A;
        for(int i=0;i<s.size();i++){
            if(A.empty() || s[i] != A.top()){
                A.push(s[i]);
            }else{
                A.pop();
            }
        }
        string ans="";
        while(!A.empty()){
            ans.push_back(A.top());
            A.pop();
        }
        
        reverse(ans.begin(),ans.end());
        if(ans.size()==0) return "Empty String";
        return ans;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = superReducedString(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
