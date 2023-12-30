// Use dynamic import to load the asyncModule asynchronously
import('./asyncModule').then((asyncModule) => {
    // Call the asynchronous function from the imported module
    asyncModule.fetchDataAsync().then((result) => {
      // Log the result
      console.log('Result:', result);
    });
  });  