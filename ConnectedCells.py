
# Question provided from HackerRank
# DFS: Connected Cell in a Grid
# https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/
# Using DFS to find maximum connected cells in a grid

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the maxRegion function below.
def maxRegion(grid):
    tempMax = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 1:
                size = getRegionSize(r, c, grid)
                tempMax = max(size, tempMax)
    return tempMax

def getRegionSize(row, column, grid):
    if (grid[row][column] == 0):
        return 0
    size = 1
    grid[row][column] = 0
    for r in range(row - 1, row + 2):
        for c in range (column - 1, column + 2):
            if (r >= 0 and c >= 0 and r < len(grid) and c < len(grid[0]) and grid[r][c] == 1):
                size += getRegionSize(r, c, grid)
    return size

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    m = int(input())

    grid = []

    for _ in range(n):
        grid.append(list(map(int, input().rstrip().split())))

    res = maxRegion(grid)

    fptr.write(str(res) + '\n')

    fptr.close()
