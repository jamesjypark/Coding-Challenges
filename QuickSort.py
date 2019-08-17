def swap(i, j, arr):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


def quickSort(l, h, arr):
    if (l >= h):
        return
    if (h == l + 1):
        if (arr[h] < arr[l]):
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
    quickSort(j + 1, h, arr)
