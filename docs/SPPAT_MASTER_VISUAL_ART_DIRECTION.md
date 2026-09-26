# SPPAT — MASTER VISUAL ART DIRECTION — FINAL INTEGRATION PLAN

Статус: финальная визуальная режиссура перед последней реализацией.
Основа: `SPPAT_FINAL_DESIGN_SPECIFICATION.md` + `SPPAT_FINAL_WEBSITE_CONTENT_9PAGES_FINAL.md` + актуальный `Архив 2.zip` + фактические скриншоты текущей реализации.
Цель: не придумывать новый сайт, а довести уже утверждённый The Continuous Blueprint до цельной реализации с полноценным использованием медиатеки.

## 0. Что меняется принципиально
Исходная арт-директорская идея остаётся: строгая 12-колоночная сетка, `#F7F7F5`, `#1A1A1A`, Blueprint line, Space Grotesk + Inter, архитектурная асимметрия, evidence over emotion.
Меняется только интеграция фотографий:
1. `media/` — editorial/public visual layer: Home, Badkamers, Tegelwerk, Specialisaties, Over ons.
2. `special-references/` — техническое доказательство конкретного процесса.
3. `references/` — реальные выполненные работы. Все они живут на `/projecten/`, часть может быть превью на Home в Gerealiseerde Projecten.
4. Фотография больше не вставляется как «ещё одна картинка». У каждой есть роль: establishing / service evidence / process evidence / material macro / real project proof / CTA background.
5. Никаких случайных белых карточек поверх изображения. Белый блок используется только когда он является частью утверждённой overlap-композиции и занимает ограниченную долю изображения.
6. Никакой случайной masonry-асимметрии. Все смещения следуют одному из фиксированных модулей ниже.

## 1. Единая система визуальных модулей

### M1 — ESTABLISHING HERO
Для Home / Badkamers.
- 12 колонок.
- Desktop: широкая фотография 16:9 или близкая к ней.
- H1 занимает максимум 5–6 колонок.
- H1 не перекрывает смысловой центр фотографии.
- Не более 30–38% площади hero может быть занято светлым текстовым полем.
- Текстовое поле привязано к нижней/верхней линии сетки, не плавает произвольно.
- Mobile: изображение 4:5, текстовая панель `width: calc(100% - 40px)`, overlap приблизительно 48–72 px.
- Mobile H1: максимум `clamp(2.25rem, 10vw, 3rem)`. Никаких заголовков в 6–7 строк при наличии более компактной композиции.

### M2 — INTERLOCKING SPLIT
Для Home Core Capabilities.
**Desktop:**
- один общий композиционный блок, а не два независимых раздела;
- Badkamers image: cols 1–5, portrait 4:5;
- Tegelwerk image: cols 7–12, landscape 4:3 / 16:9, опущен на `space-md`;
- между ними находится текст, но без закрытой карточки вокруг всего текста;
- текст Badkamers привязывается к верхней части портрета;
- текст Tegelwerk привязывается к нижней линии landscape;
- обе фотографии видны одновременно и читаются как одна композиция.
**Mobile:**
- Badkamers bleed;
- его текст interlock на нижнем крае;
- Tegelwerk — inset 20px;
- текст следует сразу за изображением;
- никакого document overflow.

### M3 — EDITORIAL SERVICE SPLIT
Новый модуль для пяти подробных услуг Tegelwerk и отдельных service-proof секций.
**Desktop:**
- один 12-col row;
- text = 6–7 cols;
- image = 4–5 cols;
- стороны чередуются: text/image → image/text;
- vertical alignment: top или center, но не случайные большие отступы;
- между соседними service sections = `space-lg`, не `space-xl`;
- фотография находится непосредственно рядом с тем текстом, который она доказывает.
**Mobile:**
- 1 колонка;
- image + text образуют один блок;
- нет огромного пустого пространства;
- portrait остаётся portrait, landscape остаётся landscape.

