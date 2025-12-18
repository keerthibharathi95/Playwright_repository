function launchBrowser(browser) {
      if (browser == "Chrome")
            console.log("This is chrome")
      else if (browser == "edge")
            console.log("This is edge")
}
function runTest(testType) {
      switch (testType) {
            case 1: smoke
                  console.log("This is smoke")
                  break
            case 2: sanity
                  console.log("This is sanity")
                  break
            case 3: regression
                  console.log("This is Regression")
                  break
            default:
                  console.log("This is smoke")
                  break
      }
}
launchBrowser("edge")
runTest()