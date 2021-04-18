#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int getBestTemperature(const int value1, const int value2) {
    const int absValue1 = abs(value1);
    const int absValue2 = abs(value2);

    if (absValue2 > absValue1)
        return value1;
    else if (absValue1 == absValue2)
        return value1 > 0 ? value1 : value2;
    return value2;
}


int main()
{
    int selectedValue = 0;
    int numberOfValues = 0;

    scanf("%d", &numberOfValues);
    for (int index = 0; index < numberOfValues; ++index) {
        int value = 0;
        scanf("%d", &value);

        if (index == 0)
            selectedValue = value;
        else {
            selectedValue = getBestTemperature(value, selectedValue);
        }
    }

    printf("%d\n", selectedValue);

    return 0;
}