### M4 — TECHNICAL EVIDENCE FIGURE / RAIL
Для process photos.
**Evidence Figure:**
- inset;
- тонкая Blueprint line сверху/снизу;
- короткий factual caption;
- не выглядит как рекламная карточка.
**Evidence Rail:**
- Desktop: максимум 3–4 изображения в одной строке;
- изображения могут иметь разную ширину, но привязаны к колонкам;
- Mobile: local scroll-snap;
- rail не повышает `documentElement.scrollWidth`.
Нельзя делать 8 одинаковых square-cards просто потому, что массив удобно map().

### M5 — PROCESS → RESULT PAIR
Для 45°, подготовки, крупного формата.
**Desktop:**
- process 5 cols;
- finished result 5 cols;
- 1–2 cols между ними используются под подпись / axis;
- не одинаковые карточки, а визуальная причинно-следственная пара.
**Mobile:**
- process сначала;
- result сразу после;
- один общий caption/title.

### M6 — PROJECT ARCHETYPE
Используется только на `/projecten/` и Home project previews.
- **Alpha** = panorama + inset.
- **Beta** = portrait sequence.
- **Gamma** = detail pair + contextual wide.
- **Delta** = monolith + typography.
- Для серий > 4 фото допускается **Extended Archetype**, но он должен быть построен из 2–3 последовательных grid-acts, а не masonry.

### M7 — CTA-ANCHOR
Для Home и Badkamers.
**Desktop:**
- широкое фото;
- CTA находится в реальном negative space;
- текстовый блок не шире 4–5 колонок;
- фон либо отсутствует, либо используется компактная `#F7F7F5` панель с max-width 420–480px;
- панель не закрывает главный объект.
**Mobile:**
- изображение 4:5 / 3:4;
- компактная светлая панель с 20px боковыми полями;
- overlap 48–64px;
- H2 максимум 3–4 строки;
- body 16px;
- никакой гигантской карточки почти на весь кадр.

## 2. HOME /

### 2.1 Hero
Фото: `media/экстра-крупный_формат.jpg`
Размер: 1376×768.
Роль: establishing image.
**Композиция:**
- full 12-col / 16:9;
- H1 cols 1–6, anchored bottom-left;
- panel занимает максимум 36% изображения;
- сохраняются душевая, vanity и архитектурная глубина;
- mobile crop 4:5 центрируется на shower/vanity, а не на пустой стене.

### 2.2 Kwaliteit begint onder de tegels
Это Technical Proof, а не ещё одна карточка.
Фото: `media/лазер-идеальный_шов.jpg`.
**Desktop:**
- сначала text cols 2–7;
- под ним 12-col short strip, ориентир 32–38vh;
- laser / joint остаётся смысловым центром.
**Mobile:**
- text;
- inset 16:9 technical figure;
- никаких вертикальных sliver-crops.

### 2.3 Core Capabilities — единый Interlocking Split
**Badkamers**
Фото: `media/ванная-ниша-лед-мозаика-120ъ60см.jpeg`
736×1226 portrait.
- cols 1–5;
- 4:5 crop;
- ниша/LED остаются видимыми.

**Tegelwerk**
Фото: `media/большая_гостиная-60х120см.jpg`
1376×768 landscape.
- cols 7–12;
- 4:3 / wide crop;
- Y offset = `space-md`;
- линии пола и перспектива являются композиционным направляющим элементом.

**Текст**
*Turnkey Badkamerrenovatie van A tot Z* и *Professioneel Tegelwerk voor Elke Ruimte* больше НЕ живут внутри огромных закрытых белых прямоугольников.
Тексты привязаны к двум изображениям и общей центральной negative-space зоне.

### 2.4 Specialisaties in Veeleisende Materialen
Typography-first bridge.
Не добавляем ещё 4 больших повторяющихся фотографии.
Используем:
- H2 + paragraph cols 2–7;
- четыре text links / material labels на Blueprint line cols 8–12;
- это визуальная пауза перед реальными проектами.

