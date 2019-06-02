# Question provided by HackerRank
# Cycle Detection [MEDIUM]
# https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem

# Determine if a linked list has a cycle

#!/bin/python3

import math
import os
import random
import re
import sys

class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node


        self.tail = node

def print_singly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

# Complete the has_cycle function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def has_cycle(head):
    # assign two pointers moving at different speeds
    # return true if the two pointers are pointing at the same node
    ptr1 = head
    ptr2 = head
    while(ptr2.next and ptr2.next.next):
        ptr1 = ptr1.next
        ptr2 = ptr2.next.next
        if (ptr1 == ptr2):
            return True
    return False
if __name__ == '__main__':