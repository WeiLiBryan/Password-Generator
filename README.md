# Password Generator
----------------------
## Description

Application will generate a random password with different characters defined by the user.

## Prerequisites

None

## Technologies Used

- HTML
- CSS
- Javascript


## Website Appearance

![Index](./Assets/images/demo.png)


## Deployed Link
https://weilibryan.github.io/Password-Generator/

## Code Snippet
```
    while (password.length < length) {
        // Picks which character to input 1-4
        var roll = diceRoll();

        if (roll === 1 && UC === true) {
        password += up[Math.floor(Math.random() * up.length)];
        console.log(password);
        }

        else if (roll === 2 && LC === true) {
        password += low[Math.floor(Math.random() * low.length)];
        console.log(password);
        }

        else if (roll === 3 && NU === true) {
        password += numer[Math.floor(Math.random() * numer.length)];
        console.log(password);
        }

        else if (roll === 4 && SP === true) {
        password += spec[Math.floor(Math.random() * spec.length)];
        console.log(password);
        }
    }
```

## Authors

1. **William W. Bryan** 
- [Github](https://github.com/WeiLiBryan)
- [LinkedIn](https://www.linkedin.com/in/william-bryan-72730019a/)




## License

This project is licensed under the MIT License


## ACKNOWLEDGEMENTS

- [Stack Overflow](https://stackoverflow.com)