function copy(from,dest){
  var fromFile=new java.io.File(from,"");
  if(!fromFile.exists()){
    return false;
    
  }
  var sArray=java.lang.reflect.Array.newInstance(java.lang.Class.forName("java.lang.String",3));
  
  new java.lang.ProcessBuilder().command(["cp","-a",from,dest]).start().waitFor();
}