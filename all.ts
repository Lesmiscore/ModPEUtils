class Files {
    public static delDir(dir) {
        if (dir == "/") {
            throw new Error("\"/\" is the most dangerous to delete, cancelled.");
        }
        dir = new java.io.File(dir, "");
        if (!dir.exists()) {
            return false;
        }
        var cmd = Lang.createJArray(Lang.getJClass("java.lang.String"), 3);
        cmd[0] = "rm";
        cmd[1] = "-rf";
        cmd[2] = dir.toString();
        new java.lang.ProcessBuilder().command(cmd).start().waitFor();
        dir.delete();
    }
    public static copy(from, dest) {
        var fromFile = new java.io.File(from, "");
        if (!fromFile.exists()) {
            return false;
        }
        var cmd = Lang.createJArray(Lang.getJClass("java.lang.String"), 4);
        cmd[0] = "cp";
        cmd[1] = "-a";
        cmd[2] = from.toString();
        cmd[3] = dest.toString();
        new java.lang.ProcessBuilder().command(cmd).start().waitFor();
    }
    public static move(from, dest) {
        from = new java.io.File(from, "");
        if (!from.exists()) {
            return false;
        }
        dest = new java.io.File(dest, "");
        from.renameTo(dest);
    }
};
class FileIO {
    public static openRead(path: String) {
        return new java.io.FileInputStream(path);
    }
    public static openReadText(path: String) {
        return new java.io.FileReader(path);
    }
    public static openWrite(path: String) {
        return new java.io.FileOutputStream(path);
    }
    public static openWriteText(path: String) {
        return new java.io.FileWriter(path);
    }
};
class Android {
    public static getContext: Function = com.minecraftpe.MainActivity.currentMainActivity.get;
    public static createView(type: String) {
        var vc;
        for (var i in (vc = ["android.view.", "android.widget."])) {
            try {
                return eval("new " + i + type + "(Android.getContext())");
                break;
            } catch (e) {

            }
        }
        return null;
    }
    public static newDialog() {
        return new android.app.AlertDialog.Builder(Android.getContext());
    }
    public static newPopupWindow() {
        return new android.widget.PopupWindow(Android.getContext());
    }
};
class Music {
    public static create(path: String) {
        var d = new android.media.MediaPlayer();
        d.setDataSource(path);
        return d;
    }
};
class Lang {
    public static createJArray: Function = java.lang.reflect.Array.newInstance;
    public static getJClass: Function = java.lang.Class.forName;
    public static cloneArray: Function = Lang.jArrayToJSArray;
    public static jsArrayToJArray(array: Array<Object>, jClass: any = Lang.getJClass("java.lang.Object")) {
        var ja = Lang.createJArray(jClass, array.length);
        for (var i = 0; i < array.length; i++) {
            ja[i] = array[i];
        }
        return ja;
    }
    public static jArrayToJSArray(array: Array<Object>) {
        var ja = [];
        for (var i = 0; i < array.length; i++) {
            ja[i] = array[i];
        }
        return ja;
    }
    public static castArray(array: any, jClass: any = Lang.getJClass("java.lang.Object")) {
        var ja = Lang.createJArray(jClass, array.length);
        for (var i = 0; i < array.length; i++) {
            ja[i] = array[i];
        }
        return ja;
    }
    public static newThread(delegate: Function) {
        var toReturn;
        (toReturn = new java.lang.Thread({
            run: function (): void {
                delegate();
            }
        })).start();
        return toReturn;
    }
};
class Network {
    public static downloadAsync(address: String
        , onSuccess: Function = function (address, data) { }
        , onError: Function = function (address, reason) { }) {
        Lang.newThread(function () {
            try {
                var data = new java.io.ByteArrayOutputStream();
                var net = new java.net.URL(address).openConnection().getInputStream();
                var buf = Lang.createJArray(java.lang.Byte.TYPE, 8000);
                while (!0) {
                    var d = net.read(buf);
                    if (d == -1) {
                        break;
                    }
                    data.write(buf, 0, d);
                }
                onSuccess(address, data.toByteArray());
            } catch (e) {
                onError(address, { reason: "general error", error: e });
            }
        });
    }
}
class BlockLauncher {
    public static getBlocks(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number) {
        var actualStartX = Math.min(startX, endX);
        var actualStartY = Math.min(startY, endY);
        var actualStartZ = Math.min(startZ, endZ);

        var actualEndX = Math.max(startX, endX);
        var actualEndY = Math.max(startY, endY);
        var actualEndZ = Math.max(startZ, endZ);

        var result = [];
        for (var x = actualStartX; x < actualEndX; x++) {
            result[x - actualStartX] = [];
            for (var y = actualStartY; y < actualEndY; y++) {
                result[x - actualStartX][y - actualStartY] = [];
                for (var z = actualStartZ; z < actualEndZ; z++) {
                    result[x - actualStartX][y - actualStartY][z - actualStartZ] = {
                        tileId: Level.getTile(x, y, z),
                        tileDamage: Level.getData(x, y, z),
                    }
                }
            }
        }
        return result;
    }
};