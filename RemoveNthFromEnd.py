Given a linked list, remove the n-th node from the end of list and return its head.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
            :type head: ListNode
            :type n: int
            :rtype: ListNode
            """
        p1 = p2 = head
        if head == None or head.next == None:
            head = None
            return head
        if n == 1:
            while p2.next.next != None:
                p2 = p2.next
            p2.next = None
            return head
        for i in range(n):
            p2 = p2.next
        if p2 == None:
            return head.next
        else:
            while p2.next != None:
                p1 = p1.next
                p2 = p2.next
            p1.next = p1.next.next
            return head
