
# Question provided from LeetCode
# Plus One [EASY]
# https://leetcode.com/problems/plus-one/
# Adds one to the list representation of an integer

class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        lastIndex = len(digits) - 1
        if (digits[lastIndex] != 9):
            digits[lastIndex] += 1
        else:
            while(lastIndex >= 0 and digits[lastIndex] == 9):
                digits[lastIndex] = 0
                lastIndex -= 1
            if lastIndex >= 0:
                digits[lastIndex] += 1
            else:
                digits.insert(0, 1)
        return digits