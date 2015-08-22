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
    move: function (from, dest) {
        from = new java.io.File(from, "");
        if (!from.exists()) {
            return false;
        }
        dest = new java.io.File(dest, "");
        from.renameTo(dest);
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
};
var Music = {
    __internal: function (music) {
        this.player = new android.media.MediaPlayer();
        this.player.setDataSource(music);
        this.play = function () {
            this.player.play();
        }
        this.pause = function () {
            this.player.pause();
        }
        this.isPlaying = function () {
           return this.player.isPlaying();
        }
    },
    create: function (path) {
        return new this.__internal(path);
    },
};