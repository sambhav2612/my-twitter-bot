#include <iostream>
using namespace std;

class relation
{
	int rel[10][10];
	int m, n;

	public:
	  void Cin ()
	  {
	    cout << endl << "Enter Size (m*n): ";
            cin >> m >> n;

	    cout << endl << "Enter matrix: ";
            for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++)
                cin >> rel[i][j];

	  }

	  void print ()
	  {
	    cout << endl << "Matrix: " << endl;
            for (int i = 0; i < m; i++)
            {
	      for (int j = 0; j < n; j++)
                cout << rel[i][j] << " ";
	      cout << endl;
	    }
	  }

	  void reflexive ()
	  {
	    int flag = 1;
	    for (int i = 0; i < m; i++)
	      for (int j = 0; j < n; j++)
	        if ((i == j) && (rel[i][j] == rel[i+1][j+1]))
	        {
		  flag = 0;
		  break;
		}
	    if (!flag)
	      cout << endl << "Matrix is Reflexive" << endl;
	    else
 	      cout << endl << "Matrix is not Reflexive" << endl;
	  }

	  void symmetric ()
	  {
	    int flag = 1;
            for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++)
                if (rel[i][j] == rel[j][i])
                {
                  flag = 0;
                  break;
                }
            if (!flag)
              cout << endl << "Matrix is Symmetric" << endl;
            else
              cout << endl << "Matrix is not Symmetric" << endl;
	  }
}obj;

int main ()
{
	obj.Cin();
	obj.print();
	obj.reflexive();
	obj.symmetric();
	return 0;
}
