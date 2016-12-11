##Quarter Checker

<span>A simple JavaScript project which allows
to identifity a point quarter based on
input values of its 'x' and 'y' axis.</span>

Here is its code:

```javascript
 if(isNaN(+x) || isNaN(+y)) {
        print('Some coordinate was passed with incorrect value!');
    }
  if(x == '' || y == '') {
        print('Some coordinate value is empety');
  } else if(x == 0 && y > 0) {
        print('Point is in 1 or 2 QUARTER!');
  } else if(x == 0 && y < 0) {
        print('Point is in 3 or 4 QUARTER!');
  } else if(x > 0 && y == 0) {
        print('Point is in 1 or 4 QUARTER!');
  } else if(x < 0 && y == 0) {
        print('Point is in 2 or 3 QUARTER!');
  } else if(x > 0 && y > 0) {
        document.write('Point is in the first QUARTER!');
  } else if(x < 0 && y > 0) {
        document.write('Point is in the second QUARTER!');
  } else if(x < 0 && y < 0) {
        document.write('Point is in the third QUARTER!');
  } else if(x > 0 && y < 0) {
        document.write('Point is in the fourth QUARTER!');
  } else if(x == 0 && y == 0) {
        print('Point is in the beginning of coordinate system!');
  }
```