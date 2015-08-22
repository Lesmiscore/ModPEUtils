/*Virtual Symbols*/
var java = {
    lang: {
        Class: {
            forName: function (className) {

            },
            newInstance: function () {

            },
            getMethod: function (name, types) {

            },
            getConstructor: function (types) { }
        },
        ProcessBuilder: function () {

        },
        reflect: {
            Array: {
                newInstance: function (typeObj: any, length: number): any {

                }
            }
        }
    },
    io: {
        File: function (path: any, addition: String) {

        },
        FileInputStream: function (path: any) {

        },
        FileReader: function (path: any) {

        },
        FileOutputStream: function (path: any) {

        },
        FileWriter: function (path: any) {

        },
    }
},
    com = {
        minecraftpe: {
            MainActivity: {
                currentMainActivity: {
                    get: function () { }
                }
            }
        },
    },
    android = {
        app: {
            AlertDialog: {
                Builder: function (context: any) {

                }
            },
        },
        widget: {
            PopupWindow: function (context: any) {

            },
        },
        media: {
            MediaPlayer: function () {

            }
        }
    };
/*End Virtual Symbols*/