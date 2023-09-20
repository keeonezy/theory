При написанном задании выводит undefined

Можно изменить первый вариант на
```const arr = [10, 12, 15, 21]

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(arr[i] > 12 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 3000);
}
```


Второй вариант на
```const arr = [10, 12, 15, 21]

for (var i = 0; i < arr.length; i++) {
    setTimeout(function(i) {
        console.log(arr[i] > 12 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 3000, i);
}
```