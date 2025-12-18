var globalVariable;
{
      let globalVariable = "Testleaf"
      var browserName = "Chrome"
      let browserVersion = 1.8;
      const loadUrl = "https//testleaf.com"
      console.log("Inside block");
      console.log("globalVariable ", globalVariable);
      console.log("browserName", browserName);
      console.log("browserVersion", browserVersion);
      console.log("loadUrl", loadUrl);
}
      console.log("Outside block");
      console.log("globalVariable ", globalVariable);
     console.log("browserName", browserName);
    //  console.log("browserVersion", browserVersion);
   //   console.log("loadUrl", loadUrl);