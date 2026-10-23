(() => {
  const root = document.documentElement;

  /* Перемикач палітр (лише для макета) */
  const PALETTE_KEY = "portfolio-palette";
  const switchButtons = document.querySelectorAll("[data-palette-set]");

  const applyPalette = (name) => {
    if (name === "cobalt") root.removeAttribute("data-palette");
    else root.setAttribute("data-palette", name);
    switchButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.paletteSet === name));
    });
  };

  let saved = null;
  try { saved = localStorage.getItem(PALETTE_KEY); } catch (e) { /* сховище недоступне */ }
  if (saved && [...switchButtons].some((b) => b.dataset.paletteSet === saved)) applyPalette(saved);

  switchButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyPalette(btn.dataset.paletteSet);
      try { localStorage.setItem(PALETTE_KEY, btn.dataset.paletteSet); } catch (e) { /* ігноруємо */ }
    });
  });

  /* Мобільне меню */
  const header = document.getElementById("site-header");
  const toggle = header.querySelector(".nav-toggle");
  const toggleText = toggle.querySelector(".nav-toggle__text");

  const setMenu = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggleText.textContent = open ? "Закрити" : "Меню";
  };

  toggle.addEventListener("click", () => setMenu(!header.classList.contains("is-open")));
  header.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* Копіювання пошти */
  const copyBtn = document.getElementById("copy-mail");
  const mailLink = document.getElementById("contact-mail");
  let resetTimer;

  copyBtn.addEventListener("click", async () => {
    const original = copyBtn.dataset.label || copyBtn.textContent;
    copyBtn.dataset.label = original;
    let done = false;

    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      done = true;
    } catch (e) {
      /* Запасний варіант: виділяємо адресу, щоб її можна було скопіювати вручну */
      const range = document.createRange();
      range.selectNodeContents(mailLink);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }

    copyBtn.textContent = done ? "Скопійовано" : "Виділено, натисніть Ctrl+C";
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { copyBtn.textContent = original; }, 2200);
  });

  /* Поточний рік у футері */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
