def swap(i, j, arr):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


def quickSort(l, h, arr):
    if (l >= h):
        return
    if (h == l + 1):
        if (h < len(arr) and arr[h] < arr[l]):
            swap(l, h, arr)
        return
    pivot = l
    i = l + 1
    j = h - 1
    while (i < j):
        while(arr[i] < arr[pivot]):
            i += 1
        while(arr[j] > arr[pivot]):
            j -= 1
        if (i < j):
            swap(i, j, arr)
    swap(pivot, j, arr)
    quickSort(l, j, arr)
    print('j + 1 is ' + str(j + 1))
    print('h is ' + str(h))
    quickSort(j + 1, h, arr)
