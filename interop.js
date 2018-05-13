


Blazor.registerFunction('MarkdownComponent.HtmlRendererInterop.RenderMarkdown', function (message) {

  let el = document.getElementById("markdown-component");
  if (el) { el.innerHTML = message; }
  else {
    console.log("HTML not rendered");
  }
  console.log(message);
});