### 2.5 Gerealiseerde Projecten
Три превью реальных серий.
**Preview A — Project 03 / Alpha**
- dominant: `references/Новая папка 3/WhatsApp Image 2025-02-26 at 18.20.06.jpeg`
- inset: `references/Новая папка 3/WhatsApp Image 2025-05-30 at 21.24.02 (5).jpeg`
**Preview B — Project 04 / Alpha**
- dominant: `references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.03 (6).jpeg`
- inset: `references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.04 (4).jpeg`
**Preview C — Project 05 / Alpha**
- dominant: `references/Новая папка 5/WhatsApp Image 2025-05-30 at 21.24.07 (6).jpeg`
- inset: `references/Новая папка 5/WhatsApp Image 2025-05-30 at 21.24.07 (1).jpeg`
**Desktop:**
- три последовательных мини-Alpha;
- не три одинаковых cards;
- section gap между previews 64–80px, не 160px.
**Mobile:**
- scroll-snap;
- один dominant + inset читаются как один item.

### 2.6 35 Jaar Ervaring in Bouwtechniek
Typography-only breathing room.
- cols 3–9;
- одна Blueprint line;
- без новой фотографии;
- это осознанная пауза после photo-heavy projects.

### 2.7 Final CTA — ИСПРАВИТЬ ТЕКУЩУЮ КАТАСТРОФУ
Фото: `media/хз_что_с_этим_делать.jpg`
1376×768, спокойная фактура / большой negative field.
**Причина замены текущего CTA-фона:**
- здесь нет ценного объекта, который CTA может закрыть;
- материал работает как архитектурный фон;
- Home CTA перестаёт повторять раковины/ванные.
**Desktop:**
- image 12 cols / 16:9;
- CTA block cols 2–6 либо 7–11 в зависимости от final object-position;
- H2 не больше `clamp(2.4rem, 4vw, 3.5rem)`;
- panel max-width 460px.
**Mobile:**
- image 4:5;
- panel width `calc(100%-40px)`;
- panel overlap 56px;
- H2 max 3–4 строки;
- не перекрывать более ~25% изображения.

## 3. COMPLETE BADKAMERRENOVATIE

### 3.1 Hero
Фото: `media/душевая_премиум-120х60.jpg`
1200×896.
- full bleed;
- минимальный crop;
- LED niche + shower + vanity остаются читаемыми.

### 3.2 Eén gecoördineerde uitvoering
Typography + short process proof.
Не делать галерею.
В правой части 3 технических figures:
1. `special-references/монтаж_геберит.jpg`
2. `special-references/гидроизоляция.jpg`
3. `special-references/подготовка.jpeg`
**Grid:**
- text cols 1–6;
- evidence figs cols 8–12, stacked/staggered;
- один portrait dominant + два square details.

### 3.3 A–Z Timeline
Сам timeline остаётся главным объектом.
К нему прикрепляются только три evidence anchors:
- step 2 / Technische voorbereiding → `special-references/монтаж_геберит.jpg` только если не использован в предыдущем composition; на одной странице не дублировать.
- step 3 / Ondergrond en natte zones → `special-references/подготовка-2.jpeg` + `special-references/гидроизоляция.jpg`
- step 4 / Tegelwerk en detaillering → `special-references/процесс.heic` (web-safe conversion) + `media/ниша-2.jpg`
- step 5 / Sanitair en afwerking → `media/монтаж_душ_стекла.jpg` если About больше не использует его как hero.
*Финальное правило: одно и то же фото только один раз на странице. Если Geberit уже стоит в Eén gecoördineerde uitvoering, timeline использует другой process image.*

### 3.4 De onzichtbare techniek bepaalt de levensduur
Фото: `special-references/подготовка.jpeg`
Если оно уже выше, использовать `special-references/подготовка-3.jpeg`.
- text cols 1–5;
- image cols 7–12;
- portrait 4:5;
- no placeholder.

### 3.5 Volledige vrijheid in materiaalkeuze
Typography-first.
Без большой картинки. Это текстовая пауза.

