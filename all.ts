class Files {
    public static delDir(dir) {
        dir = new java.io.File(dir, "");
        if (!dir.exists()) {
            return false;
        }
        var cmd = java.lang.reflect.Array.newInstance(java.lang.Class.forName("java.lang.String"), 3);
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
        var cmd = java.lang.reflect.Array.newInstance(java.lang.Class.forName("java.lang.String"), 4);
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
        if (type.indexOf(".") != -1) {
            vc = java.lang.Class.forName(type);
        } else {
            for (var i in (vc = ["android.view.", "android.widget."])) {
                try {
                    vc = java.lang.Class.forName(vc[i] + type);
                    break;
                } catch (e) {

                }
            }
        }
        return vc.getConstructor([java.lang.Class.forName("android.content.Context")]).newInstance(Android.getContext());
    }
    public static newDialog() {
        return new android.app.AlertDialog(Android.getContext());
    }
};
class Music {
    public static create(path: String) {
        var d = new android.media.MediaPlayer();
        d.setDataSource(path);
        return d;
    }
};