const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default"
});

// 1. Načtení uloženého kódu při otevření stránky
const savedCode = localStorage.getItem("pocketDevCode");
if (savedCode) {
    editor.setValue(savedCode);
}

// 2. Uložení kódu při každé změně (automaticky)
editor.on("change", () => {
    localStorage.setItem("pocketDevCode", editor.getValue());
});

// 3. Tlačítko pro "Uložení" (zatím jen potvrdí, že je uloženo)
document.getElementById("saveBtn").addEventListener("click", () => {
    alert("Kód je bezpečně uložen v paměti telefonu!");
});