### 3.6 Mogelijkheden binnen een complete badkamer — VISUAL EVIDENCE INDEX
Здесь пользователь буквально читает список того, что мы делаем. Значит здесь фотографии обязательны.
Используем 6 evidence figures:
1. Vloerverwarming → `media/теплый_пол-2.jpg`
2. Douchegoot → `media/трап-2.jpg`
3. Inbouwnis → `media/ниша-2.jpg` или `media/ниша_лед.jpg`
4. LED / nis → `media/ниша_лед.jpg`
5. Mozaïekaccent → `media/mozaik1.jpg`
6. Douche-afschot / wet-room detail → `media/душевой_спад.heic` → web-safe
**Desktop:**
- 2 rows × 3 evidence figures;
- widths не обязаны быть одинаковыми;
- captions = только факт, например Vloerverwarming, Douchegoot, Nis + LED;
- без card shadows / rounded boxes.
**Mobile:**
- horizontal rail 70–78vw per item;
- snap;
- caption under image.
**Дополнительные process support:**
- `media/теплый_пол.jpeg` — secondary for Vloerverwarming;
- `media/трап.jpg` — secondary detail;
- `special-references/утеплитель-под-стяжку.jpeg` — floor-build-up evidence с подписью *Vloeropbouw — projectafhankelijk*.

### 3.7 Toiletrenovatie
Editorial split.
Primary: `media/дуалет-раковина-ниша-лед.jpg`
Secondary small figure: `media/дизайн_туалет.jpg`
**Desktop:**
- primary portrait cols 1–5;
- text cols 7–12;
- secondary 1:1 / portrait detail tucked into lower text edge, не отдельная новая секция.

### 3.8 CTA-Anchor
Фото: `media/120х60_раковина.jpg`.
- wide;
- CTA располагается в верхней/правой negative-space зоне;
- custom sink остаётся полностью видимой;
- panel max 4–5 cols.

## 4. ALMERE
Оставить сдержанной SEO-страницей.
Фото: `media/дизайн_тропик.jpg`.
- 50/50 split;
- text cols 1–5;
- image cols 7–12;
- никаких дополнительных galleries;
- не утверждать, что помещение находится в Almere.

## 5. TEGELWERK

### 5.1 Hero
Фото: `media/левитирующая_стена.jpg`.
**Точная композиция:**
- один общий 12-col row;
- image cols 3–12, 16:9;
- text block cols 1–5;
- overlap не больше 28–32% изображения;
- H1 полностью видим;
- white field не закрывает правую половину изображения;
- фотография должна остаться главным визуальным объектом.

### 5.2 Intro + Onze tegelwerkdiensten
Сохраняем исходный арт-директорский Typographic Index.
- intro cols 1–5;
- index cols 7–12;
- 5 услуг с short descriptions;
- 1px separators;
- без изображений внутри этого index.

### 5.3 Пять подробных service sections — Editorial Service Split
Это обновление арт-дирекции под расширенный медиархив.
**Vloertegels Leggen**
Фото: `media/40х40см.jpg`
- text cols 2–7;
- image cols 9–12;
- ratio 1:1.
Под subsection *Voorbereiding en egalisatie*:
- process pair `special-references/самонивелирующая_смесь.jpeg`
- `special-references/процесс-2.heic` после web-safe conversion, только если визуально понятно, что это поверхность/подготовка.

**Wandtegels Zetten**
Фото: `media/дизайн_ванная_7х19см-раковина(из_керамогранита).jpg`
- image cols 1–5, 3:2 / 16:9;
- text cols 7–12.
Technical detail:
`media/подрез_45.jpg` как маленький inset к *Details die het verschil maken*.

**Keuken Achterwand & Vloer Tegelen**
Фото: `media/фартук.jpg`
- text cols 2–7;
- image cols 9–12, 1:1 / 4:3.

**Balkon Tegelen**
Фото: `media/balkon.jpg`
- image cols 1–5;
- text cols 7–12;
- square / 4:3;
- фотография должна сидеть рядом с *Water moet weg kunnen*, а не висеть маленькой картинкой над текстом.

