#include <stdio.h>

long fib(int n)
{
    long f[n + 2];
    long i;

    f[0] = 0;
    f[1] = 1;

    for (i = 2; i <= n; i++)
    {

        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
}

int main()
{
    int n = 100000;
    printf("%lu", fib(n));
    // getchar();
    return 0;
}