Sample Input

2
Hacker
Rank
Sample Output

Hce akr
Rn ak


#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    int number_string;
    cin >> number_string;
    
    string string_to_analize, even_index_string, odd_index_string;
    
    for(int j=0; j < number_string; j++)
    {
        even_index_string = "";
        odd_index_string = "";
        cin>> string_to_analize;
        
        for(int i=0; i< string_to_analize.size();i++)
        {
            if(i%2==0)
                even_index_string += string_to_analize[i];
            else
                odd_index_string += string_to_analize[i];
        }
        cout << even_index_string << " " << odd_index_string<<endl;
    }  
    return 0;
}
