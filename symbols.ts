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
        Thread: function (delegate: Object) {

        },
        Byte: {
            TYPE: null,
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
        ByteArrayOutputStream: function (capacity: number = 0) {

        },
    },
    net: {
        URL: function (spec: String) {

        }
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