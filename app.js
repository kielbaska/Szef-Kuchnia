const TARGET_COUNT = 1500;

const mealConfig = {
  breakfast: {
    label: "śniadanie",
    templates: [
      {
        kind: "Jajecznica",
        style: "Domowy klasyk",
        times: ["10 minut", "12 minut", "15 minut"],
        veg: ["pomidorem", "szpinakiem", "pieczarkami", "papryką"],
        finish: ["szczypiorkiem", "natką", "odrobiną sera", "chili"],
        base: ["2 kromkami chleba", "grzankami", "małą tortillą"],
        tip: "Jajecznicę zdejmij z ognia chwilę przed pełnym ścięciem, będzie kremowa.",
        make(veg, finish, base) {
          return {
            name: `Jajecznica z ${veg} i ${finish}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              "4 jajka",
              "1 łyżka masła",
              `dodatek: ${veg}`,
              `wykończenie: ${finish}`,
              `podanie: ${base}`,
              "sól i pieprz"
            ],
            steps: [
              "Pokrój dodatki i roztrzep jajka z 1 szczyptą soli.",
              "Rozgrzej patelnię, rozpuść masło i wrzuć warzywo na 2-3 minuty.",
              "Wlej jajka i mieszaj łopatką na małym ogniu przez 60-90 sekund, aż masa będzie kremowa.",
              `Przełóż na talerz, podaj z ${base} i wykończ ${finish}.`
            ],
            tip: this.tip
          };
        }
      },
      {
        kind: "Owsianka",
        style: "Szybkie śniadanie",
        times: ["8 minut", "10 minut", "12 minut"],
        fruit: ["bananem", "jabłkiem", "gruszką", "mrożonymi jagodami"],
        crunch: ["orzechami", "pestkami dyni", "migdałami", "masłem orzechowym"],
        spice: ["cynamonem", "kakao", "wanilią", "szczyptą kardamonu"],
        tip: "Szczypta soli w owsiance podbija słodycz i robi pełniejszy smak.",
        make(fruit, crunch, spice) {
          return {
            name: `Owsianka z ${fruit}, ${spice} i ${crunch}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              "120 g płatków owsianych",
              "350 ml mleka lub napoju roślinnego",
              `dodatek: ${fruit}`,
              `aromat: ${spice}`,
              `chrupkość: ${crunch}`,
              "1 łyżeczka miodu (opcjonalnie)"
            ],
            steps: [
              "Zagotuj mleko, wsyp płatki i gotuj 4-5 minut na małym ogniu, mieszając co chwilę.",
              "Gdy owsianka zgęstnieje, dodaj owoc i przyprawę, gotuj jeszcze 1 minutę.",
              "Sprawdź konsystencję: jeśli za gęsta, dolej 2-3 łyżki mleka.",
              "Przełóż do miski i dodaj chrupiący dodatek na wierzchu."
            ],
            tip: this.tip
          };
        }
      },
      {
        kind: "Omlet",
        style: "Brunch domowy",
        times: ["12 minut", "15 minut", "18 minut"],
        filling: ["serem i szynką", "pieczarkami i serem", "szpinakiem i fetą", "pomidorem i mozzarellą"],
        herbs: ["szczypiorkiem", "bazylią", "oregano", "natką"],
        tip: "Patelnię rozgrzej wcześniej i smaż na średnim ogniu, omlet nie wyschnie.",
        make(filling, herbs) {
          return {
            name: `Omlet z ${filling}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              "4 jajka",
              "1 łyżka mleka",
              "1 łyżeczka masła",
              `farsz: ${filling}`,
              `zioła: ${herbs}`,
              "sól i pieprz"
            ],
            steps: [
              "Roztrzep jajka z mlekiem, szczyptą soli i pieprzem.",
              "Rozgrzej patelnię z masłem, wlej masę i poruszaj patelnią, żeby równomiernie pokryć dno.",
              "Kiedy spód się zetnie, a góra będzie lekko wilgotna, dodaj farsz.",
              `Złóż omlet na pół, dosmaż 30-40 sekund i posyp ${herbs}.`
            ],
            tip: this.tip
          };
        }
      }
    ]
  },
  lunch: {
    label: "obiad",
    templates: [
      {
        kind: "Bowl",
        style: "Miejski comfort food",
        times: ["30 minut", "35 minut", "40 minut"],
        protein: ["kurczakiem", "indykiem", "tofu", "ciecierzycą"],
        base: ["ryżu jaśminowym", "ryżu basmati", "kuskusie", "kaszy bulgur"],
        veg: ["brokułem i marchewką", "ogórkiem i rzodkiewką", "papryką i cebulą", "cukinią i pomidorami"],
        sauce: ["sosem teriyaki", "sosem jogurtowo-czosnkowym", "sosem limonkowo-chili", "sosem sezamowym"],
        tip: "Najpierw mocny ogień dla białka, dopiero potem sos, wtedy nic się nie gotuje na szaro.",
        make(protein, base, veg, sauce) {
          return {
            name: `Bowl z ${protein} na ${base} z ${sauce}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              `białko: ${protein} (ok. 400-450 g)`,
              `baza: ${base} (ok. 220 g suchej)`,
              `warzywa: ${veg}`,
              `sos: ${sauce}`,
              "1 łyżka oleju",
              "sól i pieprz"
            ],
            steps: [
              `Ugotuj ${base} według instrukcji i odstaw pod przykryciem na 3 minuty.`,
              `Pokrój warzywa (${veg}) i przygotuj białko (${protein}) na równe kawałki.`,
              `Smaż ${protein} na mocnym ogniu 5-7 minut, potem dołóż ${sauce} i mieszaj 1 minutę.`,
              "Złóż bowl: baza, warzywa, gorące białko, na końcu dopraw do smaku."
            ],
            tip: this.tip
          };
        }
      },
      {
        kind: "Makaron",
        style: "Klasyk z twistem",
        times: ["25 minut", "30 minut", "35 minut"],
        pasta: ["spaghetti", "penne", "tagliatelle", "fusilli"],
        baseSauce: ["pomidorowym", "śmietanowo-czosnkowym", "pesto", "paprykowo-śmietanowym"],
        protein: ["kurczakiem", "tuńczykiem", "boczkiem", "ciecierzycą"],
        veg: ["szpinakiem", "cukinią", "brokułem", "pieczarkami"],
        tip: "Zostaw pół szklanki wody z makaronu, nią regulujesz idealną gęstość sosu.",
        make(pasta, baseSauce, protein, veg) {
          return {
            name: `${pasta} z ${protein} w sosie ${baseSauce}`,
            style: this.style,
            difficulty: "Średni",
            ingredients: [
              `300 g makaronu (${pasta})`,
              `białko: ${protein}`,
              `warzywo: ${veg}`,
              `sos: ${baseSauce}`,
              "2 łyżki oliwy",
              "sól i pieprz"
            ],
            steps: [
              `Ugotuj ${pasta} al dente i zachowaj 1/2 szklanki wody z garnka.`,
              `Na patelni podsmaż ${protein} przez 3-5 minut, dodaj ${veg} i smaż kolejne 2 minuty.`,
              `Dodaj bazę sosu ${baseSauce} i gotuj minutę na średnim ogniu.`,
              "Dorzuć makaron, dolej trochę wody z gotowania i wymieszaj do uzyskania gładkiego sosu."
            ],
            tip: this.tip
          };
        }
      },
      {
        kind: "Curry",
        style: "Domowa kuchnia świata",
        times: ["30 minut", "35 minut", "40 minut"],
        protein: ["kurczakiem", "ciecierzycą", "tofu", "soczewicą"],
        veg: ["szpinakiem", "papryką", "marchewką", "kalafiorem"],
        base: ["ryżem basmati", "ryżem jaśminowym", "chlebkiem naan", "kuskusem"],
        level: ["łagodne", "średnio pikantne", "pikantne", "aromatyczne"],
        tip: "Przyprawy podsmaż 20-30 sekund na tłuszczu przed dodaniem płynu.",
        make(protein, veg, base, level) {
          return {
            name: `Curry z ${protein} i ${veg} (${level})`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              `białko: ${protein}`,
              `warzywo: ${veg}`,
              "400 g passaty lub pomidorów",
              "200 ml mleczka kokosowego",
              `dodatek: ${base}`,
              "garam masala / curry / czosnek / imbir"
            ],
            steps: [
              `Na łyżce tłuszczu podsmaż czosnek/imbir i przyprawy przez 20-30 sekund.`,
              `Dodaj ${protein} i ${veg}, smaż 4-5 minut mieszając.`,
              "Wlej passatę i mleczko kokosowe, gotuj na małym ogniu 12-15 minut.",
              `Spróbuj, dopraw solą i podawaj gorące z ${base}.`
            ],
            tip: this.tip
          };
        }
      }
    ]
  },
  dinner: {
    label: "kolację",
    templates: [
      {
        kind: "Sałatka",
        style: "Lekka kolacja",
        times: ["20 minut", "25 minut", "30 minut"],
        protein: ["grillowanym kurczakiem", "tuńczykiem", "jajkiem", "halloumi"],
        greens: ["mixem sałat", "rukolą", "szpinakiem", "sałatą rzymską"],
        veg: ["pomidorkami i ogórkiem", "awokado i papryką", "burakiem i cebulą", "gruszką i orzechami"],
        dressing: ["winegretem miodowo-musztardowym", "sosem jogurtowo-czosnkowym", "oliwą cytrynową", "winegretem balsamicznym"],
        tip: "Sos dodawaj tuż przed podaniem, wtedy liście zostają chrupiące.",
        make(protein, greens, veg, dressing) {
          return {
            name: `Sałatka z ${protein} i ${dressing}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              `baza: ${greens} (ok. 150 g)`,
              `białko: ${protein}`,
              `warzywa/dodatki: ${veg}`,
              `sos: ${dressing}`,
              "1 łyżka oliwy",
              "sól i pieprz"
            ],
            steps: [
              "Umyj i osusz liście, dodatki pokrój w cienkie kawałki.",
              `Przygotuj ${protein}: usmaż, ugotuj albo odsącz, zależnie od składnika.`,
              "W dużej misce połącz bazę z warzywami, dopraw szczyptą soli.",
              `Dodaj białko, polej ${dressing} i delikatnie wymieszaj tuż przed podaniem.`
            ],
            tip: this.tip
          };
        }
      },
      {
        kind: "Krem",
        style: "Wieczorny comfort",
        times: ["25 minut", "30 minut", "35 minut"],
        main: ["pieczonej papryki", "pomidorów", "brokułu", "marchewki"],
        finish: ["grzankami czosnkowymi", "jogurtem", "prażonymi pestkami", "parmezanem"],
        herb: ["bazylią", "natką", "koperkiem", "tymiankiem"],
        tip: "Blenduj zupę dłużej niż zwykle, wtedy będzie naprawdę aksamitna.",
        make(main, finish, herb) {
          return {
            name: `Krem z ${main} z ${finish}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              `główny składnik: ${main} (ok. 500-700 g)`,
              "1 cebula",
              "2 ząbki czosnku",
              "700 ml bulionu",
              `wykończenie: ${finish}`,
              `zioła: ${herb}`
            ],
            steps: [
              "Pokrój warzywa, cebulę i czosnek na mniejsze kawałki.",
              "Podsmaż cebulę z czosnkiem 2 minuty, dodaj główne warzywo i smaż kolejne 3 minuty.",
              "Wlej bulion i gotuj 12-15 minut, aż wszystko zmięknie.",
              `Zblenduj na gładko, dopraw i podaj z ${finish} oraz ${herb}.`
            ],
            tip: this.tip
          };
        }
      },
      {
        kind: "Wrap",
        style: "Kolacja premium na szybko",
        times: ["20 minut", "25 minut", "30 minut"],
        protein: ["kurczakiem", "tofu", "jajkiem", "tuńczykiem"],
        spread: ["hummusem", "sosem jogurtowym", "pastą z awokado", "serkiem ziołowym"],
        veg: ["sałatą i pomidorem", "ogórkiem i papryką", "rukolą i cebulą", "marchewką i kukurydzą"],
        tip: "Podpiecz wrapa minutę z każdej strony po złożeniu, będzie trzymał kształt.",
        make(protein, spread, veg) {
          return {
            name: `Wrap z ${protein} i ${spread}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [
              "2 duże tortille",
              `białko: ${protein}`,
              `smarowidło: ${spread}`,
              `warzywa: ${veg}`,
              "1 łyżeczka oliwy",
              "sól i pieprz"
            ],
            steps: [
              `Przygotuj ${protein} i pokrój warzywa (${veg}) w cienkie paski.`,
              `Podgrzej tortillę 20-30 sekund, potem posmaruj ją ${spread}.`,
              "Ułóż warstwy: warzywa, białko, doprawienie i zawiń ciasno boki do środka.",
              "Podsmaż wrapa 1 minutę z każdej strony, żeby był chrupiący i trzymał formę."
            ],
            tip: this.tip
          };
        }
      }
    ]
  }
};

const pools = { breakfast: [], lunch: [], dinner: [] };
const cursors = { breakfast: 0, lunch: 0, dinner: 0 };
let currentType = "breakfast";
let breakfastOatmealCooldown = 0;

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rand) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildMeals(type, seed) {
  const cfg = mealConfig[type];
  const created = [];

  cfg.templates.forEach((tpl) => {
    if (type === "breakfast" && tpl.kind === "Jajecznica") {
      tpl.veg.forEach((veg) => tpl.finish.forEach((finish) => tpl.base.forEach((base) => {
        const meal = tpl.make(veg, finish, base);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      })));
    }

    if (type === "breakfast" && tpl.kind === "Owsianka") {
      tpl.fruit.forEach((fruit) => tpl.crunch.forEach((crunch) => tpl.spice.forEach((spice) => {
        const meal = tpl.make(fruit, crunch, spice);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      })));
    }

    if (type === "breakfast" && tpl.kind === "Omlet") {
      tpl.filling.forEach((filling) => tpl.herbs.forEach((herbs) => {
        const meal = tpl.make(filling, herbs);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      }));
    }

    if (type === "lunch" && tpl.kind === "Bowl") {
      tpl.protein.forEach((protein) => tpl.base.forEach((base) => tpl.veg.forEach((veg) => tpl.sauce.forEach((sauce) => {
        const meal = tpl.make(protein, base, veg, sauce);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      }))));
    }

    if (type === "lunch" && tpl.kind === "Makaron") {
      tpl.pasta.forEach((pasta) => tpl.baseSauce.forEach((baseSauce) => tpl.protein.forEach((protein) => tpl.veg.forEach((veg) => {
        const meal = tpl.make(pasta, baseSauce, protein, veg);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      }))));
    }

    if (type === "lunch" && tpl.kind === "Curry") {
      tpl.protein.forEach((protein) => tpl.veg.forEach((veg) => tpl.base.forEach((base) => tpl.level.forEach((level) => {
        const meal = tpl.make(protein, veg, base, level);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      }))));
    }

    if (type === "dinner" && tpl.kind === "Sałatka") {
      tpl.protein.forEach((protein) => tpl.greens.forEach((greens) => tpl.veg.forEach((veg) => tpl.dressing.forEach((dressing) => {
        const meal = tpl.make(protein, greens, veg, dressing);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      }))));
    }

    if (type === "dinner" && tpl.kind === "Krem") {
      tpl.main.forEach((main) => tpl.finish.forEach((finish) => tpl.herb.forEach((herb) => {
        const meal = tpl.make(main, finish, herb);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      })));
    }

    if (type === "dinner" && tpl.kind === "Wrap") {
      tpl.protein.forEach((protein) => tpl.spread.forEach((spread) => tpl.veg.forEach((veg) => {
        const meal = tpl.make(protein, spread, veg);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
      })));
    }
  });

  const unique = [];
  const seen = new Set();
  created.forEach((meal) => {
    const key = `${meal.name}|${meal.time}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(meal);
    }
  });

  const rand = mulberry32(seed);
  const shuffled = shuffle(unique, rand);

  if (shuffled.length >= TARGET_COUNT) {
    return shuffled.slice(0, TARGET_COUNT);
  }

  const expanded = [...shuffled];
  let i = 0;
  while (expanded.length < TARGET_COUNT) {
    const meal = shuffled[i % shuffled.length];
    expanded.push({ ...meal, name: `${meal.name} (wariant ${Math.floor(i / shuffled.length) + 2})` });
    i += 1;
  }

  return expanded;
}

