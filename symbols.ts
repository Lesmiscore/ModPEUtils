/*Virtual Symbols*/
var java = {
    lang: {
        Class: {
            forName: function (className) {

            },
            newInstance: function () {

            },
            getMethod: function (name,types) {

            },
            getConstructor: function (types) { }
        },
        ProcessBuilder: function () {

        }
    }
}, com, android;
java.lang.ProcessBuilder.prototype.command = function (args) {
    return this;
}
/*End Virtual Symbols*/