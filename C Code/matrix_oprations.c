// #include <stdio.h>

float sumMatrix(float age[])
{
    float sum = 0.0;
    for (int i = 0; i < 6; ++i)
    {
        sum += age[i];
    }
    return sum;
}

// int main()
// {
//     float result, age[] = {231111111, 55, 22.6, 3, 40, 18};
//     // age array is passed to calculateSum()
//     result = calculateSum(age);
//     printf("Result = %.2f", result);
//     return 0;
// }