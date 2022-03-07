module.exports = {

    name :"calculator",

    cal : function(val1, val2){

        return val1 + val2;
    }

}

// each file has its own module that's why when you export some stuff from a file you should to export it from the module : when you see module.exports......