**Badkamer Vakkundig Laten Tegelen**
Фото: `media/душевая-мозаика.jpg`
- text cols 2–7;
- image cols 9–12;
- 4:5 portrait.
Secondary technical figure:
`media/трап.jpg` возле *aansluiting op douchegoot of put*, если на Badkamers страница использует трап-2.

### 5.4 Formaten in de praktijk
Не рендерить повторно четыре огромных фото, уже использованных выше.
Сделать Format Index Strip:
- четыре mini technical crops 1:1;
- captions:
  - 7×19
  - 40×40
  - 60×120
  - 120×60
Sources:
- `media/дизайн_ванная_7х19см-...jpg`
- `media/40х40см.jpg`
- `media/большая_гостиная-60х120см.jpg`
- `media/120х60_раковина.jpg`
На desktop ширина каждого mini crop 2–2.5 cols.
Это secondary evidence, не повторные hero.
Текст:
*Het tegelformaat beïnvloedt de verdeling, snijlijnen en het ritme van een vlak. Op deze pagina tonen we voorbeelden van 7×19 cm, 40×40 cm, 60×120 cm en 120×60 cm. Welke verdeling passend is, hangt af van ruimte, ondergrond, tegel en ontwerp.*

### 5.5 Verstek / 45° afwerking
Process → Result module.
- Process: `special-references/запил-45-процесс.jpeg`
- Result A: `media/запил-45-1.jpg`
- Result B / detail: `media/ниша-запил-45-мозаика.jpg`
**Desktop:**
- process cols 1–5;
- result A cols 7–10;
- result B small inset cols 10–12;
- section text above cols 3–9.

### 5.6 Premium Capability Bridge
Не использовать 45° фото как generic premium block.
**XXL / demanding material**
Main: `media/раковина(из_широкоформатной плитки).jpg`
Technical inset: `special-references/Вставка 24.09.2026 в 09:53:19.heic` → web-safe.
**Mozaïek / refined material**
Main: `media/мозаика-люкс.jpg`
Optional secondary: `media/ниша-запил-45-мозаика.jpg`, если не использовано в 45° module на той же странице. На одной странице не дублировать.
Final CTA = CTA-Monument.

## 6. SPECIALISATIES

### 6.1 Hero
Typography-led.
Никакого hero image.

### 6.2 Grootformaat & XXL
Main: `media/раковина(из_широкоформатной плитки).jpg`
- full 12-col 16:9;
- no arbitrary crop;
- white text overlay max 4 cols;
- text field не закрывает sink.
Process inset: `special-references/Вставка 24.09.2026 в 09:53:19.heic` → web-safe.
Дополнительный finished scale detail:
`media/экстра-крупный_формат.jpg` не использовать, потому что Home hero. Избегаем повторов.

### 6.3 Mozaïek
Main: `media/мозаика-люкс.jpg`
- 4-col portrait;
- text 6 cols;
- high negative space.
Secondary detail: `media/ниша-запил-45-мозаика.jpg`
- small inset 3–4 cols;
- не использовать, если уже используется на Tegelwerk в том же final architecture. Приоритет Specialisaties.

### 6.4 Natuursteen
Пока text-only.
Candidate A: `media/Вставка 24.09.2026 в 09:52:01.heic`
Candidate B: `media/Вставка 24.09.2026 в 09:52:17.heic`
Оба визуально подходят под stone diptych, но material identity не подтверждена названием.
После owner confirmation они становятся two 4:5 portraits cols 1–5 / 6–10.
До подтверждения:
- никакого серого placeholder;
- никакой dummy image;
- text cols 2–8;
- Blueprint line показывает намеренное отсутствие фотографии, а не ошибку загрузки.

### 6.5 Keramisch Parket
Main: `media/под_паркет(ламинат).jpg`
- image cols 3–12, wide;
- text cols 1–4;
- text реально overlap left edge изображения в одном grid row.
Secondary: `media/Вставка 24.09.2026 в 09:51:39.heic` → web-safe;
- маленький portrait inset внизу справа;
- показывает другой контекст wood-look application.
Final CTA = CTA-Monument.

