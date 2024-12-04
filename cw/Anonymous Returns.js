// https://www.codewars.com/kata/53d4eec01f1a9b3020000786/

var alpha = {
    name: 'My Alpha',
    getNameFunc: function() {
        var self = this;
        return function() {
            return self.name;
        };
    }
};
