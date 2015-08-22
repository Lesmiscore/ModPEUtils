var Files = {
    delDir: function (dir) {
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
    },
    copy: function (from, dest) {
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
    },
};
var FileIO = {
    openRead: function (path) {
        return new java.io.FileInputStream(path);
    },
    openReadText: function (path) {
        return new java.io.FileReader(path);
    },
    openWrite: function (path) {
        return new java.io.FileOutputStream(path);
    },
    openWriteText: function (path) {
        return new java.io.FileWriter(path);
    }
};
var Android = {
    getContext: com.minecraftpe.MainActivity.currentMainActivity.get,
    createView: function (type) {
        var vc;
        if (type.contains(".")) {
            vc = java.lang.Class.forName(type);
        } else {
            for (var i in (vc = ["android.view.", "android.widget."]))
                try {
                    vc = java.lang.Class.forName(vc[i] + type);
                    break;
                } catch (e) {

                }
        }
    },
}