## 7. PROJECTEN — ПОЛНАЯ ПЕРЕСБОРКА КОМПОЗИЦИИ, НЕ КОНТЕНТА
Никакого masonry и случайно разбросанных фотографий.
**Global:**
- max content width 1440;
- один section = один чёткий archetype;
- между project sections `space-lg` 120px;
- внутри series 24–40px gaps;
- никаких пустых зон в 250–400px без смысловой функции;
- каждый проект имеет H2 + approved short copy.

### 7.1 Project 01 — Beta / 3 portrait sequence
Files:
1. `references/Новая папка/WhatsApp Image 2025-02-26 at 18.20.13.jpeg`
2. `references/Новая папка/WhatsApp Image 2025-02-26 at 18.20.16.jpeg`
3. `references/Новая папка/WhatsApp Image 2025-05-30 at 21.24.01 (4).jpeg`
**Desktop:**
- image1 cols 1–4, starts row 1;
- image2 cols 5–8, top offset 64px;
- image3 cols 9–12, top offset 24px;
- all same visual height / 4:5 crop;
- text anchored under image2, cols 5–8.

### 7.2 Project 02 — Extended Beta / 5 bathroom portraits
Files all 5 from `Новая папка 2`.
**Act A:**
- P02-01 cols 1–5, 4:5 dominant;
- P02-02 cols 6–9, 4:5;
- P02-03 cols 10–12, 4:5 crop.
**Act B:**
- P02-04 cols 3–7;
- P02-05 cols 8–12;
- second row offset 48px from first.
No random gaps.

### 7.3 Project 03 — Alpha + support
- dominant: `...18.20.06.jpeg` → cols 1–10, landscape 16:9 / source-respecting;
- inset portrait: `...21.24.02 (5).jpeg` → cols 9–12, overlaps bottom edge;
- support wide: `...21.24.01 (6).jpeg` → cols 2–7 below, 3:2.
Text cols 1–4 above dominant.

### 7.4 Project 04 — Extended editorial sequence / 8 images
Это самая богатая серия; она должна выглядеть как editorial case, а не dump.
**Act A — kitchen:**
- dominant `...21.24.03 (6).jpeg` cols 1–9, wide;
- portrait `...21.24.04 (3).jpeg` cols 10–12, 4:5.
**Act B — interior:**
- `...21.24.04 (2).jpeg` cols 1–6;
- `...21.24.04 (4).jpeg` cols 7–12.
**Act C — portrait evidence strip:**
- `...18.20.07.jpeg`
- `...21.24.04 (6).jpeg`
- `...21.24.04 (7).jpeg`
  as 3 staggered portrait figures.
**Final support:**
- `...21.24.02 (4).jpeg` as wide/portrait bridge depending source geometry.
Все 8 остаются внутри Project 04.

### 7.5 Project 05 — landscape + portraits
Files all 4.
- dominant landscape `...21.24.07 (6).jpeg` cols 1–9;
- portrait `...21.24.07 (1).jpeg` cols 9–12 overlaps lower edge;
- portrait `...21.24.07 (4).jpeg` cols 1–4 below;
- second landscape/context `...21.24.07 (9).jpeg` cols 5–12 below.

### 7.6 Project 06
Не показывать до появления проверенной серии.

