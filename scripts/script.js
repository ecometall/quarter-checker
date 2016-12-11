var output = "";

function print(data) {
    output = '<h2>' + data + '</h2>';
    document.getElementById('output').innerHTML = output;
}

function read(id) {
    return document.getElementById(id).value;
}

function send() {
        var x = read('x');
        var y = read('y');
        //print('x: ' + x);
        //print('y: ' + y);

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
}
