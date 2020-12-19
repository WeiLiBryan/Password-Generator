# Password Generator
----------------------
## Description

Application will generate a random password with different characters defined by the user.

## Prerequites

None

## Technologies Used

- HTML
- CSS
- Javascript


## Website Appearance

![Index](./assets/images/demo.png))


## Deployed Link
https://weilibryan.github.io/Password-Generator/

## Code Snippet
```
    // var declaration for looping criteria check
  var correct = true;
    // Prompts criteria and repeats if all are false
  while (correct === true) {
    var LC = lowerCase();
    var UC = upperCase();
    var NU = numeric();
    var SP = special();
    correct = criteriaCheck(LC, UC, NU, SP);
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