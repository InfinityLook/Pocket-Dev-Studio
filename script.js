const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default"
});

document.getElementById("saveBtn").addEventListener("click", () => {
    const code = editor.getValue();
    alert("Kód připraven k odeslání: " + code.length + " znaků");
});