### 7.7 Meer werk en details — все 13 loose references
Не делать хаотичный masonry.
Разбить визуально на три subject bands, не называя их проектами:
**Band A — Badkamers / completed rooms**
- `ванная-1.jpeg`
- `ванная-туалет.jpeg`
- `ванная.JPG`
- `вання-120х60.jpeg`
- `вання.jpeg`
- `душ с туалетом.JPG`
- `душевая_туалет_раковина.jpeg`
Layout:
- один wide anchor;
- 2–3 portrait supports;
- следующий wide/context anchor;
- остальное local strip.
**Band B — Keuken / vloer / interieur**
- `кухня.jpeg`
- `калидор_60х60.jpeg`
- `джакузи.JPG`
Layout:
- kitchen wide cols 1–7;
- corridor portrait cols 8–10;
- jacuzzi portrait/square cols 10–12 or next row.
**Band C — Wet-room details**
- `душ-большой формат-3х1,5м.HEIC`
- `душевая кабинка.HEIC`
- `душевой спад.heic`
Convert to web-safe.
Use as technical/detail trio.
Никаких location/date/material claims.
**Mobile:**
- each band = local horizontal scroll-snap;
- captions optional, только фактические Badkamer, Keuken, Detail если нужны для accessibility.
Final CTA = CTA-Monument.

## 8. OVER ONS
Цель: trust + technical discipline, а не «огромная случайная фотография стекла».

### 8.1 Hero
Main: `media/идуальная_геометрия.jpg`
**Использование:**
- source square;
- art-directed crop до 16:9 / 3:2 вокруг центральной геометрии швов;
- image cols 5–12;
- text cols 1–6 overlaps bottom-left;
- max visual height 620–680px;
- никакой page-height portrait.
**Причина:**
- прямо выражает precision;
- уникальна для About;
- не повторяет Home / Tegelwerk / Badkamers hero;
- выдерживает overlap без перекрытия важного объекта.

### 8.2 Company Content
Centered reading column cols 3–10.

### 8.3 Workmanship Evidence
Вместо повторного использования hero делаем process diptych:
A: `media/монтаж_душ_стекла.jpg`
B: `special-references/процецсс-3.jpg`
- two portrait process figures;
- cols 2–5 / 8–11;
- H2/caption между/под ними;
- этот блок является human/workmanship evidence.

### 8.4 Technical Integrity strip
Если `идуальная_геометрия` уже hero, strip получает:
`special-references/запил-45-процесс.jpeg` + `media/запил-45-1.jpg`
как short process→result horizontal pair.
Если этот pair уже занят на Tegelwerk, About strip использует:
`media/лазер-идеальный_шов.jpg` только если Home Technical Proof будет заменён, иначе не повторять.
*Приоритет: не повторять одну и ту же фотографию крупно на двух публичных страницах.*

### 8.5 CTA-Brief
- встроен в последнюю content row;
- cols 9–12;
- никакой отдельной пустой 12-col полосы;
- только approved Kennismaken met SPPAT? + Project bespreken.

## 9. KENNISBANK
Текущую структуру не трогать.
**Media:**
- Waterdichting → `special-references/гидроизоляция.jpg`
- Lippage → `special-references/Вставка 24.09.2026 в 09:53:19.heic` после conversion
- Inspectieluik → no image until accurate hatch exists
- Epoxy vs cement → dedicated grout macro пока отсутствует; если текущая корректная technical macro уже стоит и не вводит в заблуждение, оставить. Не ставить drain.
Каждая статья = максимум одна technical image.

## 10. CONTACT
Не добавлять decorative photos.
Это utility page.

## 11. ПОЛНАЯ РОЛЬ media/ — что реально используется
*См. детальную таблицу ролей в исходном документе.*

## 12. ПОЛНАЯ РОЛЬ special-references/
*См. детальную таблицу ролей в исходном документе.*

## 13. Запрет на повторения
**На одной странице**
Один source file не рендерится крупно дважды.
Допустимо:
- повтор как маленький 1:1 mini-crop в Formaten in de praktijk, если основное изображение находится в service section;
- Home project preview повторяется на Projecten, потому что это осознанный preview реальной серии.
**Между страницами**
Главные hero/feature images должны быть уникальны.
Hero uniqueness:
- Home → `экстра-крупный_формат`
- Badkamers → `душевая_премиум`
- Almere → `дизайн_тропик`
- Tegelwerk → `левитирующая_стена`
- Specialisaties XXL feature → `раковина(из_широкоформатной плитки)`
- Over ons → `идуальная_геометрия`