function initPools() {
  pools.breakfast = buildMeals("breakfast", 101);
  pools.lunch = buildMeals("lunch", 202);
  pools.dinner = buildMeals("dinner", 303);
}

function nextMeal(type) {
  const pool = pools[type];
  let idx = cursors[type];
  let meal = pool[idx];

  if (type === "breakfast" && breakfastOatmealCooldown > 0) {
    let guard = 0;
    while (meal.name.toLowerCase().includes("owsianka") && guard < pool.length) {
      idx = (idx + 1) % pool.length;
      meal = pool[idx];
      guard += 1;
    }
    breakfastOatmealCooldown -= 1;
  }

  if (type === "breakfast" && meal.name.toLowerCase().includes("owsianka")) {
    breakfastOatmealCooldown = 3;
  }

  cursors[type] = (idx + 1) % pool.length;
  return meal;
}

function renderMeal(meal, type) {
  const ingredients = meal.ingredients.map((item) => `<li><strong>${item}</strong></li>`).join("");
  const steps = meal.steps.map((item) => `<li>${item}</li>`).join("");

  return `
    <h2>Wylosowane ${mealConfig[type].label}: ${meal.name}</h2>
    <div class="meta">
      <p><strong>Styl / Kuchnia:</strong> ${meal.style}</p>
      <p><strong>Czas przygotowania:</strong> ${meal.time}</p>
      <p><strong>Poziom trudności:</strong> ${meal.difficulty}</p>
      <p><strong>Dostępne opcje:</strong> 1500</p>
    </div>

    <h3>Co musisz ogarnąć (Składniki):</h3>
    <ul>${ingredients}</ul>

    <h3>Szybka akcja (Przygotowanie):</h3>
    <ol>${steps}</ol>

    <h3>Pro-tip Szefa:</h3>
    <p>${meal.tip}</p>
  `;
}

const drawBtn = document.getElementById("drawBtn");
const result = document.getElementById("result");
const segmentButtons = Array.from(document.querySelectorAll(".segment"));
const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "chef-theme";

function drawCurrentTypeMeal() {
  const meal = nextMeal(currentType);
  result.innerHTML = renderMeal(meal, currentType);
  drawBtn.textContent = `Losuj ${mealConfig[currentType].label}`;
}

segmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    segmentButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentType = button.dataset.type;
    drawCurrentTypeMeal();
  });
});

drawBtn.addEventListener("click", drawCurrentTypeMeal);

initPools();
drawCurrentTypeMeal();

function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-mode", dark);
  themeToggle.textContent = dark ? "Light mode" : "Dark mode";
}

const storedTheme = localStorage.getItem(THEME_KEY);
applyTheme(storedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Ignored on purpose: app should work even without offline cache.
    });
  });
}
