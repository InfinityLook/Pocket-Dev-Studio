const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default",
    lineWrapping: true, // Tohle je na mobilu KLÍČOVÉ!
    styleActiveLine: true // Toto zvýrazní řádek, na kterém píšeš
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
// Funkce pro menu
function toggleMenu(id) {
    const menus = document.querySelectorAll('.submenu');
    menus.forEach(m => { if(m.id !== id) m.style.display = 'none'; });
    const menu = document.getElementById(id);
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
}

// Základní funkce pro Dark Mode (výměna CSS tříd)
function toggleTheme() {
    const editorEl = document.querySelector('.CodeMirror');
    editorEl.style.filter = editorEl.style.filter === 'invert(1)' ? 'none' : 'invert(1)';
}

// Ukládání
editor.on("change", () => {
    localStorage.setItem("pocketDevCode", editor.getValue());
});

const savedCode = localStorage.getItem("pocketDevCode");
if (savedCode) editor.setValue(savedCode);