## 14. Spacing / anti-chaos rules
Чтобы больше не получить «просто асимметрию»:
1. Каждый section ограничен 12-col grid.
2. Каждая фотография имеет точный col span.
3. Смещение Y разрешено только: 0, `space-sm` 24px, `space-md` 64px. Никаких произвольных `mt-[173px]`.
4. Между связанными block = 24–64px.
5. Между крупными semantic sections = 120px desktop / 80px mobile.
6. `space-xl` 160px используется только перед Hero / Project proof / финальным monument, не между обычными услугами.
7. Никакого min-height для создания «воздуха».
8. Никакого blank area > 160px без текста, изображения или structural line.
9. Белая панель никогда не занимает > 45% изображения.
10. Фото не уменьшается до max-w-sm внутри 8-col text column. Оно получает собственные grid columns.
11. Не использовать одинаковые square cards для разных по смыслу фотографий.
12. object-fit: cover применяется только с заранее заданным focal point.

## 15. Responsive master rules
**1440**
Полная 12-col art direction.
**1024**
Сохраняем 12-col отношения, но:
- уменьшаем overlap;
- text block max 5 cols;
- service split может быть 6/5.
**834**
Это отдельный tablet canvas:
- 8-col effective rhythm;
- сложные overlap блоки переходят в 60/40 или stack;
- Project secondary images → local horizontal rail;
- не «сжатый desktop».
**390**
- hero / panorama могут bleed edge-to-edge;
- technical/process images inset 20px;
- H1 max 3–4 строки в большинстве композиций;
- CTA panel не выше приблизительно 55–60% viewport;
- Project secondary evidence → scroll-snap;
- document-level horizontal overflow = 0.

## 16. Что мы НЕ меняем
- 9 public routes.
- Header navigation.
- Footer information architecture.
- Color palette.
- Typography families.
- Final approved copy, кроме уже отдельно согласованных compact additions Formaten in de praktijk, Verstek / 45° afwerking, Inbouwtechniek.
- Contact utility layout.
- Kennisbank editorial model.
- Provenance rule for Projecten.

## 17. Hard gaps
1. Project 06 — нет verified project group.
2. Natuursteen — есть два визуально подходящих кандидата, но материал должен подтвердить owner.
3. Kennisbank Inspectieluik — нет точной фотографии tiled access hatch.
4. `media/душевая-3.heic` — нужен нормальный re-export.
5. `media/мозаика-раковина(керамогранит).heic` — нужен нормальный re-export.
Ни один gap не превращается в серый placeholder на публичном сайте.

## 18. Definition of visual acceptance
Сайт считается визуально доведённым только если:
- Home Core Capabilities читается как одна interlocking-композиция, а не box + image.
- Home CTA не закрывает смысловой центр фотографии и mobile H2 не распадается на гигантскую колонну.
- Badkamers показывает техническую компетенцию реальными process images там, где об этом говорит текст.
- Пять Tegelwerk services имеют свои фотографии и выглядят как одна системная editorial sequence.
- Specialisaties имеет четыре разные material compositions; Natuursteen без подтверждения остаётся text-only.
- Projecten использует все 36 reference photos, но каждый project group имеет фиксированную архитектуру и нет случайного masonry.
- Over ons выглядит как trust/precision page, а не как гигантский portrait image.
- Нигде нет `[MEDIA: ...]`, dummy blocks или пустых серых зон.
- Нигде нет огромного пустого пространства, созданного отсутствием композиции.
- Нет крупного повторения одной фотографии на разных hero/feature roles.
- Desktop 1440 и mobile 390 воспринимаются как две продуманные версии одной системы.

## 19. Следующий этап
После утверждения этого документа из него делается один implementation prompt.
Разработчик НЕ принимает художественных решений.
Разработчик получает:
- точные source filenames;
- точные col spans;
- точные ratios;
- точные responsive transitions;
- список frozen areas;
- запрет на full-page rewrite;
- обязательную проверку фактического runtime currentSrc.
Никаких новых media-selection decisions на стороне разработчика.
