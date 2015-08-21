function dirDelResc(dir) {
    dir = new java.io.File(dir, "");
    if (!dir.exists()) {
        return false;
    }
    dir = dir.toString();
    var cmd = java.lang.reflect.Array.newInstance(java.lang.Class.forName("java.lang.String"), 4);
    cmd[0] = "rm";
    cmd[1] = "-rf";
    cmd[2] = dir;
    new java.lang.ProcessBuilder().command(cmd).start().waitFor();
}