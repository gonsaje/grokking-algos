# Memory
Our computer is like a drawer. When we need to store something it puts it
inside a little drawer with its own unique address. If we need to store other things
it stores the other thing in the its own little drawer.

## Memory using arrays
Arrays store items contiguously. Let's say we have three items we need to store
so we occupy three spaces. What happens if we need to add a fourth item, but the memory 
"drawer" that is next is already occupied. The computer then needs to relocate the memory
to a spot that can hold 4. And the same would continue if we kept adding items. This could
potentially be very costly and slow.

## Memory using Linked Lists
Lists can use memory anywhere. Items on a list do not need to be next to each other.
As long as they are associated with another drawer they will be connected


### Real world comparison:
Situation: You and 10 friends need to go watch a movie

+ Array: You must find a row with 11 seats so everyone can sit next to each other
+ Linked List: You and your friends decide to split up to sit and watch the movie, but still know where each other are


### Downfall of a Linked List:
You can't just skip to a certain part of the linked list
because the items of a linked list are spread apart
You need the previous one to get to the current one and the current one to get to the next one

On the flip side with arrays, you know exactly where every item on the list is. 


| Runtimes |   Arrays  |  LinkedLists |
|----------|:---------:|:------------:|
|Reading   |    O(1)   |     O(n)     |
|Inserting |    O(n)   |     O(1)     |

Why does it take O(n) time to insert an element into an array?
Suppose we insert at the beginning of an array. How would you do it?
How long would it takes?

It takes O(n) time because we would potentially either have to re-index our items
or find another spot in memory that can hold our the arrays increased size.
If we use .unshift to add to the front we have to reindex every single element
so that the new added element has the index of 0.
If we push our element, we run the risk of needing to relocate our memory
which would also take O(n) time

## Exercise 2.1
You're building a finance app to keep track of your finances for the month. Everyday
you log your expenses, and at the end of the month you review and add them up.
Which would be better for a situation with a lot of inserts and less reads?

Linked List because its constant time to insert and linear time to read.
Arrays have constant time to read, but linear time to insert.
So if there are more insertion requests than read request, it would be better
to use a linked list.


## Adding to the middle of a list

For lists, all you have to do is readjust what the previous item is pointing to.
For arrays, you would have to re-index all of the elements that would get shifted because of the new item.
If there was that issue with space in memory, then the computer would have to find a no slot in memory.


## Deletion

The same idea applies for deleting items. For lists, we could simply redirect an item to point to something else.
This would successfully remove the item quickly. 
For arrays, the computer would have to re-index all the elements over again.

| Runtimes |   Arrays  |  LinkedLists |
|----------|:---------:|:------------:|
|Reading   |    O(1)   |     O(n)     |
|Inserting |    O(n)   |     O(1)     |
|Deleting  |    O(n)   |     O(1)     |

## Sequential Access vs. Random Access

Sequential access is when you go through each item one by one.
Random access is when you call an item by its specifc address.
Ex. There is an array of 15 items, if you were to call the array on its 10th index we would get that element without knowing what came before.

LinkedLists can only be accessed using sequential access.
Arrays can use both sequential and random access.

Because of this, arrays can be faster to access specific information.

## Exercises
