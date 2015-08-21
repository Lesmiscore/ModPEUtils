function copy(from,dest){
var fromFile=new java.io.File(from,"");
if(!fromFile.exists()){
return false;
}
new java.io.ProcessBuilder().command(["cp","-a",from,dest]).start().waitFor();
}