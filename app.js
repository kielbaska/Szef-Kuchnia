const ACCESS_CODE = "7342";
const ACCESS_KEY = "chef-access-granted";

const accessGate = document.getElementById("accessGate");
const accessForm = document.getElementById("accessForm");
const accessCode = document.getElementById("accessCode");
const accessError = document.getElementById("accessError");

function unlockApp() {
  localStorage.setItem(ACCESS_KEY, "true");
  accessGate.classList.add("hidden");
  accessGate.setAttribute("aria-hidden", "true");
}

if (localStorage.getItem(ACCESS_KEY) === "true") {
  unlockApp();
} else {
  accessCode.focus();
}

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (accessCode.value.trim() === ACCESS_CODE) {
    unlockApp();
    return;
  }

  accessError.textContent = "Zły kod. Spróbuj jeszcze raz.";
  accessCode.value = "";
  accessCode.focus();
});

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
      },
      {
        kind: "Tosty",
        style: "Chrupiące śniadanie",
        times: ["8 minut", "10 minut", "12 minut"],
        filling: ["serem i szynką", "mozzarellą i pomidorem", "jajkiem i szczypiorkiem", "kurczakiem i serem"],
        sauce: ["ketchupem", "sosem czosnkowym", "pesto", "musztardą miodową"],
        side: ["rukolą", "ogórkiem", "pomidorkami", "papryką"],
        tip: "Nie dawaj za dużo sosu do środka, bo tost straci chrupkość.",
        make(filling, sauce, side) {
          return {
            name: `Tosty z ${filling} i ${sauce}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: ["4 kromki pieczywa tostowego", `farsz: ${filling}`, `sos: ${sauce}`, `dodatek: ${side}`, "1 łyżeczka masła", "sól i pieprz"],
            steps: ["Posmaruj pieczywo cienko masłem od zewnątrz.", `Dodaj ${filling}, odrobinę ${sauce} i złóż tosty.`, "Zapiekaj 4-6 minut w opiekaczu lub na patelni.", `Podaj z ${side} i dopraw do smaku.`],
            tip: this.tip
          };
        }
      },
      {
        kind: "Kanapki",
        style: "Szybki klasyk",
        times: ["5 minut", "7 minut", "10 minut"],
        base: ["chlebie żytnim", "bagietce", "bułce grahamce", "pieczywie tostowym"],
        topping: ["jajkiem", "twarożkiem", "szynką", "pastą z tuńczyka"],
        extra: ["ogórkiem", "pomidorem", "rzodkiewką", "sałatą"],
        tip: "Najpierw cienka warstwa masła albo serka, wtedy pieczywo nie namaka.",
        make(base, topping, extra) {
          return {
            name: `Kanapki na ${base} z ${topping}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [`baza: ${base}`, `główny dodatek: ${topping}`, `warzywo: ${extra}`, "masło lub serek", "sól i pieprz", "ulubione zioła"],
            steps: ["Przygotuj pieczywo i posmaruj cienką warstwą masła albo serka.", `Ułóż ${topping} oraz ${extra}.`, "Dopraw solą, pieprzem i ziołami.", "Podaj od razu, najlepiej z czymś świeżym do chrupania."],
            tip: this.tip
          };
        }
      },
      {
        kind: "Placuszki",
        style: "Weekendowy vibe",
        times: ["15 minut", "18 minut", "20 minut"],
        base: ["bananowe", "jogurtowe", "owsiane", "twarogowe"],
        topping: ["miodem", "jogurtem", "owocami", "masłem orzechowym"],
        spice: ["cynamonem", "wanilią", "kakao", "skórką cytrynową"],
        tip: "Smaż małe placuszki na średnim ogniu, wtedy nie spalą się z zewnątrz.",
        make(base, topping, spice) {
          return {
            name: `Placuszki ${base} z ${topping}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [`typ: ${base}`, "2 jajka", "120 g mąki lub płatków", `aromat: ${spice}`, `dodatek: ${topping}`, "szczypta soli"],
            steps: ["Wymieszaj składniki na gęste ciasto.", `Dodaj ${spice} i odstaw masę na 2 minuty.`, "Smaż małe porcje po 2 minuty z każdej strony.", `Podaj ciepłe z ${topping}.`],
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
      },
      {
        kind: "Ryż z patelni",
        style: "Szybki obiad",
        times: ["20 minut", "25 minut", "30 minut"],
        protein: ["kurczakiem", "jajkiem", "tofu", "kiełbasą"],
        veg: ["groszkiem i marchewką", "papryką i cebulą", "brokułem", "cukinią"],
        sauce: ["sosem sojowym", "sosem słodko-kwaśnym", "czosnkiem i masłem", "sosem chili"],
        tip: "Najlepiej użyć ryżu z poprzedniego dnia, bo nie robi się papka.",
        make(protein, veg, sauce) {
          return {
            name: `Ryż z patelni z ${protein} i ${veg}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: ["300 g ugotowanego ryżu", `białko: ${protein}`, `warzywa: ${veg}`, `sos: ${sauce}`, "1 łyżka oleju", "pieprz"],
            steps: ["Rozgrzej mocno patelnię z olejem.", `Podsmaż ${protein}, potem dorzuć ${veg}.`, `Dodaj ryż i ${sauce}, smaż 3-4 minuty.`, "Wymieszaj mocno i dopraw do smaku."],
            tip: this.tip
          };
        }
      },
      {
        kind: "Zupa",
        style: "Domowy obiad",
        times: ["25 minut", "30 minut", "40 minut"],
        main: ["pomidorowa", "jarzynowa", "ogórkowa", "koperkowa"],
        add: ["ryżem", "makaronem", "ziemniakami", "grzankami"],
        finish: ["śmietaną", "natką", "koperkiem", "pieprzem cytrynowym"],
        tip: "Doprawiaj pod koniec, bo zupa po gotowaniu robi się mocniejsza w smaku.",
        make(main, add, finish) {
          return {
            name: `Zupa ${main} z ${add}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [`baza: ${main}`, `dodatek: ${add}`, `wykończenie: ${finish}`, "700 ml bulionu", "warzywa", "sól i pieprz"],
            steps: ["Zagotuj bulion i dodaj warzywa.", `Dodaj bazę na zupę ${main} oraz ${add}.`, "Gotuj do miękkości 15-25 minut.", `Wykończ ${finish} i dopraw.`],
            tip: this.tip
          };
        }
      },
      {
        kind: "Zapiekanka",
        style: "Comfort food",
        times: ["35 minut", "40 minut", "45 minut"],
        base: ["makaronowa", "ziemniaczana", "ryżowa", "warzywna"],
        protein: ["kurczakiem", "szynką", "tuńczykiem", "tofu"],
        cheese: ["mozzarellą", "cheddarem", "fetą", "parmezanem"],
        tip: "Ostatnie 5 minut piecz bez przykrycia, żeby góra się przyrumieniła.",
        make(base, protein, cheese) {
          return {
            name: `Zapiekanka ${base} z ${protein}`,
            style: this.style,
            difficulty: "Średni",
            ingredients: [`baza: ${base}`, `dodatek: ${protein}`, `ser: ${cheese}`, "sos pomidorowy lub śmietanowy", "warzywa", "przyprawy"],
            steps: ["Przygotuj bazę i przełóż do naczynia.", `Dodaj ${protein}, warzywa oraz sos.`, `Posyp ${cheese}.`, "Piecz 20-25 minut w 190°C."],
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
      },
      {
        kind: "Quesadilla",
        style: "Szybka kolacja",
        times: ["12 minut", "15 minut", "18 minut"],
        protein: ["kurczakiem", "serem", "fasolą", "jajkiem"],
        veg: ["papryką", "kukurydzą", "cebulą", "pomidorami"],
        dip: ["salsą", "sosem jogurtowym", "guacamole", "sosem czosnkowym"],
        tip: "Smaż na suchej patelni, wtedy tortilla będzie chrupiąca.",
        make(protein, veg, dip) {
          return {
            name: `Quesadilla z ${protein} i ${veg}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: ["2 tortille", `nadzienie: ${protein}`, `warzywo: ${veg}`, `dip: ${dip}`, "ser", "przyprawy"],
            steps: ["Na tortilli ułóż ser, nadzienie i warzywa.", "Przykryj drugą tortillą albo złóż na pół.", "Smaż 2-3 minuty z każdej strony.", `Pokrój i podaj z ${dip}.`],
            tip: this.tip
          };
        }
      },
      {
        kind: "Pasta kanapkowa",
        style: "Kolacja do chleba",
        times: ["8 minut", "10 minut", "12 minut"],
        base: ["jajeczna", "tuńczykowa", "twarogowa", "z ciecierzycy"],
        add: ["szczypiorkiem", "ogórkiem", "papryką", "rzodkiewką"],
        serve: ["chlebem", "grzankami", "tortillą", "pieczywem chrupkim"],
        tip: "Rozgnieć pastę widelcem, nie blenduj na gładko — będzie lepsza tekstura.",
        make(base, add, serve) {
          return {
            name: `Pasta ${base} z ${add}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: [`baza: ${base}`, `dodatek: ${add}`, `podanie: ${serve}`, "łyżka jogurtu lub majonezu", "sól", "pieprz"],
            steps: ["Rozgnieć bazę pasty widelcem.", `Dodaj ${add}, jogurt lub majonez i przyprawy.`, "Wymieszaj do połączenia.", `Podaj z ${serve}.`],
            tip: this.tip
          };
        }
      },
      {
        kind: "Pieczone ziemniaki",
        style: "Prosta kolacja",
        times: ["30 minut", "35 minut", "40 minut"],
        topping: ["twarogiem", "tuńczykiem", "kurczakiem", "fasolą"],
        sauce: ["sosem czosnkowym", "jogurtem", "salsą", "masłem ziołowym"],
        herbs: ["koperkiem", "szczypiorkiem", "natką", "oregano"],
        tip: "Przekrój ziemniaki na mniejsze kawałki, będą gotowe dużo szybciej.",
        make(topping, sauce, herbs) {
          return {
            name: `Pieczone ziemniaki z ${topping}`,
            style: this.style,
            difficulty: "Łatwy",
            ingredients: ["4 ziemniaki", `dodatek: ${topping}`, `sos: ${sauce}`, `zioła: ${herbs}`, "oliwa", "sól"],
            steps: ["Pokrój ziemniaki, wymieszaj z oliwą i solą.", "Piecz 25-35 minut w 200°C.", `Dodaj ${topping} i ${sauce}.`, `Posyp ${herbs} i podaj gorące.`],
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
    const optionKeys = Object.keys(tpl).filter((key) => (
      Array.isArray(tpl[key]) && key !== "times"
    ));

    function createVariants(depth, picked) {
      if (depth === optionKeys.length) {
        const meal = tpl.make(...picked);
        tpl.times.forEach((time) => created.push({ ...meal, time }));
        return;
      }

      const key = optionKeys[depth];
      tpl[key].forEach((value) => createVariants(depth + 1, [...picked, value]));
    }

    createVariants(0, []);
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
