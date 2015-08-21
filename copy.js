function copy(from,dest){
  var fromFile=new java.io.File(from,"");
  if(!fromFile.exists()){
    return false;
  }
  var cmd=java.lang.reflect.Array.newInstance(java.lang.Class.forName("java.lang.String"),4);
  cmd[0]="cp";
  cmd[1]="-a";
  cmd[2]=from.toString();
  cmd[3]=dest.toString();
  new java.lang.ProcessBuilder().command(cmd).start().waitFor();
}