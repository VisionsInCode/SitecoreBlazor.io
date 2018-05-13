Blazor.registerFunction('Foundation.BlazorExtensions.BlazorExtensionsInterop.ShowRawHtml', (elementId, html) => {
  let el = document.getElementById(elementId);
  if (el) {
    el.innerHTML = html;
    return el.innerHTML;
  }
  else {
    console.log("HTML not rendered");
  }
});

Blazor.registerFunction('Foundation.BlazorExtensions.BlazorExtensionsInterop.CurrentUrl', ()=> {
  let path = window.location.pathname;
  if (path) {
    return path;
  }
  else {
    console.log("No current path");
  }
});