/****************************************************************************************
Traveling Salesperson

A salesperson has to go to five cities. (ex. San Fran, LA, Berkeley, Fremont, Palo Alto) 
The sales person wants to go to all 5 cities while traveling the minimim distance.
He adds up the total distance and then picks the path with the lowest distance.
There are 120 permutations of the trip involving th 5 cities.
So it would take 120 operations to solve the problem for 5 cities.
If we increase the number of cities that need to be visited to 6, the number of operations
increases to 720. For 7, it would be 5040.

This algorithm to find the best trip would run at O(n!) time (factorial time).


Recap:
- Binary search is faster than simple search and grow increasingly faster with larger inputs
- Algo time is measured in num of operations and not runtime.

*****************************************************************************************/

