
const TARGET_COUNT = 1500;

const mealConfig = {
  breakfast: {
    label: "śniadanie",
    templates: [
      { kind: "Pancakes", base: "Pancakes", style: "Słodkie śniadanie", time: ["15 minut","20 minut","25 minut"], main: ["bananowe","waniliowe","czekoladowe","proteinowe"], add: ["z owocami","z jogurtem","z masłem orzechowym","z miodem"], tip: "Smaż na średnim ogniu, wtedy środek będzie puszysty." },
      { kind: "French toast", base: "Tost francuski", style: "Brunch", time: ["12 minut","15 minut","18 minut"], main: ["z chałki","z tostowego chleba","cynamonowy","waniliowy"], add: ["z owocami","z syropem","z jogurtem","z cukrem pudrem"], tip: "Nie mocz pieczywa za długo, żeby się nie rozpadło." },
      { kind: "Bajgiel", base: "Bajgiel", style: "Na szybko", time: ["8 minut","10 minut","12 minut"], main: ["z jajkiem","z serkiem","z kurczakiem","z mozzarellą"], add: ["i rukolą","i pomidorem","i ogórkiem","i sosem czosnkowym"], tip: "Podpiecz bajgla 2 minuty, od razu robi się lepszy." },
      { kind: "Croissant", base: "Croissant", style: "Kawiarniane śniadanie", time: ["6 minut","8 minut","10 minut"], main: ["z jajkiem","z szynką i serem","z mozzarellą","z kremowym serkiem"], add: ["i pomidorem","i rukolą","i szczypiorkiem","i sosem miodowo-musztardowym"], tip: "Lekko podgrzej croissanta, ale nie przesusz." },
      { kind: "Avocado toast", base: "Avocado toast", style: "Nowoczesne domowe", time: ["8 minut","10 minut","12 minut"], main: ["z jajkiem sadzonym","z fetą","z pomidorem","z mozzarellą"], add: ["i chili","i szczypiorkiem","i limonką","i sezamem"], tip: "Dodaj sok z cytryny, awokado będzie świeższe w smaku." },
      { kind: "Breakfast burrito", base: "Burrito śniadaniowe", style: "Syte śniadanie", time: ["15 minut","18 minut","22 minut"], main: ["z jajkiem i serem","z kurczakiem","z bekonem","z warzywami"], add: ["i sosem jogurtowym","i salsą","i kukurydzą","i papryką"], tip: "Podsmaż zawiniętą tortillę na suchej patelni." },
      { kind: "Quesadilla śniadaniowa", base: "Quesadilla śniadaniowa", style: "Serowe śniadanie", time: ["12 minut","15 minut","18 minut"], main: ["z jajkiem","z kurczakiem","z szynką","z mozzarellą"], add: ["i papryką","i kukurydzą","i cebulką","i sosem czosnkowym"], tip: "Ser daj przy brzegach, wtedy lepiej skleja tortillę." },
      { kind: "Smoothie bowl", base: "Smoothie bowl", style: "Lekko i świeżo", time: ["7 minut","10 minut","12 minut"], main: ["truskawkowy","bananowy","mango","jagodowy"], add: ["z granolą","z kokosem","z orzechami","z masłem orzechowym"], tip: "Użyj mrożonych owoców, bowl będzie gęsty." },
      { kind: "Jogurt bowl", base: "Jogurt bowl", style: "Szybkie fit", time: ["5 minut","7 minut","10 minut"], main: ["z granolą","z bananem","z malinami","z borówkami"], add: ["i miodem","i orzechami","i czekoladą","i chia"], tip: "Granole dodaj na końcu, żeby została chrupiąca." },
      { kind: "Protein oatmeal", base: "Proteinowa owsianka", style: "Pożywne śniadanie", time: ["8 minut","10 minut","12 minut"], main: ["czekoladowa","waniliowa","bananowa","orzechowa"], add: ["z owocami","z masłem orzechowym","z jogurtem","z cynamonem"], tip: "Białko wmieszaj po zdjęciu z ognia, nie zrobią się grudki." },
      { kind: "Tosty premium", base: "Tosty premium", style: "Domowy klasyk lepiej", time: ["8 minut","10 minut","12 minut"], main: ["z serem i szynką","z mozzarellą","z kurczakiem","z jajkiem"], add: ["i sosem","i pomidorem","i rukolą","i ogórkiem"], tip: "Posmaruj zewnętrzną stronę cienko masłem dla chrupkości." },
      { kind: "Kanapki", base: "Kanapki", style: "Normalne śniadanie", time: ["5 minut","7 minut","10 minut"], main: ["z jajkiem","z kurczakiem","z tuńczykiem","z serkiem"], add: ["i warzywami","i rukolą","i ogórkiem","i pomidorem"], tip: "Daj coś kremowego pod składniki, kanapka nie będzie sucha." },
      { kind: "Egg muffin", base: "Egg muffin", style: "Jak z kawiarni", time: ["10 minut","12 minut","15 minut"], main: ["z jajkiem","z serem","z kurczakiem","z bekonem"], add: ["i sosem","i sałatą","i pomidorem","i szczypiorkiem"], tip: "Jajko usmaż w małej foremce albo zepnij kształt łopatką." },
      { kind: "Jajka sadzone", base: "Jajka sadzone", style: "Szybko i syto", time: ["8 minut","10 minut","12 minut"], main: ["na tostach","z ziemniaczkami","z awokado","z warzywami"], add: ["i szczypiorkiem","i sosem","i serem","i pomidorem"], tip: "Przykryj patelnię na 30 sekund, białko szybciej się zetnie." },
      { kind: "Jajecznica", base: "Jajecznica", style: "Klasyk", time: ["8 minut","10 minut","12 minut"], main: ["z serem","z pomidorem","z pieczarkami","z kurczakiem"], add: ["i szczypiorkiem","i grzankami","i chili","i rukolą"], tip: "Zdejmij z ognia chwilę wcześniej, będzie kremowa." },
      { kind: "Omlet", base: "Omlet", style: "Brunch domowy", time: ["12 minut","15 minut","18 minut"], main: ["z serem","z kurczakiem","z pomidorem","z pieczarkami"], add: ["i ziołami","i mozzarellą","i rukolą","i sosem"], tip: "Smaż na średnim ogniu, nie na pełnej mocy." },
      { kind: "Wrap śniadaniowy", base: "Wrap śniadaniowy", style: "Do ręki", time: ["10 minut","12 minut","15 minut"], main: ["z jajkiem","z kurczakiem","z serem","z tuńczykiem"], add: ["i sałatą","i sosem","i warzywami","i kukurydzą"], tip: "Zwiń ciasno i podpiecz na złączeniu." },
      { kind: "Grzanki", base: "Grzanki", style: "Chrupiące śniadanie", time: ["7 minut","10 minut","12 minut"], main: ["z mozzarellą","z jajkiem","z pastą jajeczną","z kurczakiem"], add: ["i pomidorem","i rukolą","i sosem","i szczypiorkiem"], tip: "Pieczywo podpiecz przed dodatkami, nie będzie gumowe." },
      { kind: "Pasta jajeczna", base: "Pasta jajeczna", style: "Domowo, ale nie nudno", time: ["10 minut","12 minut","15 minut"], main: ["klasyczna","z awokado","z tuńczykiem","z serkiem"], add: ["na tostach","w bajglu","z warzywami","z chili"], tip: "Dodaj łyżeczkę musztardy, smak będzie pełniejszy." },
      { kind: "Twaróg bowl", base: "Twaróg bowl", style: "Prosto i konkretnie", time: ["5 minut","7 minut","10 minut"], main: ["na słodko","z bananem","z owocami","z miodem"], add: ["i orzechami","i granolą","i kakao","i cynamonem"], tip: "Wymieszaj z jogurtem, będzie kremowy." },
      { kind: "Chia pudding", base: "Chia pudding", style: "Meal prep", time: ["5 minut","8 minut","10 minut"], main: ["waniliowy","kakaowy","mango","truskawkowy"], add: ["z owocami","z granolą","z kokosem","z orzechami"], tip: "Najlepiej przygotować wieczorem, ale da się też szybciej z gęstym jogurtem." },
      { kind: "Mini pizza śniadaniowa", base: "Mini pizza śniadaniowa", style: "Weekend", time: ["12 minut","15 minut","18 minut"], main: ["na tortilli","na bułce","na bagietce","na tostach"], add: ["z serem","z jajkiem","z szynką","z kurczakiem"], tip: "Daj cienką warstwę sosu, żeby spód nie nasiąkł." },
      { kind: "Bułka na ciepło", base: "Bułka na ciepło", style: "Domowy fast food", time: ["8 minut","10 minut","12 minut"], main: ["z jajkiem","z serem","z kurczakiem","z mozzarellą"], add: ["i sosem","i warzywami","i rukolą","i pomidorem"], tip: "Podgrzej bułkę osobno, potem dodaj składniki." },
      { kind: "Tortilla z jajkiem", base: "Tortilla z jajkiem", style: "Szybkie śniadanie", time: ["10 minut","12 minut","15 minut"], main: ["z serem","z warzywami","z kurczakiem","z szynką"], add: ["i sosem","i papryką","i kukurydzą","i rukolą"], tip: "Najpierw jajko, potem tortilla na wierzch i obróć całość." },
      { kind: "Płatki bowl", base: "Płatki bowl", style: "Mega szybko", time: ["3 minuty","5 minut","7 minut"], main: ["czekoladowe","owsiane","kukurydziane","proteinowe"], add: ["z bananem","z owocami","z jogurtem","z orzechami"], tip: "Dodaj owoce, żeby nie było jak sucha przekąska." },
      { kind: "Ryż na mleku", base: "Ryż na mleku", style: "Słodkie domowe", time: ["15 minut","18 minut","20 minut"], main: ["waniliowy","cynamonowy","kakaowy","z jabłkiem"], add: ["i owocami","i miodem","i orzechami","i dżemem"], tip: "Mieszaj często, bo ryż łatwo łapie dno." },
      { kind: "Gofry", base: "Gofry", style: "Weekendowe śniadanie", time: ["20 minut","25 minut","30 minut"], main: ["waniliowe","czekoladowe","proteinowe","bananowe"], add: ["z owocami","z jogurtem","z masłem orzechowym","z syropem"], tip: "Nie otwieraj gofrownicy za wcześnie." },
      { kind: "Serek wiejski", base: "Serek wiejski", style: "Lekko", time: ["3 minuty","5 minut","7 minut"], main: ["z warzywami","z jajkiem","z tuńczykiem","z awokado"], add: ["i tostami","i pieczywem","i szczypiorkiem","i pieprzem"], tip: "Dopraw mocniej niż myślisz, bo serek jest delikatny." },
      { kind: "Hot sandwich", base: "Hot sandwich", style: "Ciepła kanapka", time: ["8 minut","10 minut","12 minut"], main: ["z serem","z kurczakiem","z jajkiem","z mozzarellą"], add: ["i sosem BBQ","i pomidorem","i rukolą","i ogórkiem"], tip: "Dociśnij kanapkę patelnią albo opiekaczem." },
      { kind: "Croque", base: "Croque domowy", style: "Serowy tost", time: ["12 minut","15 minut","18 minut"], main: ["z szynką","z jajkiem","z serem","z kurczakiem"], add: ["i beszamelem","i mozzarellą","i pieprzem","i szczypiorkiem"], tip: "Ser na górze robi robotę, zapiecz chwilę." }
    ]
  },

  lunch: {
    label: "obiad",
    templates: [
      { kind: "Makaron carbonara", base: "Makaron carbonara", style: "Makaron konkretny", time: ["20 minut","25 minut","30 minut"], main: ["z boczkiem","z kurczakiem","z pieczarkami","z parmezanem"], add: ["i pieprzem","i natką","i chili","i serem"], tip: "Wymieszaj sos poza ogniem, żeby jajko się nie ścięło." },
      { kind: "Makaron pesto", base: "Makaron pesto", style: "Szybki obiad", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","z mozzarellą","z pomidorkami","z tuńczykiem"], add: ["i rukolą","i parmezanem","i pestkami","i chili"], tip: "Pesto dodawaj po odcedzeniu, nie gotuj go długo." },
      { kind: "Makaron Alfredo", base: "Makaron Alfredo", style: "Kremowy obiad", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z brokułem","z pieczarkami","z boczkiem"], add: ["i parmezanem","i czosnkiem","i natką","i pieprzem"], tip: "Zostaw wodę z makaronu, ona klei sos." },
      { kind: "Makaron spicy", base: "Makaron spicy", style: "Ostry comfort", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z wołowiną","z mozzarellą","z warzywami"], add: ["i chili","i sosem pomidorowym","i serem","i cebulką"], tip: "Ostrość dawkuj na końcu." },
      { kind: "Makaron serowy", base: "Mac and cheese", style: "Serowy comfort", time: ["20 minut","25 minut","30 minut"], main: ["z cheddarem","z kurczakiem","z boczkiem","z jalapeno"], add: ["i bułką tartą","i szczypiorkiem","i pieprzem","i mozzarellą"], tip: "Sos serowy trzymaj na małym ogniu." },
      { kind: "Makaron pomidorowy", base: "Makaron pomidorowy", style: "Klasyk bez nudy", time: ["20 minut","25 minut","30 minut"], main: ["z mozzarellą","z kurczakiem","z tuńczykiem","z warzywami"], add: ["i bazylią","i parmezanem","i chili","i czosnkiem"], tip: "Podsmaż czosnek krótko, nie spal." },
      { kind: "Ramen", base: "Ramen", style: "Azjatycki obiad", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z jajkiem","z tofu","z wołowiną"], add: ["i kukurydzą","i szczypiorkiem","i grzybami","i chili"], tip: "Bulion dopraw sosem sojowym i imbirem." },
      { kind: "Stir fry", base: "Stir fry", style: "Szybko z patelni", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z wołowiną","z tofu","z krewetkami"], add: ["i warzywami","i makaronem","i ryżem","i sosem teriyaki"], tip: "Smaż na mocnym ogniu i krótko." },
      { kind: "Noodle bowl", base: "Noodle bowl", style: "Miska azjatycka", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z tofu","z wołowiną","z jajkiem"], add: ["i sezamem","i ogórkiem","i marchewką","i sosem sojowym"], tip: "Makaron przepłucz zimną wodą, nie sklei się." },
      { kind: "Rice bowl", base: "Rice bowl", style: "Miska obiadowa", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z wołowiną","z tofu","z tuńczykiem"], add: ["i warzywami","i sosem teriyaki","i kukurydzą","i awokado"], tip: "Ryż po ugotowaniu zostaw 5 minut pod przykryciem." },
      { kind: "Chicken bowl", base: "Chicken bowl", style: "Fit comfort", time: ["20 minut","25 minut","30 minut"], main: ["BBQ","teriyaki","czosnkowy","spicy"], add: ["z ryżem","z frytkami","z kaszą","z makaronem"], tip: "Kurczaka pokrój równo, szybciej się usmaży." },
      { kind: "Burrito bowl", base: "Burrito bowl", style: "Tex-mex", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z wołowiną","z fasolą","z serem"], add: ["i ryżem","i kukurydzą","i salsą","i sosem jogurtowym"], tip: "Daj kwaśny element, np. limonkę, będzie świeżej." },
      { kind: "Quesadilla", base: "Quesadilla", style: "Serowy obiad", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","z wołowiną","z serem","z warzywami"], add: ["i salsą","i sosem czosnkowym","i kukurydzą","i papryką"], tip: "Nie przesadzaj z farszem, łatwiej się obraca." },
      { kind: "Burger premium", base: "Burger premium", style: "Domowy fast food", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z wołowiną","crispy","serowy"], add: ["i frytkami","i sosem BBQ","i bekonem","i jalapeno"], tip: "Bułkę podpiecz od środka." },
      { kind: "Burger crispy", base: "Burger crispy", style: "Chrupiący obiad", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z serem","z sosem spicy","z coleslaw"], add: ["i frytkami","i ogórkiem","i sałatą","i sosem czosnkowym"], tip: "Panierkę dociśnij do mięsa przed smażeniem." },
      { kind: "Pizza pepperoni", base: "Pizza pepperoni", style: "Domowa pizza", time: ["25 minut","30 minut","35 minut"], main: ["z mozzarellą","z jalapeno","z cebulą","z dodatkowym serem"], add: ["i sosem czosnkowym","i rukolą","i oliwą","i oregano"], tip: "Piekarnik rozgrzej na maxa przed włożeniem." },
      { kind: "Pizza BBQ", base: "Pizza BBQ", style: "Domowa pizza", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z boczkiem","z cebulą","z kukurydzą"], add: ["i mozzarellą","i sosem BBQ","i jalapeno","i cheddarem"], tip: "Sos BBQ dawaj cienko, bo jest słodki." },
      { kind: "Tortilla chicken", base: "Tortilla chicken", style: "Do ręki", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","crispy","spicy","z serem"], add: ["i warzywami","i sosem czosnkowym","i frytkami","i kukurydzą"], tip: "Podpiecz złożoną tortillę na suchej patelni." },
      { kind: "Gyros bowl", base: "Gyros bowl", style: "Domowy street food", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z ryżem","z frytkami","z pitą"], add: ["i sosem czosnkowym","i ogórkiem","i pomidorem","i cebulką"], tip: "Przypraw kurczaka wcześniej, będzie lepszy." },
      { kind: "Kebab bowl", base: "Kebab bowl", style: "Domowy kebab", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z wołowiną","z frytkami","z ryżem"], add: ["i sosem mieszanym","i warzywami","i serem","i ostrym sosem"], tip: "Mięso smaż na mocnym ogniu, żeby się zarumieniło." },
      { kind: "Thai curry", base: "Thai curry", style: "Kremowe curry", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z tofu","z krewetkami","z warzywami"], add: ["i ryżem","i mleczkiem kokosowym","i limonką","i chili"], tip: "Pastę curry podsmaż chwilę na oleju." },
      { kind: "Butter chicken", base: "Butter chicken", style: "Indyjski comfort", time: ["30 minut","35 minut","40 minut"], main: ["z ryżem","z naanem","z jogurtem","z kolendrą"], add: ["i śmietanką","i masłem","i imbirem","i czosnkiem"], tip: "Sos gotuj na małym ogniu, aż zgęstnieje." },
      { kind: "Sushi bowl", base: "Sushi bowl", style: "Sushi bez rolowania", time: ["20 minut","25 minut","30 minut"], main: ["z łososiem","z tuńczykiem","z kurczakiem","z tofu"], add: ["i ryżem","i ogórkiem","i awokado","i sosem sojowym"], tip: "Ryż dopraw octem ryżowym albo sokiem z cytryny." },
      { kind: "Loaded fries", base: "Loaded fries", style: "Mocny comfort", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z serem","z boczkiem","z sosem BBQ"], add: ["i jalapeno","i szczypiorkiem","i sosem czosnkowym","i cebulką"], tip: "Frytki zapiecz z serem dopiero na końcu." },
      { kind: "Zapiekanka makaronowa", base: "Zapiekanka makaronowa", style: "Serowa zapiekanka", time: ["30 minut","35 minut","40 minut"], main: ["z kurczakiem","z serem","z sosem pomidorowym","z brokułem"], add: ["i mozzarellą","i pieczarkami","i kukurydzą","i czosnkiem"], tip: "Makaron ugotuj krócej, dojdzie w piekarniku." },
      { kind: "Zapiekanka ziemniaczana", base: "Zapiekanka ziemniaczana", style: "Domowy comfort", time: ["35 minut","40 minut","45 minut"], main: ["z kurczakiem","z serem","z boczkiem","z warzywami"], add: ["i sosem czosnkowym","i mozzarellą","i szczypiorkiem","i cebulką"], tip: "Pokrój ziemniaki cienko, szybciej się upieką." },
      { kind: "Risotto", base: "Risotto", style: "Kremowy obiad", time: ["25 minut","30 minut","35 minut"], main: ["z kurczakiem","z pieczarkami","z parmezanem","z warzywami"], add: ["i czosnkiem","i natką","i masłem","i pieprzem"], tip: "Bulion dolewaj po trochu, nie wszystko naraz." },
      { kind: "Chicken strips", base: "Chicken strips", style: "Chrupiący obiad", time: ["25 minut","30 minut","35 minut"], main: ["z frytkami","z ryżem","z wrapem","z sałatką"], add: ["i sosem BBQ","i sosem czosnkowym","i serem","i chili"], tip: "Smaż partiami, żeby panierka była chrupiąca." },
      { kind: "Nachos bowl", base: "Nachos bowl", style: "Tex-mex", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z wołowiną","z serem","z fasolą"], add: ["i salsą","i kukurydzą","i jalapeno","i sosem śmietanowym"], tip: "Nachosy dodaj na końcu, żeby nie zmiękły." },
      { kind: "Teriyaki chicken", base: "Teriyaki chicken", style: "Słodko-słony obiad", time: ["20 minut","25 minut","30 minut"], main: ["z ryżem","z makaronem","z warzywami","z sezamem"], add: ["i szczypiorkiem","i ogórkiem","i marchewką","i brokułem"], tip: "Sos zredukuj minutę na patelni." }
    ]
  },

  dinner: {
    label: "kolację",
    templates: [
      { kind: "Wrap chicken", base: "Wrap chicken", style: "Lekka kolacja", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","crispy","spicy","z serem"], add: ["i warzywami","i sosem","i rukolą","i kukurydzą"], tip: "Nie dawaj za dużo sosu, tortilla nie rozmoknie." },
      { kind: "Wrap crispy", base: "Wrap crispy", style: "Chrupiąca kolacja", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","z serem","z sałatą","z pomidorem"], add: ["i sosem czosnkowym","i BBQ","i ostrym sosem","i ogórkiem"], tip: "Crispy dodaj gorące tuż przed zawinięciem." },
      { kind: "Tortilla cheese", base: "Tortilla cheese", style: "Serowa kolacja", time: ["10 minut","12 minut","15 minut"], main: ["z mozzarellą","z cheddarem","z kurczakiem","z warzywami"], add: ["i salsą","i sosem czosnkowym","i kukurydzą","i papryką"], tip: "Podgrzewaj na małym ogniu, ser się roztopi bez spalenia." },
      { kind: "Quesadilla chicken", base: "Quesadilla chicken", style: "Kolacja na ciepło", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","z serem","z papryką","z kukurydzą"], add: ["i salsą","i jogurtem","i jalapeno","i cebulką"], tip: "Pokrój na trójkąty dopiero po minucie odpoczynku." },
      { kind: "Burger light", base: "Burger light", style: "Lżejszy fast food", time: ["20 minut","25 minut","30 minut"], main: ["z kurczakiem","z indykiem","z halloumi","z jajkiem"], add: ["i sałatą","i pomidorem","i sosem jogurtowym","i ogórkiem"], tip: "Daj dużo warzyw, będzie lżej." },
      { kind: "Toast premium", base: "Toast premium", style: "Ciepła kolacja", time: ["8 minut","10 minut","12 minut"], main: ["z mozzarellą","z kurczakiem","z jajkiem","z tuńczykiem"], add: ["i sosem","i rukolą","i pomidorem","i serem"], tip: "Tostuj dłużej na mniejszej mocy." },
      { kind: "Grilled sandwich", base: "Grilled sandwich", style: "Kanapka z patelni", time: ["10 minut","12 minut","15 minut"], main: ["z serem","z kurczakiem","z szynką","z mozzarellą"], add: ["i sosem BBQ","i pomidorem","i rukolą","i ogórkiem"], tip: "Dociśnij kanapkę czymś ciężkim podczas smażenia." },
      { kind: "Salad bowl", base: "Salad bowl", style: "Miska sałatkowa", time: ["12 minut","15 minut","20 minut"], main: ["z kurczakiem","z tuńczykiem","z jajkiem","z halloumi"], add: ["i sosem jogurtowym","i grzankami","i kukurydzą","i pomidorem"], tip: "Sos dawaj na końcu, liście zostaną chrupiące." },
      { kind: "Poke bowl", base: "Poke bowl", style: "Świeża kolacja", time: ["15 minut","20 minut","25 minut"], main: ["z łososiem","z tuńczykiem","z kurczakiem","z tofu"], add: ["i ryżem","i ogórkiem","i awokado","i sosem sojowym"], tip: "Składniki układaj osobno, wygląda i smakuje lepiej." },
      { kind: "Bruschetta", base: "Bruschetta", style: "Lekko włosko", time: ["10 minut","12 minut","15 minut"], main: ["z pomidorem","z mozzarellą","z kurczakiem","z pesto"], add: ["i bazylią","i oliwą","i czosnkiem","i rukolą"], tip: "Pieczywo natrzyj czosnkiem po podpieczeniu." },
      { kind: "Bagietka pizza", base: "Bagietka pizza", style: "Szybka pizza", time: ["12 minut","15 minut","18 minut"], main: ["z pepperoni","z kurczakiem","z serem","z pieczarkami"], add: ["i sosem","i mozzarellą","i oregano","i kukurydzą"], tip: "Nie przesadzaj z sosem, bagietka nie zmięknie." },
      { kind: "Mini pizza", base: "Mini pizza", style: "Kolacja z piekarnika", time: ["15 minut","18 minut","22 minut"], main: ["na tortilli","na bułce","na bagietce","na chlebie"], add: ["z serem","z kurczakiem","z pepperoni","z warzywami"], tip: "Podpiecz bazę 2 minuty przed dodatkami." },
      { kind: "Mozzarella toast", base: "Mozzarella toast", style: "Serowo", time: ["8 minut","10 minut","12 minut"], main: ["z pomidorem","z pesto","z kurczakiem","z szynką"], add: ["i bazylią","i rukolą","i oliwą","i pieprzem"], tip: "Mozzarellę odsącz, inaczej tost będzie mokry." },
      { kind: "Chicken sandwich", base: "Chicken sandwich", style: "Kanapka premium", time: ["12 minut","15 minut","20 minut"], main: ["z kurczakiem","crispy","BBQ","spicy"], add: ["i sałatą","i serem","i pomidorem","i sosem"], tip: "Kurczaka pokrój cienko, łatwiej jeść." },
      { kind: "Tuna sandwich", base: "Tuna sandwich", style: "Szybka kolacja", time: ["7 minut","10 minut","12 minut"], main: ["z tuńczykiem","z jajkiem","z serem","z kukurydzą"], add: ["i ogórkiem","i majonezem","i jogurtem","i pieprzem"], tip: "Odsącz tuńczyka porządnie." },
      { kind: "Pasta light", base: "Pasta light", style: "Lekki makaron", time: ["15 minut","20 minut","25 minut"], main: ["z pomidorkami","z tuńczykiem","z kurczakiem","z pesto"], add: ["i rukolą","i mozzarellą","i parmezanem","i oliwą"], tip: "Nie zalewaj ciężkim sosem, ma być lżej." },
      { kind: "Ramen light", base: "Ramen light", style: "Ciepła miska", time: ["15 minut","20 minut","25 minut"], main: ["z jajkiem","z kurczakiem","z tofu","z warzywami"], add: ["i szczypiorkiem","i kukurydzą","i sezamem","i chili"], tip: "Użyj mniej makaronu, więcej dodatków." },
      { kind: "Rice light bowl", base: "Rice light bowl", style: "Kolacja z ryżem", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","z jajkiem","z tofu","z tuńczykiem"], add: ["i ogórkiem","i kukurydzą","i sosem","i sezamem"], tip: "Ryż może być z obiadu, tylko go podgrzej." },
      { kind: "Loaded toast", base: "Loaded toast", style: "Tost na bogato", time: ["10 minut","12 minut","15 minut"], main: ["z serem","z jajkiem","z kurczakiem","z awokado"], add: ["i sosem","i pomidorem","i rukolą","i szczypiorkiem"], tip: "Dodaj coś świeżego po podgrzaniu." },
      { kind: "Chicken salad", base: "Chicken salad", style: "Sałatka syta", time: ["12 minut","15 minut","20 minut"], main: ["z kurczakiem","crispy","grillowanym","spicy"], add: ["i grzankami","i sosem cezar","i pomidorem","i parmezanem"], tip: "Kurczaka dodaj ciepłego na zimne warzywa." },
      { kind: "Halloumi bowl", base: "Halloumi bowl", style: "Bez mięsa", time: ["12 minut","15 minut","20 minut"], main: ["z halloumi","z ryżem","z sałatą","z warzywami"], add: ["i sosem jogurtowym","i miodem","i sezamem","i pomidorem"], tip: "Halloumi smaż na suchej patelni." },
      { kind: "Egg toast", base: "Egg toast", style: "Jajko na kolację", time: ["8 minut","10 minut","12 minut"], main: ["z jajkiem sadzonym","z pastą jajeczną","z omletem","z jajkiem na twardo"], add: ["i serem","i sosem","i szczypiorkiem","i pomidorem"], tip: "Jajko dopraw dopiero pod koniec." },
      { kind: "Nachos kolacyjne", base: "Nachos kolacyjne", style: "Do chrupania", time: ["12 minut","15 minut","18 minut"], main: ["z serem","z kurczakiem","z salsą","z kukurydzą"], add: ["i jalapeno","i sosem","i cebulką","i pomidorem"], tip: "Nie zapiekaj za długo, nachosy szybko się przypalają." },
      { kind: "Tortilla pizza", base: "Tortilla pizza", style: "Ultra szybka pizza", time: ["10 minut","12 minut","15 minut"], main: ["z mozzarellą","z pepperoni","z kurczakiem","z warzywami"], add: ["i sosem","i oregano","i rukolą","i serem"], tip: "Tortilla robi się chrupiąca bardzo szybko." },
      { kind: "Crispy bowl", base: "Crispy bowl", style: "Miska na wieczór", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem crispy","z frytkami","z ryżem","z sałatą"], add: ["i sosem","i kukurydzą","i ogórkiem","i pomidorem"], tip: "Crispy trzymaj osobno do końca." },
      { kind: "Pita", base: "Pita", style: "Street food", time: ["15 minut","20 minut","25 minut"], main: ["z kurczakiem","z falafelem","z serem","z warzywami"], add: ["i sosem czosnkowym","i ostrym sosem","i sałatą","i ogórkiem"], tip: "Pitę podgrzej przed nadziewaniem." },
      { kind: "Falafel wrap", base: "Falafel wrap", style: "Bez mięsa", time: ["15 minut","20 minut","25 minut"], main: ["z falafelem","z hummusem","z warzywami","z serem"], add: ["i sosem jogurtowym","i ogórkiem","i pomidorem","i rukolą"], tip: "Dodaj kwaśny ogórek albo cytrynę dla świeżości." },
      { kind: "Serek tortilla", base: "Serek tortilla", style: "Kremowa tortilla", time: ["7 minut","10 minut","12 minut"], main: ["z serkiem","z kurczakiem","z tuńczykiem","z warzywami"], add: ["i sałatą","i pomidorem","i szczypiorkiem","i sosem"], tip: "Serek rozsmaruj do samych brzegów." },
      { kind: "Zapiekany wrap", base: "Zapiekany wrap", style: "Ciepła tortilla", time: ["15 minut","18 minut","22 minut"], main: ["z kurczakiem","z serem","z pepperoni","z warzywami"], add: ["i mozzarellą","i sosem","i kukurydzą","i papryką"], tip: "Zapiecz 5 minut, żeby ser złapał całość." },
      { kind: "Kolacyjny bowl", base: "Kolacyjny bowl", style: "Prosto z miski", time: ["12 minut","15 minut","20 minut"], main: ["z jajkiem","z kurczakiem","z tuńczykiem","z tofu"], add: ["i ryżem","i sałatą","i sosem","i warzywami"], tip: "Nie mieszaj wszystkiego od razu, lepiej dozować sos." }
    ]
  }
};

const pools = { breakfast: [], lunch: [], dinner: [] };
const cursors = { breakfast: 0, lunch: 0, dinner: 0 };
let currentType = "breakfast";
let lastMealKind = { breakfast: null, lunch: null, dinner: null };
let lastMealName = { breakfast: null, lunch: null, dinner: null };

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

function makeMeal(tpl, main, add, time) {
  const name = `${tpl.base} ${main} ${add}`;
  return {
    kind: tpl.kind.toLowerCase(),
    name,
    style: tpl.style,
    difficulty: "Łatwy",
    time,
    ingredients: [
      `baza: ${tpl.base}`,
      `główny dodatek: ${main}`,
      `dodatki: ${add}`,
      "sól i pieprz do smaku",
      "ulubiony sos lub przyprawy",
      "odrobina oleju / masła do przygotowania"
    ],
    steps: [
      `Przygotuj bazę dania: ${tpl.base}.`,
      `Dodaj główny składnik: ${main}.`,
      `Dorzuć dodatki: ${add}.`,
      "Dopraw do smaku i podgrzej albo wymieszaj zależnie od dania.",
      "Podaj od razu, najlepiej na ciepło."
    ],
    tip: tpl.tip
  };
}

function buildMeals(type, seed) {
  const created = [];
  mealConfig[type].templates.forEach((tpl) => {
    tpl.main.forEach((main) => {
      tpl.add.forEach((add) => {
        tpl.time.forEach((time) => {
          created.push(makeMeal(tpl, main, add, time));
        });
      });
    });
  });

  const rand = mulberry32(seed);
  const shuffled = shuffle(created, rand);

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
  pools.breakfast = buildMeals("breakfast", 111);
  pools.lunch = buildMeals("lunch", 222);
  pools.dinner = buildMeals("dinner", 333);
}

function nextMeal(type) {
  const pool = pools[type];
  let idx = cursors[type];
  let meal = pool[idx];
  let guard = 0;

  while (
    guard < pool.length &&
    (
      meal.kind === lastMealKind[type] ||
      meal.name === lastMealName[type]
    )
  ) {
    idx = (idx + 1) % pool.length;
    meal = pool[idx];
    guard += 1;
  }

  lastMealKind[type] = meal.kind;
  lastMealName[type] = meal.name;
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
      <p><strong>Dostępne opcje:</strong> ${pools[type].length}</p>
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
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
