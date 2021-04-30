Your grandmother asks you to find the key to a suitcase in a box.
Within in the box you see that there are other smaller boxes and those smaller boxes could also contain other boxes.

Approach 1:
+ Make a pile of boxes to look through.
+ Grab a box and look through it.
+ If you find a box, add it to the pile to look thru later.
+ If you find the key, you're done.
+ Repeat.

```js
const searchBox = mainBox => {
    let pile = mainBox.slice();

    while (pile.length > 0) {
        let box = pile.shift();
        for (let item of box) {
            if (Array.isArray(item)) {
                pile.push(item)
            } else if (item === 'key') {
                return "Key Found!"
            }
        }
    }

    return "No Key in Box";
}

console.log(searchBox([["l"], [[0]], [[1], ["key"]]]));
console.log(searchBox([["l"], [[0]], [[1], []]]));
```


Approach 2: (Recursive)
+ Look thru box.
+ If you find a box go back to step 1.
+ If you find a key, you're done.

```js
const searchBox = mainBox => {
    for (let item of mainBox) {
        if (Array.isArray(item)) searchBox(item);
        else if (item === "key") return "Key Found";
    }

    return "No Key Found";
}

console.log(searchBox([["l"], [[0]], [[1], ["key"]]]));
console.log(searchBox([["l"], [[0]], [[1], []]]));
```

Basecase to end a inifinte recursive call 

```js

function countDown(i) {
    if (i < 0) return; // Base Case to end the infinite call
    console.log(i);
    countDown(i - 1); // calling next step in recursive stack with different input
}

```


## The Call Stack


