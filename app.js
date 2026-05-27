const lessons = [
  {
    id: "a1-articles",
    level: "A1",
    track: "初級",
    badge: "A1 基礎",
    title: "名詞冠詞 der / die / das",
    description: "學會把德文名詞和冠詞一起記，建立最基本的名詞性別概念。",
    sourceNote: "規則參考 Goethe-Institut、Lingolia、deutsch.info 與 Duden 詞條。",
    cards: [
      {
        tag: "概念",
        title: "名詞要連冠詞一起背",
        body: "德文名詞有陽性、陰性、中性。規則只能幫你猜方向，真正複習時要把「冠詞 + 名詞」當成一個單位。",
        example: "der Tisch, die Lampe, das Buch",
      },
      {
        tag: "der",
        title: "陽性 Maskulin",
        body: "常見於男性人物、星期、月份、季節、很多天氣字。也有不少生活名詞需要直接背。",
        example: "der Mann, der Montag, der Winter",
      },
      {
        tag: "die",
        title: "陰性 Feminin",
        body: "常見於女性人物，以及結尾是 -ung、-heit、-keit、-schaft 的名詞。",
        example: "die Frau, die Zeitung, die Freiheit",
      },
      {
        tag: "das",
        title: "中性 Neutrum",
        body: "常見於小孩、很多外來語，還有結尾是 -chen、-lein 的名詞。",
        example: "das Kind, das Mädchen, das Hotel",
      },
    ],
    questions: [
      { type: "choice", prompt: "___ Tisch", translation: "桌子", options: ["der", "die", "das"], answer: "der", hint: "der Tisch 是常見 A1 名詞，建議整組背。" },
      { type: "choice", prompt: "___ Zeitung", translation: "報紙", options: ["der", "die", "das"], answer: "die", hint: "-ung 結尾通常是陰性。" },
      { type: "choice", prompt: "___ Mädchen", translation: "女孩", options: ["der", "die", "das"], answer: "das", hint: "-chen 結尾通常是中性。" },
      { type: "cloze", prompt: "請填入正確冠詞：___ Buch", translation: "書", answer: "das", hint: "正確是 das Buch。" },
      {
        type: "match",
        prompt: "把名詞配上正確冠詞",
        pairs: [
          { term: "Mann", answer: "der" },
          { term: "Lampe", answer: "die" },
          { term: "Hotel", answer: "das" },
        ],
        hint: "男性人物多為 der；Lampe 是 die；Hotel 是 das。",
      },
    ],
  },
  {
    id: "a1-sentences",
    level: "A1",
    track: "初級",
    badge: "A1 文法",
    title: "基本句子：主詞 + 動詞",
    description: "練習德文最重要的句子骨架：動詞通常放在第二位置。",
    sourceNote: "文法方向參考 Goethe-Institut A1 文法表與 CEFR A1 能力描述。",
    cards: [
      {
        tag: "句型",
        title: "陳述句的動詞位置",
        body: "德文簡單陳述句裡，變位動詞通常在第二個位置。主詞可以在第一位，也可以放在後面。",
        example: "Ich wohne in Taipei. / Heute wohne ich in Taipei.",
      },
      {
        tag: "sein",
        title: "sein 是最先要熟的動詞",
        body: "介紹自己、說身份和狀態時會一直用到 sein。",
        example: "Ich bin Studentin. Du bist müde. Er ist Lehrer.",
      },
      {
        tag: "haben",
        title: "haben 用來說擁有",
        body: "A1 常用 haben 表達有沒有東西、時間或問題。",
        example: "Ich habe ein Buch. Hast du Zeit?",
      },
    ],
    questions: [
      { type: "choice", prompt: "哪一句的語序正確？", options: ["Ich in Taipei wohne.", "Ich wohne in Taipei.", "Wohne ich in Taipei."], answer: "Ich wohne in Taipei.", hint: "陳述句中，wohne 在第二位置。" },
      { type: "cloze", prompt: "Ich ___ Student.", translation: "我是學生。", answer: "bin", hint: "ich 搭配 sein 的變位是 bin。" },
      { type: "cloze", prompt: "Du ___ ein Buch.", translation: "你有一本書。", answer: "hast", hint: "du 搭配 haben 的變位是 hast。" },
      {
        type: "match",
        prompt: "配對主詞與動詞",
        pairs: [
          { term: "ich", answer: "bin" },
          { term: "du", answer: "bist" },
          { term: "wir", answer: "sind" },
        ],
        hint: "sein 的基本變位：ich bin, du bist, wir sind。",
      },
    ],
  },
  {
    id: "a1-reading",
    level: "A1",
    track: "初級",
    badge: "A1 檢定",
    title: "閱讀測驗：公告與短訊",
    description: "依照 Goethe / telc A1 常見題型，練習讀懂短訊、公告、簡單資訊。題目為原創，不照抄官方樣題。",
    sourceNote: "題型參考 Goethe A1 practice materials 與 telc Deutsch A1 Übungstest 的公開說明。",
    cards: [
      {
        tag: "Lesen",
        title: "A1 閱讀常見文本",
        body: "A1 閱讀常出現短訊、廣告、告示、表格和簡單 email。重點是抓人名、時間、地點、動作。",
        example: "Heute geschlossen. / Der Kurs beginnt um 9 Uhr.",
      },
      {
        tag: "技巧",
        title: "先找關鍵資訊",
        body: "不要逐字翻譯。先看問題問什麼，再回文本找日期、時間、地點、價格或否定詞。",
        example: "geschlossen, geöffnet, um 8 Uhr, am Montag",
      },
    ],
    questions: [
      {
        type: "reading",
        prompt: "閱讀短訊並回答問題",
        passage: "Hallo Anna, ich bin heute krank. Der Deutschkurs beginnt um 18 Uhr, aber ich bleibe zu Hause. Kannst du mir bitte die Hausaufgaben schicken? Danke! Mia",
        question: "Mia 今天為什麼不去上課？",
        options: ["她生病了", "她要去工作", "她不知道教室在哪裡"],
        answer: "她生病了",
        hint: "krank 表示生病。",
      },
      {
        type: "reading",
        prompt: "閱讀公告並回答問題",
        passage: "Bibliothek: Montag bis Freitag 9-18 Uhr geöffnet. Samstag 10-14 Uhr. Sonntag geschlossen.",
        question: "星期天圖書館怎麼樣？",
        options: ["開到 18 點", "只開上午", "沒有開"],
        answer: "沒有開",
        hint: "geschlossen 表示關閉。",
      },
      {
        type: "reading",
        prompt: "閱讀廣告並回答問題",
        passage: "Wohnung in Berlin: ein Zimmer, kleine Küche, Bad. 650 Euro im Monat. Kontakt: Frau Keller.",
        question: "這間房子一個月多少錢？",
        options: ["450 Euro", "650 Euro", "850 Euro"],
        answer: "650 Euro",
        hint: "im Monat 表示每個月。",
      },
    ],
  },
  {
    id: "a2-perfect",
    level: "A2",
    track: "中級",
    badge: "A2 文法",
    title: "過去式入門：Perfekt",
    description: "練習 A2 常見的口語過去式，用 haben 或 sein 加上 Partizip II 表達已經發生的事。",
    sourceNote: "A2 能力與檢定方向參考 Goethe A2 practice materials、telc Deutsch A2 與 CEFR A2 描述。",
    cards: [
      {
        tag: "Perfekt",
        title: "Perfekt 的基本結構",
        body: "日常口語常用 Perfekt 講過去發生的事。句子中有助動詞 haben / sein，真正的過去分詞放在句尾。",
        example: "Ich habe Kaffee getrunken. / Ich bin nach Hause gegangen.",
      },
      {
        tag: "haben",
        title: "大多數動詞用 haben",
        body: "吃、喝、買、學、看等多數動詞在 Perfekt 裡搭配 haben。",
        example: "Ich habe ein Buch gelesen. / Wir haben Deutsch gelernt.",
      },
      {
        tag: "sein",
        title: "移動或狀態改變常用 sein",
        body: "gehen、fahren、kommen、aufstehen 這類表示移動或狀態改變的動詞常搭配 sein。",
        example: "Sie ist nach Berlin gefahren. / Ich bin früh aufgestanden.",
      },
    ],
    questions: [
      { type: "choice", prompt: "哪一句 Perfekt 正確？", options: ["Ich habe Deutsch gelernt.", "Ich bin Deutsch gelernt.", "Ich gelernt Deutsch habe."], answer: "Ich habe Deutsch gelernt.", hint: "lernen 的 Perfekt 通常用 haben，過去分詞 gelernt 放句尾。" },
      { type: "cloze", prompt: "Wir ___ Pizza gegessen.", translation: "我們吃了披薩。", answer: "haben", hint: "essen 在這裡搭配 haben：Wir haben Pizza gegessen." },
      { type: "cloze", prompt: "Ich ___ nach Hause gegangen.", translation: "我回家了。", answer: "bin", hint: "gehen 表示移動，Perfekt 常搭配 sein。" },
      {
        type: "match",
        prompt: "配對動詞與常見 Perfekt 助動詞",
        pairs: [
          { term: "lernen", answer: "haben" },
          { term: "fahren", answer: "sein" },
          { term: "kaufen", answer: "haben" },
        ],
        hint: "大多數動詞用 haben；移動動詞 fahren 常用 sein。",
      },
    ],
  },
  {
    id: "a2-daily",
    level: "A2",
    track: "中級",
    badge: "A2 句子",
    title: "日常情境：購物與預約",
    description: "A2 開始要能處理更完整的日常任務，例如詢問價格、約時間、改時間。",
    sourceNote: "A2 情境依 CEFR A2 的日常需求與 Goethe/telc A2 公開考試方向設計。",
    cards: [
      {
        tag: "購物",
        title: "詢問價格與需求",
        body: "購物時常用 kostet、brauchen、nehmen。注意禮貌說法 bitte。",
        example: "Wie viel kostet das? / Ich brauche eine Jacke. / Ich nehme das.",
      },
      {
        tag: "預約",
        title: "約時間與改時間",
        body: "預約情境常會遇到 Termin、Uhrzeit、morgen、verschieben。",
        example: "Ich habe morgen einen Termin. / Können wir den Termin verschieben?",
      },
      {
        tag: "weil",
        title: "用 weil 說原因",
        body: "A2 常見 weil 子句。weil 後面的動詞通常放在子句最後。",
        example: "Ich komme später, weil ich arbeiten muss.",
      },
    ],
    questions: [
      { type: "choice", prompt: "想問「這個多少錢？」哪一句最自然？", options: ["Wie viel kostet das?", "Wo kostet das?", "Was kostet du?"], answer: "Wie viel kostet das?", hint: "問價格常用 Wie viel kostet ...?" },
      { type: "cloze", prompt: "Ich komme später, weil ich arbeiten ___.", translation: "我晚一點來，因為我要工作。", answer: "muss", hint: "weil 子句裡變位動詞放最後：arbeiten muss。" },
      { type: "choice", prompt: "哪一句表示「我想改預約」？", options: ["Ich möchte den Termin verschieben.", "Ich möchte den Termin essen.", "Ich möchte den Termin bezahlen."], answer: "Ich möchte den Termin verschieben.", hint: "verschieben 表示延後或改期。" },
      {
        type: "match",
        prompt: "配對情境與句子",
        pairs: [
          { term: "問價格", answer: "Wie viel kostet das?" },
          { term: "改預約", answer: "Ich möchte den Termin verschieben." },
          { term: "說原因", answer: "weil ich krank bin" },
        ],
        hint: "看關鍵詞：kostet 是價格，Termin verschieben 是改預約，weil 是原因。",
      },
    ],
  },
  {
    id: "a2-reading",
    level: "A2",
    track: "中級",
    badge: "A2 檢定",
    title: "閱讀測驗：較長短訊與通知",
    description: "以 A2 常見題型練習讀懂較完整的短訊、通知與日常安排。題目為原創，不照抄官方樣題。",
    sourceNote: "題型參考 Goethe A2 practice materials 與 telc Deutsch A2 公開檢定格式。",
    cards: [
      {
        tag: "Lesen",
        title: "A2 閱讀會有更多條件",
        body: "A2 文本比 A1 多一點細節，常出現時間變更、原因、限制條件、聯絡方式。",
        example: "Der Termin ist nicht am Dienstag, sondern am Donnerstag.",
      },
      {
        tag: "技巧",
        title: "注意否定和轉折",
        body: "看到 nicht、kein、aber、sondern、nur 要特別小心，答案常藏在這些詞附近。",
        example: "nicht heute, sondern morgen / nur am Vormittag",
      },
    ],
    questions: [
      {
        type: "reading",
        prompt: "閱讀短訊並回答問題",
        passage: "Hallo Leo, unser Deutschkurs findet morgen nicht im Raum 204 statt, sondern in Raum 310. Bitte bring auch das Arbeitsbuch mit. Viele Grüße, Sara",
        question: "明天德文課在哪裡上？",
        options: ["Raum 204", "Raum 310", "在家線上上課"],
        answer: "Raum 310",
        hint: "nicht ... sondern ... 表示不是 204，而是 310。",
      },
      {
        type: "reading",
        prompt: "閱讀通知並回答問題",
        passage: "Arztpraxis Dr. Weber: Am Freitag sind wir nur bis 12 Uhr geöffnet. Bitte rufen Sie für einen neuen Termin an.",
        question: "星期五診所營業到幾點？",
        options: ["12 Uhr", "18 Uhr", "整天休息"],
        answer: "12 Uhr",
        hint: "nur bis 12 Uhr geöffnet 表示只開到 12 點。",
      },
      {
        type: "reading",
        prompt: "閱讀 email 並回答問題",
        passage: "Sehr geehrte Frau Keller, ich kann am Montag leider nicht kommen, weil mein Zug Verspätung hat. Kann ich am Dienstag um 10 Uhr kommen? Mit freundlichen Grüßen, Emma",
        question: "Emma 為什麼星期一不能去？",
        options: ["火車誤點", "他生病了", "他要買票"],
        answer: "火車誤點",
        hint: "weil mein Zug Verspätung hat 表示因為火車誤點。",
      },
    ],
  },
  {
    id: "b1-daily",
    level: "B1",
    track: "進階",
    badge: "B1 對話",
    title: "日常對話：說明原因與表達意見",
    description: "練習旅行、生活和社交場合中更自然的說明、拒絕、建議與表達意見。",
    sourceNote: "B1 詞彙與情境方向參考 Goethe B1 Wortliste 與 CEFR B1 能力描述。",
    cards: [
      {
        tag: "意見",
        title: "表達自己的看法",
        body: "B1 開始需要能簡單說明自己的意見，並補上一個理由。",
        example: "Meiner Meinung nach ist das eine gute Idee, weil es praktisch ist.",
      },
      {
        tag: "建議",
        title: "提出建議或替代方案",
        body: "旅行和生活中常需要改時間、換方案、請對方配合。",
        example: "Vielleicht können wir morgen früher losfahren.",
      },
      {
        tag: "問題",
        title: "說明問題並請求協助",
        body: "遇到交通、住宿、訂位或文件問題時，要能清楚說明狀況。",
        example: "Ich habe ein Problem mit meiner Reservierung.",
      },
    ],
    questions: [
      { type: "choice", prompt: "哪一句最適合表達意見？", options: ["Meiner Meinung nach ist das teuer.", "Ich Meinung teuer.", "Mein nach teuer ist."], answer: "Meiner Meinung nach ist das teuer.", hint: "Meiner Meinung nach 是 B1 常用意見開頭。" },
      { type: "cloze", prompt: "Ich komme später, weil der Bus Verspätung ___.", translation: "我晚一點到，因為公車誤點。", answer: "hat", hint: "Verspätung haben 表示誤點。" },
      {
        type: "reading",
        prompt: "閱讀訊息並回答問題",
        passage: "Hallo Tom, ich kann heute leider nicht zum Abendessen kommen. Mein Zug hat Verspätung und ich komme erst um 21 Uhr in München an. Können wir uns morgen treffen?",
        question: "這個人想怎麼改約？",
        options: ["改到明天見面", "取消所有聯絡", "今天提早吃晚餐"],
        answer: "改到明天見面",
        hint: "Können wir uns morgen treffen? 表示可以明天見面嗎？",
      },
    ],
  },
  {
    id: "b2-travel-talk",
    level: "B2",
    track: "進階",
    badge: "B2 會話",
    title: "旅行與討論：清楚表達立場",
    description: "練習在旅途中處理問題，也能在討論中說出優缺點、條件與結論。",
    sourceNote: "B2 內容以 CEFR B2 的意見表達、討論和較複雜日常情境為方向設計。",
    cards: [
      {
        tag: "討論",
        title: "比較優缺點",
        body: "B2 常需要不只說喜不喜歡，還要能比較方案的利弊。",
        example: "Ein Vorteil ist, dass es günstig ist. Ein Nachteil ist die lange Fahrzeit.",
      },
      {
        tag: "問題處理",
        title: "禮貌但明確地提出需求",
        body: "在飯店、車站或客服情境，要能說明問題、期待和可能的解決方式。",
        example: "Könnten Sie bitte prüfen, ob eine Umbuchung möglich ist?",
      },
      {
        tag: "結論",
        title: "總結自己的看法",
        body: "討論最後可以用 zusammenfassend 或 insgesamt 做清楚結尾。",
        example: "Zusammenfassend finde ich diese Lösung am sinnvollsten.",
      },
    ],
    questions: [
      { type: "choice", prompt: "哪一句最適合說明優缺點？", options: ["Ein Vorteil ist der Preis, aber ein Nachteil ist die Entfernung.", "Vorteil Preis Nachteil weit.", "Ich Vorteil und Nachteil."], answer: "Ein Vorteil ist der Preis, aber ein Nachteil ist die Entfernung.", hint: "B2 表達要完整說出優點、缺點和比較關係。" },
      { type: "cloze", prompt: "Könnten Sie bitte prüfen, ob eine Umbuchung ___ ist?", translation: "可以請您確認是否能改訂嗎？", answer: "möglich", hint: "möglich sein 表示可能、可行。" },
      {
        type: "reading",
        prompt: "閱讀短文並回答問題",
        passage: "Das Hotelzimmer war sauber, aber es lag direkt an einer lauten Straße. Für eine Nacht war es in Ordnung, doch für einen längeren Aufenthalt würde ich ein ruhigeres Zimmer empfehlen.",
        question: "作者主要建議什麼？",
        options: ["住比較安靜的房間", "一定不要住飯店", "只選最便宜的房間"],
        answer: "住比較安靜的房間",
        hint: "ruhigeres Zimmer empfehlen 表示建議較安靜的房間。",
      },
    ],
  },
];

const levelLabels = {
  A1: "最初級：日常短句、基本文法、簡單閱讀",
  A2: "中級入門：過去事件、日常任務、較長訊息",
  B1: "進階入門：說明原因、表達意見、處理日常問題",
  B2: "進階：比較觀點、清楚立場、較複雜旅行與討論情境",
};

const levelOrder = ["A1", "A2", "B1", "B2"];
const testStages = ["初級", "中級", "進階"];
const stageGermanLabels = {
  初級: "Grundstufe",
  中級: "Mittelstufe",
  進階: "Aufbaustufe",
};

const lessonStages = {
  "a1-articles": "初級",
  "a1-sentences": "中級",
  "a1-reading": "進階",
  "a2-perfect": "初級",
  "a2-daily": "中級",
  "a2-reading": "進階",
  "b1-daily": "初級",
  "b2-travel-talk": "初級",
};

const dailyPhraseBanks = {
  A1: [
    { german: "Entschuldigung, wo ist die Toilette?", chinese: "不好意思，廁所在哪裡？" },
    { german: "Ich hätte gern einen Kaffee.", chinese: "我想要一杯咖啡。" },
    { german: "Wie viel kostet das?", chinese: "這個多少錢？" },
    { german: "Sprechen Sie Englisch?", chinese: "您會說英文嗎？" },
    { german: "Ich komme aus Taiwan.", chinese: "我來自台灣。" },
    { german: "Können Sie das bitte wiederholen?", chinese: "可以請您再說一次嗎？" },
  ],
  A2: [
    { german: "Ich habe morgen einen Termin.", chinese: "我明天有一個預約。" },
    { german: "Können wir den Termin verschieben?", chinese: "我們可以改時間嗎？" },
    { german: "Ich suche ein günstiges Zimmer für zwei Nächte.", chinese: "我在找一間便宜的房間，住兩晚。" },
    { german: "Der Zug hat Verspätung.", chinese: "火車誤點了。" },
    { german: "Ich komme später, weil ich arbeiten muss.", chinese: "我會晚一點到，因為我必須工作。" },
    { german: "Könnten Sie mir bitte helfen?", chinese: "可以請您幫我嗎？" },
  ],
  B1: [
    { german: "Meiner Meinung nach ist das eine gute Lösung.", chinese: "依我看，這是一個好的解決方法。" },
    { german: "Ich bin damit einverstanden, aber ich habe noch eine Frage.", chinese: "我同意，但我還有一個問題。" },
    { german: "Ich kann heute leider nicht kommen, weil mein Zug Verspätung hat.", chinese: "我今天很抱歉不能去，因為我的火車誤點。" },
    { german: "Könnten wir uns morgen statt heute treffen?", chinese: "我們可以改成明天見面嗎？" },
    { german: "Ich würde gern wissen, ob das möglich ist.", chinese: "我想知道這是否可行。" },
    { german: "Haben Sie vielleicht eine andere Empfehlung?", chinese: "您有其他建議嗎？" },
  ],
  B2: [
    { german: "Ein Vorteil ist, dass man Zeit spart.", chinese: "一個優點是可以節省時間。" },
    { german: "Andererseits muss man auch die Kosten berücksichtigen.", chinese: "另一方面，也必須考慮成本。" },
    { german: "Könnten Sie bitte prüfen, ob eine Umbuchung möglich ist?", chinese: "可以請您確認是否可以改訂嗎？" },
    { german: "Zusammenfassend finde ich diese Lösung am sinnvollsten.", chinese: "總結來說，我覺得這個解決方法最合理。" },
    { german: "Ich verstehe Ihren Standpunkt, sehe das aber etwas anders.", chinese: "我理解您的立場，但我的看法有點不同。" },
    { german: "Für einen längeren Aufenthalt würde ich ein ruhigeres Zimmer empfehlen.", chinese: "如果要住比較久，我會建議選比較安靜的房間。" },
  ],
};

const textbookLessons = {
  A1: {
    初級: {
      title: "Im Café",
      text: "Anna ist in Taipei. Sie lernt Deutsch und geht am Morgen in ein Café. Sie sagt: Ich hätte gern einen Kaffee und ein Brötchen. Der Kaffee kostet 90 Dollar. Anna fragt: Kann ich mit Karte bezahlen?",
      vocab: [["das Café", "咖啡店"], ["der Kaffee", "咖啡"], ["kosten", "花費"], ["bezahlen", "付款"], ["mit Karte", "用卡"]],
      grammar: [["Ich hätte gern ...", "禮貌點餐句型，比 Ich will ... 自然。"], ["Verbposition 2", "主句變位動詞放第二位：Der Kaffee kostet 90 Dollar."], ["Nomen + Artikel", "單字要連冠詞一起背：der Kaffee, das Café."]],
    },
    中級: {
      title: "Ein Tag in Taipei",
      text: "Heute hat Ben Deutschkurs. Um 9 Uhr fährt er mit dem Bus zur Schule. Nach dem Kurs kauft er ein Buch. Am Abend lernt er zu Hause und schreibt eine kurze Nachricht an seine Freundin.",
      vocab: [["der Deutschkurs", "德文課"], ["mit dem Bus", "搭公車"], ["die Schule", "學校"], ["die Nachricht", "訊息"], ["zu Hause", "在家"]],
      grammar: [["Zeit am Satzanfang", "時間放句首時，動詞仍在第二位：Heute hat Ben ..."], ["mit + Dativ", "mit dem Bus 是固定常見交通表達。"], ["trennbare Verben", "einkaufen 類動詞會拆開：Er kauft ein."]],
    },
    進階: {
      title: "Hinweis im Sprachkurs",
      text: "Der Deutschkurs beginnt heute um 18 Uhr in Raum 204. Bitte bringen Sie das Kursbuch und einen Stift mit. Am Freitag findet der Kurs nicht statt, weil die Schule geschlossen ist.",
      vocab: [["beginnen", "開始"], ["der Raum", "教室；房間"], ["mitbringen", "帶來"], ["stattfinden", "舉行"], ["geschlossen", "關閉的"]],
      grammar: [["nicht stattfinden", "表示活動不舉行。"], ["weil-Satz", "weil 後面的變位動詞放句尾：weil die Schule geschlossen ist."], ["Bitte + Verb", "公告常用 Bitte bringen Sie ... 表示請攜帶。"]],
    },
  },
  A2: {
    初級: {
      title: "Gestern im Restaurant",
      text: "Gestern ist Mia mit ihrer Freundin ins Restaurant gegangen. Sie haben Pasta gegessen und Wasser getrunken. Danach hat Mia die Rechnung bezahlt. Sie ist um 21 Uhr nach Hause gefahren.",
      vocab: [["gestern", "昨天"], ["das Restaurant", "餐廳"], ["die Rechnung", "帳單"], ["danach", "之後"], ["nach Hause fahren", "回家"]],
      grammar: [["Perfekt mit haben", "essen, trinken, bezahlen 多用 haben。"], ["Perfekt mit sein", "gehen, fahren 表移動時常用 sein。"], ["Partizip II am Ende", "過去分詞通常放句尾：Sie haben Pasta gegessen."]],
    },
    中級: {
      title: "Termin verschieben",
      text: "Emma hat morgen einen Arzttermin, aber sie muss länger arbeiten. Sie ruft in der Praxis an und sagt: Guten Tag, ich möchte meinen Termin verschieben. Haben Sie am Freitagvormittag Zeit?",
      vocab: [["der Arzttermin", "看診預約"], ["die Praxis", "診所"], ["anrufen", "打電話"], ["verschieben", "改期"], ["der Vormittag", "上午"]],
      grammar: [["Modalverb + Infinitiv", "muss arbeiten, möchte verschieben。"], ["Akkusativ", "meinen Termin，陽性 der Termin 在 Akkusativ 變成 den/meinen。"], ["trennbares Verb", "anrufen: Er ruft in der Praxis an."]],
    },
    進階: {
      title: "Neue Information",
      text: "Der Kurs findet morgen nicht im Raum 204 statt, sondern im Raum 310. Die Teilnehmer sollen das Arbeitsbuch mitbringen. Wer nicht kommen kann, soll eine E-Mail an die Lehrerin schreiben.",
      vocab: [["nicht ..., sondern ...", "不是...而是..."], ["der Teilnehmer", "參加者"], ["sollen", "應該；被要求"], ["das Arbeitsbuch", "練習本"], ["die Lehrerin", "女老師"]],
      grammar: [["sondern", "用來修正前面的否定資訊。"], ["sollen", "表示規定或他人要求。"], ["Wer nicht kommen kann, soll ...", "公告中常見的條件句型。"]],
    },
  },
  B1: {
    初級: {
      title: "Eine E-Mail an die Schule",
      text: "Sehr geehrte Frau Weber, ich kann morgen leider nicht am Kurs teilnehmen, weil ich einen wichtigen Termin habe. Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken? Vielen Dank im Voraus.",
      vocab: [["teilnehmen", "參加"], ["wichtig", "重要的"], ["per E-Mail", "透過電子郵件"], ["im Voraus", "預先"], ["leider", "很遺憾"]],
      grammar: [["formelle Anrede", "Sehr geehrte ... 用於正式 email。"], ["weil + Verb am Ende", "weil ich einen wichtigen Termin habe."], ["höfliche Bitte", "Könnten Sie mir bitte ...?"]],
    },
    中級: {
      title: "Meinung zum Homeoffice",
      text: "Meiner Meinung nach ist Homeoffice für viele Menschen praktisch. Man spart Zeit und kann ruhiger arbeiten. Trotzdem fehlt manchmal der direkte Kontakt zu Kolleginnen und Kollegen.",
      vocab: [["meiner Meinung nach", "依我看"], ["praktisch", "實用的"], ["Zeit sparen", "節省時間"], ["trotzdem", "儘管如此"], ["der Kontakt", "接觸；聯絡"]],
      grammar: [["Meinung äußern", "用 Meiner Meinung nach ... 開始表達意見。"], ["trotzdem", "表示轉折，後面主句動詞仍在第二位。"], ["zu + Dativ", "Kontakt zu Kolleginnen und Kollegen."]],
    },
    進階: {
      title: "Problem mit der Reservierung",
      text: "Ich habe ein Problem mit meiner Reservierung. Das Zimmer ist zwar günstig, aber es liegt sehr weit vom Bahnhof entfernt. Deshalb möchte ich wissen, ob ein anderes Zimmer frei ist.",
      vocab: [["die Reservierung", "預訂"], ["zwar ..., aber ...", "雖然...但是..."], ["entfernt", "距離...遠"], ["deshalb", "因此"], ["frei", "空的；可用的"]],
      grammar: [["zwar ... aber", "先讓步，再提出真正重點。"], ["indirekte Frage", "ob ein anderes Zimmer frei ist，動詞放句尾。"], ["deshalb + Verbposition 2", "Deshalb möchte ich ..."]],
    },
  },
  B2: {
    初級: {
      title: "Öffentliche Verkehrsmittel",
      text: "Öffentliche Verkehrsmittel sind oft günstiger und umweltfreundlicher als das Auto. Ein Nachteil ist jedoch, dass die Fahrt manchmal länger dauert und man weniger flexibel ist.",
      vocab: [["öffentlich", "公共的"], ["umweltfreundlich", "環保的"], ["der Nachteil", "缺點"], ["jedoch", "然而"], ["flexibel", "彈性的"]],
      grammar: [["Komparativ", "günstiger, umweltfreundlicher, länger。"], ["dass-Satz", "dass 後面動詞放句尾。"], ["Vor- und Nachteile", "B2 論述常需平衡優缺點。"]],
    },
    中級: {
      title: "Digitale Angebote",
      text: "Digitale Angebote erleichtern viele Alltagsaufgaben. Allerdings sollten ältere Menschen nicht ausgeschlossen werden. Deshalb ist persönliche Beratung weiterhin wichtig.",
      vocab: [["digital", "數位的"], ["erleichtern", "使...更容易"], ["ausschließen", "排除"], ["die Beratung", "諮詢"], ["weiterhin", "仍然"]],
      grammar: [["Passividee", "nicht ausgeschlossen werden 表示不應被排除。"], ["allerdings", "正式轉折詞，比 aber 更書面。"], ["Nominalstil", "persönliche Beratung 是 B2 常見名詞化表達。"]],
    },
    進階: {
      title: "Datenschutz und Komfort",
      text: "Viele Apps sind bequem, sammeln aber persönliche Daten. Einerseits profitieren Nutzer von schnellen Dienstleistungen, andererseits müssen Datenschutz und Transparenz garantiert werden.",
      vocab: [["bequem", "方便的；舒適的"], ["persönliche Daten", "個人資料"], ["profitieren von", "受益於"], ["die Dienstleistung", "服務"], ["die Transparenz", "透明度"]],
      grammar: [["einerseits / andererseits", "用來平衡兩方觀點。"], ["müssen + Partizip werden", "garantiert werden 表示被保障。"], ["abstrakte Nomen", "Datenschutz、Transparenz 是 B2 常見抽象名詞。"]],
    },
  },
};

const syllabusTopics = {
  A1: [
    { zh: "冠詞與名詞", de: "Artikel und Nomen" },
    { zh: "自我介紹與基本句", de: "Vorstellung und einfache Sätze" },
    { zh: "公告與短訊閱讀", de: "Hinweise und kurze Nachrichten" },
    { zh: "數字、時間與星期", de: "Zahlen, Uhrzeit und Wochentage" },
    { zh: "家庭與朋友", de: "Familie und Freunde" },
    { zh: "食物、點餐與付款", de: "Essen, Bestellen und Bezahlen" },
    { zh: "城市、方向與交通", de: "Stadt, Wege und Verkehr" },
    { zh: "購物與價格", de: "Einkaufen und Preise" },
    { zh: "日常作息與可分動詞", de: "Tagesablauf und trennbare Verben" },
    { zh: "天氣、衣著與顏色", de: "Wetter, Kleidung und Farben" },
    { zh: "身體、健康與預約", de: "Körper, Gesundheit und Termine" },
    { zh: "A1 總複習與檢定任務", de: "A1 Wiederholung und Prüfungstraining" },
  ],
  A2: [
    { zh: "完成式 Perfekt", de: "Perfekt im Alltag" },
    { zh: "購物與預約", de: "Einkaufen und Termine" },
    { zh: "通知與 email 閱讀", de: "Mitteilungen und E-Mails" },
    { zh: "租屋與住宿", de: "Wohnung und Unterkunft" },
    { zh: "旅行與交通問題", de: "Reisen und Verkehrsprobleme" },
    { zh: "工作、學校與計畫", de: "Arbeit, Schule und Pläne" },
    { zh: "比較級與建議", de: "Vergleiche und Empfehlungen" },
    { zh: "Dativ 介系詞", de: "Dativpräpositionen" },
    { zh: "weil / dass / wenn 子句", de: "Nebensätze mit weil, dass und wenn" },
    { zh: "表格、申請與官方文件", de: "Formulare, Anträge und Behörden" },
    { zh: "邀請、拒絕與改期", de: "Einladungen, Absagen und Verschieben" },
    { zh: "A2 綜合情境任務", de: "A2 Alltagssituationen und Prüfungstraining" },
  ],
  B1: [
    { zh: "原因、意見與請求", de: "Gründe, Meinungen und Bitten" },
    { zh: "正式 email 與投訴", de: "Formelle E-Mails und Beschwerden" },
    { zh: "工作與面試", de: "Arbeit und Bewerbungsgespräche" },
    { zh: "生活問題與解決方案", de: "Alltagsprobleme und Lösungen" },
    { zh: "旅遊經驗與敘事", de: "Reiseerfahrungen und Erzählen" },
    { zh: "健康、保險與諮詢", de: "Gesundheit, Versicherung und Beratung" },
    { zh: "教育與學習方法", de: "Bildung und Lernstrategien" },
    { zh: "媒體與網路使用", de: "Medien und Internetnutzung" },
    { zh: "環境與交通討論", de: "Umwelt und Mobilität" },
    { zh: "被動語態入門", de: "Passiv im Alltag" },
    { zh: "Konjunktiv II 禮貌請求", de: "Höfliche Bitten mit Konjunktiv II" },
    { zh: "B1 口說與寫作整合", de: "B1 Sprechen und Schreiben" },
  ],
  B2: [
    { zh: "立場、比較與討論", de: "Positionen, Vergleiche und Diskussionen" },
    { zh: "數位化與資料保護", de: "Digitalisierung und Datenschutz" },
    { zh: "永續生活與消費", de: "Nachhaltigkeit und Konsum" },
    { zh: "教育與職涯選擇", de: "Bildung und berufliche Entscheidungen" },
    { zh: "城市發展與居住", de: "Stadtentwicklung und Wohnen" },
    { zh: "健康政策與生活品質", de: "Gesundheitspolitik und Lebensqualität" },
    { zh: "移民、文化與社會參與", de: "Migration, Kultur und Teilhabe" },
    { zh: "媒體素養與假訊息", de: "Medienkompetenz und Falschinformationen" },
    { zh: "工作模式與責任", de: "Arbeitsmodelle und Verantwortung" },
    { zh: "科學、科技與風險", de: "Wissenschaft, Technik und Risiken" },
    { zh: "抽象名詞與名詞化", de: "Abstrakte Nomen und Nominalisierung" },
    { zh: "B2 論述整合任務", de: "B2 Argumentation und Prüfungstraining" },
  ],
};

const syllabusVocabulary = {
  A1: [
    ["der Name", "名字", "die Namen"], ["die Adresse", "地址", "die Adressen"], ["die Uhrzeit", "時間", "die Uhrzeiten"], ["die Familie", "家庭", "die Familien"],
    ["das Essen", "食物", "-"], ["die Stadt", "城市", "die Städte"], ["der Preis", "價格", "die Preise"], ["der Bus", "公車", "die Busse"],
    ["die Jacke", "外套", "die Jacken"], ["der Arzt", "醫生", "die Ärzte"], ["das Zimmer", "房間", "die Zimmer"], ["die Frage", "問題", "die Fragen"],
    ["der Freund", "朋友；男朋友", "die Freunde"], ["das Brot", "麵包", "die Brote"], ["die Fahrkarte", "車票", "die Fahrkarten"], ["müde", "累的", ""], ["bezahlen", "付款", ""],
  ],
  A2: [
    ["die Reservierung", "預訂", "die Reservierungen"], ["der Termin", "預約", "die Termine"], ["die Unterkunft", "住宿", "die Unterkünfte"], ["die Verspätung", "延誤", "die Verspätungen"],
    ["die Ausbildung", "職業訓練", "die Ausbildungen"], ["die Erfahrung", "經驗", "die Erfahrungen"], ["die Rechnung", "帳單", "die Rechnungen"], ["das Formular", "表格", "die Formulare"],
    ["der Vorschlag", "建議", "die Vorschläge"], ["die Möglichkeit", "可能性", "die Möglichkeiten"], ["verschieben", "改期", ""], ["teilnehmen", "參加", ""], ["deshalb", "因此", ""], ["trotzdem", "儘管如此", ""],
  ],
  B1: [
    ["die Bewerbung", "求職申請", "die Bewerbungen"], ["die Beschwerde", "投訴", "die Beschwerden"], ["die Lösung", "解決方法", "die Lösungen"], ["die Ursache", "原因", "die Ursachen"],
    ["der Vorteil", "優點", "die Vorteile"], ["der Nachteil", "缺點", "die Nachteile"], ["die Versicherung", "保險", "die Versicherungen"], ["die Entscheidung", "決定", "die Entscheidungen"],
    ["die Voraussetzung", "前提", "die Voraussetzungen"], ["die Meinung", "意見", "die Meinungen"], ["begründen", "說明理由", ""], ["vorschlagen", "建議", ""], ["obwohl", "雖然", ""], ["höflich", "禮貌地", ""],
  ],
  B2: [
    ["der Datenschutz", "資料保護", "-"], ["die Nachhaltigkeit", "永續性", "-"], ["die Voraussetzung", "前提", "die Voraussetzungen"], ["die Verantwortung", "責任", "die Verantwortungen"],
    ["die Herausforderung", "挑戰", "die Herausforderungen"], ["die Entwicklung", "發展", "die Entwicklungen"], ["die Gleichberechtigung", "平等權利", "-"], ["die Digitalisierung", "數位化", "-"],
    ["die Maßnahme", "措施", "die Maßnahmen"], ["der Zusammenhang", "關聯", "die Zusammenhänge"], ["berücksichtigen", "考慮到", ""], ["gewährleisten", "保障", ""], ["einerseits", "一方面", ""], ["andererseits", "另一方面", ""],
  ],
};

const syllabusGrammar = {
  A1: [
    ["Verbposition 2", "德文主句的變位動詞通常放在第二位置。時間或地點放句首時，主詞會移到動詞後面。", "Ich lerne heute Deutsch. / Heute lerne ich Deutsch."],
    ["Artikel", "名詞要連冠詞一起學，因為 der/die/das 會影響後面的格變化與代名詞。", "der Tisch, die Tasche, das Buch"],
    ["W-Fragen", "疑問詞放句首，變位動詞放第二位，用來詢問人、地點、時間、價格等資訊。", "Wo wohnst du? / Wie viel kostet das?"],
    ["Akkusativ", "haben, kaufen, brauchen 後面的直接受詞常用 Akkusativ。陽性冠詞 der 會變成 den。", "Ich kaufe den Kaffee. / Ich brauche einen Stift."],
  ],
  A2: [
    ["Perfekt", "日常口語常用 haben/sein + Partizip II 說過去。移動或狀態改變常搭配 sein。", "Ich habe gelernt. / Emma ist nach Berlin gefahren."],
    ["Dativ", "mit, nach, bei, von, zu 後面常接 Dativ，冠詞會變成 dem/der/den。", "mit dem Bus, bei der Freundin, zu den Eltern"],
    ["Nebensatz", "weil, dass, wenn 引導子句時，變位動詞放在子句最後。", "Tom kommt später, weil er arbeiten muss."],
    ["Komparativ", "形容詞加 -er 用來比較；常和 als 搭配。", "Der Zug ist schneller als der Bus."],
  ],
  B1: [
    ["Konjunktiv II", "用 könnte、würde、hätte 表達禮貌請求、建議或假設，比直接命令更自然。", "Könnten Sie mir bitte helfen? / Ich würde gern einen Termin vereinbaren."],
    ["Passiv", "用 werden + Partizip II 描述流程或重點在事情本身，而不是誰做。", "Das Formular wird online ausgefüllt."],
    ["Konnektoren", "用 deshalb、trotzdem、obwohl 連接原因、結果與轉折，讓回答更像完整段落。", "Obwohl es regnet, fährt David mit dem Fahrrad."],
    ["indirekte Frage", "間接問句用 ob/wann/warum 等連接，子句動詞放最後。", "Ich möchte wissen, ob der Termin noch frei ist."],
  ],
  B2: [
    ["Nominalisierung", "把動詞或形容詞轉成名詞，可以讓論述更正式、濃縮資訊。", "die Digitalisierung, die Verbesserung, die Verantwortung"],
    ["zweiteilige Konnektoren", "用 einerseits/andererseits 平衡兩方觀點，適合口說與寫作論述。", "Einerseits spart man Zeit, andererseits entstehen neue Risiken."],
    ["Passiversatz", "用 sich lassen 或 sein zu + Infinitiv 表達可行性、必要性或客觀要求。", "Das Problem lässt sich lösen. / Die Daten sind zu schützen."],
    ["Argumentstruktur", "B2 回答要有立場、理由、例子、限制與結論，不能只列單句。", "Insgesamt überwiegen die Vorteile, wenn klare Regeln gelten."],
  ],
};

const grammarOverviewRows = [
  { level: "A1", topic: "Artikel", usage: "名詞需搭配 der/die/das 記憶。", example: "Der Tisch steht im Zimmer." },
  { level: "A1", topic: "Nominativ", usage: "主詞或 sein 後的身分用主格。", example: "Ich bin Studentin." },
  { level: "A1", topic: "Akkusativ", usage: "直接受詞用 Akkusativ；der 變 den。", example: "Ich kaufe den Kaffee." },
  { level: "A1", topic: "Verbposition 2", usage: "主句變位動詞放第二位。", example: "Heute lerne ich Deutsch." },
  { level: "A1", topic: "W-Fragen", usage: "疑問詞開頭，動詞接第二位。", example: "Wo wohnst du?" },
  { level: "A1", topic: "sein / haben", usage: "最常用助動詞需熟記變化。", example: "Ich bin müde. / Ich habe Zeit." },
  { level: "A1", topic: "Modalverben", usage: "情態動詞後接原形動詞。", example: "Ich möchte Kaffee trinken." },
  { level: "A1", topic: "Plural", usage: "名詞複數需逐字記憶。", example: "Die Bücher liegen auf dem Tisch." },
  { level: "A1", topic: "Personalpronomen", usage: "用 ich, du, er, sie, es, wir 等代替人或物。", example: "Sie wohnt in Hamburg." },
  { level: "A1", topic: "Possessivartikel", usage: "用 mein, dein, sein, ihr 表示所有關係。", example: "Mein Bruder arbeitet in Berlin." },
  { level: "A1", topic: "Negation", usage: "nicht 否定動作或形容詞；kein 否定名詞。", example: "Ich habe keinen Stift." },
  { level: "A1", topic: "Imperativ", usage: "用於請求、指示或簡短命令。", example: "Bitte öffnen Sie das Fenster." },
  { level: "A2", topic: "Perfekt", usage: "用 haben/sein + Partizip II 表過去。", example: "Ich habe gelernt. / Ich bin gefahren." },
  { level: "A2", topic: "Dativ", usage: "mit, nach, bei, von, zu 後常接 Dativ。", example: "Ich fahre mit dem Bus zur Schule." },
  { level: "A2", topic: "Wechselpräpositionen", usage: "地點用 Dativ，方向用 Akkusativ。", example: "Ich bin in der Schule, aber ich gehe jetzt in die Schule." },
  { level: "A2", topic: "Nebensatz", usage: "weil, dass, wenn 子句動詞放最後。", example: "Ich komme später, weil ich arbeite." },
  { level: "A2", topic: "trennbare Verben", usage: "可分動詞前綴在主句放句尾。", example: "Ich stehe um sieben Uhr auf." },
  { level: "A2", topic: "Komparativ", usage: "形容詞加 -er 表比較。", example: "Der Zug ist schneller." },
  { level: "A2", topic: "Reflexive Verben", usage: "反身動詞搭配 mich, dich, sich 等反身代名詞。", example: "Ich interessiere mich für Musik." },
  { level: "A2", topic: "Adjektivdeklination", usage: "形容詞會依冠詞、格位和名詞性數變化。", example: "Ich kaufe eine blaue Jacke." },
  { level: "A2", topic: "zu + Infinitiv", usage: "用 zu + 原形動詞表目的或補充動作。", example: "Ich habe keine Zeit, lange zu warten." },
  { level: "A2", topic: "Futur mit werden", usage: "用 werden + Infinitiv 表未來或推測。", example: "Ich werde morgen meine Freundin besuchen." },
  { level: "B1", topic: "Konjunktiv II", usage: "表禮貌、建議或假設。", example: "Könnten Sie mir helfen?" },
  { level: "B1", topic: "Passiv", usage: "werden + Partizip II 強調事情本身。", example: "Das Formular wird ausgefüllt." },
  { level: "B1", topic: "Konnektoren", usage: "連接原因、結果、轉折。", example: "Obwohl es regnet, gehe ich raus." },
  { level: "B1", topic: "indirekte Frage", usage: "間接問句動詞放最後。", example: "Ich weiß nicht, ob er kommt." },
  { level: "B1", topic: "Relativsatz", usage: "用關係子句補充名詞資訊。", example: "Das ist der Kurs, den ich besuche." },
  { level: "B1", topic: "Präteritum", usage: "常用於書面敘述，sein, haben 與情態動詞特別常見。", example: "Als Kind wohnte ich in München." },
  { level: "B1", topic: "Genitiv", usage: "表示所屬或正式關係。", example: "Der Titel des Buches ist interessant." },
  { level: "B1", topic: "Temporalsätze", usage: "用 als, wenn, nachdem, bevor 表示時間關係。", example: "Nachdem ich gegessen hatte, ging ich spazieren." },
  { level: "B1", topic: "Plusquamperfekt", usage: "表示比另一個過去事件更早發生的事。", example: "Ich hatte schon gegessen, bevor Anna kam." },
  { level: "B2", topic: "Nominalisierung", usage: "用名詞化讓表達更正式。", example: "Die Verbesserung der Situation braucht Zeit." },
  { level: "B2", topic: "zweiteilige Konnektoren", usage: "平衡或對比兩方觀點。", example: "Einerseits spart man Zeit, andererseits fehlt der persönliche Kontakt." },
  { level: "B2", topic: "Passiversatz", usage: "表可行性或必要性。", example: "Das Problem lässt sich lösen." },
  { level: "B2", topic: "Argumentstruktur", usage: "立場、理由、例子、限制、結論。", example: "Insgesamt überwiegen die Vorteile." },
  { level: "B2", topic: "Partizipialattribute", usage: "用分詞修飾名詞，常見於書面語。", example: "Die steigenden Kosten belasten viele Familien." },
  { level: "B2", topic: "Subjektiver Konjunktiv", usage: "用於轉述、推測或較正式的間接表達。", example: "Der Sprecher sagte, die Lage sei schwierig." },
  { level: "B2", topic: "Kausale und konzessive Strukturen", usage: "用 wegen, trotz, obwohl, da 表示原因或讓步。", example: "Trotz des Regens fahren wir mit dem Zug." },
  { level: "B2", topic: "Infinitivkonstruktionen", usage: "用 um zu, ohne zu, statt zu 表示目的、缺少或替代。", example: "Ich lerne jeden Tag, um die Prüfung zu bestehen." },
  { level: "B2", topic: "Präpositionale Nomen-Verb-Verbindungen", usage: "動詞、名詞常和固定介系詞搭配。", example: "Ich nehme an dem Kurs teil." },
];

const learningExpansionCards = {
  A1: [
    {
      tag: "台灣學生易錯",
      title: "不要只背中文意思，要把冠詞一起背",
      body: "德文名詞的性別會影響後面的文法變化。初學時請把 der/die/das 和名詞當成一組聲音記憶。",
      example: "der Bahnhof, die Adresse, das Zimmer",
    },
    {
      tag: "語序",
      title: "陳述句動詞第二位",
      body: "中文句子可以很彈性，但德文主句的變位動詞通常站在第二位置。時間放前面時，主詞要往後移。",
      example: "Heute lerne ich Deutsch. / Ich lerne heute Deutsch.",
    },
    {
      tag: "口說",
      title: "先準備萬用請求句",
      body: "旅行或和德國人對話時，A1 最實用的是請對方重複、說慢一點、幫忙或指路。",
      example: "Können Sie bitte langsamer sprechen?",
    },
  ],
  A2: [
    {
      tag: "Perfekt",
      title: "完成式先看 haben / sein",
      body: "日常口語講過去常用 Perfekt。多數動詞用 haben，移動或狀態改變常用 sein。",
      example: "Ich habe gelernt. / Ich bin gefahren.",
    },
    {
      tag: "Dativ",
      title: "介系詞後面的格位要整組背",
      body: "A2 常見 mit, nach, bei, von, zu 後面多接 Dativ。建議把介系詞和例句一起記。",
      example: "mit dem Bus, nach der Arbeit, bei meiner Freundin",
    },
    {
      tag: "可分動詞",
      title: "可分動詞的前綴常跑到句尾",
      body: "可分動詞在現在式主句中會拆開，前綴放句尾；在完成式中常變成 ge 插在中間。",
      example: "Ich stehe um 7 Uhr auf. / Ich bin aufgestanden.",
    },
  ],
  B1: [
    {
      tag: "連接詞",
      title: "用 weil / deshalb 建立原因和結果",
      body: "B1 開始不只回答單句，要能說原因、結果和個人意見。注意 weil 子句動詞放最後。",
      example: "Ich komme später, weil der Zug Verspätung hat.",
    },
    {
      tag: "寫作",
      title: "Email 要有禮貌開頭和明確目的",
      body: "德檢和生活都常用 email。先說來信目的，再說原因，最後提出請求或下一步。",
      example: "Ich schreibe Ihnen, weil ich den Termin verschieben möchte.",
    },
    {
      tag: "討論",
      title: "意見句要加理由",
      body: "表達意見時不要只說 gut/schlecht。至少補一個理由，會更接近 B1 要求。",
      example: "Meiner Meinung nach ist das sinnvoll, weil es Zeit spart.",
    },
  ],
  B2: [
    {
      tag: "論述",
      title: "用 einerseits / andererseits 平衡觀點",
      body: "B2 需要能比較不同立場。先說一方面，再說另一方面，最後給自己的結論。",
      example: "Einerseits ist es praktisch, andererseits ist es teuer.",
    },
    {
      tag: "精準表達",
      title: "把 gut / schlecht 換成更準確的詞",
      body: "進階表達要避免太籠統。可以用 sinnvoll, zuverlässig, nachhaltig, problematisch 等詞。",
      example: "Diese Lösung ist sinnvoll, aber langfristig problematisch.",
    },
    {
      tag: "正式請求",
      title: "客服、學校、機關情境要禮貌明確",
      body: "在德語正式情境中，清楚說明問題、提供必要資訊，再提出具體請求。",
      example: "Könnten Sie bitte prüfen, ob eine Umbuchung möglich ist?",
    },
  ],
};

const stageLearningCards = {
  A1: {
    初級: [
      {
        tag: "A1 初級",
        title: "先建立句子骨架",
        body: "先掌握自我介紹、問價格、問地點、點餐這些最常用句型。重點是能立刻說出完整短句。",
        example: "Ich heiße Anna. / Wo ist der Bahnhof?",
      },
      {
        tag: "核心",
        title: "sein / haben / wohnen / kommen",
        body: "A1 初級先把最常用動詞變位背熟，因為幾乎每個對話都會用到。",
        example: "ich bin, ich habe, ich wohne, ich komme",
      },
    ],
    中級: [
      {
        tag: "A1 中級",
        title: "動詞第二位與時間位置",
        body: "開始練習把 heute、morgen、um 8 Uhr 放到句首。時間放前面時，動詞仍然在第二位。",
        example: "Heute lerne ich Deutsch. / Morgen arbeite ich.",
      },
      {
        tag: "練習",
        title: "從單字變成小句子",
        body: "不要只背 Bahnhof、Kaffee、Zimmer，要練習把單字放進可用句子。",
        example: "Ich suche den Bahnhof. / Ich möchte einen Kaffee.",
      },
    ],
    進階: [
      {
        tag: "A1 進階",
        title: "短訊與公告閱讀",
        body: "A1 檢定閱讀常出現營業時間、課程通知、簡短訊息。先找時間、地點和動作，不要逐字翻譯。",
        example: "geöffnet, geschlossen, beginnt um 18 Uhr",
      },
      {
        tag: "考試",
        title: "是非和選擇題要看關鍵詞",
        body: "看到 nicht、nur、heute、morgen、Samstag 這類詞要特別注意，答案常藏在附近。",
        example: "Samstag geschlossen. / nur bis 14 Uhr",
      },
    ],
  },
  A2: {
    初級: [
      {
        tag: "A2 初級",
        title: "完成式 Perfekt 是口語過去的核心",
        body: "先判斷助動詞 haben 或 sein，再把 Partizip II 放句尾。",
        example: "Ich habe gelernt. / Ich bin gefahren.",
      },
      {
        tag: "句尾",
        title: "過去分詞放最後",
        body: "中文沒有這種句尾壓軸感，台灣學生常漏掉句尾的 Partizip II。",
        example: "Ich habe gestern Pizza gegessen.",
      },
    ],
    中級: [
      {
        tag: "A2 中級",
        title: "處理日常任務",
        body: "A2 要能改預約、訂房、付款、問路、說明自己不能去的原因。",
        example: "Ich möchte den Termin verschieben.",
      },
      {
        tag: "Dativ",
        title: "mit / nach / bei / von / zu",
        body: "這些介系詞常接 Dativ，建議連介系詞和名詞冠詞一起背。",
        example: "mit dem Bus, zu der Ärztin, nach der Arbeit",
      },
    ],
    進階: [
      {
        tag: "A2 進階",
        title: "讀懂較長通知",
        body: "A2 閱讀會出現改時間、換教室、只營業到某時間等資訊。",
        example: "nicht am Dienstag, sondern am Donnerstag",
      },
      {
        tag: "語序",
        title: "weil 子句動詞放最後",
        body: "說原因時常用 weil。記得變位動詞會跑到子句最後。",
        example: "weil ich arbeiten muss",
      },
    ],
  },
  B1: {
    初級: [
      {
        tag: "B1 初級",
        title: "把理由說完整",
        body: "B1 不只回答資訊，還要能說明原因、描述情況、提出簡單請求。",
        example: "Ich kann nicht kommen, weil ich länger arbeiten muss.",
      },
      {
        tag: "Email",
        title: "先說目的，再說原因",
        body: "寫信時第一句先講目的，第二句說原因，最後提出請求。",
        example: "Ich schreibe Ihnen, weil ich den Termin verschieben möchte.",
      },
    ],
    中級: [
      {
        tag: "B1 中級",
        title: "表達意見與同意/不同意",
        body: "開始練習 Meinung、einverstanden、Vorteil、Nachteil 這些討論詞。",
        example: "Meiner Meinung nach ist das sinnvoll.",
      },
      {
        tag: "連接",
        title: "用 deshalb / trotzdem 連接句子",
        body: "B1 的句子需要邏輯。用 deshalb 表示結果，用 trotzdem 表示轉折。",
        example: "Der Zug hat Verspätung, deshalb komme ich später.",
      },
    ],
    進階: [
      {
        tag: "B1 進階",
        title: "閱讀時抓態度和目的",
        body: "B1 閱讀常問作者想做什麼、問題是什麼、為什麼改時間。不要只找單字，要看整句功能。",
        example: "Könnten wir den Termin auf Freitag verschieben?",
      },
      {
        tag: "口說",
        title: "用三句完成一個回應",
        body: "先表態，再說原因，最後給建議或下一步。",
        example: "Das passt mir leider nicht. Ich muss arbeiten. Können wir morgen sprechen?",
      },
    ],
  },
  B2: {
    初級: [
      {
        tag: "B2 初級",
        title: "觀點要有結構",
        body: "B2 要能比較不同立場。先講優點，再講缺點，最後說自己的判斷。",
        example: "Ein Vorteil ist ..., ein Nachteil ist ...",
      },
      {
        tag: "詞彙",
        title: "把 gut / schlecht 換成精準詞",
        body: "練習 sinnvoll、problematisch、nachhaltig、zuverlässig、kompliziert 這些更準確的形容詞。",
        example: "Diese Lösung ist sinnvoll, aber langfristig problematisch.",
      },
    ],
    中級: [
      {
        tag: "B2 中級",
        title: "正式情境要清楚且禮貌",
        body: "和客服、學校或機關溝通時，要說明問題、條件和希望對方做什麼。",
        example: "Könnten Sie bitte prüfen, ob eine Umbuchung möglich ist?",
      },
      {
        tag: "條件",
        title: "用 Voraussetzung / falls / sofern 說條件",
        body: "B2 常需要說明在什麼條件下某件事可行。",
        example: "Unter dieser Voraussetzung ist das möglich.",
      },
    ],
    進階: [
      {
        tag: "B2 進階",
        title: "論述要能平衡兩邊",
        body: "用 einerseits / andererseits / insgesamt 讓回答更像完整論述。",
        example: "Einerseits spart man Zeit, andererseits entstehen höhere Kosten.",
      },
      {
        tag: "閱讀",
        title: "注意作者立場",
        body: "B2 閱讀常問作者支持還是反對、主要擔心什麼、結論是什麼。",
        example: "Insgesamt überwiegen für mich die Vorteile.",
      },
    ],
  },
};

const vocabularyRows = [
  { type: "名詞", german: "der Tisch", chinese: "桌子" },
  { type: "名詞", german: "die Lampe", chinese: "燈" },
  { type: "名詞", german: "das Buch", chinese: "書" },
  { type: "名詞", german: "der Mann", chinese: "男人" },
  { type: "名詞", german: "die Frau", chinese: "女人" },
  { type: "名詞", german: "das Kind", chinese: "小孩" },
  { type: "名詞", german: "die Zeitung", chinese: "報紙" },
  { type: "名詞", german: "der Montag", chinese: "星期一" },
  { type: "名詞", german: "das Mädchen", chinese: "女孩" },
  { type: "名詞", german: "das Hotel", chinese: "飯店" },
  { type: "名詞", german: "der Termin", chinese: "預約；約定" },
  { type: "名詞", german: "die Verspätung", chinese: "延誤；遲到" },
  { type: "名詞", german: "das Arbeitsbuch", chinese: "練習本；作業本" },
  { type: "名詞", german: "die Wohnung", chinese: "公寓；住處" },
  { type: "名詞", german: "die Miete", chinese: "租金" },
  { type: "名詞", german: "der Vertrag", chinese: "合約" },
  { type: "名詞", german: "die Rechnung", chinese: "帳單；發票" },
  { type: "名詞", german: "die Behörde", chinese: "政府機關" },
  { type: "名詞", german: "der Antrag", chinese: "申請" },
  { type: "名詞", german: "die Anmeldung", chinese: "登記；報名" },
  { type: "名詞", german: "die Krankenversicherung", chinese: "健康保險" },
  { type: "名詞", german: "der Arbeitsplatz", chinese: "工作地點；職位" },
  { type: "名詞", german: "die Erfahrung", chinese: "經驗" },
  { type: "名詞", german: "die Ausbildung", chinese: "職業訓練；教育" },
  { type: "名詞", german: "das Studium", chinese: "大學學業" },
  { type: "名詞", german: "die Umwelt", chinese: "環境" },
  { type: "名詞", german: "der Klimawandel", chinese: "氣候變遷" },
  { type: "名詞", german: "die Nachhaltigkeit", chinese: "永續性" },
  { type: "名詞", german: "die Digitalisierung", chinese: "數位化" },
  { type: "名詞", german: "die Gesellschaft", chinese: "社會" },
  { type: "名詞", german: "die Meinung", chinese: "意見" },
  { type: "名詞", german: "das Argument", chinese: "論點；理由" },
  { type: "名詞", german: "der Vorteil", chinese: "優點" },
  { type: "名詞", german: "der Nachteil", chinese: "缺點" },
  { type: "名詞", german: "die Lösung", chinese: "解決方法" },
  { type: "名詞", german: "das Problem", chinese: "問題" },
  { type: "動詞", german: "wohnen", chinese: "居住" },
  { type: "動詞", german: "lernen", chinese: "學習" },
  { type: "動詞", german: "kaufen", chinese: "購買" },
  { type: "動詞", german: "gehen", chinese: "走；去" },
  { type: "動詞", german: "fahren", chinese: "搭車；開車；前往" },
  { type: "動詞", german: "essen", chinese: "吃" },
  { type: "動詞", german: "trinken", chinese: "喝" },
  { type: "動詞", german: "verschieben", chinese: "延期；改期" },
  { type: "動詞", german: "beantragen", chinese: "申請" },
  { type: "動詞", german: "kündigen", chinese: "取消；終止合約" },
  { type: "動詞", german: "vereinbaren", chinese: "約定；商定" },
  { type: "動詞", german: "begründen", chinese: "說明理由" },
  { type: "動詞", german: "vergleichen", chinese: "比較" },
  { type: "動詞", german: "diskutieren", chinese: "討論" },
  { type: "動詞", german: "überzeugen", chinese: "說服" },
  { type: "動詞", german: "zusammenfassen", chinese: "摘要；總結" },
  { type: "形容詞", german: "krank", chinese: "生病的" },
  { type: "形容詞", german: "pünktlich", chinese: "準時的" },
  { type: "形容詞", german: "wichtig", chinese: "重要的" },
  { type: "形容詞", german: "dringend", chinese: "緊急的" },
  { type: "形容詞", german: "zuverlässig", chinese: "可靠的" },
  { type: "形容詞", german: "verantwortlich", chinese: "負責任的" },
  { type: "形容詞", german: "nachhaltig", chinese: "永續的" },
  { type: "形容詞", german: "kompliziert", chinese: "複雜的" },
  { type: "副詞/連接詞", german: "deshalb", chinese: "因此" },
  { type: "副詞/連接詞", german: "trotzdem", chinese: "儘管如此" },
  { type: "副詞/連接詞", german: "außerdem", chinese: "此外" },
  { type: "副詞/連接詞", german: "allerdings", chinese: "然而；不過" },
  { type: "副詞/連接詞", german: "meiner Meinung nach", chinese: "依我看" },
  { type: "副詞/連接詞", german: "zum Beispiel", chinese: "例如" },
  { type: "副詞/連接詞", german: "einerseits", chinese: "一方面" },
  { type: "副詞/連接詞", german: "andererseits", chinese: "另一方面" },
  { type: "名詞", german: "der Bahnhof", chinese: "火車站" },
  { type: "名詞", german: "der Flughafen", chinese: "機場" },
  { type: "名詞", german: "die Haltestelle", chinese: "公車站；停靠站" },
  { type: "名詞", german: "die Fahrkarte", chinese: "車票" },
  { type: "名詞", german: "der Fahrplan", chinese: "時刻表" },
  { type: "名詞", german: "der Reisepass", chinese: "護照" },
  { type: "名詞", german: "das Gepäck", chinese: "行李" },
  { type: "名詞", german: "die Reservierung", chinese: "預訂" },
  { type: "名詞", german: "die Unterkunft", chinese: "住宿" },
  { type: "名詞", german: "die Rezeption", chinese: "櫃台；接待處" },
  { type: "名詞", german: "das Frühstück", chinese: "早餐" },
  { type: "名詞", german: "das Restaurant", chinese: "餐廳" },
  { type: "名詞", german: "die Speisekarte", chinese: "菜單" },
  { type: "名詞", german: "das Trinkgeld", chinese: "小費" },
  { type: "名詞", german: "die Apotheke", chinese: "藥局" },
  { type: "名詞", german: "das Krankenhaus", chinese: "醫院" },
  { type: "名詞", german: "der Arzttermin", chinese: "看診預約" },
  { type: "名詞", german: "die Beschwerden", chinese: "不適；症狀" },
  { type: "名詞", german: "das Medikament", chinese: "藥物" },
  { type: "名詞", german: "der Supermarkt", chinese: "超市" },
  { type: "名詞", german: "die Bäckerei", chinese: "麵包店" },
  { type: "名詞", german: "der Markt", chinese: "市場" },
  { type: "名詞", german: "der Preis", chinese: "價格" },
  { type: "名詞", german: "der Rabatt", chinese: "折扣" },
  { type: "名詞", german: "die Größe", chinese: "尺寸；大小" },
  { type: "名詞", german: "die Farbe", chinese: "顏色" },
  { type: "名詞", german: "die Quittung", chinese: "收據" },
  { type: "名詞", german: "die Familie", chinese: "家庭" },
  { type: "名詞", german: "der Freund", chinese: "朋友；男朋友" },
  { type: "名詞", german: "die Freundin", chinese: "朋友；女朋友" },
  { type: "名詞", german: "der Kollege", chinese: "同事" },
  { type: "名詞", german: "die Kollegin", chinese: "女同事" },
  { type: "名詞", german: "der Nachbar", chinese: "鄰居" },
  { type: "名詞", german: "die Freizeit", chinese: "空閒時間" },
  { type: "名詞", german: "das Hobby", chinese: "興趣" },
  { type: "名詞", german: "der Sport", chinese: "運動" },
  { type: "名詞", german: "das Kino", chinese: "電影院" },
  { type: "名詞", german: "das Museum", chinese: "博物館" },
  { type: "名詞", german: "die Sehenswürdigkeit", chinese: "景點" },
  { type: "名詞", german: "die Universität", chinese: "大學" },
  { type: "名詞", german: "der Unterricht", chinese: "課程；上課" },
  { type: "名詞", german: "die Prüfung", chinese: "考試" },
  { type: "名詞", german: "die Präsentation", chinese: "簡報" },
  { type: "名詞", german: "die Hausaufgabe", chinese: "作業" },
  { type: "名詞", german: "die Bewerbung", chinese: "求職申請" },
  { type: "名詞", german: "der Lebenslauf", chinese: "履歷" },
  { type: "名詞", german: "das Vorstellungsgespräch", chinese: "面試" },
  { type: "名詞", german: "das Gehalt", chinese: "薪水" },
  { type: "名詞", german: "die Arbeitszeit", chinese: "工作時間" },
  { type: "名詞", german: "die Besprechung", chinese: "會議" },
  { type: "名詞", german: "die Aufgabe", chinese: "任務；作業" },
  { type: "名詞", german: "die Frist", chinese: "期限" },
  { type: "名詞", german: "das Projekt", chinese: "專案" },
  { type: "名詞", german: "die Verantwortung", chinese: "責任" },
  { type: "名詞", german: "die Entscheidung", chinese: "決定" },
  { type: "名詞", german: "die Nachricht", chinese: "訊息；消息" },
  { type: "名詞", german: "die E-Mail", chinese: "電子郵件" },
  { type: "名詞", german: "das Formular", chinese: "表格" },
  { type: "名詞", german: "die Unterschrift", chinese: "簽名" },
  { type: "名詞", german: "die Erlaubnis", chinese: "許可" },
  { type: "名詞", german: "die Voraussetzung", chinese: "前提；條件" },
  { type: "名詞", german: "die Folge", chinese: "結果；後果" },
  { type: "名詞", german: "die Ursache", chinese: "原因" },
  { type: "名詞", german: "der Zusammenhang", chinese: "關聯" },
  { type: "名詞", german: "die Entwicklung", chinese: "發展" },
  { type: "名詞", german: "die Veränderung", chinese: "改變" },
  { type: "名詞", german: "die Möglichkeit", chinese: "可能性" },
  { type: "名詞", german: "die Fähigkeit", chinese: "能力" },
  { type: "名詞", german: "die Herausforderung", chinese: "挑戰" },
  { type: "名詞", german: "die Chance", chinese: "機會" },
  { type: "名詞", german: "die Sicherheit", chinese: "安全；保障" },
  { type: "名詞", german: "die Gesundheit", chinese: "健康" },
  { type: "名詞", german: "die Ernährung", chinese: "營養；飲食" },
  { type: "名詞", german: "die Bewegung", chinese: "運動；活動" },
  { type: "名詞", german: "die Energie", chinese: "能源；精力" },
  { type: "名詞", german: "die Mobilität", chinese: "交通流動性；機動性" },
  { type: "名詞", german: "der Datenschutz", chinese: "資料保護" },
  { type: "名詞", german: "die Gleichberechtigung", chinese: "平等權利" },
  { type: "名詞", german: "die Integration", chinese: "融合；整合" },
  { type: "名詞", german: "die Kultur", chinese: "文化" },
  { type: "名詞", german: "die Politik", chinese: "政治" },
  { type: "名詞", german: "die Wirtschaft", chinese: "經濟" },
  { type: "動詞", german: "ankommen", chinese: "抵達" },
  { type: "動詞", german: "abfahren", chinese: "出發；發車" },
  { type: "動詞", german: "buchen", chinese: "預訂" },
  { type: "動詞", german: "bezahlen", chinese: "付款" },
  { type: "動詞", german: "bestellen", chinese: "點餐；訂購" },
  { type: "動詞", german: "empfehlen", chinese: "推薦" },
  { type: "動詞", german: "fragen", chinese: "詢問" },
  { type: "動詞", german: "antworten", chinese: "回答" },
  { type: "動詞", german: "erklären", chinese: "解釋" },
  { type: "動詞", german: "verstehen", chinese: "理解" },
  { type: "動詞", german: "wiederholen", chinese: "重複" },
  { type: "動詞", german: "helfen", chinese: "幫助" },
  { type: "動詞", german: "suchen", chinese: "尋找" },
  { type: "動詞", german: "finden", chinese: "找到；覺得" },
  { type: "動詞", german: "verlieren", chinese: "遺失；失去" },
  { type: "動詞", german: "reservieren", chinese: "預訂" },
  { type: "動詞", german: "stornieren", chinese: "取消預訂" },
  { type: "動詞", german: "umbuchen", chinese: "改訂" },
  { type: "動詞", german: "ausfüllen", chinese: "填寫" },
  { type: "動詞", german: "unterschreiben", chinese: "簽名" },
  { type: "動詞", german: "teilnehmen", chinese: "參加" },
  { type: "動詞", german: "vorbereiten", chinese: "準備" },
  { type: "動詞", german: "präsentieren", chinese: "簡報；呈現" },
  { type: "動詞", german: "organisieren", chinese: "組織；安排" },
  { type: "動詞", german: "entscheiden", chinese: "決定" },
  { type: "動詞", german: "begrenzen", chinese: "限制" },
  { type: "動詞", german: "vermeiden", chinese: "避免" },
  { type: "動詞", german: "verbessern", chinese: "改善" },
  { type: "動詞", german: "unterstützen", chinese: "支持" },
  { type: "動詞", german: "berücksichtigen", chinese: "考慮到" },
  { type: "形容詞", german: "freundlich", chinese: "友善的" },
  { type: "形容詞", german: "höflich", chinese: "禮貌的" },
  { type: "形容詞", german: "günstig", chinese: "便宜的；有利的" },
  { type: "形容詞", german: "teuer", chinese: "昂貴的" },
  { type: "形容詞", german: "bequem", chinese: "舒適的；方便的" },
  { type: "形容詞", german: "ruhig", chinese: "安靜的" },
  { type: "形容詞", german: "laut", chinese: "吵的；大聲的" },
  { type: "形容詞", german: "schnell", chinese: "快速的" },
  { type: "形容詞", german: "langsam", chinese: "慢的" },
  { type: "形容詞", german: "möglich", chinese: "可能的" },
  { type: "形容詞", german: "sinnvoll", chinese: "有意義的；合理的" },
  { type: "形容詞", german: "notwendig", chinese: "必要的" },
  { type: "形容詞", german: "freiwillig", chinese: "自願的" },
  { type: "形容詞", german: "öffentlich", chinese: "公共的；公開的" },
  { type: "形容詞", german: "privat", chinese: "私人的" },
  { type: "形容詞", german: "aktuell", chinese: "目前的；最新的" },
  { type: "副詞/連接詞", german: "weil", chinese: "因為" },
  { type: "副詞/連接詞", german: "obwohl", chinese: "雖然" },
  { type: "副詞/連接詞", german: "damit", chinese: "為了；以便" },
  { type: "副詞/連接詞", german: "sobald", chinese: "一...就..." },
  { type: "副詞/連接詞", german: "während", chinese: "在...期間；而" },
  { type: "副詞/連接詞", german: "zuerst", chinese: "首先" },
  { type: "副詞/連接詞", german: "danach", chinese: "之後" },
  { type: "副詞/連接詞", german: "schließlich", chinese: "最後；終於" },
];

const nounPluralMap = {
  "der Tisch": "die Tische",
  "die Lampe": "die Lampen",
  "das Buch": "die Bücher",
  "der Mann": "die Männer",
  "die Frau": "die Frauen",
  "das Kind": "die Kinder",
  "die Zeitung": "die Zeitungen",
  "der Montag": "die Montage",
  "das Mädchen": "die Mädchen",
  "das Hotel": "die Hotels",
  "der Termin": "die Termine",
  "die Verspätung": "die Verspätungen",
  "das Arbeitsbuch": "die Arbeitsbücher",
  "die Wohnung": "die Wohnungen",
  "die Miete": "die Mieten",
  "der Vertrag": "die Verträge",
  "die Rechnung": "die Rechnungen",
  "die Behörde": "die Behörden",
  "der Antrag": "die Anträge",
  "die Anmeldung": "die Anmeldungen",
  "die Krankenversicherung": "die Krankenversicherungen",
  "der Arbeitsplatz": "die Arbeitsplätze",
  "die Erfahrung": "die Erfahrungen",
  "die Ausbildung": "die Ausbildungen",
  "das Studium": "die Studien",
  "die Umwelt": "-",
  "der Klimawandel": "-",
  "die Nachhaltigkeit": "-",
  "die Digitalisierung": "-",
  "die Gesellschaft": "die Gesellschaften",
  "die Meinung": "die Meinungen",
  "das Argument": "die Argumente",
  "der Vorteil": "die Vorteile",
  "der Nachteil": "die Nachteile",
  "die Lösung": "die Lösungen",
  "das Problem": "die Probleme",
  "der Bahnhof": "die Bahnhöfe",
  "der Flughafen": "die Flughäfen",
  "die Haltestelle": "die Haltestellen",
  "die Fahrkarte": "die Fahrkarten",
  "der Fahrplan": "die Fahrpläne",
  "der Reisepass": "die Reisepässe",
  "das Gepäck": "-",
  "die Reservierung": "die Reservierungen",
  "die Unterkunft": "die Unterkünfte",
  "die Rezeption": "die Rezeptionen",
  "das Frühstück": "die Frühstücke",
  "das Restaurant": "die Restaurants",
  "die Speisekarte": "die Speisekarten",
  "das Trinkgeld": "die Trinkgelder",
  "die Apotheke": "die Apotheken",
  "das Krankenhaus": "die Krankenhäuser",
  "der Arzttermin": "die Arzttermine",
  "die Beschwerden": "die Beschwerden",
  "das Medikament": "die Medikamente",
  "der Supermarkt": "die Supermärkte",
  "die Bäckerei": "die Bäckereien",
  "der Markt": "die Märkte",
  "der Preis": "die Preise",
  "der Rabatt": "die Rabatte",
  "die Größe": "die Größen",
  "die Farbe": "die Farben",
  "die Quittung": "die Quittungen",
  "die Familie": "die Familien",
  "der Freund": "die Freunde",
  "die Freundin": "die Freundinnen",
  "der Kollege": "die Kollegen",
  "die Kollegin": "die Kolleginnen",
  "der Nachbar": "die Nachbarn",
  "die Freizeit": "-",
  "das Hobby": "die Hobbys",
  "der Sport": "-",
  "das Kino": "die Kinos",
  "das Museum": "die Museen",
  "die Sehenswürdigkeit": "die Sehenswürdigkeiten",
  "die Universität": "die Universitäten",
  "der Unterricht": "-",
  "die Prüfung": "die Prüfungen",
  "die Präsentation": "die Präsentationen",
  "die Hausaufgabe": "die Hausaufgaben",
  "die Bewerbung": "die Bewerbungen",
  "der Lebenslauf": "die Lebensläufe",
  "das Vorstellungsgespräch": "die Vorstellungsgespräche",
  "das Gehalt": "die Gehälter",
  "die Arbeitszeit": "die Arbeitszeiten",
  "die Besprechung": "die Besprechungen",
  "die Aufgabe": "die Aufgaben",
  "die Frist": "die Fristen",
  "das Projekt": "die Projekte",
  "die Verantwortung": "die Verantwortungen",
  "die Entscheidung": "die Entscheidungen",
  "die Nachricht": "die Nachrichten",
  "die E-Mail": "die E-Mails",
  "das Formular": "die Formulare",
  "die Unterschrift": "die Unterschriften",
  "die Erlaubnis": "die Erlaubnisse",
  "die Voraussetzung": "die Voraussetzungen",
  "die Folge": "die Folgen",
  "die Ursache": "die Ursachen",
  "der Zusammenhang": "die Zusammenhänge",
  "die Entwicklung": "die Entwicklungen",
  "die Veränderung": "die Veränderungen",
  "die Möglichkeit": "die Möglichkeiten",
  "die Fähigkeit": "die Fähigkeiten",
  "die Herausforderung": "die Herausforderungen",
  "die Chance": "die Chancen",
  "die Sicherheit": "die Sicherheiten",
  "die Gesundheit": "-",
  "die Ernährung": "-",
  "die Bewegung": "die Bewegungen",
  "die Energie": "die Energien",
  "die Mobilität": "-",
  "der Datenschutz": "-",
  "die Gleichberechtigung": "-",
  "die Integration": "die Integrationen",
  "die Kultur": "die Kulturen",
  "die Politik": "-",
  "die Wirtschaft": "die Wirtschaften",
};

Object.assign(nounPluralMap, {
  "der Stuhl": "die Stühle",
  "die Tür": "die Türen",
  "das Fenster": "die Fenster",
  "der Rucksack": "die Rucksäcke",
  "die Tasche": "die Taschen",
  "das Heft": "die Hefte",
  "der Stift": "die Stifte",
  "die Klasse": "die Klassen",
  "das Zimmer": "die Zimmer",
  "der Lehrer": "die Lehrer",
  "die Lehrerin": "die Lehrerinnen",
  "das Foto": "die Fotos",
  "die Straße": "die Straßen",
  "das Café": "die Cafés",
  "der Kaffee": "die Kaffees",
  "die Suppe": "die Suppen",
  "das Brot": "die Brote",
  "der Apfel": "die Äpfel",
  "die Jacke": "die Jacken",
  "das Hemd": "die Hemden",
  "der Pullover": "die Pullover",
  "die Mütze": "die Mützen",
  "das Fahrrad": "die Fahrräder",
  "der Bus": "die Busse",
  "die Uhr": "die Uhren",
  "das Datum": "die Daten",
  "der Morgen": "die Morgen",
  "die Pause": "die Pausen",
  "das Wetter": "-",
  "der Wind": "die Winde",
  "die Sonne": "die Sonnen",
  "das Wasser": "-",
  "der Kopf": "die Köpfe",
  "die Hand": "die Hände",
  "das Knie": "die Knie",
  "die Frage": "die Fragen",
  "das Wort": "die Wörter",
  "der Satz": "die Sätze",
  "die Antwort": "die Antworten",
  "die Praxis": "die Praxen",
  "der Teilnehmer": "die Teilnehmer",
  "das Ticket": "die Tickets",
  "der Zug": "die Züge",
  "das Gleis": "die Gleise",
  "der Vorschlag": "die Vorschläge",
  "die Einladung": "die Einladungen",
  "der Vormittag": "die Vormittage",
  "der Plan": "die Pläne",
  "die Schule": "die Schulen",
  "das Büro": "die Büros",
  "das Dokument": "die Dokumente",
  "die Verbindung": "die Verbindungen",
  "der Weg": "die Wege",
  "der Schlüssel": "die Schlüssel",
  "das Gespräch": "die Gespräche",
  "der Grund": "die Gründe",
  "das Beispiel": "die Beispiele",
  "der Vergleich": "die Vergleiche",
  "die Empfehlung": "die Empfehlungen",
  "das Ergebnis": "die Ergebnisse",
  "der Text": "die Texte",
  "das Thema": "die Themen",
  "die Beschwerde": "die Beschwerden",
  "das Praktikum": "die Praktika",
  "die Versicherung": "die Versicherungen",
  "der Bericht": "die Berichte",
  "der Kontakt": "die Kontakte",
  "die Diskussion": "die Diskussionen",
  "die Strategie": "die Strategien",
  "das Ziel": "die Ziele",
  "der Fehler": "die Fehler",
  "die Quelle": "die Quellen",
  "das Medium": "die Medien",
  "der Verkehr": "-",
  "das Fahrzeug": "die Fahrzeuge",
  "der Radweg": "die Radwege",
  "der Prozess": "die Prozesse",
  "die Bitte": "die Bitten",
  "das Anliegen": "die Anliegen",
  "der Abschnitt": "die Abschnitte",
  "die Struktur": "die Strukturen",
  "das Fazit": "die Fazits",
  "das Ereignis": "die Ereignisse",
  "der Kurs": "die Kurse",
  "das Feedback": "die Feedbacks",
  "der Aspekt": "die Aspekte",
  "das Angebot": "die Angebote",
  "der Konsum": "-",
  "das Verhalten": "-",
  "der Beruf": "die Berufe",
  "der Wohnraum": "die Wohnräume",
  "die Stadtentwicklung": "die Stadtentwicklungen",
  "das Konzept": "die Konzepte",
  "der Zugang": "die Zugänge",
  "das System": "die Systeme",
  "der Beitrag": "die Beiträge",
  "die Teilhabe": "-",
  "das Vorurteil": "die Vorurteile",
  "die Information": "die Informationen",
  "das Bild": "die Bilder",
  "der Arbeitsmodus": "die Arbeitsmodi",
  "das Team": "die Teams",
  "der Fortschritt": "die Fortschritte",
  "die Forschung": "die Forschungen",
  "das Risiko": "die Risiken",
  "der Stil": "die Stile",
  "die Nominalisierung": "die Nominalisierungen",
  "der Einwand": "die Einwände",
  "die These": "die Thesen",
  "der Rahmen": "die Rahmen",
  "die Bedingung": "die Bedingungen",
  "das Kriterium": "die Kriterien",
  "die Maßnahme": "die Maßnahmen",
  "das Modell": "die Modelle",
  "der Nutzen": "-",
  "die Grenze": "die Grenzen",
  "das Potenzial": "die Potenziale",
  "der Konflikt": "die Konflikte",
  "die Perspektive": "die Perspektiven",
  "der Name": "die Namen",
  "das Alter": "-",
  "die Stadt": "die Städte",
  "der Schultag": "die Schultage",
  "Deutsch": "-",
  "der Mitschüler": "die Mitschüler",
  "die Gruppe": "die Gruppen",
  "das Brötchen": "die Brötchen",
  "die Kellnerin": "die Kellnerinnen",
  "der Euro": "die Euro",
  "das Klassenzimmer": "die Klassenzimmer",
  "der Deutschkurs": "die Deutschkurse",
  "die Tafel": "die Tafeln",
  "die Schüler": "die Schüler",
  "der Vater": "die Väter",
  "die Mutter": "die Mütter",
  "der Bruder": "die Brüder",
  "die Schwester": "die Schwestern",
  "der Hund": "die Hunde",
  "das Familienfoto": "die Familienfotos",
  "das Mittagessen": "-",
  "der Reis": "-",
  "der Salat": "die Salate",
  "die Nudeln": "die Nudeln",
  "die Kasse": "die Kassen",
  "das Menü": "die Menüs",
  "die Mensa": "die Mensen",
  "die Stadtmitte": "-",
  "das Geschäft": "die Geschäfte",
  "der Samstag": "die Samstage",
  "diese": "-",
  "diese Jacke": "diese Jacken",
  "der Ausflug": "die Ausflüge",
  "das Krankenzimmer": "die Krankenzimmer",
  "die Schulärztin": "die Schulärztinnen",
  "der Hals": "die Hälse",
  "der Tee": "die Tees",
  "Kopfschmerzen": "die Kopfschmerzen",
  "die Ärztin": "die Ärztinnen",
  "der Dialog": "die Dialoge",
  "der Alltag": "-",
});

const verbRows = [
  { verb: "sein", chinese: "是", ich: "bin", du: "bist", third: "ist", plural: "sind" },
  { verb: "haben", chinese: "有", ich: "habe", du: "hast", third: "hat", plural: "haben" },
  { verb: "wohnen", chinese: "居住", ich: "wohne", du: "wohnst", third: "wohnt", plural: "wohnen" },
  { verb: "lernen", chinese: "學習", ich: "lerne", du: "lernst", third: "lernt", plural: "lernen" },
  { verb: "kaufen", chinese: "購買", ich: "kaufe", du: "kaufst", third: "kauft", plural: "kaufen" },
  { verb: "gehen", chinese: "走；去", ich: "gehe", du: "gehst", third: "geht", plural: "gehen" },
  { verb: "fahren", chinese: "搭車；開車；前往", ich: "fahre", du: "fährst", third: "fährt", plural: "fahren" },
  { verb: "essen", chinese: "吃", ich: "esse", du: "isst", third: "isst", plural: "essen" },
  { verb: "trinken", chinese: "喝", ich: "trinke", du: "trinkst", third: "trinkt", plural: "trinken" },
  { verb: "müssen", chinese: "必須", ich: "muss", du: "musst", third: "muss", plural: "müssen" },
  { verb: "können", chinese: "能夠；會", ich: "kann", du: "kannst", third: "kann", plural: "können" },
  { verb: "wollen", chinese: "想要", ich: "will", du: "willst", third: "will", plural: "wollen" },
  { verb: "dürfen", chinese: "可以；被允許", ich: "darf", du: "darfst", third: "darf", plural: "dürfen" },
  { verb: "sollen", chinese: "應該；被要求", ich: "soll", du: "sollst", third: "soll", plural: "sollen" },
  { verb: "beantragen", chinese: "申請", ich: "beantrage", du: "beantragst", third: "beantragt", plural: "beantragen" },
  { verb: "vereinbaren", chinese: "約定；商定", ich: "vereinbare", du: "vereinbarst", third: "vereinbart", plural: "vereinbaren" },
  { verb: "begründen", chinese: "說明理由", ich: "begründe", du: "begründest", third: "begründet", plural: "begründen" },
  { verb: "vergleichen", chinese: "比較", ich: "vergleiche", du: "vergleichst", third: "vergleicht", plural: "vergleichen" },
  { verb: "diskutieren", chinese: "討論", ich: "diskutiere", du: "diskutierst", third: "diskutiert", plural: "diskutieren" },
  { verb: "überzeugen", chinese: "說服", ich: "überzeuge", du: "überzeugst", third: "überzeugt", plural: "überzeugen" },
  { verb: "kommen", chinese: "來", ich: "komme", du: "kommst", third: "kommt", plural: "kommen" },
  { verb: "sprechen", chinese: "說；講", ich: "spreche", du: "sprichst", third: "spricht", plural: "sprechen" },
  { verb: "lesen", chinese: "閱讀", ich: "lese", du: "liest", third: "liest", plural: "lesen" },
  { verb: "schreiben", chinese: "寫", ich: "schreibe", du: "schreibst", third: "schreibt", plural: "schreiben" },
  { verb: "arbeiten", chinese: "工作", ich: "arbeite", du: "arbeitest", third: "arbeitet", plural: "arbeiten" },
  { verb: "finden", chinese: "找到；覺得", ich: "finde", du: "findest", third: "findet", plural: "finden" },
  { verb: "suchen", chinese: "尋找", ich: "suche", du: "suchst", third: "sucht", plural: "suchen" },
  { verb: "helfen", chinese: "幫助", ich: "helfe", du: "hilfst", third: "hilft", plural: "helfen" },
  { verb: "fragen", chinese: "詢問", ich: "frage", du: "fragst", third: "fragt", plural: "fragen" },
  { verb: "antworten", chinese: "回答", ich: "antworte", du: "antwortest", third: "antwortet", plural: "antworten" },
  { verb: "bestellen", chinese: "點餐；訂購", ich: "bestelle", du: "bestellst", third: "bestellt", plural: "bestellen" },
  { verb: "bezahlen", chinese: "付款", ich: "bezahle", du: "bezahlst", third: "bezahlt", plural: "bezahlen" },
  { verb: "buchen", chinese: "預訂", ich: "buche", du: "buchst", third: "bucht", plural: "buchen" },
  { verb: "stornieren", chinese: "取消預訂", ich: "storniere", du: "stornierst", third: "storniert", plural: "stornieren" },
  { verb: "umbuchen", chinese: "改訂", ich: "buche um", du: "buchst um", third: "bucht um", plural: "buchen um" },
  { verb: "ankommen", chinese: "抵達", ich: "komme an", du: "kommst an", third: "kommt an", plural: "kommen an" },
  { verb: "abfahren", chinese: "出發；發車", ich: "fahre ab", du: "fährst ab", third: "fährt ab", plural: "fahren ab" },
  { verb: "aufstehen", chinese: "起床", ich: "stehe auf", du: "stehst auf", third: "steht auf", plural: "stehen auf" },
  { verb: "einkaufen", chinese: "採買", ich: "kaufe ein", du: "kaufst ein", third: "kauft ein", plural: "kaufen ein" },
  { verb: "anrufen", chinese: "打電話給", ich: "rufe an", du: "rufst an", third: "ruft an", plural: "rufen an" },
  { verb: "mitbringen", chinese: "帶來", ich: "bringe mit", du: "bringst mit", third: "bringt mit", plural: "bringen mit" },
  { verb: "ausfüllen", chinese: "填寫", ich: "fülle aus", du: "füllst aus", third: "füllt aus", plural: "füllen aus" },
  { verb: "unterschreiben", chinese: "簽名", ich: "unterschreibe", du: "unterschreibst", third: "unterschreibt", plural: "unterschreiben" },
  { verb: "teilnehmen", chinese: "參加", ich: "nehme teil", du: "nimmst teil", third: "nimmt teil", plural: "nehmen teil" },
  { verb: "vorbereiten", chinese: "準備", ich: "bereite vor", du: "bereitest vor", third: "bereitet vor", plural: "bereiten vor" },
  { verb: "empfehlen", chinese: "推薦", ich: "empfehle", du: "empfiehlst", third: "empfiehlt", plural: "empfehlen" },
  { verb: "verlieren", chinese: "遺失；失去", ich: "verliere", du: "verlierst", third: "verliert", plural: "verlieren" },
  { verb: "verstehen", chinese: "理解", ich: "verstehe", du: "verstehst", third: "versteht", plural: "verstehen" },
  { verb: "wiederholen", chinese: "重複", ich: "wiederhole", du: "wiederholst", third: "wiederholt", plural: "wiederholen" },
  { verb: "organisieren", chinese: "組織；安排", ich: "organisiere", du: "organisierst", third: "organisiert", plural: "organisieren" },
  { verb: "entscheiden", chinese: "決定", ich: "entscheide", du: "entscheidest", third: "entscheidet", plural: "entscheiden" },
  { verb: "vermeiden", chinese: "避免", ich: "vermeide", du: "vermeidest", third: "vermeidet", plural: "vermeiden" },
  { verb: "verbessern", chinese: "改善", ich: "verbessere", du: "verbesserst", third: "verbessert", plural: "verbessern" },
  { verb: "unterstützen", chinese: "支持", ich: "unterstütze", du: "unterstützt", third: "unterstützt", plural: "unterstützen" },
  { verb: "zusammenfassen", chinese: "摘要；總結", ich: "fasse zusammen", du: "fasst zusammen", third: "fasst zusammen", plural: "fassen zusammen" },
  { verb: "bleiben", chinese: "停留；保持", ich: "bleibe", du: "bleibst", third: "bleibt", plural: "bleiben" },
  { verb: "heißen", chinese: "叫做", ich: "heiße", du: "heißt", third: "heißt", plural: "heißen" },
  { verb: "geben", chinese: "給；有", ich: "gebe", du: "gibst", third: "gibt", plural: "geben" },
  { verb: "nehmen", chinese: "拿；搭乘", ich: "nehme", du: "nimmst", third: "nimmt", plural: "nehmen" },
  { verb: "bringen", chinese: "帶來", ich: "bringe", du: "bringst", third: "bringt", plural: "bringen" },
  { verb: "wissen", chinese: "知道", ich: "weiß", du: "weißt", third: "weiß", plural: "wissen" },
  { verb: "denken", chinese: "想；認為", ich: "denke", du: "denkst", third: "denkt", plural: "denken" },
  { verb: "kennen", chinese: "認識；知道", ich: "kenne", du: "kennst", third: "kennt", plural: "kennen" },
  { verb: "nennen", chinese: "稱呼；命名", ich: "nenne", du: "nennst", third: "nennt", plural: "nennen" },
  { verb: "rennen", chinese: "跑", ich: "renne", du: "rennst", third: "rennt", plural: "rennen" },
  { verb: "beginnen", chinese: "開始", ich: "beginne", du: "beginnst", third: "beginnt", plural: "beginnen" },
  { verb: "gewinnen", chinese: "贏得", ich: "gewinne", du: "gewinnst", third: "gewinnt", plural: "gewinnen" },
  { verb: "liegen", chinese: "躺；位於", ich: "liege", du: "liegst", third: "liegt", plural: "liegen" },
  { verb: "sitzen", chinese: "坐", ich: "sitze", du: "sitzt", third: "sitzt", plural: "sitzen" },
  { verb: "stehen", chinese: "站；位於", ich: "stehe", du: "stehst", third: "steht", plural: "stehen" },
  { verb: "legen", chinese: "放置（平放）", ich: "lege", du: "legst", third: "legt", plural: "legen" },
  { verb: "setzen", chinese: "放置；使坐下", ich: "setze", du: "setzt", third: "setzt", plural: "setzen" },
  { verb: "stellen", chinese: "放置（直立）", ich: "stelle", du: "stellst", third: "stellt", plural: "stellen" },
  { verb: "tragen", chinese: "穿戴；攜帶", ich: "trage", du: "trägst", third: "trägt", plural: "tragen" },
  { verb: "schlafen", chinese: "睡覺", ich: "schlafe", du: "schläfst", third: "schläft", plural: "schlafen" },
  { verb: "laufen", chinese: "跑；步行", ich: "laufe", du: "läufst", third: "läuft", plural: "laufen" },
  { verb: "einladen", chinese: "邀請", ich: "lade ein", du: "lädst ein", third: "lädt ein", plural: "laden ein" },
  { verb: "abschließen", chinese: "鎖上；完成", ich: "schließe ab", du: "schließt ab", third: "schließt ab", plural: "schließen ab" },
  { verb: "anbieten", chinese: "提供", ich: "biete an", du: "bietest an", third: "bietet an", plural: "bieten an" },
  { verb: "anmelden", chinese: "報名；登記", ich: "melde an", du: "meldest an", third: "meldet an", plural: "melden an" },
  { verb: "ablehnen", chinese: "拒絕", ich: "lehne ab", du: "lehnst ab", third: "lehnt ab", plural: "lehnen ab" },
  { verb: "akzeptieren", chinese: "接受", ich: "akzeptiere", du: "akzeptierst", third: "akzeptiert", plural: "akzeptieren" },
  { verb: "erreichen", chinese: "抵達；達成", ich: "erreiche", du: "erreichst", third: "erreicht", plural: "erreichen" },
  { verb: "erhalten", chinese: "收到；獲得", ich: "erhalte", du: "erhältst", third: "erhält", plural: "erhalten" },
  { verb: "enthalten", chinese: "包含", ich: "enthalte", du: "enthältst", third: "enthält", plural: "enthalten" },
  { verb: "entstehen", chinese: "產生；形成", ich: "entstehe", du: "entstehst", third: "entsteht", plural: "entstehen" },
  { verb: "bestehen", chinese: "通過；存在", ich: "bestehe", du: "bestehst", third: "besteht", plural: "bestehen" },
  { verb: "beschreiben", chinese: "描述", ich: "beschreibe", du: "beschreibst", third: "beschreibt", plural: "beschreiben" },
  { verb: "erklären", chinese: "解釋", ich: "erkläre", du: "erklärst", third: "erklärt", plural: "erklären" },
  { verb: "behaupten", chinese: "主張；聲稱", ich: "behaupte", du: "behauptest", third: "behauptet", plural: "behaupten" },
  { verb: "beweisen", chinese: "證明", ich: "beweise", du: "beweist", third: "beweist", plural: "beweisen" },
];

const verbPrincipalRows = [
  { verb: "sein", chinese: "是", aux: "sein", participle: "gewesen", example: "Ich bin in Berlin gewesen.", ich: "war", du: "warst", third: "war", plural: "waren" },
  { verb: "haben", chinese: "有", aux: "haben", participle: "gehabt", example: "Ich habe Zeit gehabt.", ich: "hatte", du: "hattest", third: "hatte", plural: "hatten" },
  { verb: "werden", chinese: "變成；將會", aux: "sein", participle: "geworden", example: "Es ist kalt geworden.", ich: "wurde", du: "wurdest", third: "wurde", plural: "wurden" },
  { verb: "gehen", chinese: "走；去", aux: "sein", participle: "gegangen", example: "Ich bin nach Hause gegangen.", ich: "ging", du: "gingst", third: "ging", plural: "gingen" },
  { verb: "kommen", chinese: "來", aux: "sein", participle: "gekommen", example: "Sie ist spät gekommen.", ich: "kam", du: "kamst", third: "kam", plural: "kamen" },
  { verb: "fahren", chinese: "搭車；開車；前往", aux: "sein", participle: "gefahren", example: "Wir sind nach Berlin gefahren.", ich: "fuhr", du: "fuhrst", third: "fuhr", plural: "fuhren" },
  { verb: "bleiben", chinese: "停留；保持", aux: "sein", participle: "geblieben", example: "Ich bin zu Hause geblieben.", ich: "blieb", du: "bliebst", third: "blieb", plural: "blieben" },
  { verb: "essen", chinese: "吃", aux: "haben", participle: "gegessen", example: "Ich habe Pizza gegessen.", ich: "aß", du: "aßest", third: "aß", plural: "aßen" },
  { verb: "trinken", chinese: "喝", aux: "haben", participle: "getrunken", example: "Er hat Wasser getrunken.", ich: "trank", du: "trankst", third: "trank", plural: "tranken" },
  { verb: "sprechen", chinese: "說；講", aux: "haben", participle: "gesprochen", example: "Wir haben Deutsch gesprochen.", ich: "sprach", du: "sprachst", third: "sprach", plural: "sprachen" },
  { verb: "lesen", chinese: "閱讀", aux: "haben", participle: "gelesen", example: "Sie hat ein Buch gelesen.", ich: "las", du: "lasest", third: "las", plural: "lasen" },
  { verb: "schreiben", chinese: "寫", aux: "haben", participle: "geschrieben", example: "Ich habe eine E-Mail geschrieben.", ich: "schrieb", du: "schriebst", third: "schrieb", plural: "schrieben" },
  { verb: "finden", chinese: "找到；覺得", aux: "haben", participle: "gefunden", example: "Ich habe den Weg gefunden.", ich: "fand", du: "fandest", third: "fand", plural: "fanden" },
  { verb: "helfen", chinese: "幫助", aux: "haben", participle: "geholfen", example: "Sie hat mir geholfen.", ich: "half", du: "halfst", third: "half", plural: "halfen" },
  { verb: "nehmen", chinese: "拿；搭乘", aux: "haben", participle: "genommen", example: "Ich habe den Bus genommen.", ich: "nahm", du: "nahmst", third: "nahm", plural: "nahmen" },
  { verb: "geben", chinese: "給；有", aux: "haben", participle: "gegeben", example: "Es hat ein Problem gegeben.", ich: "gab", du: "gabst", third: "gab", plural: "gaben" },
  { verb: "wissen", chinese: "知道", aux: "haben", participle: "gewusst", example: "Ich habe das nicht gewusst.", ich: "wusste", du: "wusstest", third: "wusste", plural: "wussten" },
  { verb: "denken", chinese: "想；認為", aux: "haben", participle: "gedacht", example: "Ich habe an dich gedacht.", ich: "dachte", du: "dachtest", third: "dachte", plural: "dachten" },
  { verb: "bringen", chinese: "帶來", aux: "haben", participle: "gebracht", example: "Er hat das Buch mitgebracht.", ich: "brachte", du: "brachtest", third: "brachte", plural: "brachten" },
  { verb: "kennen", chinese: "認識；知道", aux: "haben", participle: "gekannt", example: "Ich habe sie schon gekannt.", ich: "kannte", du: "kanntest", third: "kannte", plural: "kannten" },
  { verb: "nennen", chinese: "稱呼；命名", aux: "haben", participle: "genannt", example: "Er hat den Preis genannt.", ich: "nannte", du: "nanntest", third: "nannte", plural: "nannten" },
  { verb: "rennen", chinese: "跑", aux: "sein", participle: "gerannt", example: "Wir sind schnell gerannt.", ich: "rannte", du: "ranntest", third: "rannte", plural: "rannten" },
  { verb: "beginnen", chinese: "開始", aux: "haben", participle: "begonnen", example: "Der Kurs hat begonnen.", ich: "begann", du: "begannst", third: "begann", plural: "begannen" },
  { verb: "gewinnen", chinese: "贏得", aux: "haben", participle: "gewonnen", example: "Sie hat gewonnen.", ich: "gewann", du: "gewannst", third: "gewann", plural: "gewannen" },
  { verb: "liegen", chinese: "躺；位於", aux: "haben", participle: "gelegen", example: "Das Hotel hat zentral gelegen.", ich: "lag", du: "lagst", third: "lag", plural: "lagen" },
  { verb: "sitzen", chinese: "坐", aux: "haben", participle: "gesessen", example: "Wir haben im Café gesessen.", ich: "saß", du: "saßest", third: "saß", plural: "saßen" },
  { verb: "stehen", chinese: "站；位於", aux: "haben", participle: "gestanden", example: "Ich habe an der Haltestelle gestanden.", ich: "stand", du: "standest", third: "stand", plural: "standen" },
  { verb: "tragen", chinese: "穿戴；攜帶", aux: "haben", participle: "getragen", example: "Sie hat eine Jacke getragen.", ich: "trug", du: "trugst", third: "trug", plural: "trugen" },
  { verb: "schlafen", chinese: "睡覺", aux: "haben", participle: "geschlafen", example: "Ich habe gut geschlafen.", ich: "schlief", du: "schliefst", third: "schlief", plural: "schliefen" },
  { verb: "laufen", chinese: "跑；步行", aux: "sein", participle: "gelaufen", example: "Er ist zum Bahnhof gelaufen.", ich: "lief", du: "liefst", third: "lief", plural: "liefen" },
];

const extraVerbPrincipalRows = [
  { verb: "müssen", aux: "haben", participle: "gemusst", ich: "musste", du: "musstest", third: "musste", plural: "mussten" },
  { verb: "können", aux: "haben", participle: "gekonnt", ich: "konnte", du: "konntest", third: "konnte", plural: "konnten" },
  { verb: "wollen", aux: "haben", participle: "gewollt", ich: "wollte", du: "wolltest", third: "wollte", plural: "wollten" },
  { verb: "dürfen", aux: "haben", participle: "gedurft", ich: "durfte", du: "durftest", third: "durfte", plural: "durften" },
  { verb: "sollen", aux: "haben", participle: "gesollt", ich: "sollte", du: "solltest", third: "sollte", plural: "sollten" },
  { verb: "ankommen", aux: "sein", participle: "angekommen", ich: "kam an", du: "kamst an", third: "kam an", plural: "kamen an" },
  { verb: "abfahren", aux: "sein", participle: "abgefahren", ich: "fuhr ab", du: "fuhrst ab", third: "fuhr ab", plural: "fuhren ab" },
  { verb: "aufstehen", aux: "sein", participle: "aufgestanden", ich: "stand auf", du: "standest auf", third: "stand auf", plural: "standen auf" },
  { verb: "anrufen", aux: "haben", participle: "angerufen", ich: "rief an", du: "riefst an", third: "rief an", plural: "riefen an" },
  { verb: "mitbringen", aux: "haben", participle: "mitgebracht", ich: "brachte mit", du: "brachtest mit", third: "brachte mit", plural: "brachten mit" },
  { verb: "teilnehmen", aux: "haben", participle: "teilgenommen", ich: "nahm teil", du: "nahmst teil", third: "nahm teil", plural: "nahmen teil" },
  { verb: "unterschreiben", aux: "haben", participle: "unterschrieben", ich: "unterschrieb", du: "unterschriebst", third: "unterschrieb", plural: "unterschrieben" },
  { verb: "vorbereiten", aux: "haben", participle: "vorbereitet", ich: "bereitete vor", du: "bereitetest vor", third: "bereitete vor", plural: "bereiteten vor" },
  { verb: "empfehlen", aux: "haben", participle: "empfohlen", ich: "empfahl", du: "empfahlst", third: "empfahl", plural: "empfahlen" },
  { verb: "verlieren", aux: "haben", participle: "verloren", ich: "verlor", du: "verlorst", third: "verlor", plural: "verloren" },
  { verb: "entscheiden", aux: "haben", participle: "entschieden", ich: "entschied", du: "entschiedest", third: "entschied", plural: "entschieden" },
  { verb: "vergleichen", aux: "haben", participle: "verglichen", ich: "verglich", du: "verglichst", third: "verglich", plural: "verglichen" },
  { verb: "heißen", aux: "haben", participle: "geheißen", ich: "hieß", du: "hießest", third: "hieß", plural: "hießen" },
  { verb: "einladen", aux: "haben", participle: "eingeladen", ich: "lud ein", du: "ludst ein", third: "lud ein", plural: "luden ein" },
  { verb: "abschließen", aux: "haben", participle: "abgeschlossen", ich: "schloss ab", du: "schlossest ab", third: "schloss ab", plural: "schlossen ab" },
  { verb: "anbieten", aux: "haben", participle: "angeboten", ich: "bot an", du: "botest an", third: "bot an", plural: "boten an" },
  { verb: "erhalten", aux: "haben", participle: "erhalten", ich: "erhielt", du: "erhieltst", third: "erhielt", plural: "erhielten" },
  { verb: "enthalten", aux: "haben", participle: "enthalten", ich: "enthielt", du: "enthieltst", third: "enthielt", plural: "enthielten" },
  { verb: "entstehen", aux: "sein", participle: "entstanden", ich: "entstand", du: "entstandest", third: "entstand", plural: "entstanden" },
  { verb: "bestehen", aux: "haben", participle: "bestanden", ich: "bestand", du: "bestandest", third: "bestand", plural: "bestanden" },
  { verb: "beschreiben", aux: "haben", participle: "beschrieben", ich: "beschrieb", du: "beschriebst", third: "beschrieb", plural: "beschrieben" },
  { verb: "beweisen", aux: "haben", participle: "bewiesen", ich: "bewies", du: "bewiesest", third: "bewies", plural: "bewiesen" },
];

const supplementalQuestionPools = {
  A1: [
    { type: "choice", prompt: "___ Mann", translation: "男人", options: ["der", "die", "das"], answer: "der", hint: "男性人物通常是陽性：der Mann。" },
    { type: "choice", prompt: "___ Frau", translation: "女人", options: ["der", "die", "das"], answer: "die", hint: "女性人物通常是陰性：die Frau。" },
    { type: "choice", prompt: "___ Kind", translation: "小孩", options: ["der", "die", "das"], answer: "das", hint: "das Kind 是 A1 常見中性名詞。" },
    { type: "choice", prompt: "哪一句適合點咖啡？", options: ["Ich hätte gern einen Kaffee.", "Ich bin Kaffee.", "Kaffee wohne ich."], answer: "Ich hätte gern einen Kaffee.", hint: "Ich hätte gern ... 是點餐常用說法。" },
    { type: "choice", prompt: "哪一句是在問廁所？", options: ["Wo ist die Toilette?", "Was kostet die Toilette?", "Wer ist die Toilette?"], answer: "Wo ist die Toilette?", hint: "wo 表示在哪裡。" },
    { type: "choice", prompt: "哪一句是在問價格？", options: ["Wie viel kostet das?", "Wie spät kostet das?", "Wo kostet das?"], answer: "Wie viel kostet das?", hint: "Wie viel kostet ...? 用來問價格。" },
    { type: "cloze", prompt: "Ich ___ aus Taiwan.", translation: "我來自台灣。", answer: "komme", hint: "Ich komme aus Taiwan." },
    { type: "cloze", prompt: "Du ___ Deutsch.", translation: "你學德文。", answer: "lernst", hint: "du 搭配 lernen 是 lernst。" },
    { type: "cloze", prompt: "Wir ___ in Taipei.", translation: "我們住在台北。", answer: "wohnen", hint: "wir 搭配 wohnen 是 wohnen。" },
    { type: "cloze", prompt: "Ich ___ ein Buch.", translation: "我有一本書。", answer: "habe", hint: "ich 搭配 haben 是 habe。" },
    { type: "match", prompt: "配對 A1 句子", pairs: [{ term: "問價格", answer: "Wie viel kostet das?" }, { term: "點咖啡", answer: "Ich hätte gern einen Kaffee." }, { term: "問廁所", answer: "Wo ist die Toilette?" }], hint: "看關鍵字：kostet、Kaffee、Toilette。" },
    { type: "match", prompt: "配對冠詞與名詞", pairs: [{ term: "Tisch", answer: "der" }, { term: "Lampe", answer: "die" }, { term: "Buch", answer: "das" }], hint: "der Tisch, die Lampe, das Buch。" },
    { type: "reading", prompt: "閱讀短訊並回答問題", passage: "Hallo! Ich heiße Ben. Ich komme aus Berlin und wohne jetzt in Taipei. Ich lerne Deutsch und Chinesisch.", question: "Ben 現在住在哪裡？", options: ["Berlin", "Taipei", "Hamburg"], answer: "Taipei", hint: "wohne jetzt in Taipei 表示現在住在台北。" },
    { type: "reading", prompt: "閱讀公告並回答問題", passage: "Café Mozart: Montag bis Freitag 8-18 Uhr geöffnet. Samstag und Sonntag geschlossen.", question: "咖啡店週末有開嗎？", options: ["有，每天都開", "沒有開", "只開星期天"], answer: "沒有開", hint: "Samstag und Sonntag geschlossen 表示週六週日關閉。" },
    { type: "choice", prompt: "哪一句最適合請對方重複？", options: ["Können Sie das bitte wiederholen?", "Können Sie bitte kaufen?", "Können Sie bitte wohnen?"], answer: "Können Sie das bitte wiederholen?", hint: "wiederholen 表示重複。" },
    { type: "choice", prompt: "哪一句語序正確？", options: ["Ich lerne Deutsch.", "Ich Deutsch lerne.", "Lerne Deutsch ich."], answer: "Ich lerne Deutsch.", hint: "簡單陳述句動詞在第二位置。" },
    { type: "cloze", prompt: "Heute ___ Montag.", translation: "今天是星期一。", answer: "ist", hint: "Heute ist Montag." },
    { type: "cloze", prompt: "Das ___ meine Freundin.", translation: "這是我的朋友。", answer: "ist", hint: "Das ist ... 是常用介紹句。" },
    { type: "reading", prompt: "閱讀訊息並回答問題", passage: "Der Deutschkurs beginnt heute um 18 Uhr. Bitte bringen Sie ein Buch und einen Stift mit.", question: "德文課幾點開始？", options: ["8 Uhr", "18 Uhr", "20 Uhr"], answer: "18 Uhr", hint: "beginnt heute um 18 Uhr。" },
    { type: "choice", prompt: "哪個是『書』？", options: ["das Buch", "der Bahnhof", "die Miete"], answer: "das Buch", hint: "das Buch 是書。" },
  ],
  A2: [
    { type: "choice", prompt: "哪一句 Perfekt 正確？", options: ["Ich bin nach Hause gegangen.", "Ich habe nach Hause gegangen.", "Ich gegangen nach Hause bin."], answer: "Ich bin nach Hause gegangen.", hint: "gehen 表示移動，Perfekt 常用 sein。" },
    { type: "choice", prompt: "哪一句適合改預約？", options: ["Ich möchte den Termin verschieben.", "Ich möchte den Termin essen.", "Ich möchte den Termin trinken."], answer: "Ich möchte den Termin verschieben.", hint: "Termin verschieben 表示改預約。" },
    { type: "choice", prompt: "哪一句是問住宿？", options: ["Haben Sie ein Zimmer frei?", "Haben Sie ein Brot frei?", "Haben Sie eine Farbe frei?"], answer: "Haben Sie ein Zimmer frei?", hint: "ein Zimmer frei 表示有空房。" },
    { type: "cloze", prompt: "Ich ___ gestern Pizza gegessen.", translation: "我昨天吃了披薩。", answer: "habe", hint: "essen 的 Perfekt 常用 haben。" },
    { type: "cloze", prompt: "Sie ___ nach Berlin gefahren.", translation: "她去了柏林。", answer: "ist", hint: "fahren 表示移動時 Perfekt 常用 sein。" },
    { type: "cloze", prompt: "Ich komme später, weil ich arbeiten ___.", translation: "我晚一點到，因為我要工作。", answer: "muss", hint: "weil 子句中 muss 放最後。" },
    { type: "cloze", prompt: "Der Zug hat ___.", translation: "火車誤點了。", answer: "Verspätung", hint: "Verspätung haben 表示誤點。" },
    { type: "match", prompt: "配對 A2 情境", pairs: [{ term: "改時間", answer: "verschieben" }, { term: "預訂", answer: "buchen" }, { term: "付款", answer: "bezahlen" }], hint: "verschieben、buchen、bezahlen 都是日常任務動詞。" },
    { type: "match", prompt: "配對 Perfekt 助動詞", pairs: [{ term: "gehen", answer: "sein" }, { term: "lernen", answer: "haben" }, { term: "essen", answer: "haben" }], hint: "移動常 sein，多數其他動詞用 haben。" },
    { type: "reading", prompt: "閱讀通知並回答問題", passage: "Der Termin ist nicht am Dienstag, sondern am Donnerstag um 10 Uhr.", question: "新的預約時間是哪一天？", options: ["Dienstag", "Donnerstag", "Freitag"], answer: "Donnerstag", hint: "nicht ... sondern ... 表示不是 Tuesday，而是 Thursday。" },
    { type: "reading", prompt: "閱讀短訊並回答問題", passage: "Hallo, ich kann heute nicht kommen. Ich bin krank und bleibe zu Hause. Können wir morgen telefonieren?", question: "這個人今天為什麼不能去？", options: ["他生病了", "他要旅行", "他要買票"], answer: "他生病了", hint: "krank 表示生病。" },
    { type: "choice", prompt: "哪一句比較禮貌？", options: ["Könnten Sie mir bitte helfen?", "Hilf jetzt!", "Du helfen mich?"], answer: "Könnten Sie mir bitte helfen?", hint: "Könnten Sie ... bitte 是禮貌說法。" },
    { type: "cloze", prompt: "Ich suche ein günstiges ___ für zwei Nächte.", translation: "我找一間便宜的房間住兩晚。", answer: "Zimmer", hint: "Zimmer 是房間。" },
    { type: "choice", prompt: "哪一句表示『我想點餐』？", options: ["Ich möchte bestellen.", "Ich möchte schlafen.", "Ich möchte ausfüllen."], answer: "Ich möchte bestellen.", hint: "bestellen 可指點餐或訂購。" },
    { type: "reading", prompt: "閱讀公告並回答問題", passage: "Apotheke: Heute nur bis 14 Uhr geöffnet. Am Sonntag geschlossen.", question: "藥局今天開到幾點？", options: ["14 Uhr", "18 Uhr", "整天休息"], answer: "14 Uhr", hint: "nur bis 14 Uhr geöffnet。" },
    { type: "choice", prompt: "哪一句是 weil 子句正確語序？", options: ["weil ich arbeiten muss", "weil ich muss arbeiten", "weil muss ich arbeiten"], answer: "weil ich arbeiten muss", hint: "weil 子句中變位動詞放最後。" },
    { type: "cloze", prompt: "Kann ich mit Karte ___?", translation: "我可以刷卡付款嗎？", answer: "bezahlen", hint: "mit Karte bezahlen 表示用卡付款。" },
    { type: "choice", prompt: "哪個詞是『住宿』？", options: ["die Unterkunft", "die Quittung", "der Rabatt"], answer: "die Unterkunft", hint: "die Unterkunft 是住宿。" },
    { type: "match", prompt: "配對常用句", pairs: [{ term: "火車誤點", answer: "Der Zug hat Verspätung." }, { term: "我有預約", answer: "Ich habe einen Termin." }, { term: "可以幫我嗎", answer: "Könnten Sie mir helfen?" }], hint: "這三句都是 A2 日常情境常用句。" },
    { type: "choice", prompt: "哪一句表示『我要取消預訂』？", options: ["Ich möchte die Reservierung stornieren.", "Ich möchte die Reservierung trinken.", "Ich möchte die Reservierung lernen."], answer: "Ich möchte die Reservierung stornieren.", hint: "stornieren 表示取消預訂。" },
  ],
  B1: [
    { type: "choice", prompt: "哪一句最適合表達意見？", options: ["Meiner Meinung nach ist das sinnvoll.", "Meine Meinung sinnvoll das.", "Nach Meinung ist."], answer: "Meiner Meinung nach ist das sinnvoll.", hint: "Meiner Meinung nach 是表達意見的固定說法。" },
    { type: "choice", prompt: "哪一句適合提出替代方案？", options: ["Vielleicht können wir morgen früher losfahren.", "Vielleicht Preis morgen.", "Früher wir vielleicht."], answer: "Vielleicht können wir morgen früher losfahren.", hint: "Vielleicht können wir ... 可用來提出建議。" },
    { type: "cloze", prompt: "Ich bin damit einverstanden, aber ich habe noch eine ___.", translation: "我同意，但我還有一個問題。", answer: "Frage", hint: "eine Frage haben 表示有問題想問。" },
    { type: "cloze", prompt: "Ich würde gern wissen, ob das ___ ist.", translation: "我想知道這是否可行。", answer: "möglich", hint: "möglich sein 表示可行。" },
    { type: "cloze", prompt: "Der Bus hat Verspätung, deshalb komme ich ___.", translation: "公車誤點，所以我晚到。", answer: "später", hint: "später 表示晚一點。" },
    { type: "match", prompt: "配對 B1 表達", pairs: [{ term: "表達意見", answer: "Meiner Meinung nach" }, { term: "提出原因", answer: "weil" }, { term: "表示結果", answer: "deshalb" }], hint: "意見、原因、結果是 B1 對話常見功能。" },
    { type: "reading", prompt: "閱讀訊息並回答問題", passage: "Ich kann heute leider nicht kommen, weil ich länger arbeiten muss. Können wir den Termin auf Freitag verschieben?", question: "這個人想把預約改到哪一天？", options: ["Freitag", "Montag", "Dienstag"], answer: "Freitag", hint: "auf Freitag verschieben 表示改到星期五。" },
    { type: "reading", prompt: "閱讀短文並回答問題", passage: "Die Wohnung ist hell und günstig. Allerdings liegt sie weit vom Bahnhof entfernt.", question: "這間公寓的缺點是什麼？", options: ["離車站遠", "太暗", "太貴"], answer: "離車站遠", hint: "weit vom Bahnhof entfernt 表示離車站遠。" },
    { type: "choice", prompt: "哪一句能禮貌拒絕？", options: ["Das passt mir leider nicht.", "Nein, schlecht.", "Ich nicht."], answer: "Das passt mir leider nicht.", hint: "Das passt mir leider nicht 是自然的拒絕或改約說法。" },
    { type: "cloze", prompt: "Haben Sie vielleicht eine andere ___?", translation: "您有其他建議嗎？", answer: "Empfehlung", hint: "eine Empfehlung 是建議、推薦。" },
    { type: "choice", prompt: "哪個詞是『優點』？", options: ["der Vorteil", "der Nachteil", "die Ursache"], answer: "der Vorteil", hint: "der Vorteil 是優點。" },
    { type: "choice", prompt: "哪個詞是『原因』？", options: ["die Ursache", "die Folge", "die Lösung"], answer: "die Ursache", hint: "die Ursache 是原因。" },
    { type: "reading", prompt: "閱讀 email 並回答問題", passage: "Vielen Dank für Ihre Nachricht. Ich habe Interesse an dem Kurs, kann aber nur am Vormittag teilnehmen.", question: "這個人什麼時候可以參加？", options: ["上午", "晚上", "週末"], answer: "上午", hint: "am Vormittag 表示上午。" },
    { type: "cloze", prompt: "Ich habe ein Problem mit meiner ___.", translation: "我的預訂有問題。", answer: "Reservierung", hint: "Reservierung 是預訂。" },
    { type: "choice", prompt: "哪一句是自然的請求？", options: ["Könnten Sie mir bitte eine Bestätigung schicken?", "Schicken Bestätigung ich.", "Bestätigung bitte du."], answer: "Könnten Sie mir bitte eine Bestätigung schicken?", hint: "Könnten Sie mir bitte ... 是禮貌請求。" },
    { type: "match", prompt: "配對討論詞", pairs: [{ term: "優點", answer: "der Vorteil" }, { term: "缺點", answer: "der Nachteil" }, { term: "解決方法", answer: "die Lösung" }], hint: "這些是 B1/B2 討論常用詞。" },
    { type: "choice", prompt: "哪一句表示同意？", options: ["Ich bin damit einverstanden.", "Ich bin damit spät.", "Ich bin damit Bahnhof."], answer: "Ich bin damit einverstanden.", hint: "einverstanden sein 表示同意。" },
    { type: "cloze", prompt: "Könnten wir uns morgen ___ heute treffen?", translation: "我們可以不要今天、改明天見面嗎？", answer: "statt", hint: "statt heute 表示代替今天。" },
    { type: "reading", prompt: "閱讀公告並回答問題", passage: "Wegen Bauarbeiten fährt die Linie 5 diese Woche nur bis Hauptbahnhof.", question: "為什麼路線有變？", options: ["因為施工", "因為天氣", "因為假日"], answer: "因為施工", hint: "Bauarbeiten 表示施工。" },
    { type: "choice", prompt: "哪一句適合總結？", options: ["Zusammenfassend finde ich die Lösung gut.", "Zusammen Preis gut.", "Find ich Lösung zusammen."], answer: "Zusammenfassend finde ich die Lösung gut.", hint: "Zusammenfassend 可用於總結。" },
  ],
  B2: [
    { type: "choice", prompt: "哪一句最適合比較優缺點？", options: ["Ein Vorteil ist der Preis, ein Nachteil ist die Entfernung.", "Preis Vorteil Entfernung Nachteil.", "Ich Vorteil Entfernung."], answer: "Ein Vorteil ist der Preis, ein Nachteil ist die Entfernung.", hint: "B2 需要完整比較優缺點。" },
    { type: "choice", prompt: "哪一句適合表達不同看法？", options: ["Ich verstehe Ihren Standpunkt, sehe das aber anders.", "Ich Standpunkt anders aber.", "Verstehe anders ich."], answer: "Ich verstehe Ihren Standpunkt, sehe das aber anders.", hint: "這是禮貌表達不同意見的方式。" },
    { type: "cloze", prompt: "Andererseits muss man auch die Kosten ___.", translation: "另一方面，也必須考慮成本。", answer: "berücksichtigen", hint: "berücksichtigen 表示考慮到。" },
    { type: "cloze", prompt: "Könnten Sie bitte prüfen, ob eine Umbuchung ___ ist?", translation: "可以請您確認是否可以改訂嗎？", answer: "möglich", hint: "möglich sein 表示可行。" },
    { type: "cloze", prompt: "Zusammenfassend finde ich diese Lösung am ___.", translation: "總結來說，我覺得這個解決方法最合理。", answer: "sinnvollsten", hint: "am sinnvollsten 是最高級用法。" },
    { type: "match", prompt: "配對 B2 討論功能", pairs: [{ term: "一方面", answer: "einerseits" }, { term: "另一方面", answer: "andererseits" }, { term: "總結來說", answer: "zusammenfassend" }], hint: "這些是討論和寫作常用連接詞。" },
    { type: "reading", prompt: "閱讀短文並回答問題", passage: "Die Unterkunft ist zwar günstig, aber die Lage ist unpraktisch. Wer nur eine Nacht bleibt, kann dort schlafen. Für eine längere Reise würde ich sie nicht empfehlen.", question: "作者對長期住宿的看法是什麼？", options: ["不推薦", "非常推薦", "沒有意見"], answer: "不推薦", hint: "würde ich sie nicht empfehlen 表示不推薦。" },
    { type: "reading", prompt: "閱讀短文並回答問題", passage: "Viele Menschen nutzen öffentliche Verkehrsmittel, weil sie günstiger und umweltfreundlicher sind. Allerdings dauert die Fahrt manchmal länger.", question: "文中提到公共交通的缺點是什麼？", options: ["有時花比較久", "完全不環保", "一定更貴"], answer: "有時花比較久", hint: "dauert ... länger 表示花比較久。" },
    { type: "choice", prompt: "哪個詞是『資料保護』？", options: ["der Datenschutz", "die Ernährung", "die Unterkunft"], answer: "der Datenschutz", hint: "Datenschutz 是資料保護。" },
    { type: "choice", prompt: "哪個詞是『永續性』？", options: ["die Nachhaltigkeit", "die Verspätung", "die Quittung"], answer: "die Nachhaltigkeit", hint: "Nachhaltigkeit 是永續性。" },
    { type: "cloze", prompt: "Man sollte die Vor- und Nachteile ___.", translation: "應該比較優缺點。", answer: "vergleichen", hint: "vergleichen 表示比較。" },
    { type: "choice", prompt: "哪一句適合正式請求？", options: ["Könnten Sie mir bitte eine schriftliche Bestätigung senden?", "Senden du Bestätigung.", "Bestätigung jetzt."], answer: "Könnten Sie mir bitte eine schriftliche Bestätigung senden?", hint: "Könnten Sie ... 是正式且禮貌的請求。" },
    { type: "match", prompt: "配對抽象詞", pairs: [{ term: "發展", answer: "die Entwicklung" }, { term: "挑戰", answer: "die Herausforderung" }, { term: "責任", answer: "die Verantwortung" }], hint: "這些是 B2 討論常見抽象名詞。" },
    { type: "reading", prompt: "閱讀短文並回答問題", passage: "Homeoffice bietet mehr Flexibilität. Andererseits fehlt manchen Menschen der direkte Kontakt zu Kolleginnen und Kollegen.", question: "文中提到居家工作的缺點是什麼？", options: ["缺少直接同事互動", "完全沒有彈性", "不能使用電腦"], answer: "缺少直接同事互動", hint: "fehlt ... der direkte Kontakt 表示缺少直接接觸。" },
    { type: "cloze", prompt: "Ich sehe das etwas ___ als Sie.", translation: "我的看法和您有點不同。", answer: "anders", hint: "anders 表示不同地。" },
    { type: "choice", prompt: "哪一句適合說明條件？", options: ["Unter dieser Voraussetzung ist das möglich.", "Voraussetzung möglich unter diese.", "Möglich Voraussetzung ich."], answer: "Unter dieser Voraussetzung ist das möglich.", hint: "unter dieser Voraussetzung 表示在這個前提下。" },
    { type: "choice", prompt: "哪個詞是『平等權利』？", options: ["die Gleichberechtigung", "die Bewegung", "die Haltestelle"], answer: "die Gleichberechtigung", hint: "Gleichberechtigung 是平等權利。" },
    { type: "reading", prompt: "閱讀短文並回答問題", passage: "Die neue App ist praktisch, aber viele Nutzerinnen und Nutzer machen sich Sorgen um den Datenschutz.", question: "使用者擔心什麼？", options: ["資料保護", "價格太低", "交通問題"], answer: "資料保護", hint: "Sorgen um den Datenschutz 表示擔心資料保護。" },
    { type: "cloze", prompt: "Die Entscheidung hängt von mehreren Faktoren ___.", translation: "這個決定取決於多個因素。", answer: "ab", hint: "von etwas abhängen 表示取決於某事。" },
    { type: "choice", prompt: "哪一句適合結尾？", options: ["Insgesamt überwiegen für mich die Vorteile.", "Vorteile mich insgesamt.", "Überwiegen ich Vorteile."], answer: "Insgesamt überwiegen für mich die Vorteile.", hint: "Insgesamt ... 可用來總結立場。" },
  ],
};

const germanExamPools = enhanceExamPools(createGermanExamPools());

let activeLesson = lessons[0];
let currentIndex = 0;
let score = 0;
let answered = false;
let quizSeed = Date.now();
let currentPreparedQuestion = null;
let activeMainSection = "home";

const progressStorageKey = "deutschfuertaiwan-progress-v1";
const usedLessonVocabularyByLevel = {};

const homePanel = document.querySelector(".intro");
const studyApp = document.querySelector(".study-app");
const homeTab = document.querySelector("#home-tab");
const learningTab = document.querySelector("#learning-tab");
const examTab = document.querySelector("#exam-tab");
const knowledgeTab = document.querySelector("#knowledge-tab");
const lessonListEl = document.querySelector("#lesson-list");
const levelTextEl = document.querySelector("#level-text");
const lessonBadgeEl = document.querySelector("#lesson-badge");
const lessonTitleEl = document.querySelector("#lesson-title");
const lessonDescriptionEl = document.querySelector("#lesson-description");
const lessonReadingEl = document.querySelector("#lesson-reading");
const lessonVocabularyEl = document.querySelector("#lesson-vocabulary");
const lessonExtraVocabularyEl = document.querySelector("#lesson-extra-vocabulary");
const lessonGrammarEl = document.querySelector("#lesson-grammar");
const lessonCardsEl = document.querySelector("#lesson-cards");
const dailyPhrasesEl = document.querySelector("#daily-phrases");
const sourceNoteEl = document.querySelector("#source-note");
const startButton = document.querySelector("#start-quiz");
const resourceTab = document.querySelector("#resource-tab");
const dashboardTab = document.querySelector("#dashboard-tab");
const backToLessonButton = document.querySelector("#back-to-lesson");
const quizPanel = document.querySelector("#quiz-panel");
const lessonPanel = document.querySelector("#lesson-panel");
const examGuidePanel = document.querySelector("#exam-guide-panel");
const sectionIntroContentEl = document.querySelector("#section-intro-content");
const resourcesPanel = document.querySelector("#resources-panel");
const dashboardPanel = document.querySelector("#dashboard-panel");
const quizTitleEl = document.querySelector("#quiz-title");
const scoreEl = document.querySelector("#score");
const totalEl = document.querySelector("#total");
const progressBar = document.querySelector("#progress-bar");
const metaEl = document.querySelector("#question-meta");
const textEl = document.querySelector("#question-text");
const translationEl = document.querySelector("#question-translation");
const answersEl = document.querySelector("#answers");
const feedbackEl = document.querySelector("#feedback");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");
const vocabLevelTablesEl = document.querySelector("#vocab-level-tables");
const vocabLevelTabsEl = document.querySelector("#vocab-level-tabs");
const presentVerbTableEl = document.querySelector("#present-verb-table");
const perfectVerbTableEl = document.querySelector("#perfect-verb-table");
const preteriteVerbTableEl = document.querySelector("#preterite-verb-table");
const grammarOverviewTableEl = document.querySelector("#grammar-overview-table");
const downloadVocabButton = document.querySelector("#download-vocab");
const downloadVerbsButton = document.querySelector("#download-verbs");
const downloadGrammarButton = document.querySelector("#download-grammar");
const resourcePageTabs = document.querySelectorAll(".resource-page-tab");
const resourcePagePanels = document.querySelectorAll("[data-resource-page-panel]");
let activeVocabLevel = "A1";
const dashboardSummaryEl = document.querySelector("#dashboard-summary");
const knowledgeMapEl = document.querySelector("#knowledge-map");
const resetProgressButton = document.querySelector("#reset-progress");

function renderLessonList() {
  lessonListEl.innerHTML = "";
  resourceTab.dataset.active = "false";
  dashboardTab.dataset.active = "false";
  if (activeMainSection === "knowledge") return;

  levelOrder.forEach((level) => {
    const levelLessons = lessons.filter((lesson) => lesson.level === level && !lesson.isComprehensiveExam);
    if (levelLessons.length === 0) return;

    const levelGroup = document.createElement("details");
    levelGroup.className = "level-folder";
    levelGroup.open = (lessonPanel.hidden === false || quizPanel.hidden === false) && activeLesson.level === level;
    levelGroup.innerHTML = `
      <summary>
        <span class="level-chip">${level}</span>
        <span>
          <strong>${level}</strong>
          <small>${getLevelFolderLabel(level)}</small>
        </span>
      </summary>
    `;

    const courseGroup = document.createElement("div");
    courseGroup.className = "folder-branch";
    courseGroup.innerHTML = "<h4>KURS</h4>";

    levelLessons
      .sort(sortLessonsByCode)
      .forEach((lesson) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-tab tree-item";
        button.dataset.active = lesson.id === activeLesson.id && !lessonPanel.hidden;
        button.innerHTML = `
          <span class="tree-code">${lesson.lessonCode}</span>
          <strong>${lesson.navTitle}</strong>
          <small>${lesson.topic}</small>
        `;
        button.addEventListener("click", () => selectLesson(lesson.id));
        courseGroup.appendChild(button);
      });

    if (activeMainSection === "learning") {
      levelGroup.appendChild(courseGroup);
    }

    const testGroup = document.createElement("div");
    testGroup.className = "folder-branch";
    testGroup.innerHTML = "<h4>12 Kurztest</h4>";

    [...levelLessons]
      .sort(sortLessonsByCode)
      .forEach((lesson) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-tab tree-item quiz-tree-item";
        button.dataset.active = lesson.id === activeLesson.id && !quizPanel.hidden;
        button.innerHTML = `
          <span class="tree-code">T${lesson.lessonNumber}</span>
          <strong>${lesson.lessonCode} Kurztest</strong>
          <small>20 Fragen · Lesen / Wortschatz / Grammatik</small>
        `;
        button.addEventListener("click", () => selectQuiz(lesson.id));
        testGroup.appendChild(button);
      });

    if (activeMainSection === "exam") {
      levelGroup.appendChild(testGroup);
    }

    const examGroup = document.createElement("div");
    examGroup.className = "folder-branch";
    examGroup.innerHTML = "<h4>3 Prüfung</h4>";

    lessons
      .filter((lesson) => lesson.level === level && lesson.isComprehensiveExam)
      .forEach((exam) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-tab tree-item quiz-tree-item";
        button.dataset.active = exam.id === activeLesson.id && !quizPanel.hidden;
        button.innerHTML = `
          <span class="tree-code">${exam.examCode}</span>
          <strong>${exam.title}</strong>
          <small>${exam.description}</small>
        `;
        button.addEventListener("click", () => selectQuiz(exam.id));
        examGroup.appendChild(button);
      });

    if (activeMainSection === "exam") {
      levelGroup.appendChild(examGroup);
    }
    lessonListEl.appendChild(levelGroup);
  });
}

function selectLesson(id) {
  activeLesson = lessons.find((lesson) => lesson.id === id) || lessons[0];
  showLesson();
}

function selectQuiz(id) {
  activeLesson = lessons.find((lesson) => lesson.id === id) || lessons[0];
  startQuiz();
}

function renderLesson() {
  levelTextEl.textContent = `${activeLesson.level}：${levelLabels[activeLesson.level]}`;
  lessonBadgeEl.textContent = `${activeLesson.level} · ${activeLesson.lessonCode}`;
  lessonTitleEl.textContent = `${activeLesson.lessonCode} ${activeLesson.topic}`;
  lessonDescriptionEl.textContent = activeLesson.courseSummary;
  sourceNoteEl.textContent = activeLesson.sourceNote;
  startButton.textContent = `${activeLesson.lessonCode} Prüfung starten`;
  startButton.hidden = activeMainSection === "learning";
  renderTextbookLesson(activeLesson);

  lessonCardsEl.innerHTML = "";
  getLessonCards(activeLesson).forEach((card) => {
    const article = document.createElement("article");
    article.className = "rule-card note";
    article.innerHTML = `
      <span class="article-tag">${card.tag}</span>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
      <p class="example">${card.example}</p>
    `;
    lessonCardsEl.appendChild(article);
  });

  if (activeLesson.textbook?.proverb) {
    const proverb = document.createElement("article");
    proverb.className = "rule-card note proverb-card";
    proverb.innerHTML = `
      <span class="article-tag">Sprichwort</span>
      <h3>本課德文俗諺</h3>
      <p class="example">${activeLesson.textbook.proverb.german}</p>
      <p>${activeLesson.textbook.proverb.chinese}</p>
    `;
    lessonCardsEl.appendChild(proverb);
  }

  dailyPhrasesEl.innerHTML = (activeLesson.dailyPhrases || dailyPhraseBanks[activeLesson.level])
    .map((phrase) => `
      <article class="phrase-card">
        <strong>${phrase.german}</strong>
        <span>${phrase.chinese}</span>
      </article>
    `)
    .join("");

  renderLessonList();
}

function showLesson() {
  showAppSection("learning");
  quizPanel.hidden = true;
  resourcesPanel.hidden = true;
  dashboardPanel.hidden = true;
  examGuidePanel.hidden = true;
  lessonPanel.hidden = false;
  resourceTab.dataset.active = "false";
  dashboardTab.dataset.active = "false";
  renderLessonList();
  renderLesson();
}

function startQuiz() {
  showAppSection("exam");
  currentIndex = 0;
  score = 0;
  quizSeed = Date.now();
  lessonPanel.hidden = true;
  resourcesPanel.hidden = true;
  dashboardPanel.hidden = true;
  examGuidePanel.hidden = true;
  quizPanel.hidden = false;
  resourceTab.dataset.active = "false";
  dashboardTab.dataset.active = "false";
  quizTitleEl.textContent = activeLesson.isComprehensiveExam
    ? `${activeLesson.level} Prüfung - ${activeLesson.title}`
    : `${activeLesson.level} Prüfung - ${stageGermanLabels[activeLesson.stage]}`;
  renderLessonList();
  renderQuestion();
}

function showHome() {
  homePanel.hidden = false;
  studyApp.hidden = true;
  setMainTab("home");
}

function showLearningPath() {
  showSectionIntro("learning");
}

function showExamGuide() {
  showSectionIntro("exam");
}

function showSectionIntro(section) {
  showAppSection(section);
  lessonPanel.hidden = true;
  quizPanel.hidden = true;
  resourcesPanel.hidden = true;
  dashboardPanel.hidden = true;
  examGuidePanel.hidden = false;
  resourceTab.dataset.active = "false";
  dashboardTab.dataset.active = "false";
  levelTextEl.textContent = "";
  sectionIntroContentEl.innerHTML = getSectionIntro(section).html;
  renderLessonList();
}

function showKnowledgeIntro() {
  showSectionIntro("knowledge");
}

function showResources() {
  showAppSection("knowledge");
  lessonPanel.hidden = true;
  quizPanel.hidden = true;
  dashboardPanel.hidden = true;
  examGuidePanel.hidden = true;
  resourcesPanel.hidden = false;
  resourceTab.dataset.active = "true";
  dashboardTab.dataset.active = "false";
  renderLessonList();
  resourceTab.dataset.active = "true";
  levelTextEl.textContent = "常用單字與動詞：可下載表格複習";
  renderResourceTables();
  showResourcePage("vocab");
}

function showDashboard() {
  showAppSection("knowledge");
  lessonPanel.hidden = true;
  quizPanel.hidden = true;
  resourcesPanel.hidden = true;
  examGuidePanel.hidden = true;
  dashboardPanel.hidden = false;
  resourceTab.dataset.active = "false";
  dashboardTab.dataset.active = "true";
  renderLessonList();
  dashboardTab.dataset.active = "true";
  levelTextEl.textContent = "教師後台：統整學生在本機作答的弱點";
  renderDashboard();
}

function showAppSection(section) {
  activeMainSection = section;
  homePanel.hidden = true;
  studyApp.hidden = false;
  resourceTab.hidden = section !== "knowledge";
  dashboardTab.hidden = section !== "knowledge";
  setMainTab(section);
}

function getSectionIntro(section) {
  const content = {
    learning: {
      title: "學習路徑",
      items: ["A1-B2 分級課程", "每課課文、單字、文法", "日常例句與俗諺"],
      body: "這裡用 Lektion 安排學習順序，適合先讀課文再整理單字與文法。",
    },
    exam: {
      title: "測驗錦笈",
      items: ["12 Kurztest", "3 Prüfung", "期中考", "期末考", "綜合複習考"],
      body: "這裡集中所有 Prüfung，方便練習題型、計分與複習弱點。",
    },
    knowledge: {
      title: "知識整理庫",
      items: ["單字表", "動詞變化表", "文法總表", "知識點地圖"],
      body: "這裡整理可下載表格與作答弱點，方便課後複習與教學追蹤。",
    },
  }[section];

  return {
    html: `
      <div class="section-heading">
        <p class="eyebrow">Überblick</p>
        <h2>${content.title}</h2>
        <p class="panel-description">${content.body}</p>
      </div>
      <div class="section-directory">
        ${content.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `,
  };
}

function setMainTab(active) {
  [
    [homeTab, "home"],
    [learningTab, "learning"],
    [examTab, "exam"],
    [knowledgeTab, "knowledge"],
  ].forEach(([button, value]) => {
    button.dataset.active = active === value;
    button.classList.toggle("secondary", active !== value);
  });
}

function showResourcePage(page) {
  resourcePagePanels.forEach((panel) => {
    panel.hidden = panel.dataset.resourcePagePanel !== page;
  });

  resourcePageTabs.forEach((tab) => {
    const active = tab.dataset.resourcePage === page;
    tab.dataset.active = active;
    tab.classList.toggle("secondary", !active);
  });
}

function renderResourceTables() {
  if (!vocabLevelTablesEl || !presentVerbTableEl || !perfectVerbTableEl || !preteriteVerbTableEl || !grammarOverviewTableEl) return;

  const vocabByLevel = groupVocabularyByLevel();
  const principalRows = getAllVerbPrincipalRows();

  grammarOverviewTableEl.innerHTML = grammarOverviewRows
    .map((row) => `
      <tr>
        <td>${row.level}</td>
        <td>${row.topic}</td>
        <td>${row.usage}</td>
        <td>${row.example}</td>
      </tr>
    `)
    .join("");

  if (vocabLevelTabsEl) {
    vocabLevelTabsEl.innerHTML = levelOrder
      .map((level) => `
        <button class="resource-page-tab ${activeVocabLevel === level ? "" : "secondary"}" data-vocab-level="${level}" type="button">
          ${level} 單字表 (${vocabByLevel[level].length})
        </button>
      `)
      .join("");
  }

  vocabLevelTablesEl.innerHTML = `
      <section>
        <h4>${activeVocabLevel} 單字表 (${vocabByLevel[activeVocabLevel].length})</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>德文</th>
                <th>詞性</th>
                <th>中文</th>
              </tr>
            </thead>
            <tbody>
              ${vocabByLevel[activeVocabLevel]
                .map((row) => formatVocabularyRow(row))
                .map((row) => `
                  <tr>
                    <td>${row.german}</td>
                    <td>${row.partOfSpeech}</td>
                    <td>${row.chinese}</td>
                  </tr>
                `)
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;

  presentVerbTableEl.innerHTML = verbRows
    .map((row) => `
      <tr>
        <td>${row.verb}</td>
        <td>${row.chinese}</td>
        <td>${row.ich}</td>
        <td>${row.du}</td>
        <td>${row.third}</td>
        <td>${row.plural}</td>
      </tr>
    `)
    .join("");

  perfectVerbTableEl.innerHTML = principalRows
    .map((row) => `
      <tr>
        <td>${row.verb}</td>
        <td>${row.chinese}</td>
        <td>${row.aux}</td>
        <td>${row.participle}</td>
        <td>${row.example}</td>
      </tr>
    `)
    .join("");

  preteriteVerbTableEl.innerHTML = principalRows
    .map((row) => `
      <tr>
        <td>${row.verb}</td>
        <td>${row.chinese}</td>
        <td>${row.ich}</td>
        <td>${row.du}</td>
        <td>${row.third}</td>
        <td>${row.plural}</td>
      </tr>
    `)
    .join("");
}

function formatVocabularyRows(rows) {
  return rows.map((row) => formatVocabularyRow(row));
}

function formatVocabularyRow(row) {
  const partOfSpeech = getPartOfSpeechAbbreviation(row.type);
  const plural = row.type === "名詞" ? nounPluralMap[row.german] : "";
  const german = plural ? `${row.german} - ${plural}` : row.german;
  return {
    german,
    partOfSpeech,
    chinese: row.chinese,
  };
}

function getPartOfSpeechAbbreviation(type) {
  const abbreviations = {
    名詞: "n",
    動詞: "v",
    形容詞: "adj",
    片語: "phr",
    代詞: "pron",
    冠詞: "art",
    介系詞: "prep",
    連接詞: "konj",
    副詞: "adv",
    常用詞: "x",
    "副詞/連接詞": "adv/konj",
  };

  return abbreviations[type] || type;
}

function getAllVerbPrincipalRows() {
  return verbRows.map(getVerbPrincipalRow);
}

function getVerbPrincipalRow(row) {
  const override = [...verbPrincipalRows, ...extraVerbPrincipalRows].find((item) => item.verb === row.verb);
  if (override) {
    return {
      ...row,
      ...override,
      example: override.example || buildPerfectExample(row, override),
    };
  }

  const generated = {
    aux: getDefaultAuxiliary(row.verb),
    participle: buildRegularParticiple(row.verb),
    ...buildWeakPreteriteForms(row.verb),
  };

  return {
    ...row,
    ...generated,
    example: buildPerfectExample(row, generated),
  };
}

function getDefaultAuxiliary(verb) {
  const seinVerbs = new Set(["gehen", "fahren", "kommen", "bleiben", "laufen", "rennen", "ankommen", "abfahren", "aufstehen", "entstehen"]);
  return seinVerbs.has(verb) ? "sein" : "haben";
}

function buildPerfectExample(row, principal) {
  const subject = principal.aux === "sein" ? "Ich bin" : "Ich habe";
  return `${subject} ${principal.participle}.`;
}

function buildRegularParticiple(verb) {
  const separable = splitSeparableVerb(verb);
  if (separable) {
    return `${separable.prefix}${buildBaseParticiple(separable.base, true)}`;
  }

  return buildBaseParticiple(verb, false);
}

function buildBaseParticiple(verb, isSeparableBase) {
  if (verb.endsWith("ieren")) return `${getVerbStem(verb)}t`;

  const stem = getVerbStem(verb);
  const ending = needsExtraE(stem) ? "et" : "t";
  if (!isSeparableBase && hasInseparablePrefix(verb)) return `${stem}${ending}`;
  return `ge${stem}${ending}`;
}

function buildWeakPreteriteForms(verb) {
  const separable = splitSeparableVerb(verb);
  const base = separable?.base || verb;
  const stem = getVerbStem(base);
  const marker = needsExtraE(stem) ? "ete" : "te";
  const ich = `${stem}${marker}`;
  const du = `${ich}st`;
  const third = ich;
  const plural = `${stem}${marker}n`;

  if (!separable) return { ich, du, third, plural };

  return {
    ich: `${ich} ${separable.prefix}`,
    du: `${du} ${separable.prefix}`,
    third: `${third} ${separable.prefix}`,
    plural: `${plural} ${separable.prefix}`,
  };
}

function splitSeparableVerb(verb) {
  const prefixes = ["zusammen", "vor", "mit", "aus", "ein", "auf", "an", "ab", "um"];
  const prefix = prefixes.find((item) => verb.startsWith(item) && verb.length > item.length + 3);
  if (!prefix) return null;
  return { prefix, base: verb.slice(prefix.length) };
}

function hasInseparablePrefix(verb) {
  return /^(be|emp|ent|er|ge|miss|ver|zer|über|unter|wider|wieder)/.test(verb);
}

function getVerbStem(verb) {
  if (verb.endsWith("eln")) return verb.slice(0, -1);
  if (verb.endsWith("ern")) return verb.slice(0, -1);
  if (verb.endsWith("en")) return verb.slice(0, -2);
  if (verb.endsWith("n")) return verb.slice(0, -1);
  return verb;
}

function needsExtraE(stem) {
  return /[dt]$/.test(stem);
}

const generatedVocabularyData = {
  A1: {
    adjectives: [["kleine", "小的"], ["große", "大的"], ["neue", "新的"], ["alte", "舊的"], ["schöne", "漂亮的"], ["gute", "好的"], ["billige", "便宜的"], ["teure", "貴的"], ["ruhige", "安靜的"], ["laute", "吵的"], ["helle", "明亮的"], ["dunkle", "暗的"], ["rote", "紅色的"], ["blaue", "藍色的"], ["grüne", "綠色的"], ["gelbe", "黃色的"], ["warme", "溫暖的"], ["kalte", "冷的"], ["kurze", "短的"], ["lange", "長的"], ["schnelle", "快的"], ["langsame", "慢的"], ["freundliche", "友善的"], ["wichtige", "重要的"], ["einfache", "簡單的"]],
    nouns: [["der", "Tisch", "桌子"], ["die", "Lampe", "燈"], ["das", "Buch", "書"], ["der", "Stuhl", "椅子"], ["die", "Tür", "門"], ["das", "Fenster", "窗戶"], ["der", "Rucksack", "背包"], ["die", "Tasche", "包包"], ["das", "Heft", "筆記本"], ["der", "Stift", "筆"], ["die", "Klasse", "班級"], ["das", "Zimmer", "房間"], ["der", "Lehrer", "老師"], ["die", "Lehrerin", "女老師"], ["das", "Kind", "小孩"], ["der", "Freund", "朋友"], ["die", "Freundin", "女朋友"], ["das", "Foto", "照片"], ["der", "Bahnhof", "車站"], ["die", "Straße", "街道"], ["das", "Café", "咖啡店"], ["der", "Kaffee", "咖啡"], ["die", "Suppe", "湯"], ["das", "Brot", "麵包"], ["der", "Apfel", "蘋果"], ["die", "Jacke", "外套"], ["das", "Hemd", "襯衫"], ["der", "Pullover", "毛衣"], ["die", "Mütze", "帽子"], ["das", "Fahrrad", "腳踏車"], ["der", "Bus", "公車"], ["die", "Fahrkarte", "車票"], ["das", "Hotel", "飯店"], ["der", "Preis", "價格"], ["die", "Uhr", "時鐘"], ["das", "Datum", "日期"], ["der", "Morgen", "早晨"], ["die", "Pause", "休息時間"], ["das", "Wetter", "天氣"], ["der", "Wind", "風"], ["die", "Sonne", "太陽"], ["das", "Wasser", "水"], ["der", "Kopf", "頭"], ["die", "Hand", "手"], ["das", "Knie", "膝蓋"], ["der", "Termin", "預約"], ["die", "Frage", "問題"], ["das", "Wort", "單字"], ["der", "Satz", "句子"], ["die", "Antwort", "回答"]],
    verbs: [["lesen", "閱讀"], ["schreiben", "書寫"], ["sprechen", "說"], ["hören", "聽"], ["fragen", "詢問"], ["antworten", "回答"], ["kaufen", "購買"], ["bezahlen", "付款"], ["gehen", "去"], ["fahren", "搭乘"]],
    contexts: [["im Kurs", "在課堂上"], ["zu Hause", "在家"], ["langsam", "慢慢地"], ["jeden Tag", "每天"], ["am Morgen", "早上"], ["mit Freunden", "和朋友"], ["in der Schule", "在學校"], ["im Café", "在咖啡店"], ["am Bahnhof", "在車站"], ["auf Deutsch", "用德文"]],
  },
  A2: {
    adjectives: [["praktische", "實用的"], ["passende", "合適的"], ["pünktliche", "準時的"], ["späte", "晚的"], ["frühe", "早的"], ["höfliche", "禮貌的"], ["kurze", "短的"], ["lange", "長的"], ["schriftliche", "書面的"], ["mündliche", "口頭的"], ["private", "私人的"], ["öffentliche", "公共的"], ["günstige", "便宜的"], ["bequeme", "舒適的"], ["sichere", "安全的"], ["schnelle", "快速的"], ["langsame", "慢的"], ["einfache", "簡單的"], ["schwierige", "困難的"], ["wichtige", "重要的"], ["neue", "新的"], ["alte", "舊的"], ["klare", "清楚的"], ["freundliche", "友善的"], ["ruhige", "安靜的"]],
    nouns: [["der", "Termin", "預約"], ["die", "Wohnung", "住處"], ["das", "Formular", "表格"], ["der", "Arzttermin", "看診預約"], ["die", "Praxis", "診所"], ["das", "Arbeitsbuch", "練習本"], ["der", "Teilnehmer", "參加者"], ["die", "Nachricht", "訊息"], ["das", "Ticket", "票"], ["der", "Zug", "火車"], ["die", "Verspätung", "延誤"], ["das", "Gleis", "月台"], ["der", "Vorschlag", "建議"], ["die", "Einladung", "邀請"], ["das", "Zimmer", "房間"], ["der", "Vormittag", "上午"], ["die", "Rechnung", "帳單"], ["das", "Restaurant", "餐廳"], ["der", "Plan", "計畫"], ["die", "Aufgabe", "任務"], ["das", "Projekt", "專案"], ["der", "Unterricht", "課程"], ["die", "Schule", "學校"], ["das", "Büro", "辦公室"], ["der", "Antrag", "申請"], ["die", "Behörde", "機關"], ["das", "Dokument", "文件"], ["der", "Bus", "公車"], ["die", "Verbindung", "交通連線"], ["das", "Fahrrad", "腳踏車"], ["der", "Weg", "路"], ["die", "Unterkunft", "住宿"], ["das", "Hotel", "飯店"], ["der", "Schlüssel", "鑰匙"], ["die", "Miete", "租金"], ["das", "Gespräch", "談話"], ["der", "Kollege", "同事"], ["die", "Kollegin", "女同事"], ["das", "Problem", "問題"], ["der", "Grund", "原因"], ["die", "Lösung", "解法"], ["das", "Beispiel", "例子"], ["der", "Vergleich", "比較"], ["die", "Empfehlung", "推薦"], ["das", "Ergebnis", "結果"], ["der", "Text", "文章"], ["die", "E-Mail", "電子郵件"], ["das", "Thema", "主題"], ["der", "Satz", "句子"], ["die", "Antwort", "回答"]],
    verbs: [["verschieben", "改期"], ["vereinbaren", "約定"], ["ankommen", "抵達"], ["abfahren", "出發"], ["ausfüllen", "填寫"], ["unterschreiben", "簽名"], ["reservieren", "預訂"], ["stornieren", "取消"], ["vorbereiten", "準備"], ["teilnehmen", "參加"]],
    contexts: [["per E-Mail", "用電子郵件"], ["am Telefon", "在電話中"], ["im Büro", "在辦公室"], ["online", "線上"], ["morgen früh", "明天早上"], ["nächste Woche", "下週"], ["mit dem Formular", "用表格"], ["für den Kurs", "為課程"], ["im Alltag", "在日常中"], ["höflich", "有禮貌地"]],
  },
  B1: {
    adjectives: [["formelle", "正式的"], ["höfliche", "禮貌的"], ["klare", "清楚的"], ["konkrete", "具體的"], ["wichtige", "重要的"], ["dringende", "緊急的"], ["sinnvolle", "合理的"], ["mögliche", "可能的"], ["persönliche", "個人的"], ["berufliche", "職業的"], ["schriftliche", "書面的"], ["mündliche", "口頭的"], ["kritische", "批判的"], ["positive", "正面的"], ["negative", "負面的"], ["zuverlässige", "可靠的"], ["faire", "公平的"], ["soziale", "社會的"], ["öffentliche", "公共的"], ["private", "私人的"], ["gemeinsame", "共同的"], ["digitale", "數位的"], ["aktuelle", "目前的"], ["praktische", "實用的"], ["realistische", "實際的"]],
    nouns: [["der", "Grund", "理由"], ["die", "Meinung", "意見"], ["das", "Argument", "論點"], ["der", "Vorteil", "優點"], ["die", "Beschwerde", "投訴"], ["das", "Problem", "問題"], ["der", "Vorschlag", "建議"], ["die", "Lösung", "解決方法"], ["das", "Beispiel", "例子"], ["der", "Termin", "預約"], ["die", "Bewerbung", "求職申請"], ["das", "Gespräch", "談話"], ["der", "Lebenslauf", "履歷"], ["die", "Erfahrung", "經驗"], ["das", "Praktikum", "實習"], ["der", "Arbeitsplatz", "工作地點"], ["die", "Versicherung", "保險"], ["das", "Dokument", "文件"], ["der", "Bericht", "報告"], ["die", "Nachricht", "訊息"], ["das", "Projekt", "專案"], ["der", "Kontakt", "聯絡"], ["die", "Diskussion", "討論"], ["das", "Ergebnis", "結果"], ["der", "Unterricht", "課程"], ["die", "Strategie", "策略"], ["das", "Ziel", "目標"], ["der", "Fehler", "錯誤"], ["die", "Quelle", "來源"], ["das", "Medium", "媒體"], ["der", "Verkehr", "交通"], ["die", "Umwelt", "環境"], ["das", "Fahrzeug", "交通工具"], ["der", "Radweg", "自行車道"], ["die", "Anmeldung", "報名"], ["das", "Formular", "表格"], ["der", "Prozess", "流程"], ["die", "Bitte", "請求"], ["das", "Anliegen", "需求"], ["der", "Abschnitt", "段落"], ["die", "Struktur", "結構"], ["das", "Fazit", "結論"], ["der", "Nachteil", "缺點"], ["die", "Ursache", "原因"], ["das", "Ereignis", "事件"], ["der", "Kurs", "課程"], ["die", "Hausaufgabe", "作業"], ["das", "Feedback", "回饋"], ["der", "Plan", "計畫"], ["die", "Entscheidung", "決定"]],
    verbs: [["begründen", "說明理由"], ["vorschlagen", "建議"], ["beschreiben", "描述"], ["erklären", "解釋"], ["vergleichen", "比較"], ["zusammenfassen", "總結"], ["beantragen", "申請"], ["bestätigen", "確認"], ["korrigieren", "修正"], ["diskutieren", "討論"]],
    contexts: [["mit einem Beispiel", "用例子"], ["in einer E-Mail", "在電子郵件中"], ["im Gespräch", "在談話中"], ["kurz und klar", "簡短清楚地"], ["mit Gründen", "用理由"], ["für die Prüfung", "為考試"], ["im Alltag", "在日常中"], ["am Arbeitsplatz", "在工作地點"], ["in der Gruppe", "在小組中"], ["schriftlich", "以書面"]],
  },
  B2: {
    adjectives: [["abstrakte", "抽象的"], ["differenzierte", "有區分度的"], ["kritische", "批判的"], ["gesellschaftliche", "社會的"], ["politische", "政治的"], ["wirtschaftliche", "經濟的"], ["kulturelle", "文化的"], ["digitale", "數位的"], ["nachhaltige", "永續的"], ["langfristige", "長期的"], ["kurzfristige", "短期的"], ["zentrale", "核心的"], ["relevante", "相關的"], ["komplexe", "複雜的"], ["umstrittene", "有爭議的"], ["überzeugende", "有說服力的"], ["sachliche", "客觀的"], ["präzise", "精確的"], ["transparente", "透明的"], ["faire", "公平的"], ["innovative", "創新的"], ["technische", "技術的"], ["soziale", "社會的"], ["ökologische", "生態的"], ["rechtliche", "法律的"]],
    nouns: [["der", "Aspekt", "面向"], ["die", "Entwicklung", "發展"], ["das", "Argument", "論點"], ["der", "Datenschutz", "資料保護"], ["die", "Digitalisierung", "數位化"], ["das", "Angebot", "服務"], ["der", "Konsum", "消費"], ["die", "Nachhaltigkeit", "永續性"], ["das", "Verhalten", "行為"], ["der", "Beruf", "職業"], ["die", "Entscheidung", "決定"], ["das", "Studium", "學業"], ["der", "Wohnraum", "居住空間"], ["die", "Stadtentwicklung", "城市發展"], ["das", "Konzept", "概念"], ["der", "Zugang", "取得管道"], ["die", "Gesundheit", "健康"], ["das", "System", "系統"], ["der", "Beitrag", "貢獻"], ["die", "Teilhabe", "參與"], ["das", "Vorurteil", "偏見"], ["der", "Bericht", "報告"], ["die", "Information", "資訊"], ["das", "Bild", "圖片"], ["der", "Arbeitsmodus", "工作模式"], ["die", "Verantwortung", "責任"], ["das", "Team", "團隊"], ["der", "Fortschritt", "進步"], ["die", "Forschung", "研究"], ["das", "Risiko", "風險"], ["der", "Stil", "風格"], ["die", "Nominalisierung", "名詞化"], ["das", "Fazit", "結論"], ["der", "Einwand", "反對意見"], ["die", "These", "論點"], ["das", "Beispiel", "例子"], ["der", "Rahmen", "框架"], ["die", "Bedingung", "條件"], ["das", "Kriterium", "標準"], ["der", "Zusammenhang", "關聯"], ["die", "Maßnahme", "措施"], ["das", "Modell", "模式"], ["der", "Nutzen", "效益"], ["die", "Grenze", "限制"], ["das", "Potenzial", "潛力"], ["der", "Konflikt", "衝突"], ["die", "Perspektive", "觀點"], ["das", "Problem", "問題"], ["der", "Prozess", "過程"], ["die", "Lösung", "解法"]],
    verbs: [["analysieren", "分析"], ["bewerten", "評估"], ["begründen", "說明理由"], ["vergleichen", "比較"], ["hervorheben", "強調"], ["berücksichtigen", "考慮"], ["gewährleisten", "保障"], ["kritisieren", "批評"], ["relativieren", "相對化"], ["schlussfolgern", "推論"]],
    contexts: [["differenziert", "有區分地"], ["mit Beispielen", "用例子"], ["im Kommentar", "在評論中"], ["in der Diskussion", "在討論中"], ["unter Bedingungen", "在條件下"], ["langfristig", "長期地"], ["sachlich", "客觀地"], ["aus mehreren Perspektiven", "從多角度"], ["mit Einschränkungen", "帶有限制地"], ["überzeugend", "有說服力地"]],
  },
};

const frequencyVocabularyWords = ["ich","sie","das","ist","nicht","die","und","der","wir","was","ein","mir","mit","wie","den","mich","auf","dass","aber","eine","hat","hier","haben","für","sind","war","von","wenn","dich","ihr","nein","habe","bin","noch","nur","dir","sich","einen","uns","hast","dem","kann","gut","auch","schon","als","sein","mal","jetzt","ihn","dann","aus","meine","wird","mein","bist","doch","alles","weiß","keine","oder","nach","nichts","man","muss","werden","will","ihnen","geht","etwas","mehr","bei","also","bitte","immer","hab","warum","vor","los","können","wieder","sagen","machen","danke","sehr","alle","denn","mann","tun","ihm","zum","gehen","sehen","vielleicht","einem","wer","ihre","diese","euch","einer","komm","über","gibt","okay","wissen","deine","müssen","soll","werde","nie","wirklich","hey","kein","viel","weg","würde","tut","des","einfach","leben","hatte","zeit","weil","willst","kommen","dein","heute","kommt","wollen","damit","ganz","wäre","wollte","weißt","sicher","gesagt","frau","nun","bis","wurde","leid","kannst","macht","dieser","zurück","lassen","hallo","meinen","gott","seine","hätte","zwei","könnte","genau","waren","zur","lass","klar","morgen","leute","vater","schön","glaube","gerade","tag","gesehen","reden","wohl","liebe","sollte","sagte","unsere","jemand","geld","durch","keinen","mutter","raus","gemacht","paar","mach","passiert","dachte","besser","musst","wieso","sir","dieses","selbst","gehört","möchte","ohne","hör","her","sag","meiner","anderen","helfen","nacht","finden","diesen","gute","wirst","lange","natürlich","ach","meinem","gar","ins","sei","dort","weiter","geben","seit","gleich","sagt","recht","ihren","richtig","ordnung","vom","hören","sieht","davon","dafür","geh","diesem","wegen","hause","sollten","mädchen","hin","sollen","abend","haus","denke","viele","drei","deinen","freund","guten","unser","warte","machst","menschen","essen","angst","bleiben","zusammen","welt","unter","habt","schnell","andere","tot","getan","darf","erst","rein","stimmt","nehmen","kinder","eines","glauben","bringen","ganze","genug","brauchen","gegen","moment","junge","steht","sonst","musik","arbeit","seid","ihrer","fragen","herr","dabei","heißt","familie","warten","niemand","sofort","bevor","jahre","einmal","problem","sohn","wann","brauche","fertig","halt","allein","beim","sprechen","beide","gefunden","hatten","sache","hilfe","verdammt","jeder","warst","gern","konnte","darüber","halten","siehst","verstehe","jahren","kam","kind","wusste","wahr","seinen","dazu","bruder","daran","ihrem","denken","könnten","dank","würden","lieber","fall","deiner","sehe","egal","kennen","deinem","vergessen","frage","mache","komme","sage","mag","sieh","echt","gib","eigentlich","jeden","dad","gab","uhr","stadt","männer","baby","fahren","namen","bekommen","kopf","gehe","kleine","später","glück","letzte","freunde","all","darauf","ende","bald","dinge","meinst","toll","eins","minuten","vielen","bereit","weit","ahnung","seiner","bisschen","tür","auto","jungs","eure","augen","polizei","stehen","sterben","hätten","draußen","kenne","fast","runter","vorbei","treffen","gerne","dran","wurden","arbeiten","mom","verrückt","neue","ging","hinter","sorgen","einzige","jemanden","darum","tochter","braucht","idee","schwester","drin","ruhig","sah","ganzen","spät","ziemlich","solltest","name","sogar","kurz","kerl","frauen","liegt","suchen","finde","woher","lang","job","keiner","seinem","hört","verstehen","spielen","überhaupt","teufel","verstanden","verloren","große","hand","grund","jahr","kommst","mama","ruhe","gewesen","tod","stunden","hoffe","denkst","oben","gestern","versuchen","art","letzten","schatz","endlich","nimm","etwa","erzählt","läuft","schwer","anders","miss","musste","fünf","wasser","lässt","erste","versucht","gekommen","geschichte","wenig","holen","bedeutet","nett","wahrheit","woche","bringt","deshalb","welche","bestimmt","hoch","alter","sagst","schau","land","zimmer","wagen","vier","gefallen","spaß","niemals","schuld","getötet","wollten","verlassen","zeigen","beste","ernst","unserer","denen","ort","bleibt","würdest","manchmal","glaubst","seite","lasst","zwischen","eben","während","spiel","nehme","ersten","guter","chance","freundin","krieg","gefällt","kleinen","erzählen","anderes","tage","entschuldigen","wichtig","gehst","allen","bett","sachen","the","schlecht","schule","entschuldigung","wort","john","hättest","wären","typ","schlafen","euer","captain","gesicht","falls","neuen","bloß","unten","teil","beiden","mensch","kleiner","stellen","oft","sorge","gedacht","tust","trinken","einige","dies","ding","unseren","kriegen","blut","ehrlich","eltern","scheint","herz","jack","glücklich","alte","alt","bleib","wiedersehen","frei","wen","drauf","möglich","irgendwie","reicht","fest","besten","kaum","irgendwas","klingt","platz","brauchst","rede","papa","falsch","sondern","alten","nummer","früher","jungen","wohin","außer","früh","setzen","zuerst","wahrscheinlich","dürfen","jede","telefon","tue","kennst","willkommen","plan","großen","retten","hierher","wär","bring","fehler","wollt","dollar","zehn","allem","pass","nächste","stunde","hände","gegeben","menge","langsam","bereits","wartet","sechs","lieben","meines","büro","nächsten","gebe","wochen","ruf","schaffen","leider","scheiß","hölle","trotzdem","doktor","tja","new","voll","film","überall","hund","geworden","direkt","wolltest","tat","denkt","schiff","neues","wem","könig","danach","funktioniert","hattest","lernen","deswegen","wow","nennen","feuer","laufen","alleine","erinnern","völlig","kleines","könnt","stelle","kumpel","verlieren","probleme","spricht","kaffee","luft","fand","entschuldige","ziehen","verschwinden","könntest","seht","aufhören","eigenen","richtige","unserem","suche","zwar","groß","hol","buch","krank","fühle","jedes","verstehst","wert","arzt","froh","versuche","straße","rufen","heiraten","super","sam","lebt","gutes","lasse","onkel","total","gebracht","party","erklären","spielt","wahl","vertrauen","damals","tagen","leicht","nachdem","gegangen","gefühl","kaufen","geschafft","typen","interessiert","möchten","halte","hält","glaub","irgendwo","stück","genauso","kennt","genommen","zukunft","weniger","cool","licht","getroffen","himmel","nachricht","drüben","passt","sagten","kümmern","laut","vergiss","angerufen","sitzen","daß","erde","großer","schlüssel","rest","passieren","eher","gefragt","gefängnis","opfer","körper","solche","mist","findet","schreiben","böse","gesprochen","versuch","vorstellen","wovon","sobald","nochmal","herren","waffen","wohnung","weh","heißen","krankenhaus","bringe","höre","millionen","klasse","hart","worden","sinn","außerdem","verletzt","ändern","erfahren","tragen","wenigstens","vorsichtig","daddy","stolz","stark","fällt","möchtest","leuten","besonders","schöne","schicken","person","schätze","solange","länger","großartig","lacht","anrufen","stand","redest","fühlen","erwartet","boden","boss","stimme","glaubt","still","sicherheit","setz","mund","kämpfen","wisst","lachen","hörst","zeug","lustig","umbringen","sollst","hasse","schlimm","unglaublich","wärst","laden","führen","gestorben","schauen","meinung","lesen","mörder","frank","ähm","geschehen","geschäft","idiot","verzeihung","fliegen","zeig","team","general","mike","aufs","york","vorher","schluss","schneller","liebt","verdient","mögen","meisten","denk","umgebracht","perfekt","versprochen","handy","hinten","monate","erinnere","acht","arbeitet","fallen","rufe","nötig","heraus","tages","unmöglich","liebling","charlie","tatsächlich","folgen","bitten","behalten","nähe","arbeite","joe","verdammte","plötzlich","lebens","hole","tisch","michael","hörte","jemals","liegen","verkaufen","gefährlich","anfangen","bekommt","machte","hotel","hilft","werdet","meister","kampf","antwort","konnten","geschickt","jedem","obwohl","sieben","komisch","gewinnen","ihres","bezahlt","you","voller","unterwegs","dumm","ärger","bild","george","neu","bezahlen","dagegen","seien","starb","tom","monaten","leiche","niemanden","auge","arschloch","verheiratet","peter","zieh","nimmt","gerettet","agent","traum","entscheidung","schlimmer","regeln","fenster","fangen","fort","ständig","findest","gefahr","absolut","mary","augenblick","bescheid","rum","gedanken","werd","ziel","benutzt","bewegung","jemandem","wünschte","worte","kamen","welcher","zahlen","anfang","legen","erinnerst","anwalt","fahr","sitzt","hilf","offen","schönen","monsieur","müsste","arme","bier","fürs","partner","klein","david","klappe","süß","herum","finger","ehe","rolle","ließ","gleiche","monat","hochzeit","max","führt","paris","wach","wozu","arm","geschrieben","chef","benutzen","informationen","erledigt","hoffentlich","müsst","fühlt","tanzen","ansehen","darfst","zuhause","wunderbar","hältst","reise","gewonnen","dame","irgendwann","chffffff","alex","steckt","jedenfalls","schreit","tolle","rüber","tschüss","nennt","raum","heiß","foto","kalt","paul","irgendetwas","weile","bisher","minute","unbedingt","zug","sekunden","wofür","erzähl","nen","beweise","nahm","aller","freut","seele","schießen","müde","dauert","magst","harry","brief","gelernt","sucht","bekannt","weitere","unfall","dahin","kontrolle","beispiel","lady","dasselbe","herzen","schlagen","wütend","weise","damen","darin","gottes","holt","fehlt","vorsicht","heiße","beweisen","gehabt","zumindest","vermisst","hübsch","kriegt","verbindung","tief","richtung","lage","sowieso","kraft","normal","lauf","ehre","stell","geschenk","bar","tasche","gelesen","gekauft","wussten","gestohlen","hunger","leg","lügen","beziehung","ben","verschwunden","steh","nächstes","gearbeitet","preis","witz","meinte","liste","geist","neben","gesucht","firma","süße","rücken","schrecklich","letzter","verliebt","öffnen","redet","boot","seltsam","versteckt","fürchte","verschwinde","erwischt","verkauft","tante","erwarten","pferd","wunder","sauer","vermutlich","näher","major","jung","majestät","aussehen","ans","and","links","großes","welches","beschützen","geboren","erreichen","punkt","kindern","kirche","verraten","selber","befehl","colonel","fährt","zieht","geburtstag","haut","wette","reich","sekunde","fahre","schwöre","geredet","james","madame","eigene","zeiten","traurig","anruf","nachrichten","frieden","karte","güte","euren","diesmal","schade","persönlich","kriege","stirbt","bleibe","verändert","sonne","lieb","nämlich","letztes","bekam","ruft","professor","gericht","nase","ewig","singen","bank","beschäftigt","computer","yeah","toten","weihnachten","offensichtlich","naja","henry","gefühle","fuß","show","überraschung","geheimnis","fbi","kontakt","gold","drogen","regierung","wein","kriegst","ermordet","fotos","entfernt","geschlafen","manche","erledigen","ran","gegenüber","schlaf","lust","wunderschön","witzig","nick","zerstört","übrigens","willen","heim","richtigen","deines","namens","zeigt","geliebt","gehören","brachte","herrn","blick","besuch","schlechte","bewegen","haare","antworten","präsident","sagtest","hoffnung","stecken","lebe","rechts","interessant","entscheiden","miteinander","meint","liebst","indem","bleibst","kümmere","wohnen","weder","möglichkeit","kaputt","bekomme","flugzeug","vergangenheit","anderer","zweite","armee","jim","tee","entweder","weiss","don","detective","aufhalten","stellt","verspreche","überrascht","sauber","hau","mark","schlag","sheriff","untertitel","setzt","frag","vaters","nervös","gesellschaft","verstecken","schuldig","hals","schützen","besuchen","passen","überleben","erhalten","teilen","gebäude","schicksal","zeichen","richter","besorgt","küche","lief","vergnügen","wüsste","volk","lhr","herausfinden","königin","soldaten","feiern","situation","lag","gelassen","allerdings","soweit","gefahren","verstand","bord","schönes","jimmy","billy","angefangen","lee","fühlst","bob","mussten","rat","worauf","gebeten","tony","kamera","achtung","lieutenant","ganzes","schuhe","sarah","glückwunsch","niemandem","gibst","statt","übernehmen","gegend","wald","nimmst","danny","erkennen","glas","falsche","verantwortlich","jesus","stöhnt","herein","kleid","zerstören","jawohl","london","gegessen","abendessen","gesetz","gemeinsam","geholfen","erster","wohnt","schritt","guck","nahe","aussieht","beginnen","dachten","band","ungefähr","aufgabe","neun","furchtbar","drinnen","zuvor","charles","freue","amerika","übrig","spur","falschen","sergeant","melden","helfe","werfen","bill","haltet","erinnert","hängt","freude","ehemann","erschossen","verzeihen","schwein","monster","entschieden","mission","verdammten","brauch","gewusst","vorne","stopp","übel","schlampe","schöner","adresse","unsinn","messer","gesund","respekt","pro","leisten","davor","richard","bedeuten","ball","mitnehmen","gespielt","schwierigkeiten","hälfte","kannte","stehe","maria","planeten","schwanger","gruppe","anna","verhaftet","deal","seines","irgendwelche","händen","versteht","drehen","eis","danken","erfolg","zufrieden","schließen","besorgen","wochenende","worüber","stimmen","nehmt","martin","witze","beine","verbrechen","bericht","nachts","eurer","prinzessin","schmerz","klingelt","position","echte","gleichen","fernsehen","wünsche","schließlich","gefangen","schätzchen","seh","schwierig","angebot","nah","jane","gewartet","kümmert","ring","rennen","lied","eier","welchen","sorry","fantastisch","schaut","hielt","falle","drink","insel","dauern","daher","zufällig","dorf","clark","bewegt","mitten","bullen","feind","einverstanden","neuer","bauen","trägt","hängen","freunden","deren","halb","verpasst","sprach","leise","armen","wusstest","fanden","unternehmen","träume","schläft","kostet","spiele","unseres","entlang","johnny","versprechen","tiere","freiheit","verdienen","aha","unterhalten","eingeladen","schaden","genannt","beenden","ray","geändert","thomas","lächerlich","geschlagen","park","schätzen","männern","beginnt","ehren","größte","energie","fleisch","besonderes","besteht","reichen","robert","zeitung","worum","nachgedacht","betrunken","sowas","patienten","gespräch","leiden","taxi","tötet","see","unterschied","wind","singt","schreien","daniel","sahen","wand","bus","lhre","angriff","verhalten","loch","interesse","treten","quatsch","trifft","polizist","blumen","neuigkeiten","bringst","flasche","rief","schuss","fassen","meer","konntest","schafft","maschine","spreche","bein","eddie","bekommst","verbringen","bücher","blöd","frühstück","tommy","meter","bilder","aufpassen","claire","dessen","muß","freuen","engel","offenbar","gelegenheit","fang","lüge","ohren","angetan","beeil","brechen","brüder","zeitpunkt","keinem","ecke","brücke","druck","mitgebracht","seufzt","date","haufen","oma","auftrag","leer","entkommen","bobby","weißen","lösung","wart","pause","irre","gestellt","keller","gebrochen","weinen","nutzen","wünschen","fragt","maul","verantwortung","schloss","hut","lächeln","ryan","red","grad","zweiten","hinaus","mitkommen","vorhin","fahrt","gemeint","ernsthaft","gebaut","bombe","hasst","versteh","kosten","zeige","traf","eigenes","haar","fragte","jason","operation","befehle","schmerzen","erklärt","steve","dach","folge","gelaufen","schwarze","dankbar","gehirn","töte","mädels","mut","heilige","laura","tier","system","mannes","wahnsinn","nee","rose","club","geschlossen","hintern","thema","fiel","gehalten","dorthin","urlaub","steig","vorwärts","überprüfen","besseres","beweis","baum","gebt","funktionieren","anscheinend","lehrer","hoffen","bessere","isst","nachmittag","nem","risiko","chuck","knast","entschuldigt","gilt","held","daraus","erstes","fräulein","rachel","prima","brauchte","gewalt","dean","liebes","schaffst","nachdenken","tor","erfahrung","pläne","jagen","katze","runde","deutsche","schwanz","taten","lord","dringend","commander","großvater","sommer","gezeigt","hinterlassen","gewissen","getrunken","wahre","luke","kunden","kate","zeugen","geplant","amanda","erreicht","stören","stein","atmen","hose","weiße","sprichst","größer","schickt","city","prinz","behandelt","tote","überlegen","karten","restaurant","welchem","roger","natur","carter","emily","mami","verschwindet","lautet","streit","küssen","sprich","längst","fängt","drüber","gingen","erlaubt","einzigen","bad","schmeckt","kugel","normalerweise","schwarzen","rauf","flug","beruhigen","walter","halbe","dan","geschieht","einiges","entdeckt","morgens","schlechter","vollkommen","gelogen","verfolgt","college","weiteren","chris","louis","schwert","hunde","steigen","verdammter","dürfte","riecht","labor","bat","tim","arthur","mindestens","fisch","eurem","füße","stehst","erschießen","kuchen","versuchte","zustand","wunsch","gäste","erwähnt","farbe","van","einigen","zufall","garten","junger","autos","abgesehen","fair","vertraut","koffer","hieß","kurs","wirkt","idioten","netter","seitdem","angegriffen","geschichten","wahnsinnig","ähnlich","lily","aufgeben","england","entführt","mistkerl","solchen","ner","geschossen","lager","besprechen","reihe","polizisten","vogel","legt","strand","amerikaner","schwarz","fern","fick","scherz","san","erzählte","wichser","jake","langweilig","womit","geschäfte","kapiert","nachher","verlangt","schlägt","überzeugt","irgendjemand","rot","soldat","vorbereitet","geschah","reisen","termin","gang","stehlen","rechte","rache","bemerkt","frankreich","stört","radio","beruhige","pferde","vertrag","arbeitest","dienst","zählt","fragst","wesen","bürgermeister","emma","fluss","woran","geblieben","durcheinander","ted","nette","test","mister","dadurch","direktor","wichtiger","kevin","scott","karriere","akte","erinnerung","großmutter","erzähle","lösen","bravo","griff","verfolgen","zweifel","such","sprache","nerven","officer","andy","langer","ziehe","entlassen","zweimal","abholen","washington","kollegen","doc","fass","szene","robin","scheinen","bösen","schaffe","pflicht","wache","neulich","beeilen","knie","alice","lauter","spannende","unschuldig","folgt","schutz","weshalb","geheiratet","woanders","wurdest","kuss","verhindern","erklärung","video","rom","klug","kräfte","verlangen","außerhalb","opa","selbstverständlich","aufstehen","hassen","pete","gebrauchen","geglaubt","milch","trink","gefeuert","erinnerungen","müssten","suchst","fährst","kochen","schwach","schreibt","schulden","hinein","simon","grenze","braut","gebraucht","peinlich","klappt","geheimnisse","joey","aufmerksamkeit","form","umsonst","kennenzulernen","überlebt","nirgendwo","meilen","einfacher","blöde","mond","ergibt","daten","merken","schande","fühlte","jenny","sieg","satt","blödsinn","adam","lisa","pfund","handeln","lois","enden","warm","raten","übersetzung","kunst","kapitän","desto","einsatz","schweigen","krankheit","toller","schatten","wachen","tatsache","eric","stock","chief","hingehen","verboten","gäbe","anzug","leichen","high","beendet","freitag","million","verflucht","dunkel","geb","enttäuscht","klopfen","spuren","dreck","seiten","mühe","gezogen","brian","kontrollieren","knochen","schick","getrennt","programm","grab","ebenso","trage","nachbarn","bieten","bestes","elizabeth","fuhr","verlässt","freundlich","dennoch","rauchen","dick","stuhl","dreh","bester","schicke","vergeben","ausgehen","behandeln","trotz","gast","ändert","passierte","toilette","annehmen","herzlichen","hexe","erwachsen","jerry","pistole","saß","dreht","aussage","liebte","street","genießen","eifersüchtig","derjenige","teuer","leo","zähne","beobachtet","gentlemen","wählen","helft","fliegt","theater","regen","feinde","william","erlauben","zulassen","schnappen","komplett","panik","flughafen","bewusst","deutschen","voraus","sterbe","solltet","begleiten","einander","fred","erlebt","weiterhin","stärker","fahrer","konzentrieren","streiten","angeht","selben","star","überzeugen","alkohol","übersetzt","verrückte","lch","king","begann","angenommen","weitermachen","echter","jackson","post","mitgenommen","botschaft","ideen","fehlen","aufgeregt","selbstmord","dumme","zurückkommen","irgendein","magie","phil","schlage","handelt","treffe","untersuchen","flucht","verliert","irgendeine","gegenteil","betrifft","scharf","gehofft","kennengelernt","schlimmste","projekt","trottel","immerhin","mehrere","erwarte","mochte","schwimmen","zählen","innerhalb","matt","blind","schwestern","code","alan","schlau","absicht","barry","spielst","zuletzt","oliver","englisch","ohr","verletzen","song","schüler","schien","gewinnt","älter","merkwürdig","judy","vermisse","größe","tritt","trauen","präsidenten","trick","harvey","doug","roten","überlegt","größten","sonntag","zwölf","vorstellung","schrieb","reinkommen","killer","unterstützung","antun","rechnung","dieselbe","verändern","möglicherweise","definitiv","locker","vincent","ums","abends","frisch","kohle","fing","cousin","familien","einsam","lebendig","heiligen","knapp","ebenfalls","überprüft","artikel","gesetzt","jederzeit","kompliziert","spüren","signal","amy","stich","kino","probieren","tode","wundervoll","tanz","geöffnet","kerle","begraben","prozent","stoppen","hoheit","riesen","rote","zugang","liest","vorn","wichtige","aufmachen","kelly","erlaubnis","grace","big","story","madam","leichter","halben","filme","priester","herauszufinden","packen","dritte","inzwischen","larry","presse","sitze","machten","geklaut","helden","susan","geduld","bühne","reparieren","usa","gerechtigkeit","fälle","selten","anrufe","unterschreiben","julia","drücken","mrs","lügner","endet","dave","medizin","schreibe","verhaften","prozess","samstag","amen","motor","marie","abhauen","chaos","schönheit","beinahe","lebst","tolles","anhalten","fremden","hof","akzeptieren","norden","ärzte","anziehen","dingen","umgehen","bauch","gesamte","hübsche","ertragen","kiste","brennt","teile","deckung","landen","berg","straßen","aufgenommen","gerufen","untersuchung","alarm","blieb","vertraue","extra","entspann","beobachten","eindruck","tschüs","babys","wehtun","zog","iss","herrgott","echten","springen","nackt","existiert","befreien","gerät","montag","gezwungen","perfekte","erzählst","bastard","interessieren","schlechten","hank","steigt","carl","gekriegt","fliehen","trug","freundschaft","rate","papiere","abgeschlossen","schnauze","beruf","gebiet","jeff","jedoch","beten","verbunden","sprachen","verräter","wichtigste","prost","brust","aufgehört","kleider","jacke","bestellt","herkommen","wild","nenne","angesehen","zuhören","trennen","schlafzimmer","vorschlag","meins","gift","ton","vermissen","angekommen","beantworten","deutlich","träumen","verwirrt","akten","riskieren","victor","find","erkannt","beerdigung","müll","weisst","möge","stellte","mitte","erleben","geburt","decke","wege","schritte","gibts","gemeldet","hilfst","mittagessen","weint","vernichten","rock","chicago","ellen","crew","roy","türen","gewehr","elena","arbeitete","spiegel","hauen","geraten","dritten","ross","julie","wetter","schwul","regel","befindet","einheit","german","armer","gucken","anstatt","champagner","gründe","strafe","smith","öfter","anne","zelle","langen","altes","ruiniert","jonathan","kleidung","gras","kenn","agenten","herausgefunden","annie","rechten","brot","berlin","erfreut","lügt","nehm","harte","staaten","station","gaben","hinterher","verpassen","geholt","jesse","hemd","trinke","klären","praktisch","theorie","zunge","notfall","besseren","winter","versuchst","dahinter","schwere","feuern","lucy","schießt","anführer","schief","blau","bestens","wartest","gehts","morgan","unrecht","leck","wonach","entwickelt","bedeutung","strom","krebs","gemein","wessen","minister","lhnen","quelle","zahl","schiffe","schüsse","bricht","talent","spitze","fernseher","treiben","ausgezeichnet","tatort","möglichkeiten","trinkt","esse","cop","details","täter","wahren","dieb","offiziell","dienen","westen","entscheidungen","dauernd","geschmack","gegenseitig","gewählt","charlotte","pech","verteidigen","schauspieler","personen","überlassen","publikum","trägst","wechseln","begegnet","betrogen","besucht","vertrau","europa","carrie","patrick","deutschland","süßer","loswerden","melde","maggie","bestätigt","gas","sturm","setze","briefe","null","penny","schlafe","wirken","geführt","starten","götter","festhalten","geheim","übergeben","cia","abteilung","papier","wetten","gefolgt","verschiedene","gleichzeitig","genie","hungrig","inspektor","zwingen","atmet","kuh","unterstützen","geworfen","verlor","süden","pater","menschheit","versteck","tötete","fähigkeiten","beruhigt","rechtzeitig","streng","sendung","gelebt","treppe","kim","richtiger","aufnehmen","wolf","öffnet","dämon","wut","schlange","medikamente","geschenkt","nenn","gelegt","anfassen","pizza","schlechtes","hütte","mantel","behauptet","kilometer","beeilung","angeblich","reiten","helen","mittag","gewarnt","wohne","las","dunkelheit","spazieren","angel","hiermit","schließt","phoebe","vieles","erfüllt","tausend","sack","eindeutig","unterhaltung","gründen","zugeben","mittel","explosion","gefangenen","taylor","frische","verdächtigen","neugierig","leitung","kennenlernen","fliege","lebte","menschliche","anderem","auseinander","fressen","beides","stoff","spüre","eilig","stammt","vorgestellt","linda","welch","wichtiges","gehörte","mhm","glaubte","oberst","schrank","fremde","gnade","chloe","entspannen","virus","schläfst","einladung","krieger","vernünftig","fein","greifen","whoa","kyle","schickte","per","mitglied","einziger","umzubringen","zurückkehren","feld","mexiko","erschaffen","information","hergekommen","beweg","stärke","vermögen","verbracht","gewisse","waschen","howard","staat","geister","behaupten","schrei","würdet","vögel","warnen","albert","chancen","treibt","nannte","vermute","mitternacht","jones","freundinnen","lecker","klinik","dicht","befinden","ließen","bürger","verursacht","hammer","klang","internet","aufregend","grenzen","politik","superman","zurecht","besitz","cops","eingesperrt","irren","kommando","schlug","krankenwagen","love","öffne","karen","richten","mademoiselle","erfunden","schnee","fühl","behalte","beschützt","punkte","entfernen","abgehauen","geträumt","stefan","dämonen","tränen","erfolgreich","volle","wilson","caroline","höher","happy","brille","musstest","heimat","terry","liebsten","bye","leiter","sean","kauf","spinnst","werk","cent","schlacht","beziehungen","abgemacht","schreie","hmm","bestätigen","erschreckt","offizier","that","sara","affäre","empfangen","zweck","kämpfe","ergeben","china","fange","häuser","verliere","gedanke","tausende","heutzutage","gefühlt","schnitt","carlos","harold","lebend","real","holz","kaiser","spielte","begonnen","ziehst","gelandet","scheidung","bart","beschlossen","klo","riechen","vergisst","begeistert","durchs","geil","nieder","erkläre","schreckliche","beeindruckt","vince","aufgegeben","aufgrund","momentan","solch","meistens","stress","sterne","heilen","soviel","kannten","stattdessen","aye","dinger","stimmung","bulle","aufgefallen","kämpft","geräusch","künstler","wachsen","verurteilt","himmels","tyler","urteil","schweine","nettes","house","verlust","verließ","wirf","wenige","willie","schulter","kalifornien","lernt","beigebracht","normale","anbieten","verwenden","gratuliere","fluch","rick","übers","grün","unterricht","dachtest","verarschen","gewöhnt","anklage","tollen","lippen","fett","lege","feigling","achten","gary","erfährt","gewohnt","jessica","äußerst","einladen","käse","aufwachen","verfügung","uniform","zusehen","gesundheit","abenteuer","hosen","kurze","scheck","täglich","fresse","übernehme","wiederholen","bestellen","freiwillig","cole","universum","zeuge","west","marshall","fähig","revier","reifen","mum","führe","durchgemacht","tests","führte","schenken","schädel","realität","april","albern","brav","schwerer","jagd","versagt","truck","steckst","geschenke","sicherlich","öffentlichkeit","merkt","verbrecher","maske","verstärkung","liefern","starke","grunde","gordon","würd","verschwand","schulde","russen","führer","gemerkt","ciao","loslassen","berichten","verabschieden","antrag","schieß","abby","benehmen","verdacht","hübsches","schreibtisch","vampir","rory","probe","schaff","verzeih","patient","geküsst","ertönt","nahmen","zahlt","vorbereiten","verbrannt","verdammtes","frankie","informiert","einziges","zucker","stinkt","schnappt","schreib","standen","klamotten","heil","besitzer","marcus","tess","drum","tasse","hinweis","verteidigung","lügst","lies","magen","enterprise","michelle","beeilt","tunnel","einst","behandlung","serie","applaus","markt","korrekt","besessen","bewahren","pack","gekämpft","black","angreifen","tiefer","huh","truppen","kommandant","osten","elf","beeindruckend","besitzt","heut","clever","verrückten","freien","hass","antworte","posten","schneiden","sammeln","gesteckt","wissenschaft","ursache","gewiss","bereich","catherine","meinetwegen","senator","ausziehen","verzweifelt","jess","anteil","stets","ritter","viertel","roman","pünktlich","erfüllen","kauft","molly","basis","eva","schock","empfang","wiederhole","wünscht","besondere","titel","stil","fingerabdrücke","einfluss","anweisungen","zahle","shield","opfern","blaue","sparen","weiteres","gehörst","farm","erstaunlich","schwachsinn","miete","verwandelt","daneben","klaus","bereiten","wüste","prüfen","gabe","hundert","erscheinen","laß","besiegen","verpiss","umständen","angelegenheit","landes","dienstag","folgendes","fürchten","mordes","nennst","angestellt","training","aufgetaucht","rausfinden","ächzt","rauskommen","planet","suppe","erwischen","sitz","johnson","vorteil","for","rosa","tour","amerikanische","schönste","rufst","berührt","französisch","gouverneur","angeles","kaufe","stern","gedächtnis","wirklichkeit","bestraft","kreis","reine","edward","schlimmes","bestehen","jeannie","erscheint","staatsanwalt","ewigkeit","störung","hässlich","lauft","angezogen","half","sollt","martha","tiger","zigarette","mutig","ausruhen","andrew","linken","hauptmann","umstände","not","unglück","eng","white","lucas","üben","wissenschaftler","gelöst","reaktion","morde","dusche","mitarbeiter","your","bedroht","gehöre","befreit","stöhnen","reagiert","identität","rund","texas","fieber","hirn","leiten","donnerstag","leonard","unheimlich","mulder","jahrhundert","irgend","diener","bruce","extrem","ausweis","sicht","sport","juden","studiert","angelogen","schaue","little","sally","text","earl","nebenan","todd","lektion","mäuse","staub","sophie","kugeln","dutzend","ratte","mitleid","testen","auftritt","gegner","joseph","verdienst","langsamer","wunde","linie","bedrohung","bauer","kurzem","fische","einkaufen","kreuz","afrika","begangen","nachsehen","junior","bäume","leidenschaft","geliebte","bereuen","spieler","berge","verwendet","steuern","gekümmert","voran","wieviel","barney","graf","verabredung","verlasse","überfallen","donna","umdrehen","damon","kilo","diego","negativ","schild","tanzt","verbrennen","gefreut","penner","blauen","jay","stücke","angela","kühlschrank","identifizieren","lehrerin","francisco","kameras","zentrale","jäger","josh","wayne","wenden","holst","suchte","start","füßen","unglücklich","frohe","sand","pfarrer","plus","nancy","brachten","zauber","berühren","rückkehr","hafen","indianer","miller","verschwenden","untersucht","königs","jean","lese","stahl","hättet","affen","worten","kindheit","gewollt","vermeiden","fabrik","aussagen","wunderbare","grandpa","miststück","verrückter","lane","jungfrau","einfache","nate","laufe","reingelegt","seltsame","heiratet","angenehm","daheim","planen","klauen","geruch","marty","klingen","tina","nächster","hörten","jackie","trafen","ungern","abgelehnt","erstens","abmachung","appetit","miami","zeigte","fan","hohen","alf","ladys","sms","verkauf","jamie","verbergen","sorgt","karl","sohnes","berühmt","aussteigen","bonnie","ginge","reingehen","durfte","korrektur","wirft","titten","betreten","todes","one","doctor","blöden","miles","rausholen","hohe","aufnahme","holmes","hübscher","vegas","manager","stellung","höhle","schokolade","angeboten","befreundet","weib","ausgerechnet","walker","beibringen","nelson","belohnung","seelen","steine","garage","scheißkerl","gestört","cooper","ruhen","pillen","gepäck","carol","norman","zoe","amerikanischen","telefonieren","heirate","erkenne","funk","grüß","hurensohn","mögliche","spring","uni","scheinbar","fakten","informieren","jugend","feier","wenigen","söhne","benzin","nix","vampire","erkennt","sicherer","zigaretten","dummes","mauer","erneut","flügel","schluck","hierbleiben","abschluss","christus","bezahle","böses","dummkopf","gerüchte","eingestellt","weitergehen","technik","ali","bezweifle","piper","over","gekostet","anzeige","wohnst","hans","ergebnis","bedingungen","brad","aufzuhalten","versprich","verdiene","geschnappt","francis","eile","innen","italien","einig","verhandeln","weswegen","nützlich","inneren","gentleman","felix","vergesse","dunkle","warnung","gemeinde","diamanten","wächst","gewöhnlich","seil","bär","euro","großartige","beth","ware","traurige","persönliche","figur","time","roboter","anschauen","kürzlich","material","paula","käme","stellst","bereitet","einfallen","käfig","fantasie","brach","satz","kommissar","exzellenz","schuldest","nass","rächen","womöglich","begrüßen","lou","davis","überraschen","menschlichen","repariert","führung","gestanden","jacob","schütze","störe","nina","filmen","jobs","maschinen","unterlagen","palast","graben","kette","auftauchen","interessante","wovor","springt","terroristen","stan","bekämpfen","lärm","flehe","aufgewachsen","arbeiter","größere","humor","betrachten","organisation","widerstand","bergen","studio","hausaufgaben","vögeln","bescheuert","weggehen","teller","original","revolution","hitler","mädel","verbinden","nathan","ermittlungen","steck","wäsche","rätsel","besonderen","hunderte","versetzt","bibel","heiliger","reiß","kopie","besitzen","zeitungen","zurückgekommen","süßes","barbara","ungewöhnlich","höhe","geschaffen","beschreiben","ausgesucht","notwendig","dunklen","ignorieren","toter","deck","narr","scheißegal","höchstens","übersehen","geirrt","darunter","außen","einzig","stirbst","lhren","spielchen","girl","fahrrad","wilde","jordan","bequem","rauch","verschiedenen","kamst","betty","pool","hubschrauber","wüssten","erstmal","kollege","vernichtet","gesichter","derselbe","hattet","konto","freie","casey","haken","munition","sünde","militär","gefasst","anzeichen","geklappt","hintergrund","erwähnen","tipp","reißen","keins","genial","berichte","kram","schnapp","solle","randy","umziehen","zunächst","keinerlei","typisch","bietet","leb","technologie","ruinieren","jünger","poirot","umso","starben","rette","triffst","unhöflich","safe","anzurufen","universität","mai","heben","koch","derselben","katastrophe","male","olivia","prüfung","brown","gesetze","meeting","versicherung","getragen","ehefrau","mitmachen","tauschen","ergebnisse","boston","reg","einstellen","reagieren","gefehlt","verwandeln","gedauert","senden","blair","reporter","abgeben","parker","anhören","bibliothek","japan","hinsetzen","hannah","serena","motiv","paige","schalten","derek","gewöhnen","lernte","vereinigten","gewicht","zweiter","badezimmer","schieben","dreimal","weich","echtes","zweitens","drachen","bahnhof","erschöpft","genauer","verlange","spanisch","verrat","hexen","live","legende","taub","freu","konzert","hopp","wiederzusehen","doppelt","last","vergleich","böser","herzlich","monica","taschen","genügt","besucher","spanien","großzügig","teddy","hauses","leihen","scheiden","einstellung","köstlich","watson","einheiten","wichtigen","warne","russland","angeschossen","sammy","pierre","sklaven","laune","gesamten","stille","asche","geflogen","spion","what","aaron","weihnachtsmann","hervorragend","can","verärgert","puppe","überfall","unwichtig","santa","linke","übung","buffy","franzosen","wehgetan","schwäche","couch","cousine","grant","atme","irgendeinem","unterstützt","oscar","ausdruck","pleite","beleidigt","knopf","stop","schlimme","beweist","katie","dramatische","heutigen","leere","island","shane","daisy","trinkst","heimlich","eingehen","rad","greift","mächtig","williams","sinnlos","versaut","netz","atem","anstellen","milliarden","flotte","umgebung","mitbringen","beteiligt","dunkeln","entwickeln","schämen","erwachsene","zack","durchsuchen","hollywood","rollen","vergesst","tricks","plätze","gefangene","sünden","sender","verlass","räumen","lerne","rettet","hinweise","ausreden","alexander","mommy","diejenige","nächte","herrscht","bud","jahres","dna","romantisch","flüstert","drück","jeremy","bedanken","verabredet","pilot","colt","nigger","reizend","grade","stanley","leib","stecke","scheisse","ärztin","vergewaltigt","mußt","lieferung","botschafter","studieren","köpfe","duschen","kopfschmerzen","knarre","sekretärin","phase","handschellen","lewis","versehen","bande","treu","positiv","meiste","museum","albtraum","margaret","verlobt","besiegt","existieren","könne","proben","beschissen","gewinne","personal","christian","bewaffnet","fällen","wecken","wirkung","kurt","connor","rebecca","therapie","travis","amüsieren","ordentlich","weglaufen","aufgewacht","nähern","decken","sinne","leutnant","zauberer","hogan","bittet","ankunft","klopft","abstand","bewusstsein","nation","kontrolliert","treffer","abnehmen","ratten","anwälte","tempel","vergiftet","kunde","august","wunden","unangenehm","ausrüstung","segen","präsentiert","schließ","kehle","krone","garantiert","durchsucht","president","tracy","verfluchte","bestimmten","clay","ladies","ladung","beinen","hell","kent","kapitel","chase","benutze","alibi","ziele","bestie","gus","nirgends","wohnzimmer","beute","bau","brennen","lex","durst","logan","schwarzer","schmutzig","liebhaber","ersetzen","juli","verfahren","kirk","stiefel","inspector","allzu","camp","dürft","orten","hitze","spielzeug","gloria","wolle","knurrt","meldet","rita","zone","trocken","lincoln","schreibst","audrey","quinn","probier","kids","unterschrieben","heulen","entschlossen","paket","gefiel","bekamen","netten","geheime","jennifer","aktiviert","ausweg","hinweg","schmuck","ausgang","wunderschöne","zurückkommt","ann","illegal","ferien","persönlichen","geiseln","segne","normaler","steuer","aufgepasst","murphy","raumschiff","dummen","weißer","ausbildung","klavier","hauptsache","admiral","entgegen","fasse","strecke","julian","version","hilfreich","schweren","jahrelang","leeren","küste","baron","behörden","grüße","geklärt","bruders","kaufte","stone","puls","blue","flur","denselben","rettung","widerlich","parkplatz","katzen","laster","sozusagen","mittwoch","unschuldige","abwarten","grandma","florida","grünen","könntet","aufnahmen","vision","schauspielerin","passe","sing","glückliche","highschool","friedhof","irrtum","klienten","nervt","leidet","reverend","trainieren","gegenwart","zurückbringen","herman","protokoll","studenten","durchaus","grausam","höchste","verwickelt","schmecken","klappen","apropos","liz","alfred","ansonsten","wade","missverständnis","mitglieder","motorrad","mickey","blicken","glücklicher","hübschen","dicke","gewünscht","gejagt","diejenigen","diskutieren","pinkeln","huhn","erheben","paradies","tagebuch","möglichen","jenseits","arschlöcher","apartment","mason","pfeift","dieselben","wilden","vergaß","enttäuschen","greg","konsequenzen","fleck","macgyver","führerschein","online","bete","verdächtige","enkel","normalen","stift","interview","süßen","riesige","aussicht","ned","wiederkommen","werbung","warf","telefoniert","anblick","einzelnen","teppich","hielten","handel","gekannt","getrieben","trainer","scully","schuh","bomben","kämpfer","victoria","bedenken","sitzung","ken","sicheren","verkaufe","ron","tapfer","experiment","besorge","tiefe","narren","abgeholt","abhalten","bestimmte","laufenden","auftaucht","school","löschen","tara","sebastian","mies","sarg","vertragen","gebissen","geheimen","drinks","schlief","tradition","soeben","komische","schultz","aufgehalten","fähigkeit","attraktiv","begriff","versichere","schilde","legte","mitteilen","sdh","gemütlich","muster","versprach","überwachen","eingeschlafen","schlimmsten","verlierst","einzelne","vergib","vorbeikommen","aua","brüste","sandwich","gewinner","verständnis","raymond","papst","toast","matthew","einsteigen","löwen","einsetzen","gewinn","schüchtern","scheinst","pflanzen","green","sheldon","christopher","hätt","coach","werte","modell","übernimmt","walton","heftig","vorfall","motel","teams","irgendeinen","müsstest","freier","zirkus","ruhm","zurzeit","ausmachen","rezept","töchter","laute","akzeptiert","geschwindigkeit","beliebt","verpflichtet","betrüger","lohnt","märchen","blöder","becky","wille","hügel","königreich","dennis","kehren","baut","chinesen","gesichert","michel","ruth","block","belogen","malen","kofferraum","road","bursche","erin","geständnis","ausgegangen","begreifen","dana","blitz","löst","furcht","jersey","ernstes","verteilt","bezüglich","faszinierend","aufmerksam","aufregung","wendy","ethan","orte","entführung","keucht","erhielt","treue","felsen","malcolm","kurzen","zorn","taucht","bestimmen","ausgesetzt","zurückgeben","verkehr","bewiesen","generation","liebste","ausrichten","ausnahme","ebene","herrlich","stürzen","herausforderung","gefälligst","farben","geliebten","ankommen","tempo","unterbrechen","kindes","babe","erden","schrecklichen","falsches","täuschen","tal","irgendwer","deins","witwe","sichern","gerede","betrug","trauer","anwesenheit","bilden","gewachsen","ausflug","jill","verlaufen","rand","kenny","rechnen","aufzug","befragen","wegnehmen","abschied","benötigen","pst","amt","reiche","otto","beginn","daumen","bestrafen","clarence","weine","fremder","sachte","identifiziert","gestehen","mac","owen","morris","riesig","entscheide","koma","prinzen","bewusstlos","county","marke","harter","hill","höflich","jude","setzte","besorg","absichtlich","vermasselt","verschlossen","sowie","gesang","gedreht","ford","religion","unterschrift","rosen","persönliches","queen","fortschritte","eingang","zugehört","biete","clara","vorhaben","kultur","patientin","stephen","explodiert","nichte","verzichten","steven","harris","existenz","drehbuch","football","anzusehen","ohnmächtig","zaun","anthony","geladen","guckt","privat","peg","brauchten","liam","heb","virginia","wächter","eimer","blasen","rakete","salz","unfair","verzeiht","esel","krankenschwester","symbol","entscheidet","fahrzeug","unterwäsche","betrachtet","bauern","engländer","wartete","schaust","genossen","tropfen","probiert","spock","verhungern","versuchten","mütter","september","aktion","bestanden","haaren","louise","schluchzt","übertrieben","heilmittel","apparat","vorm","friedlich","richtiges","zuschauer","teenager","geliefert","may","gestritten","maus","lediglich","charakter","riley","krass","weiterer","group","ricky","diana","geräusche","lichter","starken","dexter","staffel","flaschen","putzen","einbruch","geheilt","beißen","nicole","stammen","wände","befürchte","kostüm","warren","grüßen","versagen","übernommen","hoffte","verschieben","verspätung","whiskey","mars","media","entdecken","traue","thron","riesigen","zelt","akzent","truppe","übertragen","kompliment","flammen","erkennst","erschrecken","gemälde","ari","walt","chip","mannschaft","cindy","loyalität","benjamin","dankeschön","vertreten","verhandlung","lernst","brüllt","füllen","letztendlich","krise","verlierer","spencer","with","kekse","ausschalten","penis","profi","whisky","erledige","gelächter","fängst","erklär","einspruch","angeln","rausgehen","monk","kaution","eures","gesessen","verrate","kehrt","boy","summe","lade","billig","curtis","bernard","juni","gerissen","festgenommen","ralph","befohlen","überlege","koordinaten","flog","herzinfarkt","hinlegen","nahrung","liege","geflohen","knall","nebenbei","mylord","nachbar","küss","lhrem","geleistet","nutzt","fröhliche","nebel","front","veränderung","affe","kontaktieren","brand","fuhren","zwischenzeit","eingesetzt","anton","philip","megan","schlimmeres","rennt","anlegen","nachzudenken","schwör","übliche","kreatur","verderben","medizinische","besetzt","zugriff","kanal","blutdruck","grüne","ausgeben","papi","clown","lhrer","sonny","schwören","hühnchen","arten","aufgebaut","sydney","betrügen","steele","trank","glatt","trainiert","indien","autor","geweint","blume","verletzungen","special","zwillinge","mia","reißt","zeigst","stirb","justin","diane","gefickt","schlägst","moskau","erwartest","gestoßen","durchgehen","praxis","gründlich","benny","eingeschlossen","tragödie","vollständig","psychiater","rasse","lance","vertraust","kummer","eigener","christine","partei","zentrum","testament","entfernung","private","welten","verlegen","heroin","erfuhr","gelände","kutsche","dummer","homer","stabil","ausgeschlossen","out","draus","aufgehoben","single","regisseur","vielmals","dylan","bestand","erbe","weggelaufen","noah","leichte","zuständig","losgehen","long","hustet","brutal","besprochen","halbes","bargeld","peggy","action","zusammenarbeiten","beunruhigt","achte","innere","kanone","eklig","armes","avenue","öffentlich","nützt","marine","brillant","köder","gespräche","nähert","vorgehen","kleinigkeit","kissen","manny","geisel","gerecht","trost","gehasst","gesorgt","archer","spinner","vergebung","vieh","schnelle","normales","gefesselt","lautes","kalte","leitet","angehen","ekelhaft","salat","schicht","intelligent","meg","verhältnis","socken","brieftasche","holly","packt","eventuell","nirgendwohin","methode","gelangen","gespannt","vernunft","zurückgehen","regnet","drama","entspannt","wörter","klingeln","ruhige","sprung","anständig","gangster","harten","aufzeichnungen","ofen","cowboy","endgültig","aufgaben","ruh","deutsch","neil","wodka","know","air","respektieren","riskant","lohn","zuviel","zustimmen","schnaps","troy","stufe","erleichtert","scheune","vanessa","klink","spaziergang","katherine","zettel","kotzen","blödmann","hurra","lana","symptome","vorfahren","nutzlos","shaw","telefonnummer","nochmals","grey","medien","faul","dient","russell","ereignisse","aussuchen","verprügelt","zweites","sherlock","fabelhaft","klinge","leistung","beileid","castle","durchführen","mitchell","eröffnen","unschuld","seist","stoßen","palmer","like","genügend","sofa","gestatten","gekocht","biest","lydia","bräuchte","ausgelöst","väter","verarscht","butter","nachbarschaft","villa","data","goldene","schließe","saft","begehen","hauptquartier","geschworen","abgenommen","werkstatt","überreden","nannten","gemüse","schläger","frisst","bewundere","geschieden","assistentin","wettbewerb","lebten","sieger","verfassung","küsst","fußball","geschnitten","master","quietschen","füttern","gürtel","unschuldigen","menschlich","eigenartig","oje","hanna","kabel","duke","franz","zahn","landet","kisten","liegst","mona","krankenstation","leine","beschreibung","ausmacht","beschädigt","grundstück","steckte","bahn","turm","mine","sauerstoff","angesichts","versager","deinetwegen","vic","angeklagt","aufhört","baden","knacken","verbindungen","panzer","marcel","bach","leiser","stimmengewirr","zerstörung","stirn","finn","sanft","kloster","charmant","aufbauen","thanksgiving","anlass","zähle","verlieben","atmosphäre","ronnie","samantha","leber","jener","begegnen","dämlich","krawatte","juan","tarnung","kanada","alpha","baker","tabletten","faust","auftreten","monroe","blatt","gelöscht","dschungel","alison","niedlich","klage","wolltet","jonas","akt","schießerei","anwältin","überleg","frisur","spruch","jene","moral","angelegenheiten","dokumente","fröhlich","spezies","oktober","schachtel","opfers","noten","ellie","irgendwohin","nora","brunnen","toby","sandy","lampe","craig","jagt","eigentum","diebstahl","spenden","betrieb","gemeinsame","absurd","gegensatz","frühling","dünn","ausland","schultern","entwicklung","vergehen","ahnen","verbessern","herzog","diskussion","gehalt","lemon","freak","glocke","forschung","geradeaus","fette","iris","rechnungen","kasse","tödlich","tieren","ian","oberfläche","gitarre","bedienen","jan","zwang","marsh","politiker","bären","vereint","irgendeiner","ward","besuche","schreckliches","schoss","collins","werkzeug","kranken","neffe","sue","dauerte","brooklyn","lebenden","bevölkerung","hergebracht","just","durchziehen","gepackt","service","furchtbare","liebster","flieger","vorschriften","beherrschen","guy","detail","ausgewählt","herunter","schriftsteller","wärt","kümmer","andererseits","bay","gene","shuttle","üblich","entführen","ike","jury","box","ausgedacht","freddy","partys","rausgefunden","plant","feige","gesungen","möbel","bewährung","schieße","umgeben","berater","bailey","zoo","gedicht","lorelai","bellt","vorschlagen","genießt","baseball","locken","ooh","trennung","lautsprecher","ticket","umwerfend","kanzlei","wahres","zufolge","come","hebt","anschlag","timing","kid","tucker","befehlen","etage","dazwischen","jules","heisst","objekt","bedaure","wobei","kokain","strategie","freundes","wolken","gräfin","bruno","getreten","cal","pardon","genosse","ungut","verteilen","fuchs","day","organisiert","bla","world","east","löcher","aktiv","hunter","werfe","beantwortet","meist","reis","hierhin","scotch","überfahren","logisch","heather","französische","bekannte","episode","engagiert","manipuliert","zellen","are","blake","dienste","sodass","volkes","golf","janet","schmeißen","grand","zurückgekehrt","eröffnet","summt","unterrichten","verschaffen","verlobte","erfahrungen","persönlichkeit","gina","streichen","offenen","weisheit","vergeht","beruhig","zielen","fans","wüsstest","ashley","schuldet","erhöhen","schönsten","momente","adrian","kameraden","eingebrochen","amüsiert","erwähnte","mitch","premierminister","geringste","übernachten","infiziert","goa","dinner","rieche","kredit","allison","lake","legal","merke","jubel","klänge","größeren","bewacht","vietnam","lehren","chandler","präsentieren","nacken","auflegen","vergangen","fangt","hühner","hector","teal","sprengen","einsperren","turner","zusammenhang","wahrer","joan","marco","breit","pfeife","treibst","rannte","beschuldigt","set","verlegt","überraschungen","orleans","douglas","tauchen","verdanken","nadel","psst","gelacht","apfel","behilflich","dreckskerl","mitgefühl","wichtigsten","krieges","wehe","hope","heirat","exakt","widerstehen","höchst","zurückgelassen","gespürt","methoden","interessantes","sau","notaufnahme","verwandten","jeffrey","trinkgeld","ermitteln","riechst","beach","sorte","kartoffeln","elefanten","sichere","sämtliche","gekündigt","vereinbarung","harmlos","weiber","this","dicken","rauskommt","old","angestellten","datum","bezug","kerzen","lawrence","marsch","benötigt","ermittlung","lagen","unbekannt","gefressen","brett","manieren","han","enthält","anfing","kümmerst","berühmte","schwieriger","piloten","scherze","anfängt","läufst","bekannten","rasen","empfehlen","härter","geweckt","befördert","reiter","empfinden","bereite","täte","benutzte","halloween","abgesagt","down","quasi","kocht","reingekommen","hupen","hinunter","vorüber","ausdrücken","reese","elliot","perfekten","folgte","rebellen","hauptsächlich","schuppen","braver","neill","zwanzig"];

function groupVocabularyByLevel() {
  return getExpandedVocabularyRows().reduce((groups, row) => {
    groups[row.level].push(row);
    return groups;
  }, { A1: [], A2: [], B1: [], B2: [] });
}

function getExpandedVocabularyRows() {
  const groups = { A1: [], A2: [], B1: [], B2: [] };
  const globalSeen = new Set();

  vocabularyRows.forEach((row, index) => {
    const level = row.level || inferVocabularyLevel(row, index);
    addVocabularyIfUnique(groups[level], globalSeen, { ...row, level });
  });

  addCourseVocabularyRows(groups, globalSeen);

  levelOrder.forEach((level) => {
    const generated = generateLevelVocabulary(level, globalSeen, 1000 - groups[level].length);
    groups[level].push(...generated);
  });

  return levelOrder.flatMap((level) => groups[level]);
}

const frequencyVocabularyTranslations = {"ich":"我","sie":"她","das":"那個","ist":"是","nicht":"不","die":"的","und":"和","der":"的","wir":"我們","was":"什麼","ein":"一個","mir":"我","mit":"與","wie":"喜歡","den":"的","mich":"我","auf":"上","dass":"那個","aber":"但是","eine":"一","hat":"有","hier":"這裡","haben":"有","für":"為了","sind":"是","war":"是","von":"來自","wenn":"如果","dich":"你","ihr":"她","nein":"不","habe":"有","bin":"上午","noch":"還","nur":"只是","dir":"你","sich":"你自己","einen":"一","uns":"我們","hast":"有","dem":"民主","kann":"可以","auch":"還有","schon":"已經","als":"作為","sein":"是","mal":"次","jetzt":"現在","ihn":"他","dann":"那麼","aus":"出","meine":"我的","wird":"會","mein":"我的","bist":"是","doch":"是的","alles":"一切","weiß":"白色","keine":"無","oder":"或","nach":"之後","nichts":"什麼都沒有","man":"男人","muss":"必須","werden":"成為","will":"想要","ihnen":"他們","geht":"去","etwas":"某件事","mehr":"更多","bei":"在","also":"所以","bitte":"請","immer":"總是","hab":"有","warum":"為什麼","vor":"之前","los":"去","können":"可以","wieder":"再次","sagen":"說","machen":"做","danke":"謝謝你","sehr":"非常","alle":"全部","denn":"因為","mann":"男人","tun":"做","ihm":"他","zum":"到","sehen":"看到","vielleicht":"也許","einem":"一","wer":"誰","ihre":"他們的","diese":"這些","euch":"你","einer":"一","komm":"來吧","über":"關於","gibt":"給出","okay":"好的","wissen":"知道","deine":"你的","müssen":"必須","soll":"應該","werde":"會","nie":"從不","wirklich":"真的","hey":"嘿","kein":"無","viel":"很多","weg":"離開","würde":"會","tut":"確實","des":"德斯","leben":"直播","hatte":"有","zeit":"時間","willst":"想要","kommen":"來吧","dein":"你的","heute":"今天","kommt":"來了","wollen":"想要","ganz":"完全","wäre":"會是","wollte":"通緝","weißt":"知道","sicher":"當然","gesagt":"說","frau":"女人","nun":"現在","bis":"直到","wurde":"成為","leid":"抱歉","kannst":"可以","macht":"使","dieser":"這個","zurück":"回來","lassen":"讓","hallo":"你好","meinen":"意思是","gott":"上帝","seine":"他的","hätte":"會有","zwei":"兩個","könnte":"可以","genau":"正是","waren":"是","zur":"到","lass":"讓","klar":"清晰","morgen":"明天","leute":"人","vater":"父親","glaube":"相信","gerade":"直","tag":"日","gesehen":"見過","reden":"談話","wohl":"可能","liebe":"愛","sollte":"應該","sagte":"說","unsere":"我們的","jemand":"某人","geld":"錢","durch":"透過","keinen":"無","mutter":"媽媽","raus":"出","gemacht":"製作","paar":"情侶","mach":"做","passiert":"發生了","dachte":"思想","besser":"更好","musst":"必須","wieso":"為什麼","sir":"先生","dieses":"這個","selbst":"你自己","gehört":"聽到","möchte":"想要","ohne":"沒有","hör":"聽","her":"這裡","sag":"說","meiner":"我的","anderen":"其他","nacht":"晚上","diesen":"這個","gute":"好","wirst":"會","lange":"長","natürlich":"當然","ach":"哦","meinem":"我的","gar":"甚至","ins":"插入","sei":"是","dort":"那裡","weiter":"進一步","geben":"給予","seit":"自從","gleich":"一樣","sagt":"說","recht":"對","ihren":"他們的","richtig":"正確","ordnung":"好的","vom":"來自","sieht":"看到","davon":"其中","dafür":"為此","geh":"去","diesem":"這個","wegen":"因為","hause":"家","sollten":"應該","mädchen":"女孩","hin":"那裡","sollen":"應該","abend":"晚上","haus":"房子","denke":"認為","viele":"許多","drei":"三","deinen":"你的","freund":"朋友","guten":"好","unser":"我們的","warte":"等待","machst":"做","menschen":"人","angst":"恐懼","bleiben":"留下來","zusammen":"在一起","welt":"世界","unter":"下","habt":"有","andere":"其他","tot":"死了","getan":"完成","darf":"可能","erst":"第一","rein":"純粹的","stimmt":"真實","nehmen":"採取","kinder":"兒童","eines":"一","glauben":"相信","bringen":"帶","ganze":"整體","genug":"夠了","brauchen":"需要","gegen":"反對","moment":"時刻","junge":"男孩","steht":"看台","sonst":"否則","musik":"音樂","arbeit":"工作","seid":"是","ihrer":"他們的","herr":"先生","dabei":"那裡","heißt":"被稱為","familie":"家庭","warten":"等待","niemand":"沒有人","sofort":"立即","bevor":"之前","jahre":"年","einmal":"一次","problem":"問題","sohn":"兒子","wann":"當","brauche":"需要","fertig":"完成","halt":"停止","allein":"獨自一人","beim":"在","beide":"兩者","gefunden":"發現","hatten":"有","sache":"東西","hilfe":"幫助","verdammt":"該死的","jeder":"大家","warst":"是","gern":"高興地","konnte":"可以","darüber":"關於它","halten":"保持","siehst":"看到","verstehe":"明白","jahren":"年","kam":"來了","kind":"孩子","wusste":"知道","wahr":"真實","seinen":"他的","dazu":"對此","bruder":"兄弟","daran":"在它上面","ihrem":"他們的","denken":"認為","könnten":"可以","dank":"謝謝","würden":"會","lieber":"親愛的","fall":"案例","deiner":"你的","sehe":"看到","egal":"無論如何","kennen":"知道","deinem":"你的","vergessen":"忘記了","frage":"問題","mache":"做","komme":"來吧","sage":"說","mag":"喜歡","sieh":"看到","echt":"真實的","gib":"給予","eigentlich":"實際上","jeden":"大家","dad":"爸爸","gab":"給了","uhr":"時鐘","stadt":"城市","männer":"男人","baby":"寶貝","namen":"名字","bekommen":"得到","kopf":"頭","gehe":"去","kleine":"小","später":"後來","glück":"運氣","letzte":"最後","freunde":"朋友","all":"全部","darauf":"在它上面","ende":"結束","bald":"很快","dinge":"東西","meinst":"意思是","toll":"太棒了","eins":"一","minuten":"分分鐘","vielen":"許多","bereit":"準備好了","weit":"遠","ahnung":"線索","seiner":"他的","bisschen":"一點","tür":"門","auto":"汽車","jungs":"夥計們","eure":"你的","augen":"眼睛","polizei":"警察","stehen":"站","sterben":"死","hätten":"會有","draußen":"外面","kenne":"知道","fast":"幾乎","runter":"向下","vorbei":"結束","treffen":"見面","gerne":"高興地","dran":"在它上面","wurden":"是","arbeiten":"工作","mom":"媽媽","verrückt":"瘋狂的","neue":"新的","ging":"去了","hinter":"後面","sorgen":"擔心","einzige":"僅","jemanden":"某人","darum":"這就是為什麼","tochter":"女兒","braucht":"需要","idee":"想法","schwester":"妹妹","drin":"裡面","sah":"鋸","ganzen":"整體","spät":"遲到了","ziemlich":"相當","solltest":"應該","name":"姓名","sogar":"甚至","kerl":"傢伙","frauen":"婦女","liegt":"謊言","finde":"找到","woher":"從哪裡來","job":"工作","keiner":"無","seinem":"他的","hört":"聽到","spielen":"玩","überhaupt":"根本不","teufel":"惡魔","verstanden":"明白了","verloren":"迷失了","große":"大","hand":"手","grund":"原因","jahr":"年","kommst":"來吧","mama":"媽媽","ruhe":"冷靜","gewesen":"曾經","tod":"死亡","stunden":"小時","hoffe":"希望","denkst":"認為","oben":"上面","gestern":"昨天","versuchen":"嘗試","art":"藝術","letzten":"最後","schatz":"親愛的","endlich":"最後","nimm":"採取","etwa":"關於","erzählt":"告訴","läuft":"正在運行","schwer":"困難","anders":"不同的","miss":"想念","musste":"不得不","fünf":"五","wasser":"水","lässt":"讓我們","erste":"第一","versucht":"嘗試過","gekommen":"來了","geschichte":"故事","wenig":"小","holen":"得到","bedeutet":"意味著","nett":"不錯","wahrheit":"真相","woche":"週","bringt":"帶來","welche":"哪些","bestimmt":"已確定","hoch":"高","alter":"老兄","sagst":"說","schau":"看看","land":"國家","zimmer":"房間","wagen":"敢於","vier":"四","gefallen":"喜歡","spaß":"有趣","niemals":"從不","schuld":"責備","getötet":"被殺","wollten":"通緝","verlassen":"離開","zeigen":"顯示","beste":"最好的","ernst":"認真地","unserer":"我們的","denen":"那些","ort":"地方","bleibt":"遺骸","würdest":"會","manchmal":"有時","glaubst":"相信","seite":"頁面","lasst":"讓","zwischen":"之間","eben":"只是","spiel":"遊戲","nehme":"採取","ersten":"第一","guter":"好一個","chance":"機會","freundin":"女朋友","krieg":"戰爭","gefällt":"喜歡","kleinen":"小","erzählen":"告訴","anderes":"其他","tage":"天","entschuldigen":"道歉","gehst":"去","allen":"大家","bett":"床","sachen":"東西","the":"的","schlecht":"壞","schule":"學校","entschuldigung":"抱歉","wort":"字","john":"約翰","hättest":"會有","wären":"會是","typ":"類型","schlafen":"睡覺","euer":"你的","captain":"隊長","gesicht":"臉","falls":"如果","neuen":"新的","bloß":"只是","unten":"下面","teil":"部分","beiden":"兩者","mensch":"人類的","kleiner":"較小","stellen":"把","oft":"常","sorge":"擔心","gedacht":"思想","tust":"做","einige":"一些","dies":"這個","ding":"東西","unseren":"我們的","kriegen":"得到","blut":"血","ehrlich":"誠實地","eltern":"父母","scheint":"似乎","herz":"心","jack":"傑克","glücklich":"快樂","alte":"舊的","bleib":"留下來","wiedersehen":"再見","frei":"免費","wen":"誰","drauf":"在它上面","irgendwie":"不知何故","reicht":"就足夠了","fest":"固定的","besten":"最好的","kaum":"幾乎不","irgendwas":"某件事","klingt":"聲音","platz":"地方","brauchst":"需要","rede":"談話","papa":"爸爸","falsch":"錯誤的","sondern":"但是","alten":"老","nummer":"數量","früher":"早些時候","jungen":"男孩","wohin":"哪裡","außer":"除了","früh":"早","setzen":"把","wahrscheinlich":"可能","dürfen":"允許","jede":"每個","telefon":"電話","tue":"做","kennst":"知道","willkommen":"歡迎","plan":"計劃","großen":"大","retten":"儲存","hierher":"這裡","wär":"會是","bring":"帶","fehler":"錯誤","wollt":"通緝","dollar":"美元","zehn":"十","allem":"一切","pass":"透過","nächste":"下一個","stunde":"小時","hände":"手","gegeben":"給定","menge":"數量","bereits":"已經","wartet":"等待","sechs":"六","lieben":"愛","meines":"我的","büro":"辦公室","nächsten":"下一個","gebe":"給予","wochen":"週","ruf":"打電話","schaffen":"創造","leider":"不幸的是","scheiß":"狗屎","hölle":"地獄","doktor":"醫生","tja":"嗯","new":"新的","voll":"滿","film":"電影","überall":"到處","hund":"狗","geworden":"成為","direkt":"直接","wolltest":"通緝","tat":"做了","denkt":"認為","schiff":"船","neues":"新的","wem":"誰","könig":"國王","funktioniert":"作品","hattest":"有","deswegen":"這就是為什麼","wow":"哇","nennen":"打電話","feuer":"火","laufen":"跑","alleine":"獨自一人","erinnern":"記住","völlig":"完全","kleines":"小","könnt":"可以","stelle":"地方","kumpel":"夥伴","probleme":"問題","spricht":"說話","kaffee":"咖啡","luft":"空氣","fand":"發現","entschuldige":"抱歉","ziehen":"拉","verschwinden":"消失","könntest":"可以","seht":"看到","aufhören":"停止","eigenen":"擁有","richtige":"正確","unserem":"我們的","suche":"搜尋","zwar":"雖然","hol":"得到","buch":"書","fühle":"感覺","jedes":"每個","verstehst":"明白","wert":"值得","arzt":"醫生","froh":"很高興","versuche":"嘗試","straße":"街道","rufen":"打電話","heiraten":"結婚","super":"太棒了","sam":"山姆","lebt":"生活","gutes":"好","lasse":"讓","onkel":"叔叔","total":"完全地","gebracht":"帶來了","party":"聚會","spielt":"戲劇","wahl":"選擇","vertrauen":"信任","damals":"那時","tagen":"會議","leicht":"輕鬆地","nachdem":"之後","gegangen":"消失了","gefühl":"感覺","geschafft":"完成","typen":"類型","interessiert":"有興趣","möchten":"想要","halte":"保持","hält":"持有","glaub":"相信","irgendwo":"某處","stück":"一塊","genauso":"完全一樣","kennt":"知道","genommen":"採取","zukunft":"未來","weniger":"少","cool":"酷","licht":"光","getroffen":"擊中","himmel":"天堂","nachricht":"留言","drüben":"在那兒","passt":"適合","sagten":"說","kümmern":"照顧","vergiss":"忘記","angerufen":"被稱為","sitzen":"坐","daß":"那個","erde":"地球","großer":"大的","schlüssel":"鑰匙","rest":"休息","passieren":"發生","eher":"相反","gefragt":"問","gefängnis":"監獄","opfer":"受害者","körper":"身體","solche":"這樣的","mist":"廢話","findet":"發現","böse":"邪惡","gesprochen":"口頭的","versuch":"嘗試","vorstellen":"想像","wovon":"從什麼","nochmal":"再次","herren":"先生們","waffen":"武器","wohnung":"公寓","weh":"禍患","heißen":"被稱為","krankenhaus":"醫院","bringe":"帶","höre":"聽","millionen":"百萬","klasse":"類別","hart":"硬","worden":"曾經","sinn":"感覺","verletzt":"受傷","ändern":"改變","erfahren":"有經驗的","tragen":"磨損","wenigstens":"至少","vorsichtig":"仔細地","daddy":"爸爸","stolz":"驕傲","stark":"強","fällt":"瀑布","möchtest":"想要","leuten":"人","besonders":"尤其是","schöne":"美麗的","schicken":"傳送","person":"人","schätze":"猜測","solange":"只要","länger":"更長","großartig":"太棒了","lacht":"笑","anrufen":"打電話","stand":"站著","redest":"談話","fühlen":"感覺","erwartet":"預計","boden":"地板","boss":"老闆","stimme":"同意","glaubt":"相信","still":"沉默的","sicherheit":"安全","setz":"把","mund":"嘴","kämpfen":"戰鬥","wisst":"知道","lachen":"笑","hörst":"聽到","zeug":"東西","lustig":"有趣的","umbringen":"殺","sollst":"你應該","hasse":"討厭","schlimm":"壞","unglaublich":"難以置信","wärst":"會是","laden":"負載","führen":"鉛","gestorben":"死了","schauen":"看看","meinung":"意見","mörder":"兇手","frank":"法蘭克","ähm":"嗯","geschehen":"發生","geschäft":"商業","idiot":"白痴","verzeihung":"抱歉","fliegen":"飛","zeig":"顯示","team":"團隊","general":"一般","mike":"麥克","aufs":"昂斯","york":"約克","vorher":"之前","schluss":"結論","schneller":"更快","liebt":"愛","verdient":"賺來的","mögen":"喜歡","meisten":"大多數","denk":"認為","umgebracht":"被殺","perfekt":"完美的","versprochen":"答應的","handy":"智慧型手機","hinten":"後面","monate":"月","erinnere":"記住","acht":"八","arbeitet":"作品","fallen":"秋天","rufe":"喊","nötig":"必要的","heraus":"出","tages":"日","unmöglich":"不可能的","liebling":"親愛的","charlie":"查理","tatsächlich":"實際上","folgen":"關注","bitten":"問","behalten":"保留","nähe":"關閉","arbeite":"工作","joe":"喬","verdammte":"該死的","plötzlich":"突然","lebens":"生活","hole":"獲取","tisch":"表","michael":"麥可","hörte":"聽到","jemals":"曾經","liegen":"謊言","verkaufen":"賣","gefährlich":"危險的","anfangen":"開始","bekommt":"得到","machte":"製作","hotel":"飯店","hilft":"幫助","werdet":"會","meister":"大師","kampf":"戰鬥","antwort":"回答","konnten":"可以","geschickt":"已發送","jedem":"大家","sieben":"七","komisch":"有趣的","gewinnen":"贏","ihres":"她的","bezahlt":"付費的","you":"你","voller":"富勒","unterwegs":"在路上","dumm":"愚蠢的","ärger":"麻煩","bild":"影像","george":"喬治","dagegen":"反對它","seien":"是","starb":"死了","tom":"湯姆","monaten":"月","leiche":"屍體","niemanden":"沒有人","auge":"眼睛","arschloch":"混蛋","verheiratet":"已婚","peter":"彼得","zieh":"拉","nimmt":"需要","gerettet":"已儲存","agent":"代理人","traum":"夢想","entscheidung":"決定","schlimmer":"更糟","regeln":"調節","fenster":"窗戶","fangen":"抓住","fort":"繼續","ständig":"不斷地","findest":"找到","gefahr":"危險","absolut":"絕對","mary":"瑪莉","augenblick":"時刻","bescheid":"讓我知道","rum":"周圍","gedanken":"想法","werd":"會","ziel":"目標","benutzt":"使用過的","bewegung":"運動","jemandem":"某人","wünschte":"希望","worte":"話","kamen":"來了","welcher":"哪一個","zahlen":"付錢","anfang":"開始","legen":"躺著","erinnerst":"記住","anwalt":"律師","fahr":"開車","sitzt":"坐","hilf":"幫助","offen":"打開","schönen":"美麗的","monsieur":"先生","müsste":"必須","arme":"窮","bier":"啤酒","fürs":"為了","partner":"合夥人","david":"大衛","klappe":"閉嘴","süß":"甜甜的","herum":"周圍","finger":"手指","ehe":"婚姻","rolle":"角色","ließ":"讓","gleiche":"一樣","monat":"月","hochzeit":"婚禮","max":"最大","führt":"線索","paris":"巴黎","wach":"醒著","wozu":"為什麼？","arm":"窮","geschrieben":"書面的","chef":"老闆","benutzen":"使用","informationen":"資訊","erledigt":"完成","hoffentlich":"希望","müsst":"必須","fühlt":"感覺","tanzen":"跳舞","ansehen":"查看","darfst":"可能","zuhause":"家","wunderbar":"太棒了","hältst":"保持","reise":"旅行","gewonnen":"贏了","dame":"女士","irgendwann":"在某個時刻","chffffff":"噗噗噗","alex":"亞歷克斯","steckt":"卡住了","jedenfalls":"無論如何","schreit":"尖叫聲","tolle":"太棒了","rüber":"結束","tschüss":"再見","nennt":"來電","raum":"空間","heiß":"熱","foto":"照片","paul":"保羅","irgendetwas":"任何東西","weile":"有一段時間","bisher":"到目前為止","minute":"分分鐘","unbedingt":"絕對","zug":"火車","sekunden":"秒","wofür":"為了什麼","erzähl":"告訴","nen":"嫩","beweise":"證明","nahm":"採取了","aller":"大家","freut":"高興","seele":"靈魂","schießen":"射擊","müde":"累了","dauert":"需要","magst":"喜歡","harry":"哈利","brief":"信","gelernt":"學到了","sucht":"正在尋找","bekannt":"已知的","weitere":"更多","unfall":"意外事故","dahin":"那裡","kontrolle":"控制","beispiel":"例子","lady":"女士","dasselbe":"一樣","herzen":"心","schlagen":"擊中","wütend":"生氣","weise":"明智的","damen":"女士們","darin":"在其中","gottes":"上帝","holt":"獲取","fehlt":"失蹤","vorsicht":"小心點","heiße":"熱","beweisen":"證明","gehabt":"有","zumindest":"至少","vermisst":"錯過了","hübsch":"漂亮","kriegt":"得到","verbindung":"連接","tief":"深","richtung":"方向","lage":"位置","sowieso":"無論如何","kraft":"力","normal":"正常","lauf":"跑","ehre":"榮譽","stell":"把","geschenk":"禮物","bar":"現金","tasche":"包包","gelesen":"讀","gekauft":"買了","wussten":"知道","gestohlen":"被盜","hunger":"飢餓","leg":"腿","lügen":"謊言","beziehung":"關係","ben":"本","verschwunden":"消失了","steh":"站","nächstes":"下一個","gearbeitet":"工作過","preis":"價格","witz":"笑話","meinte":"說","liste":"清單","geist":"精神","neben":"旁邊","gesucht":"通緝","firma":"公司","süße":"甜味","rücken":"回來","schrecklich":"可怕的","letzter":"最後","verliebt":"戀愛中","öffnen":"打開","redet":"會談","boot":"船","seltsam":"奇怪的","versteckt":"隱藏的","fürchte":"恐懼","verschwinde":"消失","erwischt":"抓住了","verkauft":"已售出","tante":"阿姨","erwarten":"期待","pferd":"馬","wunder":"奇蹟","sauer":"酸的","vermutlich":"可能","näher":"更近","major":"專業","jung":"年輕的","majestät":"陛下","aussehen":"看看","ans":"答案","and":"和","links":"左","großes":"大","welches":"其中","beschützen":"保護","geboren":"出生","erreichen":"達到","punkt":"點","kindern":"兒童","kirche":"教堂","verraten":"被背叛","selber":"你自己","befehl":"命令","colonel":"上校","fährt":"驅動器","zieht":"拉","geburtstag":"生日","haut":"皮膚","wette":"打賭","reich":"富有","sekunde":"第二","fahre":"開車","schwöre":"發誓","geredet":"談過","james":"詹姆斯","madame":"夫人","eigene":"擁有","zeiten":"次","traurig":"悲傷","anruf":"打電話","nachrichten":"新聞","frieden":"和平","karte":"卡","güte":"善良","euren":"你的","diesmal":"這次","schade":"太糟糕了","persönlich":"個人的","kriege":"得到","stirbt":"死了","bleibe":"留下來","verändert":"改變了","sonne":"太陽","lieb":"親愛的","nämlich":"即","letztes":"最後","bekam":"得到了","ruft":"來電","professor":"教授","gericht":"法庭","nase":"鼻子","ewig":"永遠","singen":"唱歌","bank":"銀行","beschäftigt":"忙","computer":"電腦","yeah":"是的","toten":"死了","weihnachten":"聖誕節","offensichtlich":"顯然","naja":"嗯","henry":"亨利","gefühle":"感受","fuß":"腳","show":"顯示","überraschung":"驚喜","geheimnis":"秘密","fbi":"聯邦調查局","kontakt":"聯絡方式","gold":"黃金","drogen":"藥物","regierung":"政府","wein":"酒","kriegst":"你得到","ermordet":"被謀殺","fotos":"照片","entfernt":"已刪除","geschlafen":"睡了","manche":"一些","erledigen":"做","ran":"跑","gegenüber":"對面","schlaf":"睡覺","lust":"慾望","wunderschön":"美麗的","witzig":"有趣的","nick":"尼克","zerstört":"被摧毀","übrigens":"順便說一下","willen":"會","heim":"家","richtigen":"正確","deines":"你的","namens":"命名的","zeigt":"節目","geliebt":"愛過","gehören":"屬於","brachte":"帶來了","herrn":"先生","blick":"看看","besuch":"訪問","schlechte":"壞","bewegen":"移動","haare":"頭髮","präsident":"總統","sagtest":"你說","hoffnung":"希望","stecken":"卡住了","lebe":"直播","rechts":"對","interessant":"有趣的","miteinander":"與彼此","meint":"意味著","liebst":"愛","indem":"透過","bleibst":"留下來","kümmere":"保重","weder":"兩者都不是","möglichkeit":"可能性","kaputt":"壞了","bekomme":"得到","flugzeug":"飛機","vergangenheit":"過去","anderer":"其他","zweite":"第二","armee":"軍隊","jim":"吉姆","tee":"茶","entweder":"要么","weiss":"白色","don":"唐","detective":"偵探","aufhalten":"停止","stellt":"提供","verspreche":"承諾","überrascht":"驚訝","sauber":"乾淨","hau":"休","mark":"標記","schlag":"擊中","sheriff":"警長","untertitel":"字幕","setzt":"套","frag":"問","vaters":"父親","nervös":"緊張","gesellschaft":"社會","verstecken":"隱藏","schuldig":"有罪","hals":"脖子","schützen":"保護","besuchen":"訪問","passen":"適合","überleben":"生存","erhalten":"收到","teilen":"分享","gebäude":"建築物","schicksal":"命運","zeichen":"標誌","richter":"法官","besorgt":"擔心","küche":"廚房","lief":"跑","vergnügen":"快樂","wüsste":"知道","volk":"人","lhr":"你的","herausfinden":"找出來","königin":"女王","soldaten":"士兵","feiern":"慶祝","situation":"情況","lag":"躺著","gelassen":"冷靜","soweit":"到目前為止","gefahren":"驅動的","verstand":"明白了","bord":"董事會","schönes":"美麗的","jimmy":"吉米","billy":"比利","angefangen":"開始了","lee":"李","fühlst":"感覺","bob":"鮑伯","mussten":"不得不","rat":"建議","worauf":"什麼","gebeten":"要求的","tony":"東尼","kamera":"相機","achtung":"關注","lieutenant":"中尉","ganzes":"整體","schuhe":"鞋子","sarah":"莎拉","glückwunsch":"恭喜","niemandem":"沒有人","gibst":"給予","statt":"相反","übernehmen":"接管","gegend":"面積","wald":"森林","nimmst":"採取","danny":"丹尼","erkennen":"認出","glas":"玻璃","falsche":"錯誤的","jesus":"耶穌","stöhnt":"呻吟聲","herein":"在","kleid":"洋裝","zerstören":"摧毀","jawohl":"是的","london":"倫敦","gegessen":"吃過","abendessen":"晚餐","gesetz":"法律","gemeinsam":"在一起","geholfen":"幫助了","erster":"第一","wohnt":"生活","schritt":"步驟","guck":"看看","nahe":"關閉","aussieht":"看起來","beginnen":"開始","dachten":"思想","band":"樂團","ungefähr":"大約","aufgabe":"任務","neun":"九","furchtbar":"可怕的","drinnen":"裡面","zuvor":"之前","charles":"查爾斯","freue":"快樂","amerika":"美國","übrig":"左","spur":"痕跡","falschen":"錯誤的","sergeant":"中士","melden":"報告","helfe":"幫助","werfen":"丟","bill":"帳單","haltet":"保持","erinnert":"記住了","hängt":"掛起","freude":"喜悅","ehemann":"丈夫","erschossen":"射擊","verzeihen":"原諒","schwein":"豬","monster":"怪物","entschieden":"決定","mission":"使命","verdammten":"該死的","brauch":"需要","gewusst":"知道","vorne":"前面","stopp":"停止","übel":"壞","schlampe":"母狗","schöner":"更美麗","adresse":"地址","unsinn":"廢話","messer":"刀","gesund":"健康的","respekt":"尊重","pro":"每","leisten":"買得起","davor":"在那之前","richard":"理查","bedeuten":"意思是","ball":"球","mitnehmen":"隨身攜帶","gespielt":"玩過","schwierigkeiten":"困難","hälfte":"一半","kannte":"知道","stehe":"站","maria":"瑪麗亞","planeten":"行星","schwanger":"懷孕了","gruppe":"群組","anna":"安娜","verhaftet":"被捕","deal":"交易","seines":"他的","irgendwelche":"任何","händen":"手","versteht":"明白","drehen":"旋轉","eis":"冰","danken":"謝謝你","erfolg":"成功","zufrieden":"滿意","schließen":"關閉","besorgen":"得到","wochenende":"週末","worüber":"關於什麼","stimmen":"同意","nehmt":"採取","martin":"馬丁","witze":"笑話","beine":"腿","verbrechen":"犯罪","bericht":"報告","nachts":"晚上","eurer":"你的","prinzessin":"公主","schmerz":"疼痛","klingelt":"戒指","position":"位置","echte":"真實的","gleichen":"一樣","fernsehen":"看電視","wünsche":"願望","gefangen":"抓住了","schätzchen":"親愛的","seh":"看到","angebot":"報價","nah":"關閉","jane":"簡","gewartet":"等待","kümmert":"關心","ring":"戒指","rennen":"跑","lied":"歌曲","eier":"蛋","welchen":"哪些","sorry":"抱歉","fantastisch":"太棒了","schaut":"看起來","hielt":"舉行","falle":"秋天","drink":"喝","insel":"島","dauern":"最後","daher":"因此","zufällig":"隨機的","dorf":"村莊","clark":"克拉克","bewegt":"搬家了","mitten":"中","bullen":"公牛隊","feind":"敵人","einverstanden":"同意","neuer":"較新的","bauen":"建造","trägt":"攜帶","hängen":"掛","freunden":"朋友","deren":"誰的","halb":"一半","verpasst":"錯過了","sprach":"發言","leise":"靜靜地","armen":"窮","wusstest":"你知道","fanden":"發現","unternehmen":"公司","träume":"夢想","schläft":"睡覺","kostet":"成本","spiele":"遊戲","unseres":"我們的","entlang":"沿著","johnny":"強尼","versprechen":"承諾","tiere":"動物","freiheit":"自由","verdienen":"賺","aha":"啊哈","unterhalten":"娛樂","eingeladen":"邀請","schaden":"傷害","genannt":"被稱為","beenden":"完成","ray":"雷","geändert":"改變了","thomas":"湯瑪斯","lächerlich":"可笑","geschlagen":"毆打","park":"公園","schätzen":"欣賞","männern":"男人","beginnt":"開始","ehren":"榮譽","größte":"最大的","energie":"能源","fleisch":"肉","besonderes":"特別的","besteht":"存在","reichen":"夠了","robert":"羅伯特","zeitung":"報紙","worum":"怎麼樣","nachgedacht":"想過","betrunken":"喝醉了","sowas":"類似的東西","patienten":"病人","gespräch":"談話","leiden":"受苦","taxi":"計程車","tötet":"殺死","see":"看到","unterschied":"差異","wind":"風","singt":"唱歌","schreien":"尖叫","daniel":"丹尼爾","sahen":"鋸","wand":"牆","bus":"巴士","lhre":"你的","angriff":"攻擊","verhalten":"表現","loch":"洞","interesse":"興趣","treten":"踢","quatsch":"廢話","trifft":"點擊數","polizist":"警察","blumen":"鮮花","neuigkeiten":"新聞","bringst":"帶","flasche":"瓶子","rief":"喊道","schuss":"射擊","fassen":"把握","meer":"海","konntest":"可以","schafft":"創造","maschine":"機器","spreche":"說話","bein":"腿","eddie":"艾迪","bekommst":"得到","verbringen":"花費","bücher":"書籍","blöd":"愚蠢的","frühstück":"早餐","tommy":"湯米","meter":"米","bilder":"圖片","aufpassen":"小心點","claire":"克萊爾","dessen":"誰的","muß":"必須","freuen":"期待","engel":"天使","offenbar":"顯然","gelegenheit":"機會","fang":"抓住","lüge":"謊言","ohren":"耳朵","angetan":"印象深刻","beeil":"快點","brechen":"打破","brüder":"兄弟","zeitpunkt":"時間","keinem":"沒有人","ecke":"角落","brücke":"橋","druck":"壓力","mitgebracht":"帶來了","seufzt":"嘆息","date":"日期","haufen":"堆疊","oma":"奶奶","auftrag":"訂單","leer":"空的","entkommen":"逃脫了","bobby":"鮑比","weißen":"白色","lösung":"解決方案","wart":"等待","pause":"打破","irre":"瘋狂的","gestellt":"提供","keller":"地下室","gebrochen":"壞了","weinen":"哭","nutzen":"使用","wünschen":"願望","fragt":"問","maul":"嘴","verantwortung":"責任","schloss":"關閉","hut":"帽子","lächeln":"微笑","ryan":"瑞安","red":"紅色","grad":"學位","zweiten":"第二","hinaus":"出","mitkommen":"來吧","vorhin":"早些時候","fahrt":"開車","gemeint":"意思是","ernsthaft":"認真地","gebaut":"建成","bombe":"炸彈","hasst":"討厭","versteh":"明白","kosten":"成本","zeige":"顯示","traf":"遇見","eigenes":"擁有","haar":"頭髮","fragte":"問","jason":"傑森","operation":"操作","befehle":"命令","schmerzen":"疼痛","erklärt":"解釋了","steve":"史蒂夫","dach":"屋頂","folge":"關注","gelaufen":"跑","schwarze":"黑色","dankbar":"感恩的","gehirn":"大腦","töte":"殺","mädels":"女孩","mut":"勇氣","heilige":"神聖的","laura":"勞拉","tier":"動物","system":"系統","mannes":"男人","wahnsinn":"瘋狂","nee":"不，不","rose":"玫瑰","club":"俱樂部","geschlossen":"關閉","hintern":"屁股","thema":"主題","fiel":"跌倒了","gehalten":"舉行","dorthin":"那裡","urlaub":"假期","steig":"上升","vorwärts":"前進","überprüfen":"檢查","besseres":"更好","beweis":"證明","baum":"樹","gebt":"給予","funktionieren":"工作","anscheinend":"顯然","lehrer":"老師","hoffen":"希望","bessere":"更好","isst":"吃","nachmittag":"午安","nem":"內姆","risiko":"風險","chuck":"卡磁碟","knast":"監獄","entschuldigt":"抱歉","gilt":"適用","held":"英雄","daraus":"從它","erstes":"第一","fräulein":"想念","rachel":"雷切爾","prima":"太棒了","brauchte":"需要的","gewalt":"暴力","dean":"院長","liebes":"親愛的","schaffst":"創造","nachdenken":"認為","tor":"門","erfahrung":"經驗","pläne":"計劃","jagen":"狩獵","katze":"貓","runde":"圓形","deutsche":"德文","schwanz":"尾巴","taten":"做了","lord":"主","commander":"指揮官","großvater":"祖父","sommer":"夏天","gezeigt":"顯示","hinterlassen":"留下","gewissen":"某些","getrunken":"喝了","wahre":"真實","luke":"路克","kunden":"顧客","kate":"凱特","zeugen":"證人","geplant":"計劃中的","amanda":"阿曼達","erreicht":"達到了","stören":"打擾","stein":"石頭","atmen":"呼吸","hose":"褲子","weiße":"白色的","sprichst":"說話","größer":"更大","schickt":"傳送","city":"城市","prinz":"王子","behandelt":"治療過的","tote":"死了","überlegen":"考慮","karten":"卡片","restaurant":"餐廳","welchem":"哪一個","roger":"羅傑","natur":"自然","carter":"卡特","emily":"艾米莉","mami":"媽媽","verschwindet":"消失","lautet":"是","streit":"爭議","küssen":"親吻","sprich":"說","längst":"很久以前","fängt":"捕獲物","drüber":"超過它","gingen":"去了","erlaubt":"允許","einzigen":"單身","bad":"浴室","schmeckt":"味道不錯","kugel":"球","normalerweise":"通常","schwarzen":"黑色","rauf":"向上","flug":"飛行","beruhigen":"冷靜下來","walter":"沃特","halbe":"一半","dan":"那麼","geschieht":"發生","einiges":"一些","entdeckt":"發現了","morgens":"早安","schlechter":"更糟","vollkommen":"完美的","gelogen":"撒謊了","verfolgt":"被追趕","college":"學院","weiteren":"進一步","chris":"克里斯","louis":"路易斯","schwert":"劍","hunde":"狗","steigen":"上升","verdammter":"該死的","dürfte":"應該","riecht":"氣味","labor":"實驗室","bat":"問","tim":"提姆","arthur":"亞瑟","mindestens":"至少","fisch":"魚","eurem":"你的","füße":"腳","stehst":"站","erschießen":"射擊","kuchen":"蛋糕","versuchte":"嘗試過","zustand":"條件","wunsch":"願望","gäste":"客人","erwähnt":"提到的","farbe":"顏色","van":"貨車","einigen":"一些","zufall":"巧合","garten":"花園","junger":"年輕的","autos":"汽車","abgesehen":"分開","vertraut":"熟悉的","koffer":"行李箱","hieß":"被稱為","kurs":"課程","wirkt":"作品","idioten":"白痴","netter":"更好","seitdem":"從那時起","angegriffen":"受到攻擊","geschichten":"故事","wahnsinnig":"瘋狂的","ähnlich":"類似的","lily":"百合","aufgeben":"放棄","england":"英格蘭","entführt":"被綁架","mistkerl":"混蛋","solchen":"這樣的","ner":"內爾","geschossen":"射擊","lager":"庫存","besprechen":"討論","reihe":"列","polizisten":"警察","vogel":"鳥","legt":"鋪設","strand":"海灘","amerikaner":"美國","schwarz":"黑色","fern":"遙遠的","fick":"他媽的","scherz":"開玩笑","san":"桑","erzählte":"告訴","wichser":"混蛋","jake":"傑克","langweilig":"無聊的","womit":"與什麼","geschäfte":"商店","kapiert":"明白了","nachher":"之後","verlangt":"要求的","schlägt":"節拍","überzeugt":"確信","irgendjemand":"任何人","soldat":"士兵","vorbereitet":"準備好了","geschah":"發生了","reisen":"旅行","termin":"預約","gang":"齒輪","stehlen":"偷","rechte":"權利","rache":"復仇","bemerkt":"注意到","frankreich":"法國","stört":"打擾","radio":"收音機","beruhige":"冷靜下來","pferde":"馬","vertrag":"契約","arbeitest":"工作","dienst":"服務","zählt":"計數","fragst":"你問","wesen":"眾生","bürgermeister":"市長","emma":"艾瑪","fluss":"河","woran":"什麼","geblieben":"留下來","durcheinander":"搞砸了","ted":"泰德","nette":"可愛","test":"測試","mister":"先生","dadurch":"從而","direktor":"導演","wichtiger":"更重要的是","kevin":"凱文","scott":"史考特","karriere":"職業生涯","akte":"行動","erinnerung":"記憶","großmutter":"祖母","erzähle":"告訴","lösen":"解決","bravo":"布拉沃","griff":"手把","verfolgen":"追求","zweifel":"懷疑","such":"搜尋","sprache":"語言","nerven":"神經","officer":"官員","andy":"安迪","langer":"更長","ziehe":"拉","entlassen":"被解僱","zweimal":"兩次","abholen":"拿起","washington":"華盛頓","kollegen":"同事","doc":"文件","fass":"桶","szene":"場景","robin":"知更鳥","scheinen":"似乎","bösen":"邪惡","schaffe":"創造","pflicht":"義務","wache":"守衛","neulich":"最近","beeilen":"快點","knie":"膝蓋","alice":"愛麗絲","lauter":"更響亮","spannende":"令人興奮的","unschuldig":"無辜的","folgt":"如下","schutz":"保護","weshalb":"為什麼","geheiratet":"已婚","woanders":"其他地方","wurdest":"成為","kuss":"親吻","verhindern":"防止","erklärung":"解釋","video":"影片","rom":"羅馬","klug":"聰明","kräfte":"力量","verlangen":"需求","außerhalb":"外面","opa":"爺爺","selbstverständlich":"當然","aufstehen":"起床","hassen":"討厭","pete":"皮特","gebrauchen":"使用","geglaubt":"相信","milch":"牛奶","trink":"喝","gefeuert":"被解僱","erinnerungen":"回憶","müssten":"必須","suchst":"正在尋找","fährst":"開車","kochen":"廚師","schwach":"弱","schreibt":"寫","schulden":"欠","hinein":"進入其中","simon":"西蒙","grenze":"邊界","braut":"新娘","gebraucht":"需要的","peinlich":"令人尷尬的","klappt":"作品","geheimnisse":"秘密","joey":"喬伊","aufmerksamkeit":"關注","form":"形式","umsonst":"免費","kennenzulernen":"去了解","überlebt":"倖存下來","nirgendwo":"無處可去","meilen":"英哩","einfacher":"更容易","blöde":"愚蠢的","mond":"月亮","ergibt":"結果","daten":"數據","merken":"記住","schande":"恥辱","fühlte":"毛氈","jenny":"珍妮","sieg":"勝利","satt":"受夠了","blödsinn":"廢話","adam":"亞當","lisa":"麗莎","pfund":"英鎊","handeln":"行動","lois":"路易斯","enden":"結束","raten":"建議","übersetzung":"翻譯","kunst":"藝術","kapitän":"隊長","desto":"越多","einsatz":"使用","schweigen":"沉默的","krankheit":"疾病","toller":"更棒","schatten":"影子","wachen":"守衛","tatsache":"事實","eric":"艾瑞克","stock":"庫存","chief":"酋長","hingehen":"去那裡","verboten":"禁止的","gäbe":"會存在","anzug":"西裝","leichen":"屍體","high":"高","beendet":"結束了","freitag":"週五","million":"百萬","verflucht":"被詛咒的","dunkel":"黑暗","geb":"出生","enttäuscht":"失望","klopfen":"敲門","spuren":"痕跡","dreck":"污垢","seiten":"頁面","mühe":"努力","gezogen":"拉","brian":"布萊恩","kontrollieren":"控制","knochen":"骨頭","schick":"別緻的","getrennt":"分開","programm":"節目","grab":"挖","ebenso":"同樣地","trage":"磨損","nachbarn":"鄰居","bieten":"報價","bestes":"最好的","elizabeth":"伊莉莎白","fuhr":"開車","verlässt":"葉子","dennoch":"儘管如此","rauchen":"抽煙","dick":"厚","stuhl":"椅子","dreh":"轉","bester":"最好的","schicke":"傳送","vergeben":"授予","ausgehen":"出去","behandeln":"對待","trotz":"儘管","gast":"客人","ändert":"變化","passierte":"發生了","toilette":"廁所","annehmen":"接受","herzlichen":"熱烈地","hexe":"女巫","erwachsen":"成人","jerry":"傑瑞","pistole":"手槍","saß":"坐","dreht":"旋轉","aussage":"聲明","liebte":"愛過","street":"街道","genießen":"享受","eifersüchtig":"嫉妒","derjenige":"那個","leo":"獅子座","zähne":"牙齒","beobachtet":"觀察到的","gentlemen":"先生們","wählen":"選擇","helft":"幫助","fliegt":"蒼蠅","theater":"劇院","regen":"雨","feinde":"敵人","william":"威廉","erlauben":"允許","zulassen":"允許","schnappen":"快照","komplett":"完成","panik":"恐慌","flughafen":"機場","bewusst":"有意識地","deutschen":"德文","voraus":"前面","sterbe":"死","solltet":"應該","begleiten":"陪伴","einander":"彼此","fred":"弗雷德","erlebt":"有經驗的","weiterhin":"繼續","stärker":"更強","fahrer":"司機","konzentrieren":"集中","streiten":"爭論","angeht":"擔憂","selben":"一樣","star":"明星","alkohol":"酒精","übersetzt":"翻譯的","verrückte":"瘋狂的","lch":"左旋","king":"國王","begann":"開始","angenommen":"已接受","weitermachen":"繼續","echter":"真實的","jackson":"傑克森","post":"貼文","mitgenommen":"被帶走","botschaft":"留言","ideen":"想法","fehlen":"失蹤","aufgeregt":"興奮","selbstmord":"自殺","dumme":"愚蠢的人","zurückkommen":"回來","irgendein":"任何","magie":"魔法","phil":"菲爾","schlage":"擊中","handelt":"行為","treffe":"見面","untersuchen":"調查","flucht":"詛咒","verliert":"失去","irgendeine":"任何","gegenteil":"對面","betrifft":"擔憂","scharf":"鋒利的","gehofft":"希望","kennengelernt":"遇見","schlimmste":"最糟糕的","projekt":"專案","trottel":"白痴","immerhin":"畢竟","mehrere":"幾個","erwarte":"期待","mochte":"喜歡","schwimmen":"游泳","zählen":"計數","innerhalb":"之內","matt":"沉悶的","blind":"盲人","schwestern":"姊妹們","code":"程式碼","alan":"艾倫","schlau":"聰明的","absicht":"意圖","barry":"巴里","spielst":"玩","zuletzt":"最後","oliver":"奧利佛","englisch":"英語","ohr":"耳朵","verletzen":"受傷","song":"歌曲","schüler":"學生","schien":"似乎","gewinnt":"獲勝","älter":"較老的","merkwürdig":"奇怪的","judy":"朱迪","vermisse":"想念","größe":"尺寸","tritt":"發生","trauen":"信任","präsidenten":"總統","trick":"伎倆","harvey":"哈維","doug":"道格","roten":"紅色","überlegt":"考慮到","größten":"最大的","sonntag":"週日","zwölf":"十二","vorstellung":"介紹","schrieb":"寫道","reinkommen":"進來","killer":"殺手","unterstützung":"支援","antun":"做","rechnung":"發票","dieselbe":"一樣的","verändern":"改變","möglicherweise":"可能","definitiv":"絕對","locker":"寬鬆的","vincent":"文森","ums":"嗯","abends":"晚上","frisch":"新鮮的","kohle":"煤","fing":"抓住了","cousin":"表弟","familien":"家庭","einsam":"孤獨","lebendig":"活著","heiligen":"使之成聖","knapp":"稀缺","ebenfalls":"還有","überprüft":"檢查過","artikel":"文章","gesetzt":"設定","jederzeit":"隨時","spüren":"感覺","signal":"訊號","amy":"艾米","stich":"針跡","kino":"電影院","probieren":"嘗試","tode":"死亡人數","wundervoll":"太棒了","tanz":"跳舞","geöffnet":"打開","kerle":"夥計們","begraben":"埋葬","prozent":"百分比","stoppen":"停止","hoheit":"殿下","riesen":"巨人","rote":"紅色","zugang":"訪問","liest":"讀","vorn":"前面","wichtige":"重要的","aufmachen":"開放","kelly":"凱莉","erlaubnis":"授權","grace":"恩典","big":"大","story":"故事","madam":"女士","leichter":"打火機","halben":"一半","filme":"電影","priester":"牧師","herauszufinden":"找出來","packen":"包包","dritte":"第三","inzwischen":"同時","larry":"拉里","presse":"按","sitze":"坐","machten":"製作","geklaut":"被盜","helden":"英雄","susan":"蘇珊","geduld":"耐心","bühne":"舞台","reparieren":"修理","usa":"美國","gerechtigkeit":"正義","fälle":"案例","selten":"罕見的","anrufe":"來電","julia":"茱莉亞","drücken":"按","mrs":"夫人","lügner":"騙子","endet":"結束","dave":"戴夫","medizin":"醫學","schreibe":"寫","verhaften":"逮捕","prozess":"過程","samstag":"星期六","amen":"阿門","motor":"引擎","marie":"瑪莉","abhauen":"逃跑","chaos":"混亂","schönheit":"美麗","beinahe":"幾乎","lebst":"直播","tolles":"太棒了","anhalten":"停止","fremden":"陌生人","hof":"庭院","akzeptieren":"接受","norden":"北","ärzte":"醫生","anziehen":"穿上","dingen":"東西","umgehen":"處理","bauch":"肚子","gesamte":"整個","hübsche":"漂亮","ertragen":"忍受","kiste":"盒子","brennt":"燒傷","teile":"分享","deckung":"封面","landen":"土地","berg":"山","straßen":"街道","aufgenommen":"記錄的","gerufen":"被稱為","untersuchung":"調查","alarm":"警報","blieb":"留下來","vertraue":"信任","extra":"額外的","entspann":"放鬆","beobachten":"觀察","eindruck":"印象","tschüs":"再見","babys":"嬰兒","wehtun":"受傷","zog":"拉","iss":"吃","herrgott":"天啊","echten":"真實的","springen":"跳躍","nackt":"裸體","existiert":"存在","befreien":"解放","gerät":"裝置","montag":"星期一","gezwungen":"被迫","perfekte":"完美的","erzählst":"告訴","bastard":"混蛋","interessieren":"有興趣","schlechten":"壞","hank":"漢克","steigt":"上升","carl":"卡爾","gekriegt":"得到了","fliehen":"逃離","trug":"穿著","freundschaft":"友誼","rate":"猜測","papiere":"論文","abgeschlossen":"已完成","schnauze":"閉嘴","beruf":"職業","gebiet":"面積","jeff":"傑夫","jedoch":"然而","beten":"祈禱","verbunden":"已連接","sprachen":"發言","verräter":"叛徒","wichtigste":"最重要的","prost":"乾杯","brust":"胸部","aufgehört":"停止了","kleider":"衣服","jacke":"夾克","bestellt":"已訂購","herkommen":"來這裡","wild":"野生的","nenne":"姓名","angesehen":"已查看","zuhören":"聽","trennen":"分開","schlafzimmer":"臥室","vorschlag":"建議","meins":"我的","gift":"毒藥","ton":"語氣","vermissen":"想念","angekommen":"到達","beantworten":"回答","deutlich":"清楚地","träumen":"夢想","verwirrt":"困惑","akten":"文件","riskieren":"風險","victor":"勝利者","find":"找到","erkannt":"認可的","beerdigung":"葬禮","müll":"垃圾","weisst":"知道","möge":"可能","stellte":"提出","mitte":"中","erleben":"經驗","geburt":"出生","decke":"毯子","wege":"方式","schritte":"步驟","gibts":"有","gemeldet":"報道","hilfst":"幫助","mittagessen":"午餐","weint":"哭泣","vernichten":"摧毀","rock":"搖滾","chicago":"芝加哥","ellen":"艾倫","crew":"船員","roy":"羅伊","türen":"門","gewehr":"步槍","elena":"埃琳娜","arbeitete":"工作過","spiegel":"鏡子","hauen":"擊中","geraten":"建議","dritten":"第三","ross":"羅斯","julie":"朱莉","wetter":"天氣","schwul":"同性戀","regel":"規則","befindet":"位於","einheit":"單位","german":"德文","armer":"更窮","gucken":"看看","anstatt":"相反","champagner":"香檳","gründe":"原因","strafe":"懲罰","smith":"史密斯","öfter":"更頻繁地","anne":"安妮","zelle":"細胞","langen":"長","altes":"老","ruiniert":"毀掉了","jonathan":"喬納森","kleidung":"服裝","gras":"草","kenn":"知道","agenten":"代理人","herausgefunden":"發現了","annie":"安妮","rechten":"對","brot":"麵包","berlin":"柏林","erfreut":"高興","lügt":"謊言","nehm":"採取","harte":"硬","staaten":"州","station":"車站","gaben":"給了","hinterher":"之後","verpassen":"想念","geholt":"取來的","jesse":"傑西","hemd":"襯衫","trinke":"喝","klären":"澄清","theorie":"理論","zunge":"舌頭","notfall":"緊急狀況","besseren":"更好","winter":"冬天","versuchst":"嘗試","dahinter":"在它後面","schwere":"重","feuern":"火","lucy":"露西","schießt":"芽","anführer":"領導者","schief":"彎曲的","bestens":"很好","wartest":"等待","gehts":"沒關係","morgan":"摩根","unrecht":"錯誤的","leck":"洩漏","wonach":"什麼","entwickelt":"發達的","bedeutung":"意義","strom":"電力","krebs":"癌症","gemein":"常見的","wessen":"誰的","minister":"部長","lhnen":"你","quelle":"來源","zahl":"數量","schiffe":"船舶","schüsse":"鏡頭","bricht":"休息","talent":"人才","spitze":"頂部","fernseher":"電視","treiben":"開車","ausgezeichnet":"優秀的","tatort":"犯罪現場","möglichkeiten":"可能性","trinkt":"飲料","esse":"吃","cop":"警察","details":"詳情","täter":"肇事者","wahren":"儲存","dieb":"小偷","offiziell":"官方","dienen":"服務","westen":"西","entscheidungen":"決定","dauernd":"不斷地","geschmack":"味道","gegenseitig":"彼此","gewählt":"當選","charlotte":"夏洛特","pech":"運氣不好","verteidigen":"捍衛","schauspieler":"演員","personen":"人","überlassen":"左","publikum":"觀眾","trägst":"攜帶","wechseln":"改變","begegnet":"遇到","betrogen":"被騙了","besucht":"訪問過","vertrau":"信任","europa":"歐洲","carrie":"嘉莉","patrick":"派崔克","deutschland":"德國","süßer":"更甜","loswerden":"擺脫","melde":"報告","maggie":"瑪姬","bestätigt":"已確認","gas":"氣體","sturm":"風暴","setze":"設定","briefe":"字母","null":"零","penny":"便士","schlafe":"睡覺","wirken":"行動","geführt":"領導","starten":"開始","götter":"眾神","festhalten":"堅持住","geheim":"秘密","übergeben":"移交","cia":"中央情報局","abteilung":"部門","papier":"紙","wetten":"打賭","gefolgt":"已關注","verschiedene":"各種","gleichzeitig":"同時","genie":"天才","hungrig":"餓了","inspektor":"檢驗員","zwingen":"力","atmet":"呼吸","kuh":"牛","geworfen":"拋出","verlor":"迷失了","süden":"南","pater":"父親","menschheit":"人性","versteck":"隱藏","tötete":"被殺","fähigkeiten":"技能","beruhigt":"平靜下來","rechtzeitig":"及時","streng":"嚴格","sendung":"出貨","gelebt":"住過","treppe":"樓梯","kim":"金","richtiger":"更正確","aufnehmen":"記錄","wolf":"狼","öffnet":"打開","dämon":"惡魔","wut":"憤怒","schlange":"蛇","medikamente":"藥物治療","geschenkt":"有天賦的","nenn":"姓名","gelegt":"放置","anfassen":"觸摸","pizza":"披薩","schlechtes":"壞","hütte":"小屋","mantel":"外套","behauptet":"索賠","kilometer":"公里","beeilung":"快點","angeblich":"據推測","reiten":"騎","helen":"海倫","mittag":"中午","gewarnt":"警告","wohne":"直播","las":"讀","dunkelheit":"黑暗","spazieren":"散步","angel":"天使","hiermit":"特此","schließt":"關閉","phoebe":"菲比","vieles":"很多","erfüllt":"實現了","tausend":"千","sack":"包包","eindeutig":"清楚地","unterhaltung":"娛樂","gründen":"建立","zugeben":"承認","mittel":"中等","explosion":"霹靂","gefangenen":"囚犯","taylor":"泰勒","frische":"新鮮度","verdächtigen":"嫌犯","neugierig":"好奇","leitung":"管理","kennenlernen":"去了解","fliege":"飛","lebte":"住過","menschliche":"人類的","anderem":"其他","auseinander":"分開","fressen":"吃","beides":"兩者","stoff":"布料","spüre":"感覺","eilig":"匆忙地","stammt":"來自","vorgestellt":"提出","linda":"琳達","welch":"其中","wichtiges":"重要的","gehörte":"屬於","mhm":"嗯","glaubte":"相信","oberst":"上校","schrank":"衣櫥","fremde":"陌生人","gnade":"恩典","chloe":"克洛伊","entspannen":"放鬆","virus":"病毒","schläfst":"睡覺","einladung":"邀請函","krieger":"戰士","vernünftig":"合理的","fein":"很好","greifen":"搶","whoa":"哇哦","kyle":"凱爾","schickte":"已發送","per":"每","mitglied":"會員","einziger":"只有一個","umzubringen":"殺死","zurückkehren":"返回","feld":"領域","mexiko":"墨西哥","erschaffen":"創造","information":"資訊","hergekommen":"來到這裡","beweg":"移動","stärke":"實力","vermögen":"資產","verbracht":"花費了","gewisse":"某些","waschen":"洗","howard":"霍華德","staat":"狀態","geister":"鬼魂","behaupten":"索賠","schrei":"尖叫","würdet":"會","vögel":"鳥","warnen":"警告","albert":"阿爾伯特","chancen":"機會","treibt":"驅動器","nannte":"被稱為","vermute":"猜測","mitternacht":"午夜","jones":"瓊斯","freundinnen":"女朋友","lecker":"好吃","klinik":"診所","dicht":"關閉","befinden":"位於","ließen":"讓","bürger":"國民","verursacht":"造成的","hammer":"錘子","klang":"響起","internet":"網際網路","aufregend":"令人興奮的","grenzen":"邊界","politik":"政治","superman":"超人","zurecht":"對","besitz":"佔有","cops":"警察","eingesperrt":"鎖起來","irren":"犯錯","kommando":"命令","schlug":"擊中","krankenwagen":"救護車","love":"愛","öffne":"打開","karen":"凱倫","richten":"直接","mademoiselle":"小姐","erfunden":"發明了","schnee":"雪","fühl":"感覺","behalte":"保留","beschützt":"受保護的","punkte":"點","entfernen":"刪除","abgehauen":"逃跑了","geträumt":"夢見","stefan":"斯特凡","dämonen":"惡魔","tränen":"眼淚","erfolgreich":"成功的","volle":"滿","wilson":"威爾森","caroline":"卡洛琳","höher":"更高","happy":"快樂","brille":"眼鏡","musstest":"不得不","heimat":"家","terry":"崔","liebsten":"最喜歡的","bye":"再見","leiter":"領導者","sean":"肖恩","kauf":"購買","spinnst":"你瘋了","werk":"工作","cent":"分","schlacht":"戰鬥","beziehungen":"關係","abgemacht":"同意","schreie":"尖叫","hmm":"嗯","erschreckt":"害怕","offizier":"官員","that":"那個","sara":"莎拉","affäre":"外遇","empfangen":"收到","zweck":"目的","kämpfe":"戰鬥","ergeben":"結果","china":"中國","fange":"抓住","häuser":"房屋","verliere":"失去","gedanke":"思想","tausende":"數千","heutzutage":"如今","gefühlt":"毛氈","schnitt":"切","carlos":"卡洛斯","harold":"哈羅德","lebend":"活著","real":"真實的","holz":"木頭","kaiser":"皇帝","spielte":"玩過","begonnen":"開始了","ziehst":"你拉","gelandet":"著陸","scheidung":"離婚","bart":"鬍鬚","beschlossen":"決定","klo":"廁所","riechen":"氣味","vergisst":"忘記了","begeistert":"激動","durchs":"透過","geil":"太棒了","nieder":"向下","erkläre":"解釋一下","schreckliche":"可怕的","beeindruckt":"印象深刻","vince":"文斯","aufgegeben":"被遺棄的","aufgrund":"由於","momentan":"目前","solch":"這樣的","meistens":"大部分","stress":"壓力","sterne":"星星","heilen":"治癒","soviel":"這麼多","kannten":"知道","stattdessen":"相反","aye":"是啊","dinger":"東西","stimmung":"心情","bulle":"公牛","aufgefallen":"注意到","kämpft":"打架","geräusch":"噪音","künstler":"藝術家","wachsen":"成長","verurteilt":"譴責","himmels":"天堂","tyler":"泰勒","urteil":"判斷力","schweine":"豬","nettes":"不錯","house":"房子","verlust":"損失","verließ":"左","wirf":"丟","wenige":"幾個","willie":"威利","schulter":"肩膀","kalifornien":"加州","lernt":"學習","beigebracht":"教過的","normale":"正常","anbieten":"報價","verwenden":"使用","gratuliere":"恭喜","fluch":"詛咒","rick":"瑞克","übers":"反式","unterricht":"教訓","dachtest":"你以為","verarschen":"開玩笑","gewöhnt":"習慣","anklage":"指責","tollen":"太棒了","lippen":"嘴唇","fett":"脂肪","lege":"躺著","feigling":"膽小鬼","achten":"注意","gary":"蓋瑞","erfährt":"學習","gewohnt":"平常","jessica":"潔西卡","äußerst":"極為","einladen":"邀請","käse":"起司","aufwachen":"醒來","verfügung":"可用","uniform":"制服","zusehen":"手錶","gesundheit":"健康","abenteuer":"冒險","hosen":"褲子","kurze":"短","scheck":"檢查","täglich":"每日","fresse":"吃","übernehme":"接管","cole":"科爾","universum":"宇宙","zeuge":"證人","west":"西","marshall":"馬歇爾","fähig":"有能力的","revier":"領土","reifen":"成熟的","mum":"媽媽","führe":"鉛","durchgemacht":"經歷過","tests":"測試","führte":"領導","schenken":"給予","schädel":"頭骨","realität":"現實","april":"四月","albern":"愚蠢的","brav":"好","schwerer":"較重","jagd":"狩獵","versagt":"失敗了","truck":"卡車","steckst":"卡住了","geschenke":"禮物","sicherlich":"當然","öffentlichkeit":"公開的","merkt":"通知","verbrecher":"罪犯","maske":"面具","verstärkung":"加固","liefern":"交付","starke":"強","grunde":"原因","gordon":"戈登","würd":"會","verschwand":"消失了","schulde":"債務","russen":"俄羅斯人","führer":"領導者","gemerkt":"注意到","ciao":"再見","loslassen":"放手","berichten":"報告","verabschieden":"說再見","antrag":"要求","schieß":"射擊","abby":"艾比","benehmen":"表現","verdacht":"懷疑","hübsches":"漂亮","schreibtisch":"書桌","vampir":"吸血鬼","rory":"羅裡","probe":"樣品","schaff":"創造","verzeih":"原諒","patient":"病人","geküsst":"親吻","ertönt":"聲音","nahmen":"採取了","zahlt":"支付","verbrannt":"燒毀","verdammtes":"該死的","frankie":"法蘭基","informiert":"知情的","einziges":"只有一個","zucker":"糖","stinkt":"發臭","schnappt":"快照","schreib":"寫","standen":"站著","klamotten":"衣服","heil":"治癒","besitzer":"業主","marcus":"馬庫斯","tess":"苔絲","drum":"這就是為什麼","tasse":"杯子","hinweis":"註解","verteidigung":"防禦","lügst":"謊言","lies":"讀","magen":"胃","enterprise":"企業","michelle":"米歇爾","beeilt":"快點","tunnel":"隧道","einst":"一次","behandlung":"治療","serie":"系列","applaus":"掌聲","markt":"市場","korrekt":"正確","besessen":"著迷的","bewahren":"儲存","pack":"包包","gekämpft":"戰鬥過","black":"黑色","angreifen":"攻擊","tiefer":"更深","huh":"呵呵","truppen":"部隊","kommandant":"指揮官","osten":"東","elf":"十一","beeindruckend":"令人印象深刻","besitzt":"擁有","heut":"今天","clever":"聰明","verrückten":"瘋狂的","freien":"免費","hass":"討厭","antworte":"回答","posten":"貼文","schneiden":"切","sammeln":"收集","gesteckt":"已插入","wissenschaft":"科學","ursache":"原因","gewiss":"當然","bereich":"面積","catherine":"凱瑟琳","meinetwegen":"為了我","senator":"參議員","ausziehen":"起飛","verzweifelt":"絕望的","jess":"傑西","anteil":"分享","stets":"總是","ritter":"騎士","viertel":"季度","roman":"小說","erfüllen":"執行","kauft":"買","molly":"莫莉","basis":"基地","eva":"伊娃","schock":"震驚","empfang":"接待處","wiederhole":"重複","wünscht":"願望","besondere":"特別的","titel":"標題","stil":"風格","fingerabdrücke":"指紋","einfluss":"影響力","anweisungen":"說明","zahle":"付錢","shield":"盾牌","opfern":"犧牲","blaue":"藍色","sparen":"儲存","weiteres":"進一步","gehörst":"屬於","farm":"農場","erstaunlich":"驚人的","schwachsinn":"廢話","miete":"租金","verwandelt":"轉變的","daneben":"在它旁邊","klaus":"克勞斯","bereiten":"準備","wüste":"沙漠","prüfen":"檢查","gabe":"加貝","hundert":"一百","erscheinen":"出現","laß":"讓","besiegen":"失敗","verpiss":"滾蛋","umständen":"情況","angelegenheit":"事","landes":"國家","dienstag":"星期二","folgendes":"以下","fürchten":"恐懼","mordes":"謀殺","nennst":"打電話","angestellt":"受僱的","training":"訓練","aufgetaucht":"出現了","rausfinden":"找出來","ächzt":"呻吟聲","rauskommen":"出來","planet":"行星","suppe":"湯","erwischen":"抓住","sitz":"坐","johnson":"約翰遜","vorteil":"優勢","for":"為了","rosa":"粉紅色","tour":"遊覽","amerikanische":"美國","schönste":"最美麗","rufst":"你打電話","berührt":"感動","französisch":"法語","gouverneur":"州長","angeles":"安吉利斯","kaufe":"買","stern":"明星","gedächtnis":"記憶","wirklichkeit":"現實","bestraft":"受到懲罰","kreis":"圓圈","reine":"純粹的","edward":"愛德華","schlimmes":"壞","bestehen":"存在","jeannie":"珍妮","erscheint":"出現","staatsanwalt":"檢察官","ewigkeit":"永恆","störung":"紊亂","hässlich":"醜陋","lauft":"運行","angezogen":"穿著","half":"幫助了","sollt":"應該","martha":"瑪莎","tiger":"老虎","zigarette":"香菸","mutig":"勇敢的","ausruhen":"休息","andrew":"安德魯","linken":"左","hauptmann":"隊長","umstände":"情況","not":"不","unglück":"不幸","eng":"緊","white":"白色","lucas":"盧卡斯","üben":"練習","wissenschaftler":"科學家","gelöst":"解決了","reaktion":"反應","morde":"謀殺","dusche":"淋浴","mitarbeiter":"員工","your":"你的","bedroht":"受到威脅","gehöre":"屬於","befreit":"釋放了","stöhnen":"呻吟","reagiert":"回應了","identität":"身分","rund":"圓形","texas":"德州","fieber":"發燒","hirn":"大腦","leiten":"指南","donnerstag":"星期四","leonard":"倫納德","unheimlich":"可怕的","mulder":"穆德","jahrhundert":"世紀","irgend":"任何","diener":"僕人","bruce":"布魯斯","extrem":"極端","ausweis":"身分證","sicht":"查看","sport":"體育","juden":"猶太人","studiert":"研究過","angelogen":"說謊","schaue":"看看","little":"小","sally":"莎莉","text":"文字","earl":"伯爵","nebenan":"隔壁","todd":"托德","lektion":"教訓","mäuse":"老鼠","staub":"灰塵","sophie":"蘇菲","kugeln":"球","dutzend":"十幾個","ratte":"老鼠","mitleid":"可惜","testen":"測試","auftritt":"發生","gegner":"對手","joseph":"約瑟夫","verdienst":"優點","langsamer":"較慢","wunde":"傷口","linie":"線","bedrohung":"威脅","bauer":"農民","kurzem":"最近","fische":"魚","einkaufen":"購物","kreuz":"十字","afrika":"非洲","begangen":"致力於","nachsehen":"看看","junior":"初級","bäume":"樹","leidenschaft":"熱情","geliebte":"親人","bereuen":"遺憾","spieler":"玩家","berge":"山","verwendet":"使用過的","steuern":"控制","gekümmert":"照顧","voran":"前面","wieviel":"多少","barney":"巴尼","graf":"計數","verabredung":"預約","verlasse":"離開","überfallen":"遭到伏擊","donna":"唐娜","umdrehen":"轉身","damon":"達蒙","kilo":"公斤","diego":"迭戈","schild":"盾牌","tanzt":"跳舞","verbrennen":"燒傷","gefreut":"高興","penner":"流浪漢","blauen":"藍色","jay":"傑伊","stücke":"件","angela":"安琪拉","kühlschrank":"冰箱","identifizieren":"識別","lehrerin":"老師","francisco":"弗朗西斯科","kameras":"相機","zentrale":"中央","jäger":"獵人","josh":"喬許","wayne":"韋恩","wenden":"轉","holst":"獲取","suchte":"搜尋過","start":"開始","füßen":"腳","unglücklich":"不高興","frohe":"快樂","sand":"沙子","pfarrer":"牧師","plus":"加號","nancy":"南希","brachten":"帶來了","zauber":"魔法","berühren":"觸摸","rückkehr":"返回","hafen":"港口","indianer":"印度人","miller":"米勒","verschwenden":"廢棄物","untersucht":"檢查過","königs":"皇家的","jean":"吉恩","lese":"讀","stahl":"鋼","hättet":"會有","affen":"猴子","worten":"話","kindheit":"童年","gewollt":"通緝","fabrik":"工廠","aussagen":"作證","wunderbare":"太棒了","grandpa":"爺爺","miststück":"母狗","verrückter":"瘋狂的","lane":"車道","jungfrau":"處女","einfache":"簡單","nate":"內特","laufe":"跑","reingelegt":"被欺騙","seltsame":"奇怪的","heiratet":"結婚","angenehm":"愉快的","daheim":"在家","planen":"計劃","klauen":"偷","geruch":"氣味","marty":"馬蒂","klingen":"聲音","tina":"蒂娜","nächster":"下一個","hörten":"聽到","jackie":"傑基","trafen":"遇見","ungern":"不情願地","abgelehnt":"被拒絕","erstens":"首先","abmachung":"協定","appetit":"食慾","miami":"邁阿密","zeigte":"顯示","fan":"風扇","hohen":"高","alf":"阿爾夫","ladys":"女士們","sms":"簡訊","verkauf":"銷售","jamie":"傑米","verbergen":"隱藏","sorgt":"確保","karl":"卡爾","sohnes":"兒子","berühmt":"著名的","aussteigen":"出去","bonnie":"邦妮","ginge":"會去","reingehen":"進去","durfte":"被允許","korrektur":"修正","wirft":"投擲","titten":"山雀","betreten":"輸入","todes":"死亡","one":"一","doctor":"醫生","blöden":"愚蠢的","miles":"英哩","rausholen":"出去","hohe":"高","aufnahme":"錄音","holmes":"福爾摩斯","hübscher":"更漂亮","vegas":"維加斯","manager":"主管","stellung":"位置","höhle":"洞穴","schokolade":"巧克力","angeboten":"提供","befreundet":"朋友","weib":"女","ausgerechnet":"萬物的","walker":"沃克","beibringen":"教","nelson":"納爾遜","belohnung":"獎勵","seelen":"靈魂","steine":"石頭","garage":"車庫","scheißkerl":"混蛋","gestört":"不安的","cooper":"庫柏","ruhen":"休息","pillen":"藥丸","gepäck":"行李","carol":"卡羅爾","norman":"諾曼","zoe":"佐伊","amerikanischen":"美國","telefonieren":"打電話","heirate":"結婚","erkenne":"認出","funk":"收音機","grüß":"問候","hurensohn":"王八蛋","mögliche":"可能","spring":"跳躍","uni":"大學","scheinbar":"顯然","fakten":"事實","informieren":"通知","jugend":"青年","feier":"慶祝活動","wenigen":"幾個","söhne":"兒子們","benzin":"汽油","nix":"什麼都沒有","vampire":"吸血鬼","erkennt":"認識到","sicherer":"更安全","zigaretten":"香菸","dummes":"愚蠢的","mauer":"牆","erneut":"再次","flügel":"翼","schluck":"吞嚥","hierbleiben":"留在這裡","abschluss":"結論","christus":"基督","bezahle":"付錢","böses":"邪惡","dummkopf":"愚蠢的","gerüchte":"謠言","eingestellt":"設定","weitergehen":"繼續前進","technik":"科技","ali":"阿里","bezweifle":"懷疑","piper":"風笛手","over":"結束","gekostet":"成本","anzeige":"廣告","wohnst":"直播","hans":"漢斯","ergebnis":"結果","bedingungen":"條件","brad":"布拉德","aufzuhalten":"停止","versprich":"承諾","verdiene":"應得的","geschnappt":"抓住了","francis":"法蘭西斯","eile":"快點","innen":"裡面","italien":"義大利","einig":"同意","verhandeln":"談判","weswegen":"為什麼","nützlich":"有用的","inneren":"內在","gentleman":"紳士","felix":"菲利克斯","vergesse":"忘記","dunkle":"黑暗","warnung":"警告","gemeinde":"社群","diamanten":"鑽石","wächst":"成長","gewöhnlich":"平常","seil":"繩子","bär":"熊","euro":"歐元","großartige":"太棒了","beth":"貝絲","ware":"貨物","traurige":"悲傷的","persönliche":"個人的","figur":"圖","time":"時間","roboter":"機器人","anschauen":"看看","kürzlich":"最近","material":"材料","paula":"保拉","käme":"會來","stellst":"把","bereitet":"準備好了","einfallen":"發生","käfig":"籠子","fantasie":"幻想","brach":"壞了","satz":"句子","kommissar":"專員","exzellenz":"卓越","schuldest":"你欠","nass":"濕的","rächen":"復仇","womöglich":"可能","begrüßen":"歡迎","lou":"大樓","davis":"戴維斯","überraschen":"驚喜","menschlichen":"人類的","repariert":"修復了","führung":"領導力","gestanden":"承認了","jacob":"雅各","schütze":"保護","störe":"打擾","nina":"妮娜","filmen":"電影","jobs":"職位","maschinen":"機器","unterlagen":"文件","palast":"宮殿","graben":"挖","kette":"鏈條","auftauchen":"出現","interessante":"有趣的","wovor":"從什麼","springt":"跳躍","terroristen":"恐怖分子","stan":"史丹","bekämpfen":"戰鬥","lärm":"噪音","flehe":"乞求","aufgewachsen":"長大了","arbeiter":"勞工","größere":"更大","humor":"幽默","betrachten":"考慮","organisation":"組織","widerstand":"抵抗力","bergen":"恢復","studio":"工作室","hausaufgaben":"作業","vögeln":"他媽的","bescheuert":"愚蠢的","weggehen":"走開","teller":"盤子","original":"原創","revolution":"革命","hitler":"希特勒","mädel":"女孩","verbinden":"連接","nathan":"內森","ermittlungen":"調查","steck":"插頭","wäsche":"洗衣","rätsel":"拼圖","besonderen":"特別的","hunderte":"數百","versetzt":"偏移量","bibel":"聖經","heiliger":"霍利爾","reiß":"眼淚","kopie":"複製","besitzen":"擁有","zeitungen":"報紙","zurückgekommen":"回來了","süßes":"甜甜的","barbara":"芭芭拉","ungewöhnlich":"不尋常的","höhe":"高度","geschaffen":"已創建","ausgesucht":"已選擇","dunklen":"黑暗","ignorieren":"忽略","toter":"死了","deck":"甲板","narr":"傻瓜","scheißegal":"別他媽的","höchstens":"至多","übersehen":"被忽視的","geirrt":"誤會","darunter":"在下面","außen":"外面","einzig":"僅","stirbst":"死","lhren":"你的","spielchen":"遊戲","girl":"女孩","fahrrad":"自行車","wilde":"野生的","jordan":"約旦","rauch":"抽煙","verschiedenen":"不同的","kamst":"來了","betty":"貝蒂","pool":"泳池","hubschrauber":"直升機","wüssten":"會知道","erstmal":"首先","kollege":"同事","vernichtet":"被摧毀","gesichter":"臉孔","derselbe":"一樣","hattet":"有","konto":"帳戶","freie":"免費","casey":"凱西","haken":"鉤子","munition":"彈藥","sünde":"罪惡","militär":"軍事","gefasst":"抓住了","anzeichen":"跡象","geklappt":"工作過","hintergrund":"背景","erwähnen":"提及","tipp":"小費","reißen":"眼淚","keins":"無","genial":"輝煌的","berichte":"報告","kram":"東西","schnapp":"快照","solle":"應該","randy":"蘭迪","umziehen":"移動","zunächst":"最初","keinerlei":"沒有任何","typisch":"典型的","bietet":"優惠","leb":"直播","technologie":"科技","ruinieren":"廢墟","jünger":"年輕的","poirot":"波洛","umso":"更何況","starben":"死了","rette":"儲存","triffst":"見面","unhöflich":"粗魯的","safe":"安全","anzurufen":"打電話","universität":"大學","mai":"五月","heben":"電梯","koch":"廚師","derselben":"一樣的","katastrophe":"災難","male":"油漆","olivia":"奧莉維亞","prüfung":"考試","brown":"棕色","gesetze":"法律","meeting":"會議","versicherung":"保險","getragen":"磨損的","ehefrau":"妻子","mitmachen":"加入","tauschen":"交換","ergebnisse":"結果","boston":"波士頓","reg":"註冊","einstellen":"設定","reagieren":"反應","gefehlt":"失蹤","verwandeln":"變換","gedauert":"持續","senden":"傳送","blair":"布萊爾","reporter":"記者","abgeben":"放棄","parker":"帕克","anhören":"聽","bibliothek":"圖書館","japan":"日本","hinsetzen":"坐下","hannah":"漢娜","serena":"瑟琳娜","motiv":"動機","paige":"佩奇","schalten":"開關","derek":"德瑞克","gewöhnen":"習慣","lernte":"學到了","vereinigten":"聯合","gewicht":"重量","zweiter":"第二","badezimmer":"浴室","schieben":"推","dreimal":"三次","weich":"軟的","gut":"好","gehen":"去","einfach":"容易","weil":"因為","damit":"與那個","schön":"美麗的","helfen":"幫助","finden":"找到","hören":"聽到","essen":"吃","schnell":"快點","fragen":"問","sprechen":"說話","fahren":"開車","ruhig":"冷靜","kurz":"短","suchen":"搜尋","lang":"長","verstehen":"明白","deshalb":"因此","während":"同時","wichtig":"重要的","trinken":"喝","alt":"老","möglich":"可能","zuerst":"第一","langsam":"慢慢地","trotzdem":"無論如何","danach":"之後","lernen":"學習","verlieren":"失去","groß":"大","krank":"生病了","erklären":"解釋一下","kaufen":"買","laut":"大聲","schreiben":"寫","sobald":"一旦","außerdem":"除此之外","lesen":"讀","obwohl":"雖然","neu":"新的","bezahlen":"付錢","klein":"小","kalt":"冷","antworten":"回答","entscheiden":"決定","wohnen":"直播","allerdings":"然而","verantwortlich":"負責的","schließlich":"最後","schwierig":"困難","dringend":"緊急的","fair":"公平","rot":"紅色","warm":"溫暖","freundlich":"友善的","teuer":"昂貴","überzeugen":"說服","kompliziert":"複雜的","unterschreiben":"標誌","praktisch":"實用的","blau":"藍色","unterstützen":"支援","bestätigen":"確認","grün":"綠色","wiederholen":"重複","bestellen":"訂單","freiwillig":"自願的","vorbereiten":"準備","pünktlich":"準時","negativ":"消極的","vermeiden":"避免","beschreiben":"描述","notwendig":"必要的","bequem":"舒適","echtes":"真實的","zweitens":"其次","drachen":"龍","bahnhof":"車站","erschöpft":"筋疲力盡","genauer":"更精確","verlange":"需求","spanisch":"西班牙語","verrat":"背叛","hexen":"女巫","live":"直播","legende":"傳說","taub":"聾子","freu":"快樂","konzert":"音樂會","hopp":"哎呀","wiederzusehen":"再次見到","doppelt":"雙","last":"最後","vergleich":"比較","böser":"更邪惡","herzlich":"熱烈地","monica":"莫妮卡","taschen":"袋子","genügt":"就足夠了","besucher":"訪客","spanien":"西班牙","großzügig":"慷慨","teddy":"泰迪熊","hauses":"房子","leihen":"借","scheiden":"離婚","einstellung":"設定","köstlich":"好吃","watson":"華森","einheiten":"單位","wichtigen":"重要的","warne":"警告","russland":"俄羅斯","angeschossen":"射擊","sammy":"薩米","pierre":"皮埃爾","sklaven":"奴隸","laune":"心情","gesamten":"整個","stille":"沉默","asche":"灰燼","geflogen":"飛過","spion":"間諜","what":"什麼","aaron":"亞倫","weihnachtsmann":"聖誕老公公","hervorragend":"優秀的","can":"可以","verärgert":"心煩意亂","puppe":"娃娃","überfall":"突襲","unwichtig":"不重要的","santa":"聖誕老公公","linke":"左","übung":"鍛鍊","buffy":"血沉棕黃","franzosen":"法語","wehgetan":"受傷","schwäche":"弱點","couch":"沙發","cousine":"表弟","grant":"授予","atme":"呼吸","irgendeinem":"任何人","unterstützt":"支援","oscar":"奧斯卡","ausdruck":"表達","pleite":"壞了","beleidigt":"侮辱","knopf":"按鈕","stop":"停止","schlimme":"壞的","beweist":"證明","katie":"凱蒂","dramatische":"戲劇性的","heutigen":"今天","leere":"空的","island":"冰島","shane":"謝恩","daisy":"雛菊","trinkst":"喝","heimlich":"偷偷地","eingehen":"輸入","rad":"輪子","greift":"佔據主導地位","mächtig":"強大的","williams":"威廉斯","sinnlos":"無意義的","versaut":"搞砸了","netz":"網","atem":"呼吸","anstellen":"僱用","milliarden":"十億","flotte":"輕快的","umgebung":"環境","mitbringen":"隨身攜帶","beteiligt":"涉及","dunkeln":"變暗","entwickeln":"發展","schämen":"羞愧","erwachsene":"成人","zack":"繁榮","durchsuchen":"瀏覽","hollywood":"好萊塢","rollen":"卷","vergesst":"忘記","tricks":"技巧","plätze":"地方","gefangene":"囚犯","sünden":"罪惡","sender":"發射機","verlass":"離開","räumen":"清晰","lerne":"學習","rettet":"節省","hinweise":"筆記","ausreden":"藉口","alexander":"亞歷山大","mommy":"媽媽","diejenige":"那個","nächte":"夜晚","herrscht":"佔上風","bud":"芽","jahres":"年","dna":"脫氧核糖核酸","romantisch":"浪漫的","flüstert":"竊竊私語","drück":"按","jeremy":"傑瑞米","bedanken":"謝謝你","verabredet":"同意","pilot":"飛行員","colt":"小馬","nigger":"黑鬼","reizend":"可愛的","grade":"直","stanley":"史丹利","leib":"身體","stecke":"卡住了","scheisse":"狗屎","ärztin":"醫生","vergewaltigt":"被強姦","mußt":"必須","lieferung":"交貨","botschafter":"大使","studieren":"學習","köpfe":"頭","duschen":"淋浴","kopfschmerzen":"頭痛","knarre":"吱吱作響","sekretärin":"秘書","phase":"階段","handschellen":"手銬","lewis":"路易斯","versehen":"提供","bande":"幫派","treu":"忠實的","positiv":"積極的","meiste":"大多數","museum":"博物館","albtraum":"惡夢","margaret":"瑪格麗特","verlobt":"訂婚了","besiegt":"擊敗","existieren":"存在","könne":"可以","proben":"排練","beschissen":"蹩腳的","gewinne":"贏","personal":"人員","christian":"基督徒","bewaffnet":"武裝的","fällen":"秋天","wecken":"醒來","wirkung":"效果","kurt":"庫爾特","connor":"康納","rebecca":"麗貝卡","therapie":"治療","travis":"崔維斯","amüsieren":"逗樂","ordentlich":"整齊","weglaufen":"逃跑","aufgewacht":"醒了","nähern":"方法","decken":"封面","sinne":"感官","leutnant":"中尉","zauberer":"嚮導","hogan":"霍根","bittet":"問","ankunft":"到達","klopft":"敲門","abstand":"距離","bewusstsein":"意識","nation":"民族","kontrolliert":"受控的","treffer":"擊中","abnehmen":"減肥","ratten":"老鼠","anwälte":"律師","tempel":"寺廟","vergiftet":"中毒的","kunde":"顧客","august":"八月","wunden":"傷口","unangenehm":"不愉快的","ausrüstung":"裝置","segen":"祝福","präsentiert":"提出","schließ":"關閉","kehle":"喉嚨","krone":"皇冠","garantiert":"保證","durchsucht":"搜尋過","president":"總統","tracy":"崔西","verfluchte":"被詛咒的","bestimmten":"某些","clay":"黏土","ladies":"女士們","ladung":"收費","beinen":"腿","hell":"明亮","kent":"肯特","kapitel":"章","chase":"追逐","benutze":"使用","alibi":"不在場證明","ziele":"目標","bestie":"野獸","gus":"格斯","nirgends":"無處可去","wohnzimmer":"客廳","beute":"獵物","bau":"大樓","brennen":"燒傷","lex":"萊克斯","durst":"口渴","logan":"羅根","schwarzer":"黑色","schmutzig":"骯髒的","liebhaber":"情人","ersetzen":"替換","juli":"七月","verfahren":"程式","kirk":"考克","stiefel":"靴子","inspector":"檢驗員","allzu":"也","camp":"營地","dürft":"可能","orten":"地方","hitze":"熱","spielzeug":"玩具","gloria":"格洛麗亞","wolle":"想要","knurrt":"咆哮聲","meldet":"報告","rita":"麗塔","zone":"區","trocken":"幹","lincoln":"林肯","schreibst":"寫","audrey":"奧黛麗","quinn":"奎因","probier":"嘗試","kids":"孩子們","unterschrieben":"簽署","heulen":"哭","entschlossen":"已確定","paket":"包包","gefiel":"喜歡","bekamen":"得到了","netten":"不錯的","geheime":"秘密","jennifer":"珍妮佛","aktiviert":"啟動的","ausweg":"出路","hinweg":"離開","schmuck":"珠寶","ausgang":"輸出","wunderschöne":"美麗的","zurückkommt":"回來了","ann":"安","illegal":"非法的","ferien":"假期","persönlichen":"個人的","geiseln":"人質","segne":"祝福","normaler":"更正常","steuer":"稅","aufgepasst":"小心","murphy":"墨菲","raumschiff":"太空船","dummen":"愚蠢的","weißer":"更白","ausbildung":"訓練","klavier":"鋼琴","hauptsache":"主要的事情","admiral":"海軍上將","entgegen":"相反","fasse":"把握","strecke":"伸展","julian":"朱利安","version":"版本","hilfreich":"有幫助的","schweren":"重","jahrelang":"多年來","leeren":"空的","küste":"海岸","baron":"男爵","behörden":"當局","grüße":"問候","geklärt":"澄清了","bruders":"兄弟","kaufte":"買了","stone":"石頭","puls":"脈衝","blue":"藍色","flur":"走廊","denselben":"一樣的","rettung":"救援","widerlich":"噁心的","parkplatz":"停車場","katzen":"貓","laster":"惡習","sozusagen":"可以這麼說","mittwoch":"星期三","unschuldige":"無辜者","abwarten":"等等看","grandma":"奶奶","florida":"佛羅裡達州","grünen":"果嶺","könntet":"可以","aufnahmen":"錄音","vision":"願景","schauspielerin":"女演員","passe":"透過","sing":"唱歌","glückliche":"快樂的人","highschool":"高中","friedhof":"墓園","irrtum":"錯誤","klienten":"客戶","nervt":"煩人的","leidet":"受苦","reverend":"牧師","trainieren":"火車","gegenwart":"現在","zurückbringen":"帶回來","herman":"赫曼","protokoll":"協定","studenten":"學生","durchaus":"絕對","grausam":"殘酷的","höchste":"最高","verwickelt":"糾纏","schmecken":"味道","klappen":"折疊","apropos":"說到","liz":"麗茲","alfred":"阿爾弗雷德","ansonsten":"否則","wade":"韋德","missverständnis":"誤會","mitglieder":"會員","motorrad":"摩托車","mickey":"米奇","blicken":"看看","glücklicher":"更快樂","hübschen":"漂亮","dicke":"厚","gewünscht":"想要的","gejagt":"被獵殺","diejenigen":"那些","diskutieren":"討論","pinkeln":"尿尿","huhn":"雞","erheben":"提高","paradies":"天堂","tagebuch":"日記","möglichen":"可能","jenseits":"超越","arschlöcher":"混蛋","apartment":"公寓","mason":"梅森","pfeift":"口哨聲","dieselben":"一樣的","wilden":"野生的","vergaß":"忘記了","enttäuschen":"失望","greg":"格雷格","konsequenzen":"後果","fleck":"污點","macgyver":"麥吉弗","führerschein":"駕駛執照","online":"網路","bete":"祈禱","verdächtige":"嫌犯","enkel":"孫子","normalen":"正常","stift":"筆","interview":"訪談","süßen":"變甜","riesige":"巨大的","aussicht":"查看","ned":"內德","wiederkommen":"回來","werbung":"廣告","warf":"丟了","telefoniert":"打電話的","anblick":"視線","einzelnen":"個人的","teppich":"地毯","hielten":"舉行","handel":"貿易","gekannt":"已知的","getrieben":"驅動的","trainer":"教練","scully":"斯卡利","schuh":"鞋","bomben":"炸彈","kämpfer":"戰鬥機","victoria":"維多利亞","bedenken":"考慮","sitzung":"會話","ken":"肯","sicheren":"安全","verkaufe":"賣","ron":"榮恩","tapfer":"勇敢的","experiment":"實驗","besorge":"得到","tiefe":"深度","narren":"傻瓜","abgeholt":"拿起","abhalten":"延遲","bestimmte":"某些","laufenden":"正在進行的","auftaucht":"出現","school":"學校","löschen":"刪除","tara":"塔拉","sebastian":"賽巴斯蒂安","mies":"糟糕的","sarg":"棺材","vertragen":"容忍的","gebissen":"被咬","geheimen":"秘密","drinks":"飲料","schlief":"睡了","tradition":"傳統","soeben":"剛才","komische":"有趣的","schultz":"舒爾茨","aufgehalten":"停止了","fähigkeit":"能力","attraktiv":"有吸引力的","begriff":"概念","versichere":"確保","schilde":"盾牌","legte":"鋪設","mitteilen":"溝通","sdh":"SDH","gemütlich":"舒適","muster":"圖案","versprach":"答應的","überwachen":"監視器","eingeschlafen":"睡著了","schlimmsten":"最糟糕的","verlierst":"失去","einzelne":"個人的","vergib":"原諒","vorbeikommen":"過來","aua":"哎呀","brüste":"乳房","sandwich":"三明治","gewinner":"獲勝者","verständnis":"理解","raymond":"雷蒙德","papst":"教宗","toast":"吐司","matthew":"馬修","einsteigen":"進去","löwen":"獅子","einsetzen":"插入","gewinn":"利潤","schüchtern":"害羞的","scheinst":"似乎","pflanzen":"植物","green":"綠色","sheldon":"謝爾頓","christopher":"克里斯多福","hätt":"會有","coach":"教練","werte":"價值觀","modell":"型號","übernimmt":"接管","walton":"沃爾頓","heftig":"暴力的","vorfall":"事件","motel":"汽車旅館","teams":"團隊","irgendeinen":"任何人","müsstest":"必須","freier":"自由者","zirkus":"馬戲團","ruhm":"榮耀","zurzeit":"目前","ausmachen":"弄清楚","rezept":"食譜","töchter":"女兒們","laute":"大聲","akzeptiert":"已接受","geschwindigkeit":"速度","beliebt":"流行的","verpflichtet":"有義務","betrüger":"騙子","lohnt":"值得","märchen":"童話故事","blöder":"更愚蠢的","becky":"貝基","wille":"會","hügel":"山","königreich":"王國","dennis":"丹尼斯","kehren":"掃","baut":"建構","chinesen":"中文","gesichert":"安全的","michel":"米歇爾","ruth":"露絲","block":"區塊","belogen":"說謊","malen":"油漆","kofferraum":"樹幹","road":"路","bursche":"同胞","erin":"艾琳","geständnis":"懺悔","ausgegangen":"出去了","begreifen":"明白","dana":"達納","blitz":"閃電","löst":"解決","furcht":"恐懼","jersey":"球衣","ernstes":"嚴重的","verteilt":"分散式","bezüglich":"關於","faszinierend":"迷人的","aufmerksam":"細心的","aufregung":"興奮","wendy":"溫迪","ethan":"伊森","orte":"地方","entführung":"綁架","keucht":"喘氣","erhielt":"收到","treue":"忠誠度","felsen":"岩石","malcolm":"馬爾科姆","kurzen":"短","zorn":"憤怒","taucht":"潛水","bestimmen":"確定","ausgesetzt":"暴露","zurückgeben":"返回","verkehr":"交通","bewiesen":"已證實的","generation":"世代","liebste":"最親愛的","ausrichten":"對齊","ausnahme":"例外","ebene":"水平","herrlich":"太棒了","stürzen":"秋天","herausforderung":"挑戰","gefälligst":"如果你願意的話","farben":"顏色","geliebten":"親人","ankommen":"到達","tempo":"步伐","unterbrechen":"中斷","kindes":"孩子","babe":"寶貝","erden":"地球","schrecklichen":"可怕的","falsches":"錯誤的","täuschen":"欺騙","tal":"塔爾","irgendwer":"任何人","deins":"你的","witwe":"寡婦","sichern":"安全","gerede":"談話","betrug":"詐欺","trauer":"悲傷","anwesenheit":"存在","bilden":"形式","gewachsen":"長大了","ausflug":"遊覽","jill":"吉爾","verlaufen":"跑","rand":"邊緣","kenny":"肯尼","rechnen":"計算","aufzug":"電梯","befragen":"問題","wegnehmen":"帶走","abschied":"告別","benötigen":"需要","pst":"噓","amt":"辦公室","reiche":"富有","otto":"奧托","beginn":"開始","daumen":"大拇指","bestrafen":"懲罰","clarence":"克拉倫斯","weine":"哭","fremder":"陌生人","sachte":"輕輕地","identifiziert":"已確定","gestehen":"坦白","mac":"麥克","owen":"歐文","morris":"莫里斯","riesig":"巨大的","entscheide":"決定","koma":"昏迷","prinzen":"王子","bewusstlos":"無意識的","county":"縣","marke":"品牌","harter":"更難","hill":"山","höflich":"有禮貌","jude":"猶太人","setzte":"坐","besorg":"擔心","absichtlich":"故意地","vermasselt":"搞砸了","verschlossen":"關閉","sowie":"以及","gesang":"唱歌","gedreht":"旋轉的","ford":"福特","religion":"宗教","unterschrift":"簽名","rosen":"玫瑰","persönliches":"個人的","queen":"女王","fortschritte":"進展","eingang":"入口","zugehört":"聽過","biete":"報價","clara":"克拉拉","vorhaben":"計劃","kultur":"文化","patientin":"病人","stephen":"史蒂芬","explodiert":"霹靂","nichte":"姪女","verzichten":"放棄","steven":"史蒂文","harris":"哈里斯","existenz":"存在","drehbuch":"腳本","football":"足球","anzusehen":"查看","ohnmächtig":"暈倒了","zaun":"柵欄","anthony":"安東尼","geladen":"已載入","guckt":"看起來","privat":"私人的","peg":"掛鉤","brauchten":"需要的","liam":"利亞姆","heb":"赫布","virginia":"維吉尼亞州","wächter":"守衛","eimer":"桶","blasen":"吹","rakete":"火箭","salz":"鹽","unfair":"不公平","verzeiht":"原諒","esel":"驢","krankenschwester":"護士","symbol":"符號","entscheidet":"決定","fahrzeug":"車輛","unterwäsche":"內衣","betrachtet":"考慮到","bauern":"農民","engländer":"英國人","wartete":"等待","schaust":"看看","genossen":"很享受","tropfen":"滴水","probiert":"嘗試過","spock":"史波克","verhungern":"挨餓","versuchten":"嘗試過","mütter":"母親們","september":"九月","aktion":"行動","bestanden":"通過了","haaren":"頭髮","louise":"路易絲","schluchzt":"抽泣","übertrieben":"誇張的","heilmittel":"補救措施","apparat":"儀器","vorm":"之前","friedlich":"和平的","richtiges":"正確","zuschauer":"觀眾","teenager":"青少年","geliefert":"已交付","may":"可能","gestritten":"爭論","maus":"滑鼠","lediglich":"僅僅是","charakter":"性格","riley":"萊利","krass":"太棒了","weiterer":"進一步","group":"群組","ricky":"瑞奇","diana":"戴安娜","geräusche":"噪音","lichter":"燈","starken":"強","dexter":"德克斯特","staffel":"繼電器","flaschen":"瓶子","putzen":"乾淨","einbruch":"竊盜","geheilt":"痊癒了","beißen":"咬","nicole":"妮可","stammen":"起源","wände":"牆壁","befürchte":"恐懼","kostüm":"服裝","warren":"華倫","grüßen":"打招呼","versagen":"失敗","übernommen":"接管","hoffte":"希望","verschieben":"移動","verspätung":"延遲","whiskey":"威士忌","mars":"火星","media":"媒體","entdecken":"發現","traue":"信任","thron":"王座","riesigen":"巨大的","zelt":"帳篷","akzent":"口音","truppe":"部隊","übertragen":"轉移","kompliment":"讚美","flammen":"火焰","erkennst":"認出","erschrecken":"嚇唬","gemälde":"繪畫","ari":"阿里","walt":"沃特","chip":"晶片","mannschaft":"團隊","cindy":"辛蒂","loyalität":"忠誠度","benjamin":"班傑明","dankeschön":"非常感謝你","vertreten":"代表","verhandlung":"談判","lernst":"學習","brüllt":"咆哮","füllen":"填充","letztendlich":"最終","krise":"危機","verlierer":"失敗者","spencer":"史賓塞","with":"與","kekse":"餅乾","ausschalten":"關掉","penis":"陰莖","profi":"專業的","whisky":"威士忌","erledige":"做","gelächter":"笑聲","fängst":"抓住","erklär":"解釋一下","einspruch":"反對","angeln":"釣魚","rausgehen":"出去","monk":"和尚","kaution":"押金","eures":"你的","gesessen":"坐","verrate":"背叛","kehrt":"回報","boy":"男孩","summe":"總和","lade":"負載","billig":"便宜","curtis":"柯蒂斯","bernard":"伯納德","juni":"六月","gerissen":"撕裂的","festgenommen":"被捕","ralph":"拉爾夫","befohlen":"已訂購","überlege":"考慮","koordinaten":"座標","flog":"飛了","herzinfarkt":"心臟病發作","hinlegen":"躺下","nahrung":"食物","liege":"謊言","geflohen":"逃跑","knall":"砰","nebenbei":"順便說一下","mylord":"陛下","nachbar":"鄰居","küss":"親吻","lhrem":"你的","geleistet":"完成的","nutzt":"用途","fröhliche":"快樂的人","nebel":"霧","front":"前面","veränderung":"改變","affe":"猴子","kontaktieren":"聯絡方式","brand":"品牌","fuhren":"開車","zwischenzeit":"同時","eingesetzt":"使用過的","anton":"安東","philip":"菲利普","megan":"梅根","schlimmeres":"更糟","rennt":"運行","anlegen":"創造","nachzudenken":"思考","schwör":"發誓","übliche":"平常","kreatur":"生物","verderben":"破壞","medizinische":"醫療","besetzt":"被佔領","zugriff":"訪問","kanal":"頻道","blutdruck":"血壓","grüne":"綠色","ausgeben":"輸出","papi":"爸爸","clown":"小丑","lhrer":"你的","sonny":"桑尼","schwören":"發誓","hühnchen":"雞","arten":"種","aufgebaut":"建造的","sydney":"雪梨","betrügen":"作弊","steele":"史蒂爾","trank":"喝了","glatt":"光滑","trainiert":"訓練有素的","indien":"印度","autor":"作者","geweint":"哭了","blume":"花","verletzungen":"受傷","special":"特別的","zwillinge":"雙胞胎","mia":"米亞","reißt":"眼淚","zeigst":"顯示","stirb":"死","justin":"賈斯汀","diane":"黛安","gefickt":"性交","schlägst":"節拍","moskau":"莫斯科","erwartest":"期待","gestoßen":"碰撞","durchgehen":"透過","praxis":"練習","gründlich":"徹底地","benny":"班尼","eingeschlossen":"包括在內","tragödie":"悲劇","vollständig":"完全","psychiater":"精神科醫生","rasse":"種族","lance":"長矛","vertraust":"值得信賴的","kummer":"悲傷","eigener":"擁有","christine":"克里斯汀","partei":"聚會","zentrum":"中心","testament":"遺囑","entfernung":"距離","private":"私人的","welten":"世界","verlegen":"尷尬","heroin":"海洛因","erfuhr":"學到了","gelände":"地形","kutsche":"馬車","dummer":"更愚蠢的","homer":"荷馬","stabil":"穩定","ausgeschlossen":"排除","out":"出","draus":"出","aufgehoben":"廢除","single":"單身","regisseur":"導演","vielmals":"很多次","dylan":"迪倫","bestand":"存在過","erbe":"繼承","weggelaufen":"逃跑了","noah":"諾亞","leichte":"光","zuständig":"負責的","losgehen":"下車","long":"長","hustet":"咳嗽","brutal":"殘酷的","besprochen":"討論過","halbes":"一半","bargeld":"現金","peggy":"佩吉","action":"行動","zusammenarbeiten":"一起工作","beunruhigt":"擔心","achte":"第八","innere":"內在","kanone":"大砲","eklig":"噁心的","armes":"窮","avenue":"大道","öffentlich":"公開的","nützt":"有用的","marine":"海洋","brillant":"輝煌的","köder":"誘餌","gespräche":"對話","nähert":"方法","vorgehen":"繼續","kleinigkeit":"瑣事","kissen":"枕頭","manny":"曼尼","geisel":"人質","gerecht":"公平","trost":"舒適度","gehasst":"討厭的","gesorgt":"照顧","archer":"弓箭手","spinner":"怪人","vergebung":"寬恕","vieh":"牛","schnelle":"快","normales":"正常","gefesselt":"綁起來","lautes":"大聲","kalte":"冷","leitet":"指揮","angehen":"鏟球","ekelhaft":"噁心的","salat":"沙拉","schicht":"層","intelligent":"智慧的","meg":"梅格","verhältnis":"關係","socken":"襪子","brieftasche":"錢包","holly":"冬青樹","packt":"包包","eventuell":"可能","nirgendwohin":"無處可去","methode":"方法","gelangen":"達到","gespannt":"興奮","vernunft":"原因","zurückgehen":"回去","regnet":"下雨","drama":"戲劇","entspannt":"放鬆","wörter":"話","klingeln":"戒指","ruhige":"安靜","sprung":"跳躍","anständig":"體面的","gangster":"黑幫","harten":"硬","aufzeichnungen":"記錄","ofen":"烤箱","cowboy":"牛仔","endgültig":"決賽","aufgaben":"任務","ruh":"安靜","deutsch":"德文","neil":"尼爾","wodka":"伏特加","know":"知道","air":"空氣","respektieren":"尊重","riskant":"有風險的","lohn":"薪資","zuviel":"太多了","zustimmen":"同意","schnaps":"酒","troy":"特洛伊","stufe":"舞台","erleichtert":"鬆了口氣","scheune":"穀倉","vanessa":"凡妮莎","klink":"叮噹聲","spaziergang":"行人徒步區","katherine":"凱瑟琳","zettel":"註解","kotzen":"嘔吐","blödmann":"愚蠢的","hurra":"歡呼","lana":"拉娜","symptome":"症狀","vorfahren":"祖先","nutzlos":"無用的","shaw":"蕭","telefonnummer":"電話號碼","nochmals":"再次","grey":"灰色","medien":"媒體","faul":"懶惰","dient":"服務","russell":"拉塞爾","ereignisse":"事件","aussuchen":"選擇","verprügelt":"毆打","zweites":"第二","sherlock":"夏洛克","fabelhaft":"神話般的","klinge":"刀片","leistung":"表現","beileid":"哀悼","castle":"城堡","durchführen":"執行","mitchell":"米切爾","eröffnen":"打開","unschuld":"純真","seist":"是","stoßen":"凹凸","palmer":"帕爾默","like":"喜歡","genügend":"夠了","sofa":"沙發","gestatten":"允許","gekocht":"煮熟的","biest":"野獸","lydia":"莉迪亞","bräuchte":"需要","ausgelöst":"觸發的","väter":"父親們","verarscht":"被愚弄","butter":"奶油","nachbarschaft":"鄰裡","villa":"別墅","data":"數據","goldene":"金色的","schließe":"關閉","saft":"果汁","begehen":"提交","hauptquartier":"總部","geschworen":"宣誓的","abgenommen":"已刪除","werkstatt":"工作坊","überreden":"說服","nannten":"被稱為","gemüse":"蔬菜","schläger":"暴徒","frisst":"吃","bewundere":"佩服","geschieden":"離婚的","assistentin":"助理","wettbewerb":"競爭","lebten":"住過","sieger":"獲勝者","verfassung":"憲法","küsst":"親吻","fußball":"足球","geschnitten":"切","master":"大師","quietschen":"吱吱聲","füttern":"飼料","gürtel":"腰帶","unschuldigen":"無辜的","menschlich":"人類的","eigenartig":"奇特的","oje":"哦親愛的","hanna":"漢娜","kabel":"電纜","duke":"杜克大學","franz":"法語","zahn":"牙齒","landet":"土地","kisten":"盒子","liegst":"謊言","mona":"莫娜","krankenstation":"醫院病房","leine":"皮帶","beschreibung":"描述","ausmacht":"彌補","beschädigt":"損壞的","grundstück":"財產","steckte":"卡住了","bahn":"鐵路","turm":"塔","mine":"我的","sauerstoff":"氧氣","angesichts":"給定","versager":"失敗","deinetwegen":"因為你","vic":"維克","angeklagt":"被告","aufhört":"停止","baden":"洗澡","knacken":"裂紋","verbindungen":"連接","panzer":"坦克","marcel":"馬塞爾","bach":"巴哈","leiser":"更安靜","stimmengewirr":"喋喋不休的聲音","zerstörung":"破壞","stirn":"額頭","finn":"芬恩","sanft":"輕輕地","kloster":"修道院","charmant":"迷人的","aufbauen":"建造","thanksgiving":"感恩節","anlass":"場合","zähle":"計數","verlieben":"墜入愛河","atmosphäre":"氣氛","ronnie":"羅尼","samantha":"莎曼珊","leber":"肝臟","jener":"那個","begegnen":"遭遇","dämlich":"愚蠢的","krawatte":"領帶","juan":"胡安","tarnung":"迷彩","kanada":"加拿大","alpha":"阿爾法","baker":"貝克","tabletten":"片劑","faust":"拳頭","auftreten":"發生","monroe":"門羅","blatt":"片材","gelöscht":"已刪除","dschungel":"叢林","alison":"艾莉森","niedlich":"可愛","klage":"訴訟","wolltet":"通緝","jonas":"喬納斯","akt":"行動","schießerei":"射擊","anwältin":"律師","überleg":"考慮","frisur":"髮型","spruch":"說","jene":"那些","moral":"道德的","angelegenheiten":"事","dokumente":"文件","fröhlich":"開朗的","spezies":"種","oktober":"十月","schachtel":"盒子","opfers":"受害者","noten":"筆記","ellie":"艾莉","irgendwohin":"某處","nora":"諾拉","brunnen":"噴泉","toby":"托比","sandy":"桑迪","lampe":"燈","craig":"克雷格","jagt":"狩獵","eigentum":"財產","diebstahl":"竊盜","spenden":"捐贈","betrieb":"操作","gemeinsame":"常見的","absurd":"荒謬的","gegensatz":"對面","frühling":"春天","dünn":"薄","ausland":"國外","schultern":"肩膀","entwicklung":"發展","vergehen":"過世","ahnen":"猜測","verbessern":"改善","herzog":"杜克大學","diskussion":"討論","gehalt":"薪資","lemon":"檸檬","freak":"怪物","glocke":"鈴","forschung":"研究","geradeaus":"一直向前","fette":"脂肪","iris":"虹膜","rechnungen":"發票","kasse":"結帳","tödlich":"致命的","tieren":"動物","ian":"伊安","oberfläche":"表面","gitarre":"吉他","bedienen":"操作","jan":"一月","zwang":"被迫","marsh":"馬什","politiker":"政治家","bären":"熊","vereint":"聯合","irgendeiner":"任何人","ward":"病房","besuche":"訪問","schreckliches":"可怕的","schoss":"射擊","collins":"柯林斯","werkzeug":"工具","kranken":"生病了","neffe":"姪子","sue":"蘇","dauerte":"持續","brooklyn":"布魯克林","lebenden":"生活","bevölkerung":"人口","hergebracht":"帶到這裡","just":"只是","durchziehen":"渡過難關","gepackt":"包裝的","service":"服務","furchtbare":"可怕的","liebster":"最親愛的","flieger":"飛行員","vorschriften":"法規","beherrschen":"大師","guy":"傢伙","detail":"細節","ausgewählt":"已選擇","herunter":"向下","schriftsteller":"作家","wärt":"會是","kümmer":"照顧","andererseits":"另一方面","bay":"灣","gene":"基因","shuttle":"穿梭機","üblich":"平常","entführen":"綁架","ike":"艾克","jury":"陪審團","box":"盒子","ausgedacht":"想像的","freddy":"弗雷迪","partys":"聚會","rausgefunden":"發現了","plant":"計劃","feige":"膽怯的","gesungen":"宋","möbel":"家具","bewährung":"緩刑","schieße":"射擊","umgeben":"包圍","berater":"顧問","bailey":"貝利","zoo":"動物園","gedicht":"詩","lorelai":"羅蕾萊","bellt":"吠叫","vorschlagen":"建議","genießt":"喜歡","baseball":"棒球","locken":"引誘","ooh":"哦","trennung":"分離","lautsprecher":"揚聲器","ticket":"票","umwerfend":"令人驚嘆的","kanzlei":"堅定","wahres":"真實","zufolge":"根據","come":"來吧","hebt":"電梯","anschlag":"停止","timing":"時機","kid":"孩子","tucker":"突突","befehlen":"命令","etage":"地板","dazwischen":"之間","jules":"儒勒","heisst":"被稱為","objekt":"物件","bedaure":"抱歉","wobei":"哪裡","kokain":"古柯鹼","strategie":"策略","freundes":"朋友","wolken":"雲","gräfin":"伯爵夫人","bruno":"布魯諾","getreten":"踢","cal":"卡爾","pardon":"抱歉","genosse":"同志","ungut":"壞","verteilen":"散佈","fuchs":"狐狸","day":"日","organisiert":"有組織的","bla":"廢話","world":"世界","east":"東","löcher":"洞","aktiv":"活躍的","hunter":"獵人","werfe":"丟","beantwortet":"回答了","meist":"大部分","reis":"米飯","hierhin":"這裡","scotch":"蘇格蘭威士忌","überfahren":"輾過","logisch":"邏輯的","heather":"石楠花","französische":"法語","bekannte":"已知的","episode":"劇情","engagiert":"致力於","manipuliert":"被操縱的","zellen":"細胞","are":"是","blake":"布萊克","dienste":"服務","sodass":"這樣","volkes":"人","golf":"高爾夫","janet":"珍妮特","schmeißen":"丟","grand":"盛大","zurückgekehrt":"返回","eröffnet":"打開","summt":"嗡嗡聲","unterrichten":"教","verschaffen":"提供","verlobte":"訂婚了","erfahrungen":"經歷","persönlichkeit":"個性","gina":"吉娜","streichen":"刪除","offenen":"打開","weisheit":"智慧","vergeht":"去世了","beruhig":"冷靜下來","zielen":"目標","fans":"粉絲","wüsstest":"你知道","ashley":"阿什利","schuldet":"欠","erhöhen":"增加","schönsten":"最美麗","momente":"時刻","adrian":"阿德里安","kameraden":"同志們","eingebrochen":"闖入","amüsiert":"被逗樂了","erwähnte":"提到的","mitch":"米奇","premierminister":"總理","geringste":"至少","übernachten":"過夜","infiziert":"感染的","goa":"果阿","dinner":"晚餐","rieche":"氣味","kredit":"信用","allison":"艾里森","lake":"湖","legal":"合法的","merke":"通知","jubel":"歡呼","klänge":"聲音","größeren":"更大","bewacht":"被守護的","vietnam":"越南","lehren":"教","chandler":"錢德","präsentieren":"現在","nacken":"脖子","auflegen":"掛斷電話","vergangen":"過去","fangt":"捕獲物","hühner":"雞","hector":"赫克托","teal":"青色","sprengen":"炸毀","einsperren":"鎖起來","turner":"體操運動員","zusammenhang":"連接","wahrer":"更真實","joan":"瓊","marco":"馬可","breit":"寬","pfeife":"口哨","treibst":"開車","rannte":"跑","beschuldigt":"被告","set":"設定","verlegt":"搬遷","überraschungen":"驚喜","orleans":"奧爾良","douglas":"道格拉斯","tauchen":"潛水","verdanken":"謝謝","nadel":"針","psst":"噓","gelacht":"笑了","apfel":"蘋果","behilflich":"有幫助的","dreckskerl":"渣男","mitgefühl":"同情心","wichtigsten":"最重要的","krieges":"戰爭","wehe":"禍患","hope":"希望","heirat":"婚姻","exakt":"正是","widerstehen":"抵抗","höchst":"最高","zurückgelassen":"落在後面","gespürt":"毛氈","methoden":"方法","interessantes":"有趣的","sau":"吸","notaufnahme":"急診室","verwandten":"親戚","jeffrey":"傑弗裡","trinkgeld":"小費","ermitteln":"確定","riechst":"氣味","beach":"海灘","sorte":"品種","kartoffeln":"馬鈴薯","elefanten":"大象","sichere":"安全","sämtliche":"全部","gekündigt":"終止","vereinbarung":"協定","harmlos":"無害的","weiber":"婦女","this":"這個","dicken":"厚","rauskommt":"出來","old":"老","angestellten":"員工","datum":"日期","bezug":"參考","kerzen":"蠟燭","lawrence":"勞倫斯","marsch":"進行曲","benötigt":"需要的","ermittlung":"調查","lagen":"躺著","unbekannt":"未知","gefressen":"吃過","brett":"董事會","manieren":"禮儀","han":"漢","enthält":"包含","anfing":"開始了","kümmerst":"照顧","berühmte":"著名的","schwieriger":"更難","piloten":"飛行員","scherze":"笑話","anfängt":"開始","läufst":"跑步","bekannten":"已知的","rasen":"種族","empfehlen":"推薦","härter":"更難","geweckt":"醒來","befördert":"晉升","reiter":"騎士","empfinden":"感覺","bereite":"準備","täte":"會做","benutzte":"使用過的","halloween":"萬聖節","abgesagt":"取消","down":"向下","quasi":"幾乎","kocht":"廚師","reingekommen":"進來了","hupen":"鳴喇叭","hinunter":"向下","vorüber":"結束","ausdrücken":"快遞","reese":"里斯","elliot":"艾略特","perfekten":"完美的","folgte":"已關注","rebellen":"叛逆者","hauptsächlich":"主要是","schuppen":"棚子","braver":"更勇敢","neill":"尼爾","zwanzig":"二十"};

const excludedFrequencyWords = new Set(["gott", "teufel", "scheiß", "hölle", "waffen", "mörder", "arschloch", "gottes", "drogen", "ermordet", "schlampe", "schwanz", "fick", "wichser", "selbstmord", "herrgott", "verarschen", "mordes", "morde", "titten", "scheißkerl", "hurensohn", "scheißegal", "penis", "kokain", "heroin", "gesehen", "gewesen", "gefunden", "gekommen", "gegangen", "genommen", "geschrieben", "gelesen", "gefahren", "gegessen", "getrunken"]);

function addCourseVocabularyRows(groups, globalSeen) {
  lessons.forEach((lesson) => {
    if (lesson.isComprehensiveExam || !lesson.textbook) return;
    [...(lesson.textbook.vocab || []), ...(lesson.textbook.extraVocab || [])].forEach(([german, chinese, plural]) => {
      const type = getVocabularyEntryType(german, plural);
      addVocabularyIfUnique(groups[lesson.level], globalSeen, { level: lesson.level, type, german, chinese });
    });
  });
}

function getVocabularyEntryType(german, plural) {
  if (/^(der|die|das)s+/.test(german) || plural) return "名詞";
  if (/en$/.test(german) && !/s/.test(german)) return "動詞";
  if (/s/.test(german)) return "片語";
  return "常用詞";
}

function isInflectedPastOrParticiple(word) {
  if (/^ge[a-zäöüß]+t$/.test(word)) return true;
  const forms = new Set(["war", "waren", "warst", "wurde", "wurden", "hatte", "hatten", "hattest", "ging", "kam", "sah", "gab", "nahm", "fand", "lief", "ließ", "sprach", "stand", "dachte", "wusste", "wollte", "wollten", "konnte", "konnten", "musste", "mussten", "durfte", "sollte", "sollten", "mochte", "brachte", "blieb", "hielt", "hieß", "schrieb", "rief", "tat", "gesehen", "gewesen", "gefunden", "gekommen", "gegangen", "genommen", "geschrieben", "gelesen", "gefahren", "gegessen", "getrunken"]);
  return forms.has(word);
}

function isConjugatedVerbForm(word) {
  const forms = new Set(["ist", "bist", "sind", "bin", "seid", "hat", "habe", "hast", "habt", "geht", "kommst", "kommt", "machst", "macht", "sagt", "siehst", "sieht", "denkst", "denkt", "weißt", "weiß", "willst", "will", "kannst", "kann", "musst", "muss", "sollst", "soll", "darfst", "darf", "möchte", "möchtest", "möchten", "werde", "wird", "wirst"]);
  return forms.has(word);
}

function generateLevelVocabulary(level, globalSeen, needed) {
  if (needed <= 0) return [];
  const data = generatedVocabularyData[level];
  const rows = [];

  data.nouns.forEach(([article, noun, nounZh]) => {
    addVocabularyIfUnique(rows, globalSeen, { level, type: "名詞", german: `${article} ${noun}`, chinese: nounZh });
  });

  data.verbs.forEach(([verb, verbZh]) => {
    addVocabularyIfUnique(rows, globalSeen, { level, type: "動詞", german: verb, chinese: verbZh });
  });

  data.adjectives.forEach(([adjective, adjectiveZh]) => {
    addVocabularyIfUnique(rows, globalSeen, { level, type: "形容詞", german: normalizeAdjectiveLemma(adjective), chinese: adjectiveZh });
  });

  data.contexts.forEach(([context, contextZh]) => {
    addVocabularyIfUnique(rows, globalSeen, { level, type: "片語", german: context, chinese: contextZh });
  });

  frequencyVocabularyWords.forEach((word) => {
    if (rows.length >= needed) return;
    const chinese = frequencyVocabularyTranslations[word];
    if (!chinese || chinese === word || excludedFrequencyWords.has(word) || isInflectedPastOrParticiple(word) || isConjugatedVerbForm(word)) return;
    addVocabularyIfUnique(rows, globalSeen, { level, type: inferFrequencyWordType(word), german: word, chinese });
  });

  return rows;
}

function inferFrequencyWordType(word) {
  const pronouns = new Set(["ich", "du", "er", "sie", "es", "wir", "ihr", "mich", "dich", "mir", "dir", "ihn", "ihm", "uns", "euch", "meine", "deine", "seine", "ihre", "unser", "euer", "dieser", "diese", "dieses", "jemand", "niemand", "man"]);
  const articles = new Set(["der", "die", "das", "den", "dem", "des", "ein", "eine", "einen", "einem", "einer", "keine", "kein", "keinen"]);
  const prepositions = new Set(["in", "an", "auf", "mit", "für", "von", "zu", "nach", "bei", "aus", "über", "unter", "gegen", "ohne", "durch", "um", "vor", "zwischen"]);
  const conjunctions = new Set(["und", "aber", "oder", "weil", "dass", "wenn", "obwohl", "damit", "während", "bevor", "sobald", "denn", "sondern"]);
  const adverbs = new Set(["nicht", "auch", "schon", "jetzt", "dann", "hier", "dort", "immer", "wieder", "sehr", "nur", "noch", "heute", "morgen", "gestern", "zurück", "weiter", "sofort", "zuerst", "danach", "vielleicht", "wirklich", "gern", "gerne"]);
  if (pronouns.has(word)) return "代詞";
  if (articles.has(word)) return "冠詞";
  if (prepositions.has(word)) return "介系詞";
  if (conjunctions.has(word)) return "連接詞";
  if (adverbs.has(word)) return "副詞";
  if (/en$/.test(word)) return "動詞";
  if (/(ig|lich|isch|bar|sam|los|voll|reich|ell|al)$/.test(word)) return "形容詞";
  return "常用詞";
}

function addVocabularyIfUnique(rows, seen, row) {
  if (seen.has(row.german)) return;
  rows.push(row);
  seen.add(row.german);
}

function addGeneratedVocabularyRow(rows, seen, row) {
  if (seen.has(row.german)) return;
  rows.push(row);
  seen.add(row.german);
}

function normalizeAdjectiveLemma(adjective) {
  return adjective.replace(/e$/, "").replace("groß", "groß");
}

function inferVocabularyLevel(row, index) {
  const a1Words = new Set([
    "der Tisch", "die Lampe", "das Buch", "der Mann", "die Frau", "das Kind",
    "die Zeitung", "der Montag", "das Mädchen", "das Hotel", "wohnen", "lernen",
    "kaufen", "gehen", "fahren", "essen", "trinken", "krank", "pünktlich",
    "wichtig", "der Bahnhof", "der Flughafen", "die Haltestelle", "die Fahrkarte",
    "der Fahrplan", "der Reisepass", "das Gepäck", "das Frühstück", "das Restaurant",
    "die Apotheke", "das Krankenhaus", "der Supermarkt", "die Bäckerei", "der Markt",
    "der Preis", "die Größe", "die Farbe", "die Familie", "der Freund",
    "die Freundin", "der Nachbar", "die Freizeit", "das Hobby", "der Sport",
    "das Kino", "das Museum", "die Hausaufgabe", "fragen", "antworten",
    "verstehen", "wiederholen", "helfen", "suchen", "finden", "freundlich",
    "höflich", "günstig", "teuer", "bequem", "ruhig", "laut", "schnell",
    "langsam", "weil", "zuerst", "danach",
  ]);
  const a2Words = new Set([
    "der Termin", "die Verspätung", "das Arbeitsbuch", "die Wohnung", "die Miete",
    "die Rechnung", "die Anmeldung", "der Arbeitsplatz", "die Erfahrung",
    "die Ausbildung", "das Studium", "verschieben", "vereinbaren", "ankommen",
    "abfahren", "buchen", "bezahlen", "bestellen", "empfehlen", "verlieren",
    "reservieren", "stornieren", "umbuchen", "ausfüllen", "unterschreiben",
    "teilnehmen", "vorbereiten", "die Reservierung", "die Unterkunft",
    "die Rezeption", "die Speisekarte", "das Trinkgeld", "der Arzttermin",
    "die Beschwerden", "das Medikament", "der Rabatt", "der Kollege",
    "die Kollegin", "die Sehenswürdigkeit", "die Universität", "der Unterricht",
    "die Prüfung", "die Präsentation", "das Gehalt", "die Arbeitszeit",
    "die Besprechung", "die Aufgabe", "die Nachricht", "die E-Mail",
    "das Formular", "die Unterschrift", "dringend", "zuverlässig", "möglich",
    "auch", "deshalb", "trotzdem", "außerdem",
  ]);
  const b1Words = new Set([
    "der Vertrag", "die Behörde", "der Antrag", "die Krankenversicherung",
    "die Umwelt", "die Meinung", "der Vorteil", "der Nachteil", "die Lösung",
    "das Problem", "kündigen", "begründen", "vergleichen", "diskutieren",
    "zusammenfassen", "dringend", "zuverlässig", "verantwortlich",
    "meiner Meinung nach", "zum Beispiel", "die Bewerbung", "der Lebenslauf",
    "das Vorstellungsgespräch", "die Frist", "das Projekt", "die Entscheidung",
    "die Erlaubnis", "die Möglichkeit", "die Chance", "die Kultur",
    "präsentieren", "organisieren", "entscheiden", "begrenzen", "verbessern",
    "schließlich",
  ]);
  const b2Words = new Set([
    "der Klimawandel", "die Nachhaltigkeit", "die Digitalisierung", "die Gesellschaft",
    "das Argument", "die Verantwortung", "die Voraussetzung", "die Folge",
    "die Ursache", "der Zusammenhang", "die Entwicklung", "die Veränderung",
    "die Fähigkeit", "die Herausforderung", "die Sicherheit", "die Ernährung",
    "die Energie", "die Mobilität", "der Datenschutz", "die Gleichberechtigung",
    "die Integration", "die Politik", "die Wirtschaft", "berücksichtigen",
    "vermeiden", "verbessern", "unterstützen", "nachhaltig", "kompliziert",
    "sinnvoll", "notwendig", "freiwillig", "öffentlich", "privat", "aktuell",
    "obwohl", "damit", "sobald", "während", "einerseits", "andererseits",
    "allerdings",
  ]);

  if (a1Words.has(row.german)) return "A1";
  if (a2Words.has(row.german)) return "A2";
  if (b1Words.has(row.german)) return "B1";
  if (b2Words.has(row.german)) return "B2";
  if (index < 60) return "A2";
  return "B1";
}

function downloadCsv(filename, rows, headers) {
  const csvRows = [
    headers.map((header) => header.label),
    ...rows.map((row) => headers.map((header) => row[header.key])),
  ];
  const csv = csvRows
    .map((row) => row.map(escapeCsvCell).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeCsvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function createGermanExamPools() {
  return {
    A1: [
      { type: "choice", prompt: "Welche Antwort passt?", translation: "Ich heiße Anna. Ich komme aus Taiwan.", options: ["Anna kommt aus Taiwan.", "Anna wohnt in Berlin.", "Anna ist krank."], answer: "Anna kommt aus Taiwan.", hint: "Im Text steht: Ich komme aus Taiwan." },
      { type: "choice", prompt: "Wählen Sie den richtigen Artikel.", translation: "___ Buch", options: ["der", "die", "das"], answer: "das", hint: "Es heißt: das Buch." },
      { type: "choice", prompt: "Wählen Sie den richtigen Artikel.", translation: "___ Zeitung", options: ["der", "die", "das"], answer: "die", hint: "Nomen auf -ung sind oft feminin." },
      { type: "choice", prompt: "Was sagt man im Café?", options: ["Ich hätte gern einen Kaffee.", "Ich wohne einen Kaffee.", "Ich bin einen Kaffee."], answer: "Ich hätte gern einen Kaffee.", hint: "Ich hätte gern ... ist höflich." },
      { type: "choice", prompt: "Welche Frage ist richtig?", options: ["Wo ist die Toilette?", "Wer kostet die Toilette?", "Wie heißt die Toilette?"], answer: "Wo ist die Toilette?", hint: "Wo fragt nach einem Ort." },
      { type: "cloze", prompt: "Ich ___ aus Taiwan.", answer: "komme", hint: "Richtig: Ich komme aus Taiwan." },
      { type: "cloze", prompt: "Du ___ Deutsch.", answer: "lernst", hint: "Du lernst Deutsch." },
      { type: "cloze", prompt: "Wir ___ in Taipei.", answer: "wohnen", hint: "Wir wohnen in Taipei." },
      { type: "cloze", prompt: "Heute ___ Montag.", answer: "ist", hint: "Heute ist Montag." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "der", answer: "Tisch" }, { term: "die", answer: "Lampe" }, { term: "das", answer: "Hotel" }], hint: "der Tisch, die Lampe, das Hotel." },
      { type: "match", prompt: "Ordnen Sie die Sätze zu.", pairs: [{ term: "Preis", answer: "Wie viel kostet das?" }, { term: "Name", answer: "Wie heißen Sie?" }, { term: "Herkunft", answer: "Woher kommen Sie?" }], hint: "Achten Sie auf die Fragewörter." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Hallo! Ich heiße Ben. Ich komme aus Berlin und wohne jetzt in Taipei. Ich lerne Deutsch.", question: "Wo wohnt Ben jetzt?", options: ["In Taipei.", "In Berlin.", "In Hamburg."], answer: "In Taipei.", hint: "Im Text steht: wohne jetzt in Taipei." },
      { type: "reading", prompt: "Lesen Sie die Anzeige.", passage: "Café Mozart: Montag bis Freitag 8-18 Uhr geöffnet. Samstag und Sonntag geschlossen.", question: "Wann ist das Café geschlossen?", options: ["Am Wochenende.", "Am Montag.", "Am Freitag."], answer: "Am Wochenende.", hint: "Samstag und Sonntag sind Wochenende." },
      { type: "reading", prompt: "Lesen Sie die Nachricht.", passage: "Der Deutschkurs beginnt heute um 18 Uhr. Bitte bringen Sie ein Buch und einen Stift mit.", question: "Wann beginnt der Kurs?", options: ["Um 18 Uhr.", "Um 8 Uhr.", "Um 20 Uhr."], answer: "Um 18 Uhr.", hint: "Im Text steht: beginnt ... um 18 Uhr." },
      { type: "choice", prompt: "Welche Satzstellung ist richtig?", options: ["Ich lerne Deutsch.", "Ich Deutsch lerne.", "Lerne Deutsch ich."], answer: "Ich lerne Deutsch.", hint: "Das Verb steht auf Position 2." },
      { type: "choice", prompt: "Was sagt man, wenn man etwas nicht versteht?", options: ["Können Sie das bitte wiederholen?", "Ich bezahle später.", "Das Zimmer ist frei."], answer: "Können Sie das bitte wiederholen?", hint: "wiederholen bedeutet: noch einmal sagen." },
      { type: "cloze", prompt: "Das ___ meine Freundin.", answer: "ist", hint: "Das ist meine Freundin." },
      { type: "cloze", prompt: "Ich ___ ein Buch.", answer: "habe", hint: "Ich habe ein Buch." },
      { type: "choice", prompt: "Was passt?", translation: "Sprechen Sie ___?", options: ["Englisch", "Montag", "Bahnhof"], answer: "Englisch", hint: "Man spricht eine Sprache." },
      { type: "reading", prompt: "Lesen Sie den Hinweis.", passage: "Bibliothek: Heute geöffnet von 10 bis 16 Uhr.", question: "Wie lange ist die Bibliothek geöffnet?", options: ["Bis 16 Uhr.", "Bis 10 Uhr.", "Bis Montag."], answer: "Bis 16 Uhr.", hint: "bis 16 Uhr bedeutet: geöffnet bis 16 Uhr." },
      { type: "choice", prompt: "Wählen Sie die richtige Antwort.", translation: "Danke!", options: ["Bitte!", "Guten Appetit!", "Gute Nacht!"], answer: "Bitte!", hint: "Auf Danke antwortet man oft: Bitte." },
      { type: "cloze", prompt: "Wie viel ___ das?", answer: "kostet", hint: "Wie viel kostet das?" },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "Montag", answer: "Tag" }, { term: "Kaffee", answer: "Getränk" }, { term: "Buch", answer: "Gegenstand" }], hint: "Ordnen Sie nach Bedeutung." },
      { type: "choice", prompt: "Welche Antwort passt zu: Woher kommen Sie?", options: ["Ich komme aus Taiwan.", "Ich heiße Lisa.", "Ich bin 20 Jahre alt."], answer: "Ich komme aus Taiwan.", hint: "Woher fragt nach der Herkunft." },
    ],
    A2: [
      { type: "choice", prompt: "Welche Form ist richtig?", options: ["Ich bin nach Hause gegangen.", "Ich habe nach Hause gegangen.", "Ich gegangen bin nach Hause."], answer: "Ich bin nach Hause gegangen.", hint: "gehen bildet das Perfekt meistens mit sein." },
      { type: "choice", prompt: "Was passt?", translation: "Ich möchte den Termin ___.", options: ["verschieben", "essen", "trinken"], answer: "verschieben", hint: "Einen Termin kann man verschieben." },
      { type: "choice", prompt: "Welche Frage passt im Hotel?", options: ["Haben Sie ein Zimmer frei?", "Haben Sie einen Zug frei?", "Haben Sie eine Speisekarte frei?"], answer: "Haben Sie ein Zimmer frei?", hint: "Im Hotel fragt man nach einem Zimmer." },
      { type: "cloze", prompt: "Ich ___ gestern Pizza gegessen.", answer: "habe", hint: "essen bildet hier das Perfekt mit haben." },
      { type: "cloze", prompt: "Sie ___ nach Berlin gefahren.", answer: "ist", hint: "fahren als Bewegung bildet oft das Perfekt mit sein." },
      { type: "cloze", prompt: "Ich komme später, weil ich arbeiten ___.", answer: "muss", hint: "Im Nebensatz steht das konjugierte Verb am Ende." },
      { type: "cloze", prompt: "Der Zug hat ___.", answer: "Verspätung", hint: "Der Ausdruck heißt: Verspätung haben." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "Termin", answer: "verschieben" }, { term: "Zimmer", answer: "buchen" }, { term: "Rechnung", answer: "bezahlen" }], hint: "Achten Sie auf typische Wortverbindungen." },
      { type: "match", prompt: "Ordnen Sie das Perfekt zu.", pairs: [{ term: "gehen", answer: "sein" }, { term: "lernen", answer: "haben" }, { term: "essen", answer: "haben" }], hint: "Viele Bewegungsverben bilden das Perfekt mit sein." },
      { type: "reading", prompt: "Lesen Sie die Nachricht.", passage: "Hallo, ich kann heute nicht kommen. Ich bin krank und bleibe zu Hause. Können wir morgen telefonieren?", question: "Warum kann die Person heute nicht kommen?", options: ["Sie ist krank.", "Sie fährt nach Berlin.", "Sie kauft ein Ticket."], answer: "Sie ist krank.", hint: "Im Text steht: Ich bin krank." },
      { type: "reading", prompt: "Lesen Sie den Hinweis.", passage: "Apotheke: Heute nur bis 14 Uhr geöffnet. Am Sonntag geschlossen.", question: "Bis wann ist die Apotheke heute geöffnet?", options: ["Bis 14 Uhr.", "Bis 18 Uhr.", "Bis Sonntag."], answer: "Bis 14 Uhr.", hint: "Im Text steht: nur bis 14 Uhr." },
      { type: "reading", prompt: "Lesen Sie die Information.", passage: "Der Termin ist nicht am Dienstag, sondern am Donnerstag um 10 Uhr.", question: "Wann ist der Termin?", options: ["Am Donnerstag.", "Am Dienstag.", "Am Freitag."], answer: "Am Donnerstag.", hint: "nicht ..., sondern ... markiert die richtige Information." },
      { type: "choice", prompt: "Welche Form ist höflich?", options: ["Könnten Sie mir bitte helfen?", "Hilf jetzt!", "Du helfen mich?"], answer: "Könnten Sie mir bitte helfen?", hint: "Könnten Sie ... bitte ist höflich." },
      { type: "cloze", prompt: "Ich suche ein günstiges ___ für zwei Nächte.", answer: "Zimmer", hint: "Man sucht ein Zimmer im Hotel." },
      { type: "choice", prompt: "Welche Satzstellung ist richtig?", options: ["weil ich arbeiten muss", "weil ich muss arbeiten", "weil muss ich arbeiten"], answer: "weil ich arbeiten muss", hint: "Im weil-Satz steht das Verb am Ende." },
      { type: "cloze", prompt: "Kann ich mit Karte ___?", answer: "bezahlen", hint: "mit Karte bezahlen." },
      { type: "choice", prompt: "Was bedeutet Unterkunft?", options: ["Ein Ort zum Wohnen oder Schlafen.", "Ein Medikament.", "Ein Rabatt."], answer: "Ein Ort zum Wohnen oder Schlafen.", hint: "Unterkunft bedeutet lodging/accommodation." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "Der Zug hat Verspätung.", answer: "Verkehr" }, { term: "Ich habe einen Termin.", answer: "Praxis" }, { term: "Ich möchte bestellen.", answer: "Restaurant" }], hint: "Ordnen Sie die Sätze nach Situation." },
      { type: "choice", prompt: "Was passt?", translation: "Ich möchte die Reservierung ___.", options: ["stornieren", "öffnen", "lernen"], answer: "stornieren", hint: "Eine Reservierung kann man stornieren." },
      { type: "reading", prompt: "Lesen Sie die Anzeige.", passage: "Wohnung frei ab Mai: zwei Zimmer, Küche, Bad. Miete: 750 Euro. Kontakt: Frau Weber.", question: "Wie hoch ist die Miete?", options: ["750 Euro.", "500 Euro.", "Zwei Zimmer."], answer: "750 Euro.", hint: "Im Text steht: Miete: 750 Euro." },
      { type: "choice", prompt: "Welche Antwort passt?", translation: "Entschuldigung, wo ist der Bahnhof?", options: ["Gehen Sie geradeaus.", "Ich esse Pizza.", "Das kostet fünf Euro."], answer: "Gehen Sie geradeaus.", hint: "Das ist eine Wegbeschreibung." },
      { type: "cloze", prompt: "Wir haben Deutsch ___.", answer: "gelernt", hint: "Perfekt: haben gelernt." },
      { type: "choice", prompt: "Was passt?", translation: "Ich brauche einen neuen ___.", options: ["Termin", "gestern", "schnell"], answer: "Termin", hint: "Termin ist ein Nomen." },
      { type: "reading", prompt: "Lesen Sie die E-Mail.", passage: "Sehr geehrte Frau Keller, ich kann am Montag leider nicht kommen. Kann ich am Dienstag um 10 Uhr kommen?", question: "Was möchte die Person?", options: ["Den Termin ändern.", "Ein Zimmer buchen.", "Eine Rechnung bezahlen."], answer: "Den Termin ändern.", hint: "Sie fragt nach Dienstag um 10 Uhr." },
    ],
    B1: [
      { type: "choice", prompt: "Welche Aussage drückt eine Meinung aus?", options: ["Meiner Meinung nach ist das sinnvoll.", "Der Zug fährt um 8 Uhr.", "Das Café ist geöffnet."], answer: "Meiner Meinung nach ist das sinnvoll.", hint: "Meiner Meinung nach leitet eine Meinung ein." },
      { type: "choice", prompt: "Welche Formulierung ist höflich?", options: ["Könnten wir den Termin auf Freitag verschieben?", "Termin Freitag jetzt!", "Du musst Freitag."], answer: "Könnten wir den Termin auf Freitag verschieben?", hint: "Könnten wir ... ist höflich." },
      { type: "cloze", prompt: "Ich bin damit einverstanden, aber ich habe noch eine ___.", answer: "Frage", hint: "Eine Frage haben." },
      { type: "cloze", prompt: "Ich würde gern wissen, ob das ___ ist.", answer: "möglich", hint: "möglich sein." },
      { type: "cloze", prompt: "Der Bus hat Verspätung, deshalb komme ich ___.", answer: "später", hint: "später bedeutet: nicht pünktlich, nach der Zeit." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "Meinung", answer: "Meiner Meinung nach" }, { term: "Grund", answer: "weil" }, { term: "Folge", answer: "deshalb" }], hint: "Achten Sie auf die Funktion im Satz." },
      { type: "reading", prompt: "Lesen Sie die Nachricht.", passage: "Ich kann heute leider nicht kommen, weil ich länger arbeiten muss. Können wir den Termin auf Freitag verschieben?", question: "Was möchte die Person?", options: ["Den Termin auf Freitag verschieben.", "Heute früher kommen.", "Nicht mehr antworten."], answer: "Den Termin auf Freitag verschieben.", hint: "Im Text steht: auf Freitag verschieben." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Die Wohnung ist hell und günstig. Allerdings liegt sie weit vom Bahnhof entfernt.", question: "Was ist ein Nachteil der Wohnung?", options: ["Sie liegt weit vom Bahnhof entfernt.", "Sie ist zu dunkel.", "Sie ist sehr teuer."], answer: "Sie liegt weit vom Bahnhof entfernt.", hint: "Allerdings signalisiert einen Gegensatz." },
      { type: "choice", prompt: "Welche Antwort passt als höfliche Absage?", options: ["Das passt mir leider nicht.", "Nein schlecht.", "Ich nicht."], answer: "Das passt mir leider nicht.", hint: "Das ist eine natürliche Absage." },
      { type: "cloze", prompt: "Haben Sie vielleicht eine andere ___?", answer: "Empfehlung", hint: "Eine Empfehlung ist ein Vorschlag." },
      { type: "choice", prompt: "Was ist ein Vorteil?", options: ["Etwas Positives.", "Etwas Verlorenes.", "Ein Formular."], answer: "Etwas Positives.", hint: "Vorteil bedeutet positiver Punkt." },
      { type: "choice", prompt: "Was ist eine Ursache?", options: ["Ein Grund.", "Ein Ergebnis.", "Eine Quittung."], answer: "Ein Grund.", hint: "Ursache bedeutet Grund." },
      { type: "reading", prompt: "Lesen Sie die E-Mail.", passage: "Vielen Dank für Ihre Nachricht. Ich habe Interesse an dem Kurs, kann aber nur am Vormittag teilnehmen.", question: "Wann kann die Person teilnehmen?", options: ["Am Vormittag.", "Am Abend.", "Am Wochenende."], answer: "Am Vormittag.", hint: "Im Text steht: nur am Vormittag." },
      { type: "cloze", prompt: "Ich habe ein Problem mit meiner ___.", answer: "Reservierung", hint: "Reservierung passt zu Hotel, Restaurant oder Reise." },
      { type: "choice", prompt: "Welche Bitte ist korrekt?", options: ["Könnten Sie mir bitte eine Bestätigung schicken?", "Schicken Bestätigung ich.", "Bestätigung bitte du."], answer: "Könnten Sie mir bitte eine Bestätigung schicken?", hint: "Das ist eine höfliche Bitte." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "Vorteil", answer: "positiv" }, { term: "Nachteil", answer: "negativ" }, { term: "Lösung", answer: "Problem" }], hint: "Diese Wörter braucht man für Diskussionen." },
      { type: "choice", prompt: "Welche Aussage zeigt Zustimmung?", options: ["Ich bin damit einverstanden.", "Ich bin damit spät.", "Ich bin damit Bahnhof."], answer: "Ich bin damit einverstanden.", hint: "einverstanden sein bedeutet zustimmen." },
      { type: "cloze", prompt: "Könnten wir uns morgen ___ heute treffen?", answer: "statt", hint: "statt bedeutet: anstelle von." },
      { type: "reading", prompt: "Lesen Sie den Hinweis.", passage: "Wegen Bauarbeiten fährt die Linie 5 diese Woche nur bis Hauptbahnhof.", question: "Warum gibt es eine Änderung?", options: ["Wegen Bauarbeiten.", "Wegen einer Prüfung.", "Wegen eines Rabatts."], answer: "Wegen Bauarbeiten.", hint: "Wegen + Nomen nennt den Grund." },
      { type: "choice", prompt: "Welche Formulierung passt zum Schluss?", options: ["Zusammenfassend finde ich die Lösung gut.", "Zusammen Preis gut.", "Find ich Lösung zusammen."], answer: "Zusammenfassend finde ich die Lösung gut.", hint: "Zusammenfassend leitet eine Zusammenfassung ein." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Ich möchte mich für den Kurs anmelden. Leider funktioniert das Online-Formular nicht. Können Sie mir helfen?", question: "Was ist das Problem?", options: ["Das Formular funktioniert nicht.", "Der Kurs ist zu teuer.", "Die Person hat keine Zeit."], answer: "Das Formular funktioniert nicht.", hint: "Im Text steht: funktioniert ... nicht." },
      { type: "choice", prompt: "Was passt?", translation: "Ich interessiere mich ___ den Kurs.", options: ["für", "mit", "aus"], answer: "für", hint: "sich interessieren für + Akkusativ." },
      { type: "cloze", prompt: "Obwohl es regnet, ___ wir spazieren.", answer: "gehen", hint: "Der Hauptsatz hat Verbposition 2." },
      { type: "choice", prompt: "Welche Frage passt?", options: ["Könnten Sie mir weitere Informationen senden?", "Information senden ich?", "Sie weitere ich senden?"], answer: "Könnten Sie mir weitere Informationen senden?", hint: "Das ist eine formelle Bitte." },
    ],
    B2: [
      { type: "choice", prompt: "Welche Aussage vergleicht Vor- und Nachteile?", options: ["Ein Vorteil ist der Preis, ein Nachteil ist die Entfernung.", "Preis Vorteil Entfernung Nachteil.", "Ich Vorteil Entfernung."], answer: "Ein Vorteil ist der Preis, ein Nachteil ist die Entfernung.", hint: "Die Aussage nennt beide Seiten." },
      { type: "choice", prompt: "Welche Formulierung ist diplomatisch?", options: ["Ich verstehe Ihren Standpunkt, sehe das aber anders.", "Sie haben falsch.", "Das ist nicht gut."], answer: "Ich verstehe Ihren Standpunkt, sehe das aber anders.", hint: "Das ist höflich und klar." },
      { type: "cloze", prompt: "Andererseits muss man auch die Kosten ___.", answer: "berücksichtigen", hint: "berücksichtigen bedeutet: beachten/einbeziehen." },
      { type: "cloze", prompt: "Könnten Sie bitte prüfen, ob eine Umbuchung ___ ist?", answer: "möglich", hint: "möglich sein." },
      { type: "cloze", prompt: "Zusammenfassend finde ich diese Lösung am ___.", answer: "sinnvollsten", hint: "am sinnvollsten ist der Superlativ." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "einerseits", answer: "erste Seite" }, { term: "andererseits", answer: "zweite Seite" }, { term: "zusammenfassend", answer: "Schluss" }], hint: "Diese Wörter strukturieren Argumente." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Die Unterkunft ist zwar günstig, aber die Lage ist unpraktisch. Wer nur eine Nacht bleibt, kann dort schlafen. Für eine längere Reise würde ich sie nicht empfehlen.", question: "Was meint die Person?", options: ["Für längere Reisen ist die Unterkunft nicht ideal.", "Die Unterkunft ist perfekt für alle.", "Die Lage ist sehr praktisch."], answer: "Für längere Reisen ist die Unterkunft nicht ideal.", hint: "nicht empfehlen zeigt eine negative Bewertung." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Viele Menschen nutzen öffentliche Verkehrsmittel, weil sie günstiger und umweltfreundlicher sind. Allerdings dauert die Fahrt manchmal länger.", question: "Was ist ein Nachteil?", options: ["Die Fahrt dauert manchmal länger.", "Die Verkehrsmittel sind immer teurer.", "Sie sind nicht umweltfreundlich."], answer: "Die Fahrt dauert manchmal länger.", hint: "Allerdings zeigt den Nachteil." },
      { type: "choice", prompt: "Was bedeutet Datenschutz?", options: ["Schutz persönlicher Daten.", "Schutz vor Regen.", "Schutz im Verkehr."], answer: "Schutz persönlicher Daten.", hint: "Daten sind persönliche Informationen." },
      { type: "choice", prompt: "Was bedeutet Nachhaltigkeit?", options: ["Langfristig verantwortliches Handeln.", "Eine kurze Reise.", "Ein günstiger Preis."], answer: "Langfristig verantwortliches Handeln.", hint: "Nachhaltigkeit hängt mit Umwelt und Zukunft zusammen." },
      { type: "cloze", prompt: "Man sollte die Vor- und Nachteile ___.", answer: "vergleichen", hint: "vergleichen bedeutet: Unterschiede und Gemeinsamkeiten prüfen." },
      { type: "choice", prompt: "Welche Bitte ist formell?", options: ["Könnten Sie mir bitte eine schriftliche Bestätigung senden?", "Senden du Bestätigung.", "Bestätigung jetzt."], answer: "Könnten Sie mir bitte eine schriftliche Bestätigung senden?", hint: "Könnten Sie ... ist formell." },
      { type: "match", prompt: "Ordnen Sie zu.", pairs: [{ term: "Entwicklung", answer: "Veränderung" }, { term: "Herausforderung", answer: "schwierige Aufgabe" }, { term: "Verantwortung", answer: "Pflicht" }], hint: "Das sind abstrakte Nomen." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Homeoffice bietet mehr Flexibilität. Andererseits fehlt manchen Menschen der direkte Kontakt zu Kolleginnen und Kollegen.", question: "Welcher Nachteil wird genannt?", options: ["Weniger direkter Kontakt.", "Keine Flexibilität.", "Zu viele Reisen."], answer: "Weniger direkter Kontakt.", hint: "fehlt ... der direkte Kontakt." },
      { type: "cloze", prompt: "Ich sehe das etwas ___ als Sie.", answer: "anders", hint: "anders bedeutet: nicht gleich." },
      { type: "choice", prompt: "Welche Formulierung nennt eine Bedingung?", options: ["Unter dieser Voraussetzung ist das möglich.", "Voraussetzung möglich unter diese.", "Möglich Voraussetzung ich."], answer: "Unter dieser Voraussetzung ist das möglich.", hint: "Unter dieser Voraussetzung bedeutet: wenn diese Bedingung gilt." },
      { type: "choice", prompt: "Was bedeutet Gleichberechtigung?", options: ["Gleiche Rechte für alle.", "Eine lange Fahrt.", "Ein Formular."], answer: "Gleiche Rechte für alle.", hint: "gleich + Berechtigung." },
      { type: "reading", prompt: "Lesen Sie den Text.", passage: "Die neue App ist praktisch, aber viele Nutzerinnen und Nutzer machen sich Sorgen um den Datenschutz.", question: "Worüber machen sich die Menschen Sorgen?", options: ["Über den Datenschutz.", "Über die Öffnungszeiten.", "Über den Fahrplan."], answer: "Über den Datenschutz.", hint: "Im Text steht: Sorgen um den Datenschutz." },
      { type: "cloze", prompt: "Die Entscheidung hängt von mehreren Faktoren ___.", answer: "ab", hint: "abhängen von + Dativ." },
      { type: "choice", prompt: "Welche Formulierung passt als Fazit?", options: ["Insgesamt überwiegen für mich die Vorteile.", "Vorteile mich insgesamt.", "Überwiegen ich Vorteile."], answer: "Insgesamt überwiegen für mich die Vorteile.", hint: "Insgesamt leitet ein Fazit ein." },
      { type: "reading", prompt: "Lesen Sie den Kommentar.", passage: "Obwohl digitale Angebote praktisch sind, sollten ältere Menschen nicht ausgeschlossen werden. Deshalb braucht man auch persönliche Beratung.", question: "Was fordert der Kommentar?", options: ["Auch persönliche Beratung.", "Nur digitale Angebote.", "Keine Beratung."], answer: "Auch persönliche Beratung.", hint: "Im Text steht: braucht man auch persönliche Beratung." },
      { type: "choice", prompt: "Was passt?", translation: "Das Argument überzeugt mich nicht, weil ...", options: ["wichtige Informationen fehlen.", "morgen Bahnhof.", "ich Kaffee bestelle."], answer: "wichtige Informationen fehlen.", hint: "Nach weil folgt ein begründender Nebensatz." },
      { type: "cloze", prompt: "Diese Maßnahme könnte die Situation ___.", answer: "verbessern", hint: "Eine Maßnahme kann eine Situation verbessern." },
      { type: "choice", prompt: "Welche Aussage ist sachlich?", options: ["Die Statistik zeigt einen deutlichen Unterschied.", "Das ist total blöd.", "Niemand versteht irgendwas."], answer: "Die Statistik zeigt einen deutlichen Unterschied.", hint: "Sachliche Sprache ist neutral und präzise." },
    ],
  };
}

function enhanceExamPools(pools) {
  const additions = {
    A1: [
      { type: "spelling", skill: "Wortschatz Bild", tags: ["Wortschatz", "Rechtschreibung"], group: "Bildaufgabe", prompt: "Schreiben Sie das Wort mit Artikel.", visual: { icon: "☕", title: "Kaffee", caption: "Getränk im Café" }, answers: ["der Kaffee", "Kaffee"], hint: "Richtig ist: der Kaffee." },
      { type: "spelling", skill: "Wortschatz Bild", tags: ["Wortschatz", "Rechtschreibung"], group: "Bildaufgabe", prompt: "Schreiben Sie das Wort mit Artikel.", visual: { icon: "📘", title: "Buch", caption: "zum Lesen" }, answers: ["das Buch", "Buch"], hint: "Richtig ist: das Buch." },
      { type: "cloze", skill: "Wortschatz", tags: ["Alltag", "Mehrfachantwort"], group: "Minidialog Café", prompt: "Guten Tag. Ich hätte gern einen ___.", answers: ["Kaffee", "Tee", "Saft"], hint: "Kaffee, Tee oder Saft passen hier." },
      { type: "reading", skill: "Lesen Teil 1", tags: ["Lesen", "Alltag"], prompt: "Lesen Sie die Nachricht. Ist die Aussage richtig?", passage: "Hallo Tim, ich bin um 10 Uhr am Bahnhof. Ich kaufe die Fahrkarten. Bitte bring Kaffee mit. Lara", question: "Lara kauft die Fahrkarten.", options: ["Richtig", "Falsch"], answer: "Richtig", hint: "Im Text steht: Ich kaufe die Fahrkarten." },
      { type: "reading", skill: "Lesen Teil 2", tags: ["Lesen", "Information"], prompt: "Lesen Sie die Anzeige und wählen Sie.", passage: "Sprachschule Mitte: Deutsch A1, Montag und Mittwoch, 18:00-19:30 Uhr. Anmeldung bis Freitag.", question: "Wann ist der Kurs?", options: ["Montag und Mittwoch", "Dienstag und Freitag", "Nur am Freitag"], answer: "Montag und Mittwoch", hint: "Die Anzeige nennt Montag und Mittwoch." },
      { type: "listening", skill: "Hören Teil 1", tags: ["Hören", "Zahlen"], prompt: "Hörskript: Wählen Sie die richtige Information.", passage: "Guten Tag, hier ist die Praxis Dr. Klein. Ihr Termin ist morgen um 9 Uhr, nicht um 10 Uhr.", question: "Wann ist der Termin?", options: ["Um 9 Uhr", "Um 10 Uhr", "Heute"], answer: "Um 9 Uhr", hint: "Im Hörskript steht: morgen um 9 Uhr." },
      { type: "writing", skill: "Schreiben", tags: ["Schreiben", "Alltag"], prompt: "Schreiben Sie eine kurze Nachricht.", task: "Sie können heute nicht zum Deutschkurs kommen. Schreiben Sie 2-3 Sätze: Entschuldigung, Grund, Bitte um Hausaufgaben.", answer: "__SELF_OK__", model: "Hallo Frau Weber, ich kann heute leider nicht zum Kurs kommen, weil ich krank bin. Können Sie mir bitte die Hausaufgaben schicken?" },
      { type: "speaking", skill: "Sprechen Teil 2", tags: ["Sprechen", "Fragen"], prompt: "Sprechen Sie laut.", task: "Fragekarte: Name. Stellen Sie eine passende Frage und antworten Sie kurz.", answer: "__SELF_OK__", model: "Wie heißen Sie? - Ich heiße Anna." },
    ],
    A2: [
      { type: "spelling", skill: "Wortschatz Bild", tags: ["Wortschatz", "Rechtschreibung"], group: "Bildaufgabe", prompt: "Schreiben Sie das Wort mit Artikel.", visual: { icon: "🏨", title: "Hotelzimmer", caption: "für die Reise" }, answers: ["das Zimmer", "Zimmer"], hint: "Richtig ist: das Zimmer." },
      { type: "cloze", skill: "Sprachbausteine", tags: ["Perfekt", "Mehrfachantwort"], group: "Satzgruppe Perfekt", prompt: "Gestern ___ ich Deutsch gelernt.", answers: ["habe", "hab"], hint: "Standardform: habe." },
      { type: "reading", skill: "Lesen Teil 1", tags: ["Lesen", "Termin"], prompt: "Lesen Sie die E-Mail. Wählen Sie die richtige Antwort.", passage: "Sehr geehrte Frau Miller, der Termin am Dienstag fällt aus. Wir können Ihnen am Donnerstag um 11 Uhr einen neuen Termin anbieten.", question: "Was ist richtig?", options: ["Der Termin ist am Donnerstag.", "Der Termin bleibt am Dienstag.", "Es gibt keinen neuen Termin."], answer: "Der Termin ist am Donnerstag.", hint: "Ein neuer Termin wird am Donnerstag um 11 Uhr angeboten." },
      { type: "listening", skill: "Hören Teil 2", tags: ["Hören", "Reisen"], prompt: "Hörskript: Wählen Sie die richtige Antwort.", passage: "Achtung an Gleis 4: Der Zug nach München fährt heute 20 Minuten später ab.", question: "Was passiert?", options: ["Der Zug hat Verspätung.", "Der Zug fällt aus.", "Der Zug fährt früher."], answer: "Der Zug hat Verspätung.", hint: "20 Minuten später bedeutet Verspätung." },
      { type: "choice", skill: "Sprachbausteine", tags: ["Perfekt"], prompt: "Wählen Sie die richtige Lösung.", translation: "Gestern ___ ich eine Wohnung besichtigt.", options: ["habe", "bin", "war"], answer: "habe", hint: "besichtigen bildet das Perfekt mit haben." },
      { type: "writing", skill: "Schreiben", tags: ["Schreiben", "Termin"], prompt: "Schreiben Sie eine E-Mail.", task: "Sie möchten einen Termin verschieben. Schreiben Sie 3-4 Sätze: Grund, neuer Vorschlag, Bitte um Antwort.", answer: "__SELF_OK__", model: "Sehr geehrte Frau Keller, ich kann morgen leider nicht kommen, weil ich arbeiten muss. Kann ich am Freitag um 10 Uhr kommen? Bitte antworten Sie mir kurz." },
      { type: "speaking", skill: "Sprechen Teil 3", tags: ["Sprechen", "Alltag"], prompt: "Sprechen Sie laut.", task: "Planen Sie mit einer Person einen Ausflug. Fragen Sie nach Zeit, Ort und Verkehrsmittel.", answer: "__SELF_OK__", model: "Wann treffen wir uns? Wo treffen wir uns? Fahren wir mit dem Bus oder mit dem Zug?" },
    ],
    B1: [
      { type: "cloze", skill: "Schreiben", tags: ["Redemittel", "Mehrfachantwort"], group: "Redemittel Meinung", prompt: "___ Meinung nach ist Online-Unterricht praktisch.", answers: ["Meiner", "Meiner Meinung nach"], hint: "Meiner Meinung nach ist die feste Wendung." },
      { type: "reading", skill: "Lesen Aufgabengruppe", tags: ["Lesen", "題組"], group: "Aufgaben 1-2: Eine Nachricht", prompt: "Lesen Sie den Text und wählen Sie.", passage: "Anna kann heute nicht zum Kurs kommen. Sie hat Fieber und bittet um die Hausaufgaben.", question: "Warum kommt Anna nicht?", options: ["Sie ist krank.", "Sie reist.", "Sie hat keine Lust."], answer: "Sie ist krank.", hint: "Fieber zeigt: Sie ist krank." },
      { type: "reading", skill: "Lesen", tags: ["Lesen", "Meinung"], prompt: "Lesen Sie den Kommentar. Welche Aussage passt?", passage: "Viele finden Online-Unterricht praktisch. Trotzdem lernen manche besser im Kursraum, weil sie dort direkter fragen können.", question: "Was sagt der Text?", options: ["Online-Unterricht hat Vorteile, aber nicht für alle.", "Online-Unterricht ist immer schlecht.", "Im Kursraum kann niemand fragen."], answer: "Online-Unterricht hat Vorteile, aber nicht für alle.", hint: "Der Text nennt beide Seiten." },
      { type: "choice", skill: "Sprachbausteine", tags: ["Nebensatz"], prompt: "Wählen Sie die passende Form.", translation: "Ich melde mich an, ___ ich eine Bestätigung bekommen habe.", options: ["sobald", "trotzdem", "deshalb"], answer: "sobald", hint: "sobald bedeutet: wenn etwas passiert ist." },
      { type: "writing", skill: "Schreiben", tags: ["Schreiben", "Beschwerde"], prompt: "Schreiben Sie eine formelle Nachricht.", task: "Sie haben ein Problem mit einer Reservierung. Schreiben Sie: Problem, Wunsch, höfliche Bitte.", answer: "__SELF_OK__", model: "Sehr geehrte Damen und Herren, ich habe ein Problem mit meiner Reservierung. Das Zimmer ist nicht wie beschrieben. Könnten Sie mir bitte eine andere Lösung anbieten?" },
      { type: "speaking", skill: "Sprechen", tags: ["Sprechen", "Meinung"], prompt: "Sprechen Sie laut.", task: "Sagen Sie Ihre Meinung zum Thema Homeoffice und nennen Sie einen Vorteil und einen Nachteil.", answer: "__SELF_OK__", model: "Meiner Meinung nach ist Homeoffice praktisch, weil man Zeit spart. Ein Nachteil ist, dass der Kontakt zu Kolleginnen und Kollegen fehlt." },
    ],
    B2: [
      { type: "cloze", skill: "Schreiben", tags: ["Argumentation", "Mehrfachantwort"], group: "Argumentation", prompt: "Insgesamt ___ für mich die Vorteile.", answers: ["überwiegen", "ueberwiegen"], hint: "Überwiegen kann auch ohne Umlaut als ueberwiegen eingegeben werden." },
      { type: "reading", skill: "Lesen", tags: ["Lesen", "Argumentation"], prompt: "Lesen Sie den Abschnitt. Welche Aussage fasst ihn zusammen?", passage: "Digitale Dienstleistungen sparen Zeit und Kosten. Gleichzeitig müssen Datenschutz, Barrierefreiheit und persönliche Beratung garantiert werden.", question: "Was ist die Kernaussage?", options: ["Digitalisierung braucht klare Schutzmaßnahmen.", "Digitale Angebote sind grundsätzlich unnötig.", "Persönliche Beratung soll verschwinden."], answer: "Digitalisierung braucht klare Schutzmaßnahmen.", hint: "Der Text nennt Vorteile und notwendige Bedingungen." },
      { type: "choice", skill: "Sprachbausteine", tags: ["Konnektoren"], prompt: "Wählen Sie die passende Verbindung.", translation: "___ öffentliche Verkehrsmittel günstiger sind, entscheiden sich manche Menschen für das Auto.", options: ["Obwohl", "Deshalb", "Sobald"], answer: "Obwohl", hint: "Obwohl leitet einen Gegensatz ein." },
      { type: "writing", skill: "Schreiben", tags: ["Schreiben", "Argumentation"], prompt: "Schreiben Sie einen kurzen Kommentar.", task: "Thema: Sollten Sprachkurse online stattfinden? Schreiben Sie 4-5 Sätze mit Vorteil, Nachteil und eigener Meinung.", answer: "__SELF_OK__", model: "Ein Vorteil von Online-Kursen ist die Flexibilität. Andererseits fehlt manchmal der direkte Austausch. Meiner Meinung nach ist eine Kombination aus Online- und Präsenzunterricht am sinnvollsten." },
      { type: "speaking", skill: "Sprechen", tags: ["Sprechen", "Argumentation"], prompt: "Sprechen Sie laut.", task: "Vergleichen Sie zwei Möglichkeiten: mit dem Auto reisen oder mit dem Zug reisen. Nennen Sie Vor- und Nachteile.", answer: "__SELF_OK__", model: "Der Zug ist oft umweltfreundlicher und entspannter. Das Auto ist flexibler, aber meist teurer und weniger nachhaltig." },
    ],
  };

  Object.entries(additions).forEach(([level, questions]) => {
    pools[level] = [...questions, ...(pools[level] || [])];
  });

  return pools;
}

function initializeLessons() {
  expandSyllabusLessons();
  ensureStageCoverage();

  const levelCounts = {};
  levelOrder.forEach((level) => {
    usedLessonVocabularyByLevel[level] = new Set();
  });

  lessons.forEach((lesson, index) => {
    if (lesson.isComprehensiveExam) return;
    lesson.stage = lessonStages[lesson.id] || testStages[index % testStages.length];
    lesson.badge = lesson.level;
    lesson.shortTitle = lesson.title;
    lesson.lessonNumber = (levelCounts[lesson.level] || 0) + 1;
    levelCounts[lesson.level] = lesson.lessonNumber;
    lesson.lessonCode = `L${lesson.lessonNumber}`;
    const topicData = getLessonTopicData(lesson);
    lesson.topicZh = topicData.zh;
    lesson.topicDe = topicData.de;
    lesson.topic = `${topicData.zh} · ${topicData.de}`;
    lesson.navTitle = `${lesson.lessonCode} ${lesson.topic}`;
    lesson.textbook = createTextbookContent(lesson.level, lesson.lessonNumber, topicData);
    if (lesson.textbook?.storyTitleZh) {
      lesson.topicZh = lesson.textbook.storyTitleZh;
      lesson.topicDe = lesson.textbook.storyTitleDe;
      lesson.topic = `${lesson.topicZh} · ${lesson.topicDe}`;
      lesson.navTitle = `${lesson.lessonCode} ${lesson.topic}`;
    }
    lesson.dailyPhrases = createLessonDailyPhrases(lesson.level, lesson.lessonNumber, topicData.de);
    lesson.courseSummary = getCourseSummary(lesson);
    lesson.questions = buildLessonQuestions(lesson, index);
  });

  createComprehensiveExams();
}

function createComprehensiveExams() {
  const examTypes = [
    { id: "midterm", code: "M", title: "期中考", description: "L1-L6 綜合測驗", from: 1, to: 6 },
    { id: "final", code: "F", title: "期末考", description: "L7-L12 綜合測驗", from: 7, to: 12 },
    { id: "review", code: "R", title: "綜合複習考", description: "L1-L12 Gesamtwiederholung", from: 1, to: 12 },
  ];

  levelOrder.forEach((level) => {
    const levelLessons = lessons
      .filter((lesson) => lesson.level === level && !lesson.isComprehensiveExam)
      .sort(sortLessonsByCode);

    examTypes.forEach((exam) => {
      const id = `${level.toLowerCase()}-${exam.id}-exam`;
      const scopedLessons = levelLessons.filter((lesson) => lesson.lessonNumber >= exam.from && lesson.lessonNumber <= exam.to);
      const questions = buildComprehensiveExamQuestions(scopedLessons, exam.id);
      const existing = lessons.find((lesson) => lesson.id === id);
      const examLesson = {
        id,
        level,
        stage: "進階",
        lessonCode: exam.code,
        examCode: exam.code,
        title: `${level} ${exam.title}`,
        topic: exam.description,
        description: `${exam.description} · 30 Fragen`,
        courseSummary: `${level} ${exam.description}`,
        sourceNote: "綜合測驗依課程內容與德語檢定題型原創整理。",
        isComprehensiveExam: true,
        questions,
      };

      if (existing) Object.assign(existing, examLesson);
      else lessons.push(examLesson);
    });
  });
}

function buildComprehensiveExamQuestions(scopedLessons, examId) {
  const questions = scopedLessons.flatMap((lesson) => lesson.questions || []);
  return shuffleWithSeed(dedupeQuestions(questions), examId.length * 997).slice(0, 30);
}

function expandSyllabusLessons() {
  levelOrder.forEach((level) => {
    const topics = syllabusTopics[level] || [];
    const existingCount = lessons.filter((lesson) => lesson.level === level).length;

    topics.slice(existingCount).forEach((topicData, offset) => {
      const lessonNumber = existingCount + offset + 1;
      const stage = testStages[(lessonNumber - 1) % testStages.length];
      const id = `${level.toLowerCase()}-lesson-${lessonNumber}`;
      const textbook = createTextbookContent(level, lessonNumber, topicData);

      lessonStages[id] = stage;
      lessons.push({
        id,
        level,
        track: stage,
        badge: level,
        title: `${topicData.zh} · ${topicData.de}`,
        topic: `${topicData.zh} · ${topicData.de}`,
        topicZh: topicData.zh,
        topicDe: topicData.de,
        description: `${level} L${lessonNumber}：${topicData.zh} · ${topicData.de}`,
        sourceNote: "課程內容依 CEFR 能力描述、Goethe/telc 題型方向與台灣學習者常見需求原創整理。",
        textbook,
        cards: createLessonFocusCards(level, `${topicData.zh} · ${topicData.de}`, textbook),
        questions: [],
      });
    });
  });
}

const a1LessonPlans = [
  {
    titleZh: "開學日",
    titleDe: "Der erste Schultag",
    focusZh: "自我介紹與基本句",
    text: "Heute ist der erste Schultag. Anna kommt in die Klasse und sieht Ben. Die Lehrerin sagt: Guten Morgen, ich heiße Frau Miller. Anna sagt ihren Namen, ihr Alter und ihre Stadt. Ben fragt: Woher kommst du? Anna antwortet: Ich komme aus Taipei und lerne Deutsch.",
    vocab: [["der Name", "名字", "die Namen"], ["das Alter", "年齡", "-"], ["die Stadt", "城市", "die Städte"], ["die Klasse", "班級", "die Klassen"], ["die Lehrerin", "女老師", "die Lehrerinnen"], ["kommen", "來自；來", ""], ["heißen", "叫做", ""], ["fragen", "詢問", ""], ["antworten", "回答", ""], ["lernen", "學習", ""]],
    extraVocab: [["der Schultag", "上課日", "die Schultage"], ["Guten Morgen", "早安", ""], ["woher", "從哪裡來", ""], ["aus Taipei", "來自台北", ""], ["Deutsch", "德文", "-"]],
  },
  {
    titleZh: "新同學",
    titleDe: "Ein neuer Mitschüler",
    focusZh: "人稱、sein/haben",
    text: "Tom ist neu in der Schule. Er ist freundlich und hat einen Rucksack. In der Pause spricht er mit Emma. Emma hat ein Heft und einen Stift. Sie sagt: Wir sind jetzt in einer Gruppe. Tom lacht und sagt: Das ist gut.",
    vocab: [["der Mitschüler", "男同學", "die Mitschüler"], ["die Schule", "學校", "die Schulen"], ["der Rucksack", "背包", "die Rucksäcke"], ["die Pause", "下課時間", "die Pausen"], ["das Heft", "筆記本", "die Hefte"], ["der Stift", "筆", "die Stifte"], ["freundlich", "友善的", ""], ["neu", "新的", ""], ["sprechen", "說話", ""], ["lachen", "笑", ""]],
    extraVocab: [["die Gruppe", "小組", "die Gruppen"], ["jetzt", "現在", ""], ["gut", "好的", ""], ["mit Emma", "和 Emma", ""], ["in der Schule", "在學校", ""]],
  },
  {
    titleZh: "咖啡店早餐",
    titleDe: "Frühstück im Café",
    focusZh: "冠詞與點餐",
    text: "Am Morgen geht David in ein Café. Er möchte einen Kaffee und ein Brötchen. Die Kellnerin fragt: Möchten Sie auch Wasser? David sagt: Nein, danke. Der Kaffee kostet drei Euro. David bezahlt mit Karte.",
    vocab: [["das Café", "咖啡店", "die Cafés"], ["der Kaffee", "咖啡", "die Kaffees"], ["das Brötchen", "小麵包", "die Brötchen"], ["das Wasser", "水", "-"], ["die Kellnerin", "女服務生", "die Kellnerinnen"], ["der Euro", "歐元", "die Euro"], ["möchten", "想要", ""], ["kosten", "花費", ""], ["bezahlen", "付款", ""], ["mit Karte", "用卡片", ""]],
    extraVocab: [["das Frühstück", "早餐", "-"], ["am Morgen", "早上", ""], ["auch", "也", ""], ["nein", "不", ""], ["danke", "謝謝", ""]],
  },
  {
    titleZh: "教室時鐘",
    titleDe: "Die Uhr im Klassenzimmer",
    focusZh: "數字、時間與星期",
    text: "Im Klassenzimmer hängt eine Uhr. Es ist acht Uhr. Der Deutschkurs beginnt um acht Uhr zehn. Julia schreibt das Datum an die Tafel: Montag, der fünfte September. Die Schüler zählen von eins bis zwanzig.",
    vocab: [["die Uhr", "時鐘", "die Uhren"], ["das Klassenzimmer", "教室", "die Klassenzimmer"], ["der Deutschkurs", "德文課", "die Deutschkurse"], ["das Datum", "日期", "die Daten"], ["die Tafel", "黑板", "die Tafeln"], ["der Montag", "星期一", "die Montage"], ["beginnen", "開始", ""], ["zählen", "數數", ""], ["acht", "八", ""], ["zwanzig", "二十", ""]],
    extraVocab: [["hängen", "掛著", ""], ["um acht Uhr", "八點", ""], ["fünfte", "第五", ""], ["September", "九月", ""], ["die Schüler", "學生們", "die Schüler"]],
  },
  {
    titleZh: "家庭照片",
    titleDe: "Das Familienfoto",
    focusZh: "家庭與所有格",
    text: "Sara zeigt ein Familienfoto. Das ist mein Vater, sagt sie. Meine Mutter arbeitet heute zu Hause. Ich habe einen Bruder und eine Schwester. Ben sieht auch einen Hund auf dem Foto. Sara sagt: Das ist Max, unser Hund.",
    vocab: [["die Familie", "家庭", "die Familien"], ["das Foto", "照片", "die Fotos"], ["der Vater", "父親", "die Väter"], ["die Mutter", "母親", "die Mütter"], ["der Bruder", "兄弟", "die Brüder"], ["die Schwester", "姊妹", "die Schwestern"], ["der Hund", "狗", "die Hunde"], ["zeigen", "展示", ""], ["arbeiten", "工作", ""], ["mein", "我的", ""]],
    extraVocab: [["zu Hause", "在家", ""], ["unser", "我們的", ""], ["das Familienfoto", "家庭照片", "die Familienfotos"], ["sehen", "看見", ""], ["auf dem Foto", "在照片上", ""]],
  },
  {
    titleZh: "學校午餐",
    titleDe: "Mittagessen in der Schule",
    focusZh: "食物、點餐與付款",
    text: "In der Schule gibt es heute Suppe, Reis und Salat. Emma nimmt eine Suppe und einen Apfel. Tom möchte lieber Nudeln. An der Kasse bezahlt Emma vier Euro. Danach setzt sie sich an einen Tisch.",
    vocab: [["das Mittagessen", "午餐", "-"], ["die Suppe", "湯", "die Suppen"], ["der Reis", "米飯", "-"], ["der Salat", "沙拉", "die Salate"], ["der Apfel", "蘋果", "die Äpfel"], ["die Nudeln", "麵", "die Nudeln"], ["die Kasse", "收銀台", "die Kassen"], ["nehmen", "拿；選", ""], ["sich setzen", "坐下", ""], ["lieber", "比較想要", ""]],
    extraVocab: [["das Menü", "菜單；套餐", "die Menüs"], ["vier Euro", "四歐元", ""], ["nach dem Essen", "飯後", ""], ["der Tisch", "桌子", "die Tische"], ["die Mensa", "學校餐廳", "die Mensen"]],
  },
  {
    titleZh: "去車站",
    titleDe: "Auf dem Weg zum Bahnhof",
    focusZh: "城市、方向與交通",
    text: "Nach dem Kurs geht Anna zum Bahnhof. Sie sucht die richtige Straße. Ein Mann hilft ihr und sagt: Gehen Sie geradeaus und dann links. Dort fährt der Bus zur Stadtmitte. Anna kauft eine Fahrkarte.",
    vocab: [["der Bahnhof", "車站", "die Bahnhöfe"], ["die Straße", "街道", "die Straßen"], ["der Bus", "公車", "die Busse"], ["die Stadtmitte", "市中心", "-"], ["die Fahrkarte", "車票", "die Fahrkarten"], ["der Mann", "男人", "die Männer"], ["suchen", "尋找", ""], ["helfen", "幫助", ""], ["geradeaus", "直走", ""], ["links", "左邊", ""]],
    extraVocab: [["nach dem Kurs", "下課後", ""], ["richtig", "正確的", ""], ["dort", "在那裡", ""], ["fahren", "行駛；搭乘", ""], ["zum Bahnhof", "到車站", ""]],
  },
  {
    titleZh: "買新外套",
    titleDe: "Eine neue Jacke",
    focusZh: "購物、價格與顏色",
    text: "Mia geht am Samstag in ein Geschäft. Sie braucht eine neue Jacke. Die rote Jacke ist schön, aber zu teuer. Die blaue Jacke kostet weniger. Mia probiert sie an und sagt: Diese Jacke nehme ich.",
    vocab: [["die Jacke", "外套", "die Jacken"], ["das Geschäft", "商店", "die Geschäfte"], ["der Samstag", "星期六", "die Samstage"], ["der Preis", "價格", "die Preise"], ["rot", "紅色的", ""], ["blau", "藍色的", ""], ["schön", "漂亮的", ""], ["teuer", "貴的", ""], ["anprobieren", "試穿", ""], ["kaufen", "購買", ""]],
    extraVocab: [["weniger", "較少", ""], ["diese", "這個", ""], ["diese Jacke", "這件外套", ""], ["am Samstag", "星期六", ""], ["zu teuer", "太貴", ""]],
  },
  {
    titleZh: "忙碌的早晨",
    titleDe: "Ein voller Morgen",
    focusZh: "日常作息與可分動詞",
    text: "Ben steht um sieben Uhr auf. Er duscht, zieht ein Hemd an und frühstückt schnell. Um halb acht fährt er mit dem Fahrrad zur Schule. Im Kurs schreibt er die Hausaufgabe auf.",
    vocab: [["der Morgen", "早晨", "die Morgen"], ["das Hemd", "襯衫", "die Hemden"], ["das Fahrrad", "腳踏車", "die Fahrräder"], ["die Hausaufgabe", "作業", "die Hausaufgaben"], ["aufstehen", "起床", ""], ["duschen", "洗澡", ""], ["anziehen", "穿上", ""], ["frühstücken", "吃早餐", ""], ["aufschreiben", "寫下", ""], ["schnell", "快速地", ""]],
    extraVocab: [["um sieben Uhr", "七點", ""], ["halb acht", "七點半", ""], ["zur Schule", "去學校", ""], ["mit dem Fahrrad", "騎腳踏車", ""], ["im Kurs", "在課堂上", ""]],
  },
  {
    titleZh: "戶外教學",
    titleDe: "Der Ausflug",
    focusZh: "天氣、衣著與顏色",
    text: "Heute macht die Klasse einen Ausflug. Am Morgen ist es kühl und windig. Die Lehrerin sagt: Nehmt bitte eine Jacke mit. Am Mittag scheint die Sonne. Anna trägt eine gelbe Mütze und Ben trägt einen grünen Pullover.",
    vocab: [["der Ausflug", "戶外教學；郊遊", "die Ausflüge"], ["das Wetter", "天氣", "-"], ["die Sonne", "太陽", "die Sonnen"], ["der Wind", "風", "die Winde"], ["die Mütze", "帽子", "die Mützen"], ["der Pullover", "毛衣", "die Pullover"], ["kühl", "涼的", ""], ["windig", "有風的", ""], ["gelb", "黃色的", ""], ["grün", "綠色的", ""]],
    extraVocab: [["scheinen", "照耀", ""], ["mitnehmen", "帶著", ""], ["am Mittag", "中午", ""], ["tragen", "穿戴", ""], ["draußen", "在戶外", ""]],
  },
  {
    titleZh: "校護室",
    titleDe: "Im Krankenzimmer",
    focusZh: "身體、健康與預約",
    text: "Tom fühlt sich nicht gut. Er hat Kopfschmerzen und geht ins Krankenzimmer. Die Schulärztin fragt: Tut der Hals weh? Tom sagt: Ja, und ich bin müde. Die Ärztin gibt ihm Tee und macht einen Termin.",
    vocab: [["das Krankenzimmer", "保健室", "die Krankenzimmer"], ["die Schulärztin", "校醫", "die Schulärztinnen"], ["der Kopf", "頭", "die Köpfe"], ["der Hals", "喉嚨；脖子", "die Hälse"], ["der Termin", "預約", "die Termine"], ["der Tee", "茶", "die Tees"], ["sich fühlen", "感覺", ""], ["wehtun", "疼痛", ""], ["müde", "疲累的", ""], ["geben", "給", ""]],
    extraVocab: [["Kopfschmerzen", "頭痛", "die Kopfschmerzen"], ["nicht gut", "不舒服", ""], ["die Ärztin", "女醫師", "die Ärztinnen"], ["ja", "是的", ""], ["ins Krankenzimmer", "到保健室", ""]],
  },
  {
    titleZh: "檢定練習日",
    titleDe: "Training für die Prüfung",
    focusZh: "A1 綜合任務",
    text: "Heute übt das Team für die Prüfung. Julia liest eine kurze Nachricht, David hört einen Dialog und Emma schreibt eine Antwort. Zum Schluss sprechen alle über Alltag, Schule und Familie. Die Lehrerin sagt: Kleine Schritte helfen jeden Tag.",
    vocab: [["die Prüfung", "考試", "die Prüfungen"], ["das Team", "團隊", "die Teams"], ["die Nachricht", "訊息", "die Nachrichten"], ["der Dialog", "對話", "die Dialoge"], ["die Antwort", "回答", "die Antworten"], ["der Alltag", "日常", "-"], ["lesen", "閱讀", ""], ["hören", "聽", ""], ["schreiben", "寫", ""], ["üben", "練習", ""]],
    extraVocab: [["kurz", "短的", ""], ["zum Schluss", "最後", ""], ["alle", "所有人", ""], ["kleine Schritte", "小步驟", ""], ["jeden Tag", "每天", ""]],
  },
];

const a1LessonDetails = [
  "Nach dem Unterricht schreibt Anna drei Sätze in ihr Heft: Ich heiße Anna. Ich bin achtzehn Jahre alt. Ich wohne in Taipei. Zu Hause liest sie die Sätze noch einmal laut.",
  "Die Gruppe macht eine kleine Aufgabe. Tom sagt: Ich bin neu hier. Emma antwortet: Wir helfen dir. Dann suchen sie zusammen ein Bild, ein Wort und einen kurzen Satz.",
  "David setzt sich an einen kleinen Tisch am Fenster. Er liest die Karte langsam und zeigt auf das Brötchen. Danach fragt er höflich nach der Rechnung.",
  "Die Lehrerin fragt: Welcher Tag ist heute? Julia antwortet laut und die Klasse wiederholt den Satz. Danach schreiben alle drei Uhrzeiten und zwei Wochentage.",
  "Sara spricht langsam über ihre Familie. Die anderen Schüler stellen einfache Fragen. Am Ende schreibt Ben: Saras Bruder ist zwölf Jahre alt und ihr Hund heißt Max.",
  "Emma liest zuerst das Menü an der Wand. Sie fragt Tom: Was nimmst du? Nach dem Essen räumt sie das Tablett weg und sagt der Frau an der Kasse danke.",
  "Anna liest die Schilder in der Straße. Sie findet den Bus, aber sie ist unsicher. Deshalb fragt sie noch einmal und wiederholt die Richtung: geradeaus, dann links.",
  "Mia schaut auf das Preisschild und vergleicht zwei Jacken. Die Verkäuferin bringt eine andere Größe. Mia spricht langsam und benutzt die Farben rot, blau und grün.",
  "Ben hat wenig Zeit, aber er bleibt ruhig. Er packt sein Heft, seinen Stift und eine kleine Flasche ein. In der Schule erzählt er kurz von seinem Morgen.",
  "Die Klasse geht in einen Park. Weil das Wetter anders wird, ziehen einige Schüler ihre Jacken aus. Die Lehrerin fragt später: Wie ist das Wetter jetzt?",
  "Tom wartet auf einem Stuhl und beschreibt seine Schmerzen. Die Schulärztin schreibt eine kurze Notiz. Danach ruft Tom seine Mutter an und geht langsam zurück.",
  "Die Lehrerin verteilt kleine Karten mit Aufgaben. Jede Person liest, hört, schreibt oder spricht. Am Ende markieren alle zwei Wörter, die sie noch üben möchten.",
];

const a2LessonPlans = [
  {
    titleZh: "台南週末",
    titleDe: "Ein Wochenende in Tainan",
    focusZh: "完成式敘述經驗",
    text: "Am Samstag ist Emma mit dem Zug nach Tainan gefahren. Sie hat eine Fahrkarte gekauft und am Bahnhof auf Tom gewartet. Zusammen haben sie die alte Stadt besucht, viele Fotos gemacht und in einem kleinen Restaurant gegessen. Am Abend hat Emma ihrer Freundin eine Nachricht geschrieben und von dem schönen Ausflug erzählt.",
    vocab: [["das Wochenende", "週末", "die Wochenenden"], ["die Reise", "旅行", "die Reisen"], ["der Ausflug", "郊遊", "die Ausflüge"], ["der Zug", "火車", "die Züge"], ["die Fahrkarte", "車票", "die Fahrkarten"], ["besuchen", "拜訪；參觀", ""], ["erleben", "經歷", ""], ["erzählen", "敘述", ""], ["fotografieren", "拍照", ""], ["zurückkommen", "回來", ""]],
    extraVocab: [["der Bahnhof", "車站", "die Bahnhöfe"], ["zusammen", "一起", ""], ["alt", "舊的；古老的", ""], ["das Restaurant", "餐廳", "die Restaurants"], ["schön", "美好的", ""]],
  },
  {
    titleZh: "改時間的電話",
    titleDe: "Ein Anruf in der Praxis",
    focusZh: "預約、改期與禮貌電話",
    text: "Lucas hat am Freitag einen Arzttermin. Leider schreibt seine Lehrerin genau für diese Zeit einen Test. Deshalb ruft Lucas in der Praxis an. Er spricht langsam, nennt seinen Namen und fragt nach einem neuen Termin. Die Assistentin schaut in den Kalender und schlägt Dienstagvormittag vor. Lucas notiert die Uhrzeit und bestätigt den Termin höflich.",
    vocab: [["der Arzttermin", "看診預約", "die Arzttermine"], ["die Praxis", "診所", "die Praxen"], ["der Kalender", "行事曆", "die Kalender"], ["die Uhrzeit", "時間點", "die Uhrzeiten"], ["der Freitag", "星期五", "die Freitage"], ["verschieben", "延期；改期", ""], ["anrufen", "打電話", ""], ["passen", "合適", ""], ["notieren", "記下", ""], ["bestätigen", "確認", ""]],
    extraVocab: [["leider", "可惜；很遺憾", ""], ["die Assistentin", "助理", "die Assistentinnen"], ["vorschlagen", "提議", ""], ["höflich", "有禮貌的", ""], ["der Vormittag", "上午", "die Vormittage"]],
  },
  {
    titleZh: "課程通知",
    titleDe: "Eine Nachricht vom Kurs",
    focusZh: "讀懂通知與回信",
    text: "Mia bekommt am Abend eine E-Mail vom Deutschkurs. Im Betreff steht: Raumänderung am Mittwoch. Der Kurs findet nicht im Raum 204 statt, sondern im Raum 310. Mia liest die Nachricht zweimal, markiert die wichtigste Information und antwortet kurz. Sie schreibt, dass sie die Änderung verstanden hat und rechtzeitig kommt.",
    vocab: [["die E-Mail", "電子郵件", "die E-Mails"], ["der Betreff", "主旨", "die Betreffe"], ["die Änderung", "變更", "die Änderungen"], ["der Raum", "教室；房間", "die Räume"], ["die Information", "資訊", "die Informationen"], ["lesen", "閱讀", ""], ["antworten", "回覆", ""], ["schicken", "寄送", ""], ["beachten", "注意", ""], ["verstehen", "理解", ""]],
    extraVocab: [["stattfinden", "舉行", ""], ["sondern", "而是", ""], ["zweimal", "兩次", ""], ["markieren", "標記", ""], ["rechtzeitig", "準時地", ""]],
  },
  {
    titleZh: "第一次看房",
    titleDe: "Die erste Wohnungsbesichtigung",
    focusZh: "租屋、房間描述與費用",
    text: "Noah sucht ein Zimmer in Berlin. Am Nachmittag besichtigt er eine kleine Wohnung. Das Zimmer ist hell und ruhig, aber die Miete ist hoch. In der Küche gibt es einen Tisch und zwei Stühle. Die Vermieterin erklärt den Vertrag und die Kaution. Noah möchte noch eine Nacht darüber nachdenken.",
    vocab: [["die Wohnung", "公寓", "die Wohnungen"], ["das Zimmer", "房間", "die Zimmer"], ["die Miete", "房租", "die Mieten"], ["die Küche", "廚房", "die Küchen"], ["das Bad", "浴室", "die Bäder"], ["besichtigen", "參觀", ""], ["suchen", "尋找", ""], ["wohnen", "居住", ""], ["zahlen", "支付", ""], ["unterschreiben", "簽名", ""]],
    extraVocab: [["hell", "明亮的", ""], ["ruhig", "安靜的", ""], ["die Kaution", "押金", "die Kautionen"], ["der Vertrag", "合約", "die Verträge"], ["nachdenken", "思考", ""]],
  },
  {
    titleZh: "錯過轉車",
    titleDe: "Der verpasste Anschluss",
    focusZh: "交通問題與詢問協助",
    text: "Sophie fährt nach Köln und muss in Frankfurt umsteigen. Der erste Zug hat Verspätung, deshalb verpasst sie den Anschluss. Auf dem Bahnsteig hört sie eine Durchsage, aber sie versteht nicht alles. Am Schalter fragt sie nach der nächsten Verbindung. Der Mitarbeiter erklärt eine Lösung und schreibt die neue Abfahrtszeit auf.",
    vocab: [["der Anschluss", "銜接班次", "die Anschlüsse"], ["die Verspätung", "延誤", "die Verspätungen"], ["der Bahnsteig", "月台", "die Bahnsteige"], ["die Verbindung", "交通連接", "die Verbindungen"], ["das Ticket", "票", "die Tickets"], ["verpassen", "錯過", ""], ["warten", "等待", ""], ["fragen", "詢問", ""], ["umsteigen", "轉車", ""], ["weiterfahren", "繼續搭乘", ""]],
    extraVocab: [["die Durchsage", "廣播", "die Durchsagen"], ["der Schalter", "櫃台", "die Schalter"], ["die Lösung", "解決方式", "die Lösungen"], ["die Abfahrtszeit", "發車時間", "die Abfahrtszeiten"], ["nächst", "下一個的", ""]],
  },
  {
    titleZh: "小組專案",
    titleDe: "Das Gruppenprojekt",
    focusZh: "計畫、分工與報告",
    text: "Im Deutschkurs arbeitet eine Gruppe an einem Projekt über Freizeit in Taiwan. Olivia erstellt den Plan, Ben sammelt Bilder und Daniel bereitet die Präsentation vor. Sie besprechen die Aufgaben nach dem Unterricht und setzen eine Deadline. Jeder erledigt einen Abschnitt. Am Ende üben sie den Vortrag gemeinsam.",
    vocab: [["das Projekt", "專案", "die Projekte"], ["die Aufgabe", "任務", "die Aufgaben"], ["die Präsentation", "簡報", "die Präsentationen"], ["die Gruppe", "小組", "die Gruppen"], ["der Vortrag", "報告", "die Vorträge"], ["planen", "規劃", ""], ["vorbereiten", "準備", ""], ["besprechen", "討論", ""], ["erledigen", "完成", ""], ["organisieren", "組織安排", ""]],
    extraVocab: [["die Deadline", "截止期限", "die Deadlines"], ["gemeinsam", "共同地", ""], ["der Abschnitt", "段落；部分", "die Abschnitte"], ["erstellen", "製作", ""], ["sammeln", "收集", ""]],
  },
  {
    titleZh: "哪條路更好",
    titleDe: "Der bessere Weg",
    focusZh: "比較級與建議",
    text: "Nach dem Kino wollen Grace und Henry schnell nach Hause. Grace möchte den Bus nehmen, weil er günstiger ist. Henry findet das Fahrrad praktischer, denn der Weg ist kürzer. Sie vergleichen beide Routen auf dem Handy. Schließlich empfiehlt Grace den Bus, weil es schon dunkel ist und die Haltestelle direkt vor dem Kino liegt.",
    vocab: [["der Weg", "路", "die Wege"], ["die Route", "路線", "die Routen"], ["der Bus", "公車", "die Busse"], ["das Fahrrad", "腳踏車", "die Fahrräder"], ["die Empfehlung", "建議", "die Empfehlungen"], ["schneller", "更快的", ""], ["günstiger", "更便宜的", ""], ["besser", "更好的", ""], ["vergleichen", "比較", ""], ["empfehlen", "推薦", ""]],
    extraVocab: [["praktisch", "實用的", ""], ["kürzer", "較短的", ""], ["schließlich", "最後", ""], ["dunkel", "暗的", ""], ["die Haltestelle", "站牌", "die Haltestellen"]],
  },
  {
    titleZh: "下課後的行程",
    titleDe: "Nach dem Unterricht",
    focusZh: "Dativ 介系詞",
    text: "Nach dem Unterricht geht Lily mit Max zur Bibliothek. Sie lernen dort für den Test. Danach fährt Lily zu ihren Eltern, weil sie zusammen essen. Max bleibt bei Julia und arbeitet an einem Referat. Am Abend kommt Lily von ihren Eltern zurück und legt die Bücher auf den Schreibtisch.",
    vocab: [["der Unterricht", "課程", "die Unterrichte"], ["die Bibliothek", "圖書館", "die Bibliotheken"], ["die Eltern", "父母", "die Eltern"], ["der Test", "小考", "die Tests"], ["das Referat", "口頭報告", "die Referate"], ["mit", "和；用", ""], ["nach", "在……之後；往", ""], ["bei", "在……那裡", ""], ["von", "從", ""], ["zu", "到", ""]],
    extraVocab: [["danach", "之後", ""], ["zurück", "回來", ""], ["legen", "放置", ""], ["der Schreibtisch", "書桌", "die Schreibtische"], ["zusammen essen", "一起吃飯", ""]],
  },
  {
    titleZh: "雨天計畫",
    titleDe: "Wenn es regnet",
    focusZh: "weil、dass、wenn 子句",
    text: "Die Klasse möchte am Freitag draußen Sport machen. Am Morgen sieht Jack aber dunkle Wolken. Er schreibt der Gruppe, dass es vielleicht regnet. Die Lehrerin antwortet, dass sie den Plan ändern können. Wenn es stark regnet, bleiben alle im Klassenraum. Weil die Schüler trotzdem aktiv sein möchten, machen sie dort kleine Übungen.",
    vocab: [["der Regen", "雨", "die Regen"], ["der Grund", "理由", "die Gründe"], ["die Mitteilung", "通知", "die Mitteilungen"], ["die Möglichkeit", "可能性", "die Möglichkeiten"], ["der Klassenraum", "教室", "die Klassenräume"], ["weil", "因為", ""], ["dass", "引導受詞子句", ""], ["wenn", "如果；當", ""], ["absagen", "取消", ""], ["bleiben", "停留", ""]],
    extraVocab: [["draußen", "在外面", ""], ["vielleicht", "也許", ""], ["stark", "強烈的", ""], ["trotzdem", "儘管如此", ""], ["die Übung", "練習", "die Übungen"]],
  },
  {
    titleZh: "市民服務中心",
    titleDe: "Im Bürgerbüro",
    focusZh: "表格、申請與官方文件",
    text: "Emily geht am Montag ins Bürgerbüro, weil sie eine neue Adresse anmelden muss. Zuerst nimmt sie eine Nummer. Dann füllt sie ein Formular aus und legt ihren Ausweis dazu. Der Mitarbeiter prüft den Antrag und bittet um eine Unterschrift. Emily fragt, ob ein weiteres Dokument fehlt. Alles ist vollständig, und sie bekommt eine Bestätigung.",
    vocab: [["das Formular", "表格", "die Formulare"], ["der Antrag", "申請", "die Anträge"], ["die Unterschrift", "簽名", "die Unterschriften"], ["der Ausweis", "證件", "die Ausweise"], ["die Behörde", "政府機關", "die Behörden"], ["ausfüllen", "填寫", ""], ["abgeben", "繳交", ""], ["prüfen", "檢查", ""], ["brauchen", "需要", ""], ["öffnen", "打開", ""]],
    extraVocab: [["das Bürgerbüro", "市民服務中心", "die Bürgerbüros"], ["anmelden", "登記", ""], ["die Adresse", "地址", "die Adressen"], ["vollständig", "完整的", ""], ["die Bestätigung", "確認文件", "die Bestätigungen"]],
  },
  {
    titleZh: "生日邀請",
    titleDe: "Die Geburtstagseinladung",
    focusZh: "邀請、接受、拒絕與改期",
    text: "Ethan bekommt eine Einladung zu Annas Geburtstag. Die Feier ist am Samstagabend, aber Ethan muss arbeiten. Er schreibt Anna sofort eine freundliche Antwort. Er bedankt sich, sagt leider ab und fragt nach einem Treffen am Sonntag. Anna freut sich über die ehrliche Nachricht und schlägt Kaffee und Kuchen am Nachmittag vor.",
    vocab: [["die Einladung", "邀請", "die Einladungen"], ["der Geburtstag", "生日", "die Geburtstage"], ["die Feier", "慶祝會", "die Feiern"], ["die Absage", "拒絕；取消", "die Absagen"], ["die Antwort", "回覆", "die Antworten"], ["einladen", "邀請", ""], ["zusagen", "答應出席", ""], ["neu planen", "重新安排", ""], ["treffen", "見面", ""], ["sich bedanken", "道謝", ""]],
    extraVocab: [["sofort", "立刻", ""], ["ehrlich", "誠實的", ""], ["sich freuen", "感到高興", ""], ["der Kuchen", "蛋糕", "die Kuchen"], ["am Nachmittag", "下午", ""]],
  },
  {
    titleZh: "考前任務日",
    titleDe: "Ein Tag vor der Prüfung",
    focusZh: "A2 綜合任務",
    text: "Am Tag vor der Prüfung trifft sich die Lerngruppe in der Schule. Zuerst wiederholen sie wichtige Wörter, danach lesen sie einen Lesetext und markieren die Hauptinformationen. Maya schreibt eine kurze E-Mail, während Paul einen Dialog trainiert. Zum Schluss sprechen alle über typische Fehler und wählen eine Strategie für den nächsten Tag.",
    vocab: [["die Prüfung", "考試", "die Prüfungen"], ["der Dialog", "對話", "die Dialoge"], ["der Lesetext", "閱讀文本", "die Lesetexte"], ["die Hauptinformation", "主要資訊", "die Hauptinformationen"], ["der Fehler", "錯誤", "die Fehler"], ["wiederholen", "複習", ""], ["unterstreichen", "畫線標示", ""], ["schreiben", "書寫", ""], ["sprechen", "說話", ""], ["trainieren", "訓練", ""]],
    extraVocab: [["die Lerngruppe", "讀書小組", "die Lerngruppen"], ["zuerst", "首先", ""], ["während", "當……期間", ""], ["typisch", "典型的", ""], ["die Strategie", "策略", "die Strategien"]],
  },
];

const a2LessonDetails = [
  "Am Sonntag hat Emma die Bilder sortiert und einen kurzen Bericht geschrieben. Sie hat gemerkt, dass sie im Perfekt besser erzählen kann, wenn sie zuerst die Zeit und dann die Handlung nennt.",
  "Nach dem Telefonat speichert Lucas den Termin im Handy. Er wiederholt: Ich habe den Termin verschoben, weil ich am Freitag keine Zeit habe. So übt er einen klaren Grund und eine höfliche Bitte.",
  "Am nächsten Tag fragt die Lehrerin, wer die E-Mail verstanden hat. Mia erklärt den neuen Raum und die Uhrzeit. Danach schreiben alle eine kurze Antwort mit Anrede, Hauptsatz und Gruß.",
  "Noah vergleicht die Wohnung mit zwei anderen Zimmern. Er schreibt eine Liste mit Vorteilen und Nachteilen. Besonders wichtig sind ihm Miete, Lage, Licht und eine ruhige Umgebung.",
  "Sophie bleibt ruhig und liest die Anzeige auf dem Bildschirm. Sie lernt, dass sie bei Problemen nach Verbindung, Bahnsteig und Abfahrtszeit fragen kann.",
  "Die Gruppe teilt die Arbeit fair auf. Jeder sagt, was er bis Mittwoch macht. Danach schreibt Olivia eine kurze Zusammenfassung, damit alle den gleichen Plan haben.",
  "Grace und Henry erklären ihre Entscheidung. Grace benutzt den Komparativ: Der Bus ist günstiger. Henry sagt: Das Fahrrad ist schneller. Am Ende wählen sie die sicherere Lösung.",
  "Lily markiert alle Dativformen im Text. Sie sieht, dass nach mit, bei, von, zu und nach oft eine feste Form steht. Danach schreibt sie fünf eigene Sätze.",
  "Die Lehrerin sammelt die Sätze an der Tafel. Die Klasse übt die Verbposition am Ende des Nebensatzes. Danach formulieren die Schüler eigene Pläne für Regen und Sonne.",
  "Emily liest jedes Feld langsam, bevor sie schreibt. Sie fragt nach, wenn sie ein Wort nicht versteht. So übt sie Sprache, die man bei Behörden wirklich braucht.",
  "Ethan liest seine Antwort noch einmal, damit sie freundlich klingt. Er benutzt eine Entschuldigung, einen Grund und einen neuen Vorschlag. So bleibt die Einladung positiv.",
  "Die Lerngruppe arbeitet mit einem Timer. Jede Person übernimmt eine Aufgabe: Lesen, Schreiben, Hören oder Sprechen. Am Ende notieren sie drei Punkte, die sie morgen zuerst wiederholen.",
];

const b1LessonPlans = [
  {
    titleZh: "搬家通知",
    titleDe: "Ein neuer Anfang in Leipzig",
    focusZh: "經驗敘述與理由說明",
    text: "Nach drei Jahren in München zieht Sophia nach Leipzig. Sie hat dort eine Stelle in einer Sprachschule gefunden und möchte näher bei ihrer Schwester wohnen. In einer E-Mail erklärt sie ihren Freunden, warum sie umzieht und was sich für sie verändert. Sie beschreibt ihre alte Wohnung, die neue Umgebung und ihre Hoffnung, schnell Anschluss zu finden.",
    vocab: [["der Anfang", "開始", "die Anfänge"], ["die Stelle", "職位", "die Stellen"], ["die Sprachschule", "語言學校", "die Sprachschulen"], ["die Schwester", "姊妹", "die Schwestern"], ["die Umgebung", "環境", "die Umgebungen"], ["umziehen", "搬家", ""], ["verändern", "改變", ""], ["beschreiben", "描述", ""], ["erklären", "解釋", ""], ["finden", "找到", ""]],
    extraVocab: [["der Anschluss", "人際連結", "die Anschlüsse"], ["die Hoffnung", "希望", "die Hoffnungen"], ["näher", "較近的", ""], ["seit", "自從", ""], ["deshalb", "因此", ""]],
  },
  {
    titleZh: "職場第一週",
    titleDe: "Die erste Woche im Büro",
    focusZh: "工作流程與職場溝通",
    text: "Jonas beginnt ein Praktikum in einer Firma. Am ersten Tag bekommt er einen Arbeitsplatz, ein Passwort und eine kurze Einführung. Seine Kollegin zeigt ihm, wie man Dateien speichert und Termine in den Kalender einträgt. Am Freitag schreibt Jonas einen Bericht über seine Aufgaben und bittet um Feedback, weil er seine Arbeit verbessern möchte.",
    vocab: [["das Praktikum", "實習", "die Praktika"], ["die Firma", "公司", "die Firmen"], ["der Arbeitsplatz", "工作座位", "die Arbeitsplätze"], ["das Passwort", "密碼", "die Passwörter"], ["die Einführung", "介紹", "die Einführungen"], ["speichern", "儲存", ""], ["eintragen", "登錄", ""], ["bitten", "請求", ""], ["verbessern", "改善", ""], ["beginnen", "開始", ""]],
    extraVocab: [["die Datei", "檔案", "die Dateien"], ["das Feedback", "回饋", "-"], ["die Kollegin", "女同事", "die Kolleginnen"], ["der Bericht", "報告", "die Berichte"], ["zuständig", "負責的", ""]],
  },
  {
    titleZh: "新聞討論",
    titleDe: "Eine Nachricht im Kurs",
    focusZh: "表達意見與轉述資訊",
    text: "Im Kurs lesen die Lernenden einen kurzen Artikel über öffentlichen Verkehr. Danach diskutieren sie, ob Busse und Bahnen günstiger werden sollten. Maria meint, dass mehr Menschen umsteigen würden, wenn die Preise niedriger wären. Paul ist anderer Meinung, weil er die Finanzierung schwierig findet. Die Lehrerin sammelt Argumente an der Tafel.",
    vocab: [["der Artikel", "文章", "die Artikel"], ["der Verkehr", "交通", "-"], ["die Meinung", "意見", "die Meinungen"], ["das Argument", "論點", "die Argumente"], ["die Finanzierung", "資金來源", "die Finanzierungen"], ["diskutieren", "討論", ""], ["meinen", "認為", ""], ["umsteigen", "轉乘", ""], ["sammeln", "收集", ""], ["senken", "降低", ""]],
    extraVocab: [["öffentlich", "公共的", ""], ["niedrig", "低的", ""], ["schwierig", "困難的", ""], ["anderer Meinung sein", "持不同意見", ""], ["die Tafel", "黑板", "die Tafeln"]],
  },
  {
    titleZh: "鄰居會議",
    titleDe: "Die Besprechung im Haus",
    focusZh: "抱怨、建議與解決衝突",
    text: "In Lenas Haus gibt es seit Wochen Streit über Lärm im Treppenhaus. Deshalb organisiert die Hausverwaltung eine Besprechung. Einige Nachbarn beschweren sich, andere schlagen feste Ruhezeiten vor. Lena versucht, sachlich zu bleiben und eine Lösung zu vermitteln. Am Ende einigen sich alle auf klare Regeln für Musik, Besuch und Müll.",
    vocab: [["der Streit", "爭執", "die Streite"], ["der Lärm", "噪音", "-"], ["das Treppenhaus", "樓梯間", "die Treppenhäuser"], ["die Hausverwaltung", "物業管理", "die Hausverwaltungen"], ["die Ruhezeit", "安靜時段", "die Ruhezeiten"], ["sich beschweren", "抱怨", ""], ["vorschlagen", "提議", ""], ["vermitteln", "協調", ""], ["sich einigen", "達成共識", ""], ["organisieren", "組織", ""]],
    extraVocab: [["sachlich", "客觀的", ""], ["fest", "固定的", ""], ["der Besuch", "訪客", "die Besuche"], ["der Müll", "垃圾", "-"], ["die Regel", "規則", "die Regeln"]],
  },
  {
    titleZh: "健康決定",
    titleDe: "Mehr Bewegung im Alltag",
    focusZh: "建議、目標與條件句",
    text: "David merkt, dass er nach der Arbeit oft müde ist. Sein Arzt empfiehlt ihm mehr Bewegung und regelmäßige Pausen. David entscheidet sich, dreimal pro Woche zu joggen und mittags einen kurzen Spaziergang zu machen. Wenn das Wetter schlecht ist, trainiert er zu Hause. Nach einem Monat fühlt er sich konzentrierter und schläft besser.",
    vocab: [["die Bewegung", "運動", "die Bewegungen"], ["die Pause", "休息", "die Pausen"], ["der Spaziergang", "散步", "die Spaziergänge"], ["der Monat", "月份", "die Monate"], ["das Ziel", "目標", "die Ziele"], ["empfehlen", "建議", ""], ["entscheiden", "決定", ""], ["joggen", "慢跑", ""], ["trainieren", "訓練", ""], ["schlafen", "睡覺", ""]],
    extraVocab: [["regelmäßig", "規律的", ""], ["dreimal", "三次", ""], ["konzentriert", "專注的", ""], ["schlecht", "差的", ""], ["merken", "察覺", ""]],
  },
  {
    titleZh: "城市提案",
    titleDe: "Ein Vorschlag für die Stadt",
    focusZh: "正式書信與公共議題",
    text: "Eine Jugendgruppe schreibt einen Brief an die Stadtverwaltung. Sie wünscht sich mehr Bäume, sichere Radwege und einen kleinen Platz zum Sitzen. Im Brief nennen die Jugendlichen konkrete Beispiele aus ihrem Viertel. Sie erklären höflich, welche Probleme es gibt und wie die Stadt die Situation verbessern könnte.",
    vocab: [["die Jugendgruppe", "青年團體", "die Jugendgruppen"], ["die Stadtverwaltung", "市政府", "die Stadtverwaltungen"], ["der Radweg", "自行車道", "die Radwege"], ["das Viertel", "街區", "die Viertel"], ["die Situation", "情況", "die Situationen"], ["wünschen", "希望", ""], ["nennen", "列舉", ""], ["fördern", "促進", ""], ["könnte", "可以", ""], ["schreiben", "寫", ""]],
    extraVocab: [["sicher", "安全的", ""], ["konkret", "具體的", ""], ["höflich", "禮貌的", ""], ["der Baum", "樹", "die Bäume"], ["der Platz", "廣場；位置", "die Plätze"]],
  },
  {
    titleZh: "文化週",
    titleDe: "Die Kulturwoche",
    focusZh: "活動描述與被動語態",
    text: "An der Schule wird eine Kulturwoche vorbereitet. In der Aula werden Plakate aufgehängt, ein Programm wird gedruckt und Gäste werden eingeladen. Jede Klasse stellt ein Land vor. Am Donnerstag wird ein Film gezeigt, danach wird über Musik, Essen und Traditionen gesprochen. Die Schülerinnen und Schüler lernen, wie Veranstaltungen geplant werden.",
    vocab: [["die Kulturwoche", "文化週", "die Kulturwochen"], ["die Aula", "禮堂", "die Aulen"], ["das Plakat", "海報", "die Plakate"], ["das Programm", "節目表", "die Programme"], ["die Tradition", "傳統", "die Traditionen"], ["vorbereiten", "準備", ""], ["aufhängen", "掛起", ""], ["drucken", "印刷", ""], ["einladen", "邀請", ""], ["zeigen", "播放；展示", ""]],
    extraVocab: [["die Veranstaltung", "活動", "die Veranstaltungen"], ["planen", "規劃", ""], ["das Land", "國家", "die Länder"], ["der Gast", "客人", "die Gäste"], ["danach", "之後", ""]],
  },
  {
    titleZh: "環保挑戰",
    titleDe: "Eine Woche ohne Plastik",
    focusZh: "因果關係與結果描述",
    text: "Im Deutschkurs startet eine Challenge: Eine Woche lang sollen alle möglichst wenig Plastik benutzen. Karim kauft Obst auf dem Markt und nimmt eigene Dosen mit. Am Anfang findet er es unbequem, doch später bemerkt er viele Vorteile. In seinem Tagebuch erklärt er, welche Gewohnheiten er geändert hat und welche Schwierigkeiten geblieben sind.",
    vocab: [["die Challenge", "挑戰", "die Challenges"], ["das Plastik", "塑膠", "-"], ["der Markt", "市場", "die Märkte"], ["die Dose", "盒子", "die Dosen"], ["die Gewohnheit", "習慣", "die Gewohnheiten"], ["benutzen", "使用", ""], ["bemerken", "注意到", ""], ["ändern", "改變", ""], ["bleiben", "保留；停留", ""], ["mitnehmen", "攜帶", ""]],
    extraVocab: [["möglichst", "盡可能", ""], ["wenig", "少的", ""], ["unbequem", "不方便的", ""], ["der Vorteil", "優點", "die Vorteile"], ["das Tagebuch", "日記", "die Tagebücher"]],
  },
  {
    titleZh: "遺失的背包",
    titleDe: "Der verlorene Rucksack",
    focusZh: "事件經過與間接問句",
    text: "Nach einer Zugfahrt merkt Nina, dass ihr Rucksack fehlt. Sie geht zum Fundbüro und beschreibt genau, wie er aussieht. Der Mitarbeiter fragt, wann sie ausgestiegen ist und ob wichtige Dokumente darin waren. Nina bleibt ruhig, füllt ein Formular aus und bekommt später einen Anruf: Der Rucksack wurde gefunden.",
    vocab: [["der Rucksack", "背包", "die Rucksäcke"], ["die Zugfahrt", "火車旅程", "die Zugfahrten"], ["das Fundbüro", "失物招領處", "die Fundbüros"], ["das Dokument", "文件", "die Dokumente"], ["der Anruf", "電話", "die Anrufe"], ["fehlen", "不見；缺少", ""], ["aussteigen", "下車", ""], ["aussehen", "看起來", ""], ["ausfüllen", "填寫", ""], ["wiederfinden", "找回", ""]],
    extraVocab: [["genau", "精確地", ""], ["wichtig", "重要的", ""], ["darin", "在裡面", ""], ["später", "稍後", ""], ["ruhig", "冷靜的", ""]],
  },
  {
    titleZh: "線上課問題",
    titleDe: "Technische Probleme im Onlinekurs",
    focusZh: "說明問題與提出要求",
    text: "Während des Onlinekurses funktioniert Leons Mikrofon nicht. Er schreibt der Lehrerin im Chat, dass er die anderen hören kann, aber nicht sprechen kann. Die Lehrerin bittet ihn, die Einstellungen zu prüfen und den Browser neu zu starten. Danach klappt es wieder. Leon entschuldigt sich und fasst kurz zusammen, was er verpasst hat.",
    vocab: [["der Onlinekurs", "線上課", "die Onlinekurse"], ["das Mikrofon", "麥克風", "die Mikrofone"], ["der Chat", "聊天室", "die Chats"], ["die Einstellung", "設定", "die Einstellungen"], ["der Browser", "瀏覽器", "die Browser"], ["funktionieren", "運作", ""], ["prüfen", "檢查", ""], ["starten", "啟動", ""], ["sich entschuldigen", "道歉", ""], ["zusammenfassen", "摘要", ""]],
    extraVocab: [["während", "在……期間", ""], ["klappen", "順利", ""], ["verpassen", "錯過", ""], ["neu", "新的；重新", ""], ["kurz", "簡短地", ""]],
  },
  {
    titleZh: "讀者投書",
    titleDe: "Ein Leserbrief zur Schulcafeteria",
    focusZh: "論述文結構與連接詞",
    text: "Clara schreibt einen Leserbrief an die Schülerzeitung. Sie findet, dass die Schulcafeteria gesünderes Essen anbieten sollte. Zuerst nennt sie das Problem, dann beschreibt sie mögliche Lösungen. Außerdem vergleicht sie Preise und Qualität. Am Schluss fordert sie die Schulleitung auf, mit den Lernenden über neue Angebote zu sprechen.",
    vocab: [["der Leserbrief", "讀者投書", "die Leserbriefe"], ["die Schülerzeitung", "校刊", "die Schülerzeitungen"], ["die Cafeteria", "自助餐廳", "die Cafeterien"], ["die Qualität", "品質", "die Qualitäten"], ["die Schulleitung", "校方", "die Schulleitungen"], ["anbieten", "提供", ""], ["fordern", "要求", ""], ["vergleichen", "比較", ""], ["sprechen", "談論", ""], ["sollte", "應該", ""]],
    extraVocab: [["gesund", "健康的", ""], ["außerdem", "此外", ""], ["möglich", "可能的", ""], ["die Lösung", "解決方式", "die Lösungen"], ["am Schluss", "最後", ""]],
  },
  {
    titleZh: "考前模擬",
    titleDe: "Die Generalprobe",
    focusZh: "B1 綜合任務",
    text: "Eine Woche vor der Prüfung macht die Klasse eine Generalprobe. Zuerst hören die Lernenden ein Interview, danach lesen sie mehrere kurze Texte. Anschließend schreiben sie eine Stellungnahme und führen ein Gespräch zu zweit. Die Lehrerin achtet auf Struktur, Wortschatz und klare Begründungen. Nach der Übung bespricht jeder seinen persönlichen Lernplan.",
    vocab: [["die Generalprobe", "總彩排；模擬", "die Generalproben"], ["das Interview", "訪談", "die Interviews"], ["die Stellungnahme", "立場表述", "die Stellungnahmen"], ["das Gespräch", "對話", "die Gespräche"], ["die Begründung", "理由說明", "die Begründungen"], ["anhören", "聆聽", ""], ["führen", "進行", ""], ["achten", "注意", ""], ["besprechen", "討論", ""], ["wiederholen", "複習", ""]],
    extraVocab: [["mehrere", "好幾個", ""], ["anschließend", "接著", ""], ["persönlich", "個人的", ""], ["der Lernplan", "學習計畫", "die Lernpläne"], ["die Struktur", "結構", "die Strukturen"]],
  },
];

const b1LessonDetails = [
  "Sophia nutzt in ihrer E-Mail Nebensätze mit weil und obwohl. Dadurch klingt ihr Text persönlicher und klarer. Am Ende lädt sie ihre Freunde ein, sie im Sommer zu besuchen.",
  "Jonas lernt, im Büro genau nachzufragen. Wenn er eine Aufgabe nicht versteht, formuliert er eine höfliche Frage. So vermeidet er Fehler und zeigt Interesse.",
  "Die Lernenden unterscheiden zwischen Tatsache und Meinung. Sie üben Redemittel wie meiner Ansicht nach und dagegen spricht. Danach schreiben sie drei eigene Argumente.",
  "Lena notiert die wichtigsten Punkte der Besprechung. Sie achtet darauf, keine Person direkt anzugreifen. So wird aus einer Beschwerde ein konstruktiver Vorschlag.",
  "David schreibt seine Ziele realistisch auf. Er verbindet Bedingungen mit wenn und Ergebnisse mit deshalb. Dadurch kann er seinen Fortschritt besser beobachten.",
  "Die Jugendgruppe verwendet eine formelle Anrede und einen klaren Schluss. Ihr Brief wirkt überzeugender, weil er konkrete Beispiele und höfliche Forderungen enthält.",
  "Die Klasse markiert alle Passivformen im Text. Danach formulieren die Lernenden eigene Sätze: Das Programm wird vorbereitet. Die Gäste werden eingeladen.",
  "Karim vergleicht sein Verhalten vor und nach der Challenge. Er erkennt, dass kleine Entscheidungen im Alltag eine sichtbare Wirkung haben können.",
  "Nina übt indirekte Fragen: Können Sie mir sagen, ob mein Rucksack gefunden wurde? Dadurch klingt sie höflich und bekommt schneller Hilfe.",
  "Leon beschreibt das technische Problem Schritt für Schritt. Er nennt zuerst das Problem, dann die bisherigen Versuche und schließlich seine Bitte.",
  "Clara baut ihren Leserbrief mit Einleitung, Hauptteil und Schluss auf. Sie verbindet ihre Argumente mit außerdem, deshalb und trotzdem.",
  "Bei der Generalprobe merkt jede Person, welcher Prüfungsteil noch schwerfällt. Danach wird gezielt wiederholt, statt alles gleichzeitig zu lernen.",
];

const b2LessonPlans = [
  {
    titleZh: "公民論壇",
    titleDe: "Ein Abend im Bürgerforum",
    focusZh: "立場、比較與討論",
    text: "In einem Bürgerforum diskutieren Clara, Felix und mehrere Einwohner über die Zukunft ihres Stadtteils. Zunächst stellt die Moderatorin zwei gegensätzliche Positionen vor: mehr Parkplätze oder mehr öffentliche Grünflächen. Clara argumentiert, dass Grünflächen langfristig die Lebensqualität erhöhen, während Felix auf die Bedürfnisse kleiner Geschäfte hinweist. Im Laufe der Debatte werden Kosten, Nutzen und mögliche Kompromisse verglichen. Besonders kontrovers ist die Frage, ob kurzfristige wirtschaftliche Interessen schwerer wiegen als ökologische Ziele. Am Ende formuliert die Gruppe keine einfache Lösung, sondern eine Empfehlung mit mehreren Bedingungen.",
    vocab: [["das Bürgerforum", "公民論壇", "die Bürgerforen"], ["der Stadtteil", "城市區域", "die Stadtteile"], ["die Position", "立場", "die Positionen"], ["die Grünfläche", "綠地", "die Grünflächen"], ["die Lebensqualität", "生活品質", "-"], ["das Bedürfnis", "需求", "die Bedürfnisse"], ["der Nutzen", "效益", "-"], ["der Kompromiss", "妥協", "die Kompromisse"], ["die Debatte", "辯論", "die Debatten"], ["das Interesse", "利益", "die Interessen"], ["kontrovers", "有爭議的", ""], ["langfristig", "長期的", ""], ["wirtschaftlich", "經濟的", ""], ["ökologisch", "生態的", ""], ["hinweisen", "指出", ""], ["überwiegen", "佔優勢", ""]],
    extraVocab: [["gegenseitig", "相互的", ""], ["zunächst", "首先", ""], ["im Laufe", "在……過程中", ""], ["eine Empfehlung formulieren", "提出建議", ""], ["schwerer wiegen", "更具分量", ""], ["die Bedingung", "條件", "die Bedingungen"], ["der Einwand", "異議", "die Einwände"], ["die Perspektive", "觀點", "die Perspektiven"]],
  },
  {
    titleZh: "資料外洩後",
    titleDe: "Nach dem Datenleck",
    focusZh: "數位化與資料保護",
    text: "Nach einem Datenleck an einer privaten Sprachlernplattform sind viele Nutzer verunsichert. Die Geschäftsleitung veröffentlicht eine Stellungnahme und verspricht, die Sicherheitsmaßnahmen zu verschärfen. In der Klasse analysieren die Lernenden, welche Verantwortung Unternehmen gegenüber ihren Kundinnen und Kunden tragen. Einige betonen den Komfort digitaler Dienste, andere kritisieren die undurchsichtige Sammlung persönlicher Informationen. Die Lehrerin fordert die Gruppe auf, zwischen Bequemlichkeit, Transparenz und Kontrolle abzuwägen. Daraus entsteht eine Diskussion über digitale Selbstbestimmung und gesetzliche Regulierung.",
    vocab: [["das Datenleck", "資料外洩", "die Datenlecks"], ["die Sprachlernplattform", "語言學習平台", "die Sprachlernplattformen"], ["die Geschäftsleitung", "經營層", "die Geschäftsleitungen"], ["die Stellungnahme", "聲明", "die Stellungnahmen"], ["die Sicherheitsmaßnahme", "安全措施", "die Sicherheitsmaßnahmen"], ["die Verantwortung", "責任", "die Verantwortungen"], ["der Dienst", "服務", "die Dienste"], ["die Transparenz", "透明度", "-"], ["die Selbstbestimmung", "自主決定", "-"], ["die Regulierung", "監管", "die Regulierungen"], ["verunsichern", "使不安", ""], ["veröffentlichen", "公開發布", ""], ["verschärfen", "加強", ""], ["analysieren", "分析", ""], ["abwägen", "權衡", ""], ["kritisieren", "批評", ""]],
    extraVocab: [["undurchsichtig", "不透明的", ""], ["persönlich", "個人的", ""], ["gesetzlich", "法律上的", ""], ["der Komfort", "便利性", "-"], ["die Kontrolle", "控制", "die Kontrollen"], ["der Zugriff", "存取", "die Zugriffe"], ["die Verschlüsselung", "加密", "die Verschlüsselungen"], ["die Einwilligung", "同意", "die Einwilligungen"]],
  },
  {
    titleZh: "無塑膠的一週後",
    titleDe: "Bilanz nach einer plastikarmen Woche",
    focusZh: "永續生活與消費",
    text: "Eine Klasse wertet ein Projekt zu nachhaltigem Konsum aus. Eine Woche lang haben die Lernenden versucht, Verpackungen zu vermeiden und regionale Produkte zu kaufen. Dabei zeigt sich, dass umweltbewusstes Verhalten nicht nur vom persönlichen Willen abhängt, sondern auch von Preisen, Angeboten und Gewohnheiten. Besonders schwierig war es, schnelle Mahlzeiten ohne Einwegverpackung zu finden. Trotzdem berichten mehrere Teilnehmende, dass sie bewusster einkaufen und Werbung kritischer wahrnehmen. Die Auswertung endet mit der Frage, welche Verantwortung Verbraucher, Handel und Politik jeweils übernehmen sollten.",
    vocab: [["die Bilanz", "總結；盤點", "die Bilanzen"], ["der Konsum", "消費", "-"], ["die Verpackung", "包裝", "die Verpackungen"], ["das Produkt", "產品", "die Produkte"], ["das Verhalten", "行為", "-"], ["der Wille", "意願", "-"], ["die Gewohnheit", "習慣", "die Gewohnheiten"], ["die Mahlzeit", "餐點", "die Mahlzeiten"], ["die Einwegverpackung", "一次性包裝", "die Einwegverpackungen"], ["die Auswertung", "評估", "die Auswertungen"], ["nachhaltig", "永續的", ""], ["regional", "在地的", ""], ["umweltbewusst", "環保意識的", ""], ["bewusst", "有意識的", ""], ["vermeiden", "避免", ""], ["wahrnehmen", "察覺", ""]],
    extraVocab: [["der Verbraucher", "消費者", "die Verbraucher"], ["der Handel", "商業；零售業", "-"], ["jeweils", "各自", ""], ["abhängen von", "取決於", ""], ["auswerten", "評估", ""], ["plastikarm", "低塑膠的", ""], ["die Ressource", "資源", "die Ressourcen"], ["die Lieferkette", "供應鏈", "die Lieferketten"]],
  },
  {
    titleZh: "職涯十字路口",
    titleDe: "Zwischen Studium und Ausbildung",
    focusZh: "教育與職涯選擇",
    text: "Nach dem Schulabschluss steht Nora vor einer schwierigen Entscheidung. Ihre Eltern empfehlen ein Universitätsstudium, weil es langfristig bessere Aufstiegschancen bieten könne. Nora interessiert sich jedoch für eine duale Ausbildung, da sie praktische Erfahrung sammeln und früher finanziell unabhängig werden möchte. In einem Beratungsgespräch vergleicht sie Voraussetzungen, Belastungen und Perspektiven beider Wege. Der Berater rät ihr, nicht nur Prestige, sondern auch persönliche Stärken und Arbeitsmarktentwicklungen zu berücksichtigen. Nora erkennt, dass eine fundierte Entscheidung Zeit und ehrliche Selbstreflexion braucht.",
    vocab: [["der Schulabschluss", "畢業資格", "die Schulabschlüsse"], ["das Universitätsstudium", "大學學業", "die Universitätsstudien"], ["die Ausbildung", "職業培訓", "die Ausbildungen"], ["die Aufstiegschance", "升遷機會", "die Aufstiegschancen"], ["die Erfahrung", "經驗", "die Erfahrungen"], ["das Beratungsgespräch", "諮詢談話", "die Beratungsgespräche"], ["die Voraussetzung", "條件", "die Voraussetzungen"], ["die Belastung", "負擔", "die Belastungen"], ["das Prestige", "聲望", "-"], ["die Selbstreflexion", "自我反思", "-"], ["dual", "雙軌的", ""], ["finanziell", "財務上的", ""], ["unabhängig", "獨立的", ""], ["fundiert", "有根據的", ""], ["berücksichtigen", "考量", ""], ["sich interessieren für", "對……感興趣", ""]],
    extraVocab: [["der Arbeitsmarkt", "就業市場", "die Arbeitsmärkte"], ["die Entwicklung", "發展", "die Entwicklungen"], ["die Stärke", "強項", "die Stärken"], ["der Berater", "顧問", "die Berater"], ["raten", "建議", ""], ["sammeln", "累積", ""], ["gegenüberstellen", "對照", ""], ["die Laufbahn", "職涯路徑", "die Laufbahnen"]],
  },
  {
    titleZh: "租金上漲的街區",
    titleDe: "Wenn Mieten den Stadtteil verändern",
    focusZh: "城市發展與居住",
    text: "In einem beliebten Viertel steigen die Mieten seit Jahren. Alte Geschäfte schließen, neue Cafés eröffnen, und viele Familien können sich ihre Wohnungen kaum noch leisten. Eine Stadtplanerin erklärt in einem Interview, dass Aufwertung und Verdrängung oft gleichzeitig stattfinden. Einige Bewohner begrüßen die Renovierung verfallener Häuser, andere fürchten den Verlust sozialer Vielfalt. Im Kurs analysieren die Lernenden, welche Maßnahmen bezahlbaren Wohnraum schützen könnten. Sie diskutieren Mietbegrenzungen, genossenschaftliche Modelle und die Rolle öffentlicher Flächen.",
    vocab: [["die Miete", "房租", "die Mieten"], ["das Viertel", "街區", "die Viertel"], ["die Stadtplanerin", "都市規劃師", "die Stadtplanerinnen"], ["die Aufwertung", "升級；價值提升", "die Aufwertungen"], ["die Verdrängung", "排擠", "die Verdrängungen"], ["die Renovierung", "翻修", "die Renovierungen"], ["der Verlust", "喪失", "die Verluste"], ["die Vielfalt", "多樣性", "-"], ["die Maßnahme", "措施", "die Maßnahmen"], ["die Mietbegrenzung", "租金限制", "die Mietbegrenzungen"], ["beliebt", "受歡迎的", ""], ["bezahlbar", "可負擔的", ""], ["verfallen", "破敗的", ""], ["genossenschaftlich", "合作社式的", ""], ["schützen", "保護", ""], ["stattfinden", "發生", ""]],
    extraVocab: [["der Wohnraum", "居住空間", "-"], ["die Fläche", "面積；空間", "die Flächen"], ["eröffnen", "開幕", ""], ["schließen", "歇業；關閉", ""], ["sich leisten können", "負擔得起", ""], ["fürchten", "擔心", ""], ["gleichzeitig", "同時", ""], ["die Gentrifizierung", "仕紳化", "-"]],
  },
  {
    titleZh: "四天工作制",
    titleDe: "Gesünder arbeiten?",
    focusZh: "健康政策與生活品質",
    text: "Ein Unternehmen testet sechs Monate lang die Vier-Tage-Woche. Die Mitarbeitenden berichten von weniger Stress, mehr Schlaf und einer besseren Vereinbarkeit von Beruf und Familie. Gleichzeitig befürchtet die Leitung, dass bestimmte Aufgaben liegen bleiben oder Kundinnen länger warten müssen. Eine Arbeitspsychologin erklärt, dass Arbeitszeitverkürzung nur dann sinnvoll sei, wenn Prozesse neu organisiert würden. Im Kurs vergleichen die Lernenden individuelle Vorteile mit betrieblichen Risiken. Die Diskussion zeigt, dass Gesundheitspolitik nicht nur Krankenhäuser betrifft, sondern auch Arbeitsbedingungen.",
    vocab: [["die Vier-Tage-Woche", "四天工作制", "die Vier-Tage-Wochen"], ["der Mitarbeitende", "員工", "die Mitarbeitenden"], ["die Vereinbarkeit", "兼顧性", "-"], ["die Leitung", "管理層", "die Leitungen"], ["die Arbeitspsychologin", "職場心理學家", "die Arbeitspsychologinnen"], ["die Arbeitszeitverkürzung", "工時縮短", "die Arbeitszeitverkürzungen"], ["der Prozess", "流程", "die Prozesse"], ["das Risiko", "風險", "die Risiken"], ["die Gesundheitspolitik", "健康政策", "-"], ["die Arbeitsbedingung", "工作條件", "die Arbeitsbedingungen"], ["betrieblich", "企業內部的", ""], ["sinnvoll", "有意義的", ""], ["individuell", "個人的", ""], ["befürchten", "擔心", ""], ["betreffen", "涉及", ""], ["organisieren", "組織安排", ""]],
    extraVocab: [["liegen bleiben", "被擱置", ""], ["der Kunde", "顧客", "die Kunden"], ["sechs Monate lang", "長達六個月", ""], ["berichten von", "報告；敘述", ""], ["der Stress", "壓力", "-"], ["der Schlaf", "睡眠", "-"], ["die Produktivität", "生產力", "-"], ["die Prävention", "預防", "-"]],
  },
  {
    titleZh: "社區節前的對話",
    titleDe: "Vor dem Nachbarschaftsfest",
    focusZh: "移民、文化與社會參與",
    text: "Vor einem Nachbarschaftsfest treffen sich Menschen aus verschiedenen Vereinen, um das Programm gemeinsam zu planen. Aylin schlägt vor, nicht nur Essen und Musik zu präsentieren, sondern auch kurze Gespräche über Erfahrungen mit Ankommen und Zugehörigkeit anzubieten. Einige Teilnehmende befürchten, dass politische Themen die Stimmung belasten könnten. Andere halten gerade solche Gespräche für notwendig, weil Teilhabe mehr bedeutet als freundliche Unterhaltung. Schließlich entsteht ein Konzept, das kulturelle Beiträge mit moderierten Gesprächsrunden verbindet.",
    vocab: [["das Nachbarschaftsfest", "鄰里節", "die Nachbarschaftsfeste"], ["der Verein", "協會", "die Vereine"], ["die Zugehörigkeit", "歸屬感", "-"], ["die Teilhabe", "參與", "-"], ["die Unterhaltung", "娛樂；交談", "die Unterhaltungen"], ["das Konzept", "概念；企劃", "die Konzepte"], ["der Beitrag", "貢獻；節目", "die Beiträge"], ["die Gesprächsrunde", "座談", "die Gesprächsrunden"], ["das Ankommen", "抵達；融入", "-"], ["die Stimmung", "氣氛", "die Stimmungen"], ["kulturell", "文化的", ""], ["moderiert", "主持的", ""], ["notwendig", "必要的", ""], ["belasten", "造成負擔", ""], ["verbinden", "連結", ""], ["anbieten", "提供", ""]],
    extraVocab: [["die Migration", "移民", "-"], ["die Integration", "融入", "-"], ["die Teilnahme", "參加", "die Teilnahmen"], ["das Ehrenamt", "志工服務", "die Ehrenämter"], ["vorschlagen", "提議", ""], ["gemeinsam", "共同地", ""], ["freundlich", "友善的", ""], ["politisch", "政治性的", ""]],
  },
  {
    titleZh: "真假訊息工作坊",
    titleDe: "Workshop gegen Falschinformationen",
    focusZh: "媒體素養與假訊息",
    text: "In einem Workshop prüfen Jugendliche verschiedene Meldungen aus sozialen Netzwerken. Eine besonders emotionale Nachricht verbreitet sich schnell, obwohl die Quelle unklar ist. Der Referent zeigt, wie man Überschriften, Bilder und angebliche Zahlen kritisch untersucht. Die Gruppe lernt, zwischen Meinung, Werbung und überprüfbarer Information zu unterscheiden. Außerdem diskutiert sie, warum Menschen Falschinformationen teilen, selbst wenn sie Zweifel haben. Am Ende erstellen die Jugendlichen eine Checkliste für verantwortungsbewusstes Weiterleiten.",
    vocab: [["der Workshop", "工作坊", "die Workshops"], ["die Falschinformation", "假訊息", "die Falschinformationen"], ["das Netzwerk", "網路；社群", "die Netzwerke"], ["die Quelle", "來源", "die Quellen"], ["der Referent", "講者", "die Referenten"], ["die Überschrift", "標題", "die Überschriften"], ["die Werbung", "廣告", "die Werbungen"], ["der Zweifel", "懷疑", "die Zweifel"], ["die Checkliste", "檢查清單", "die Checklisten"], ["das Weiterleiten", "轉傳", "-"], ["emotional", "情緒化的", ""], ["angeblich", "據稱的", ""], ["überprüfbar", "可驗證的", ""], ["verantwortungsbewusst", "負責任的", ""], ["untersuchen", "檢查", ""], ["unterscheiden", "區分", ""]],
    extraVocab: [["die Meldung", "消息", "die Meldungen"], ["sich verbreiten", "傳播", ""], ["unklar", "不清楚的", ""], ["kritisch", "批判性的", ""], ["teilen", "分享", ""], ["erstellen", "製作", ""], ["die Manipulation", "操控", "die Manipulationen"], ["die Glaubwürdigkeit", "可信度", "-"]],
  },
  {
    titleZh: "混合辦公實驗",
    titleDe: "Hybrides Arbeiten im Team",
    focusZh: "工作模式與責任",
    text: "Ein internationales Team arbeitet seit einem Jahr hybrid. Manche Aufgaben gelingen online effizienter, während kreative Entscheidungen im direkten Gespräch leichter fallen. Die Projektleiterin bemerkt jedoch, dass Verantwortlichkeiten manchmal unklar bleiben, wenn Informationen nur in einzelnen Chats auftauchen. Deshalb führt das Team verbindliche Dokumentationsregeln ein. In einer Sitzung diskutieren die Mitarbeitenden, wie Vertrauen, Erreichbarkeit und Selbstorganisation zusammenhängen. Das Ergebnis ist kein starres Kontrollsystem, sondern eine gemeinsame Vereinbarung über transparente Kommunikation.",
    vocab: [["das Team", "團隊", "die Teams"], ["die Entscheidung", "決定", "die Entscheidungen"], ["die Projektleiterin", "專案主管", "die Projektleiterinnen"], ["die Verantwortlichkeit", "職責", "die Verantwortlichkeiten"], ["die Erreichbarkeit", "可聯繫性", "-"], ["die Selbstorganisation", "自我管理", "-"], ["das Kontrollsystem", "管控制度", "die Kontrollsysteme"], ["die Vereinbarung", "協議", "die Vereinbarungen"], ["die Kommunikation", "溝通", "-"], ["die Sitzung", "會議", "die Sitzungen"], ["hybrid", "混合式的", ""], ["effizient", "有效率的", ""], ["kreativ", "創造性的", ""], ["verbindlich", "具約束力的", ""], ["zusammenhängen", "有關聯", ""], ["auftauchen", "出現", ""]],
    extraVocab: [["starr", "僵硬的", ""], ["transparent", "透明的", ""], ["online", "線上的", ""], ["direkt", "直接的", ""], ["gelingen", "成功", ""], ["implementieren", "導入；實施", ""], ["die Dokumentation", "文件紀錄", "die Dokumentationen"], ["die Zuständigkeit", "權責", "die Zuständigkeiten"]],
  },
  {
    titleZh: "自動駕駛測試",
    titleDe: "Autonomes Fahren im Test",
    focusZh: "科學、科技與風險",
    text: "Eine Forschungsgruppe testet autonome Busse auf einer kurzen Strecke außerhalb der Innenstadt. Die Technik verspricht weniger Unfälle, stößt aber auf Skepsis, sobald unvorhersehbare Situationen auftreten. In einem Bericht werden Sensoren, Reaktionszeiten und rechtliche Verantwortlichkeiten erläutert. Besonders schwierig ist die Frage, wer haftet, wenn ein automatisches System eine falsche Entscheidung trifft. Die Lernenden diskutieren, ob technische Innovationen erst nach vollständiger Sicherheit eingeführt werden sollten oder ob kontrollierte Experimente notwendig sind.",
    vocab: [["die Forschungsgruppe", "研究團隊", "die Forschungsgruppen"], ["der Bus", "巴士", "die Busse"], ["die Strecke", "路線", "die Strecken"], ["die Innenstadt", "市中心", "die Innenstädte"], ["die Technik", "技術", "die Techniken"], ["der Unfall", "事故", "die Unfälle"], ["die Skepsis", "懷疑", "-"], ["der Sensor", "感測器", "die Sensoren"], ["die Reaktionszeit", "反應時間", "die Reaktionszeiten"], ["die Innovation", "創新", "die Innovationen"], ["autonom", "自動自主的", ""], ["unvorhersehbar", "不可預見的", ""], ["rechtlich", "法律上的", ""], ["vollständig", "完整的", ""], ["haften", "負法律責任", ""], ["erläutern", "說明", ""]],
    extraVocab: [["das System", "系統", "die Systeme"], ["das Experiment", "實驗", "die Experimente"], ["kontrolliert", "受控的", ""], ["auftreten", "發生；出現", ""], ["versprechen", "承諾；有望", ""], ["einführen", "引進", ""], ["die Genehmigung", "許可", "die Genehmigungen"], ["die Risikoabwägung", "風險權衡", "die Risikoabwägungen"]],
  },
  {
    titleZh: "正式報告的改寫",
    titleDe: "Vom Gespräch zur Analyse",
    focusZh: "抽象名詞與名詞化",
    text: "Im Schreibkurs sollen die Lernenden ein lockeres Interview in einen formellen Analysebericht umwandeln. Aus dem Satz viele Menschen ziehen weg wird die Abwanderung vieler Einwohner. Die Lehrerin erklärt, dass Nominalisierungen Texte verdichten und wissenschaftlicher wirken lassen können. Gleichzeitig warnt sie davor, zu viele abstrakte Nomen zu verwenden, weil der Text sonst schwer verständlich wird. Die Gruppe überarbeitet gemeinsam einen Absatz und achtet auf Präzision, Lesbarkeit und angemessenen Stil.",
    vocab: [["der Analysebericht", "分析報告", "die Analyseberichte"], ["die Abwanderung", "人口外流", "-"], ["der Einwohner", "居民", "die Einwohner"], ["die Nominalisierung", "名詞化", "die Nominalisierungen"], ["das Nomen", "名詞", "die Nomen"], ["der Absatz", "段落", "die Absätze"], ["die Präzision", "精確性", "-"], ["die Lesbarkeit", "可讀性", "-"], ["der Stil", "風格", "die Stile"], ["die Wissenschaftlichkeit", "學術性", "-"], ["formell", "正式的", ""], ["abstrakt", "抽象的", ""], ["angemessen", "適當的", ""], ["verdichten", "濃縮", ""], ["umwandeln", "轉換", ""], ["überarbeiten", "修改", ""]],
    extraVocab: [["locker", "輕鬆的", ""], ["verständlich", "易懂的", ""], ["wirken", "顯得", ""], ["warnen vor", "警告不要", ""], ["verwenden", "使用", ""], ["kooperativ", "合作式的", ""], ["die Fachsprache", "專業語言", "-"], ["die Ausdrucksweise", "表達方式", "die Ausdrucksweisen"]],
  },
  {
    titleZh: "考前論述日",
    titleDe: "Der letzte Argumentationstag",
    focusZh: "B2 論述整合任務",
    text: "Eine Woche vor der B2-Prüfung trainiert die Klasse eine vollständige Argumentationsaufgabe. Zuerst lesen die Lernenden zwei kurze Ausgangstexte mit unterschiedlichen Positionen. Danach markieren sie zentrale Thesen, Beispiele und Einschränkungen. In der Schreibphase entwickeln sie eine eigene Stellungnahme, die Einleitung, Hauptargumente, Gegenargumente und Schlussfolgerung enthält. Beim mündlichen Teil reagieren sie spontan auf Nachfragen und präzisieren ihre Aussagen. Die Lehrerin bewertet nicht nur grammatische Richtigkeit, sondern auch Kohärenz, Register und überzeugende Begründungen.",
    vocab: [["die Argumentationsaufgabe", "論述任務", "die Argumentationsaufgaben"], ["der Ausgangstext", "原始文本", "die Ausgangstexte"], ["die These", "論點", "die Thesen"], ["die Einschränkung", "限制", "die Einschränkungen"], ["die Schreibphase", "寫作階段", "die Schreibphasen"], ["das Hauptargument", "主要論據", "die Hauptargumente"], ["das Gegenargument", "反方論據", "die Gegenargumente"], ["die Schlussfolgerung", "結論", "die Schlussfolgerungen"], ["die Kohärenz", "連貫性", "-"], ["das Register", "語體", "die Register"], ["zentral", "核心的", ""], ["mündlich", "口頭的", ""], ["spontan", "即時的", ""], ["überzeugend", "有說服力的", ""], ["präzisieren", "精確化", ""], ["bewerten", "評分；評估", ""]],
    extraVocab: [["die Richtigkeit", "正確性", "-"], ["die Begründung", "理由說明", "die Begründungen"], ["die Aussage", "陳述", "die Aussagen"], ["die Nachfrage", "追問", "die Nachfragen"], ["reagieren auf", "回應", ""], ["enthalten", "包含", ""], ["die Textsorte", "文本類型", "die Textsorten"], ["die Überleitung", "轉承句", "die Überleitungen"]],
  },
];

const lessonEnhancements = {
  A2: [
    { text: "Später vergleicht Emma die Fotos mit ihren Notizen und schreibt drei Sätze über das, was ihr besonders gefallen hat.", extraVocab: [["die Notiz", "筆記", "die Notizen"], ["besonders", "特別地", ""]] },
    { text: "Vor dem Auflegen wiederholt die Assistentin alle Daten, damit kein Missverständnis entsteht.", extraVocab: [["das Missverständnis", "誤會", "die Missverständnisse"], ["auflegen", "掛電話", ""]] },
    { text: "Mia leitet die Information außerdem an einen Mitschüler weiter, der die Nachricht noch nicht gesehen hat.", extraVocab: [["weiterleiten", "轉寄", ""], ["der Mitschüler", "男同學", "die Mitschüler"]] },
    { text: "Zu Hause berechnet Noah seine monatlichen Kosten und entscheidet, ob die Wohnung zu seinem Budget passt.", extraVocab: [["das Budget", "預算", "die Budgets"], ["monatlich", "每月的", ""]] },
    { text: "Sophie kontrolliert danach die App, damit sie den neuen Zug nicht noch einmal verpasst.", extraVocab: [["kontrollieren", "確認", ""], ["die App", "應用程式", "die Apps"]] },
    { text: "Vor der Präsentation testen sie die Technik und sprechen ab, wer welchen Teil erklärt.", extraVocab: [["die Technik", "設備；技術", "-"], ["absprechen", "協調", ""]] },
    { text: "Auf dem Heimweg merken beide, dass eine sichere Entscheidung manchmal wichtiger als die schnellste Route ist.", extraVocab: [["der Heimweg", "回家的路", "die Heimwege"], ["sicher", "安全的", ""]] },
    { text: "Lily schreibt danach in ihr Heft, mit wem sie gelernt hat und wohin sie später gegangen ist.", extraVocab: [["das Heft", "筆記本", "die Hefte"], ["wohin", "往哪裡", ""]] },
    { text: "Die Klasse vergleicht zwei Varianten und entscheidet gemeinsam, welcher Plan realistischer ist.", extraVocab: [["die Variante", "版本；方案", "die Varianten"], ["realistisch", "實際的", ""]] },
    { text: "Emily bewahrt die Bestätigung in einer Mappe auf, weil sie das Dokument später noch braucht.", extraVocab: [["die Mappe", "資料夾", "die Mappen"], ["aufbewahren", "保存", ""]] },
    { text: "Anna antwortet schnell und bedankt sich dafür, dass Ethan ehrlich und früh genug geschrieben hat.", extraVocab: [["früh genug", "夠早", ""], ["dafür", "為此", ""]] },
    { text: "Nach der Simulation tauschen sie Tipps aus und planen kurze Lernphasen für den Abend.", extraVocab: [["die Simulation", "模擬", "die Simulationen"], ["austauschen", "交換", ""]] },
  ],
  B1: [
    { text: "Sie erwähnt auch, dass ein Umzug zwar anstrengend ist, aber neue berufliche Möglichkeiten eröffnet. Ihre Freunde reagieren verständnisvoll und bieten Hilfe beim Tragen der Kisten an.", extraVocab: [["die Möglichkeit", "可能性", "die Möglichkeiten"], ["die Kiste", "箱子", "die Kisten"], ["anstrengend", "費力的", ""], ["verständnisvoll", "體諒的", ""]] },
    { text: "Im Bericht beschreibt Jonas nicht nur, was er gemacht hat, sondern auch, welche Abläufe noch unklar waren. Sein Betreuer lobt seine genaue Beobachtung und gibt ihm konkrete Tipps.", extraVocab: [["der Ablauf", "流程", "die Abläufe"], ["der Betreuer", "指導員", "die Betreuer"], ["loben", "稱讚", ""], ["unklar", "不清楚的", ""]] },
    { text: "Zum Schluss formuliert jede Person eine kurze Stellungnahme. Dabei sollen die Lernenden Beispiele nennen und auf die Argumente der anderen reagieren.", extraVocab: [["die Position", "立場", "die Positionen"], ["das Beispiel", "例子", "die Beispiele"], ["reagieren", "回應", ""], ["dabei", "在此過程中", ""]] },
    { text: "Die Hausverwaltung schreibt die vereinbarten Regeln später in einem Protokoll auf. So können auch Nachbarn, die nicht dabei waren, die Entscheidung nachvollziehen.", extraVocab: [["das Protokoll", "紀錄", "die Protokolle"], ["die Entscheidung", "決定", "die Entscheidungen"], ["vereinbart", "約定的", ""], ["nachvollziehen", "理解", ""]] },
    { text: "David führt zusätzlich eine kleine Tabelle, in der er Schlaf, Stimmung und Bewegung dokumentiert. Dadurch erkennt er schneller, welche Gewohnheiten ihm wirklich guttun.", extraVocab: [["die Tabelle", "表格", "die Tabellen"], ["die Stimmung", "心情", "die Stimmungen"], ["dokumentieren", "記錄", ""], ["guttun", "有益", ""]] },
    { text: "Bevor die Gruppe den Brief abschickt, überarbeitet sie die Formulierungen. Sie achtet darauf, respektvoll zu bleiben und trotzdem deutlich zu sagen, was sich ändern soll.", extraVocab: [["die Formulierung", "措辭", "die Formulierungen"], ["respektvoll", "尊重的", ""], ["deutlich", "清楚的", ""], ["überarbeiten", "修改", ""]] },
    { text: "Während der Kulturwoche werden nicht nur Ergebnisse gezeigt, sondern auch Gespräche zwischen den Klassen organisiert. Dadurch entsteht ein Austausch über Unterschiede und Gemeinsamkeiten.", extraVocab: [["das Ergebnis", "成果", "die Ergebnisse"], ["der Unterschied", "差異", "die Unterschiede"], ["die Gemeinsamkeit", "共同點", "die Gemeinsamkeiten"], ["entstehen", "產生", ""]] },
    { text: "Karim präsentiert seine Erfahrungen im Kurs und erklärt, welche Alternativen im Alltag realistisch waren. Einige Lernende beschließen, die Challenge zu Hause weiterzuführen.", extraVocab: [["die Alternative", "替代方案", "die Alternativen"], ["die Erfahrung", "經驗", "die Erfahrungen"], ["beschließen", "決定", ""], ["weiterführen", "繼續進行", ""]] },
    { text: "Als Nina den Rucksack abholt, kontrolliert sie sofort den Inhalt. Sie bedankt sich beim Mitarbeiter und schreibt sich für die Zukunft auf, wichtige Dinge getrennt aufzubewahren.", extraVocab: [["der Inhalt", "內容物", "die Inhalte"], ["die Zukunft", "未來", "-"], ["getrennt", "分開的", ""], ["abholen", "領取", ""]] },
    { text: "Nach dem Kurs schickt Leon eine kurze Zusammenfassung an seine Lerngruppe. Damit zeigt er, dass er trotz der technischen Probleme aktiv am Unterricht teilgenommen hat.", extraVocab: [["die Zusammenfassung", "摘要", "die Zusammenfassungen"], ["die Lerngruppe", "讀書小組", "die Lerngruppen"], ["trotz", "儘管", ""], ["teilnehmen", "參與", ""]] },
    { text: "Die Redaktion der Schülerzeitung veröffentlicht Claras Brief in der nächsten Ausgabe. Danach melden sich weitere Schülerinnen und Schüler mit eigenen Vorschlägen.", extraVocab: [["die Redaktion", "編輯部", "die Redaktionen"], ["die Ausgabe", "期刊；版本", "die Ausgaben"], ["veröffentlichen", "刊登", ""], ["sich melden", "主動聯繫", ""]] },
    { text: "Die Lehrerin gibt danach individuelles Feedback und empfiehlt passende Übungen. Wer beim Schreiben unsicher ist, wiederholt zuerst Einleitung, Argumentation und Schluss.", extraVocab: [["die Argumentation", "論證", "die Argumentationen"], ["die Einleitung", "開頭", "die Einleitungen"], ["individuell", "個別的", ""], ["passend", "合適的", ""]] },
  ],
};

const b1ReadingExtensions = [
  "Sie plant außerdem, regelmäßig einen Stammtisch zu besuchen. Dort möchte sie neue Kontakte knüpfen. Vor dem Umzug sortiert sie ihre Möbel und Bücher. Sie schreibt eine Liste, damit sie nichts vergisst.",
  "Am Montag fragt Jonas nach den wichtigsten Regeln im Team. Am Dienstag beobachtet er eine Besprechung mit Kunden. Am Mittwoch darf er selbst eine kleine Aufgabe übernehmen. Am Ende der Woche fühlt er sich sicherer.",
  "Die Klasse sucht zuerst Fakten aus dem Artikel. Danach markieren sie persönliche Bewertungen. Anschließend ordnen sie Pro- und Contra-Argumente. Zum Schluss formulieren sie eine ausgewogene Meinung.",
  "Vor der Besprechung sammelt Lena Beispiele aus den letzten Wochen. Während des Gesprächs hört sie den anderen genau zu. Sie fragt nach, wenn eine Aussage unklar bleibt. Dadurch entsteht langsam Vertrauen.",
  "David spricht mit einem Freund über seine Motivation. Gemeinsam planen sie feste Zeiten für Sport. Er merkt, dass kleine Routinen leichter einzuhalten sind. Deshalb beginnt er mit kurzen Einheiten.",
  "Die Gruppe liest ähnliche Briefe im Internet. Danach vergleicht sie Aufbau und Ton. Sie streicht zu emotionale Formulierungen. Am Ende wirkt der Brief klarer und professioneller.",
  "Vor der Kulturwoche verteilt die Lehrerin Aufgabenlisten. Einige Lernende kümmern sich um Musik. Andere bereiten kurze Vorträge vor. Nach jeder Aktivität gibt es eine kurze Reflexion.",
  "Karim achtet besonders auf Verpackungen beim Einkaufen. Er fragt Verkäufer nach Alternativen. Manchmal findet er keine perfekte Lösung. Trotzdem verändert sich sein Blick auf Konsum.",
  "Nina erinnert sich genau an ihren Sitzplatz im Zug. Diese Information hilft dem Mitarbeiter. Sie beschreibt auch einen kleinen Aufkleber am Rucksack. Später nutzt sie die Erfahrung für einen kurzen Bericht.",
  "Leon testet nach dem Unterricht sein Mikrofon erneut. Er macht Screenshots von den Einstellungen. So kann er das Problem später genauer erklären. Beim nächsten Onlinekurs ist er besser vorbereitet.",
  "Clara liest ihren Leserbrief einer Freundin vor. Die Freundin fragt nach weiteren Beispielen. Clara ergänzt einen Vergleich mit einer anderen Schule. Dadurch wird ihr Text überzeugender.",
  "Die Klasse bespricht typische Fehler aus der Simulation. Danach setzt jede Person eigene Prioritäten. Einige üben mehr Schreiben, andere mehr Sprechen. Der Lernplan bleibt realistisch und messbar.",
];

const lessonPlanSets = { A1: a1LessonPlans, A2: a2LessonPlans, B1: b1LessonPlans, B2: b2LessonPlans };
const lessonDetailSets = { A1: a1LessonDetails, A2: a2LessonDetails, B1: b1LessonDetails };

function getStoryLessonPlan(level, lessonNumber) {
  return lessonPlanSets[level]?.[lessonNumber - 1] || null;
}

function getStoryLessonDetail(level, lessonNumber) {
  return lessonDetailSets[level]?.[lessonNumber - 1] || "";
}

function getLessonEnhancement(level, lessonNumber) {
  return lessonEnhancements[level]?.[lessonNumber - 1] || { text: "", extraVocab: [] };
}

function getReadingExtension(level, lessonNumber) {
  return level === "B1" ? b1ReadingExtensions[lessonNumber - 1] || "" : "";
}

function createTextbookContent(level, lessonNumber, topicData) {
  const normalizedTopic = normalizeTopicData(topicData);
  const plan = getStoryLessonPlan(level, lessonNumber);
  const enhancement = getLessonEnhancement(level, lessonNumber);
  const vocab = plan ? plan.vocab : createLessonVocabulary(level, lessonNumber, normalizedTopic);
  const grammar = createLessonGrammar(level, lessonNumber, normalizedTopic);
  return {
    title: plan ? `${level} L${lessonNumber}: ${plan.titleZh} · ${plan.titleDe}` : `${level} L${lessonNumber}: ${normalizedTopic.zh} · ${normalizedTopic.de}`,
    text: plan ? `${plan.text} ${getStoryLessonDetail(level, lessonNumber)} ${enhancement.text} ${getReadingExtension(level, lessonNumber)}`.trim() : createReadingText(level, normalizedTopic.de, lessonNumber, vocab),
    focus: plan ? plan.focusZh : normalizedTopic.zh,
    storyTitleZh: plan?.titleZh,
    storyTitleDe: plan?.titleDe,
    vocab,
    extraVocab: plan ? [...plan.extraVocab, ...enhancement.extraVocab] : [],
    grammar,
    proverb: getLessonProverb(level, lessonNumber),
  };
}

function createLessonGrammar(level, lessonNumber, topicData) {
  const count = getGrammarCount(level);
  const levelRows = grammarOverviewRows.filter((row) => row.level === level);

  return Array.from({ length: count }, (_, index) => {
    const serial = (lessonNumber - 1) * count + index;
    const row = levelRows[serial % levelRows.length];
    const scope = grammarScopes[serial % grammarScopes.length];
    const topic = topicData.de;
    const title = `${row.topic} ${scope}`;
    const body = `${row.usage} 本課放在「${topic}」情境中練習，重點是能在課文、單字與口說任務中正確使用。`;
    const example = buildContextGrammarExample(row.topic, topic, serial);

    return [`L${lessonNumber}.${index + 1} ${title}`, body, example];
  });
}

const grammarScopes = [
  "im Dialog",
  "in kurzen Fragen",
  "im Alltagstext",
  "bei Informationen",
  "in höflichen Sätzen",
  "bei Terminen",
  "in E-Mails",
  "beim Vergleichen",
  "in Begründungen",
  "in Erzählungen",
  "bei offiziellen Texten",
  "in Prüfungssituationen",
  "mit Wortschatz",
  "bei Redemitteln",
  "in Zusammenfassungen",
  "in Meinungen",
];

function buildContextGrammarExample(topicName, topic, serial) {
  const examples = {
    Artikel: `Der Ausdruck zum Thema ${topic} steht im Text.`,
    Nominativ: `${topic} ist heute das Thema der Lektion.`,
    Akkusativ: `Anna übt einen Satz zum Thema ${topic}.`,
    "Verbposition 2": `Heute lernt Ben ${topic}.`,
    "W-Fragen": `Was bedeutet ${topic} im Alltag?`,
    "sein / haben": `Mia hat eine Frage zu ${topic}.`,
    Modalverben: `Tom möchte mehr über ${topic} sprechen.`,
    Plural: `Die neuen Wörter zu ${topic} stehen im Heft.`,
    Personalpronomen: `Sie liest den Text zu ${topic}.`,
    Possessivartikel: `Mein Beispiel passt zum Thema ${topic}.`,
    Negation: `Das Beispiel ist nicht schwer.`,
    Imperativ: `Lesen Sie den Text zu ${topic}.`,
    Perfekt: `Emma hat gestern ${topic} geübt.`,
    Dativ: `David spricht mit der Lehrerin über ${topic}.`,
    Wechselpräpositionen: `Die Notizen liegen auf dem Tisch.`,
    Nebensatz: `Sara lernt weiter, weil ${topic} wichtig ist.`,
    "trennbare Verben": `Ben schreibt die Aufgabe zu Hause auf.`,
    Komparativ: `Diese Aufgabe ist klarer als die letzte.`,
    "Reflexive Verben": `Julia interessiert sich für ${topic}.`,
    Adjektivdeklination: `Anna schreibt einen kurzen Text über ${topic}.`,
    "zu + Infinitiv": `Es ist hilfreich, die Beispiele laut zu lesen.`,
    "Futur mit werden": `Mia wird morgen weiterüben.`,
    "Konjunktiv II": `Könnten Sie den Satz bitte erklären?`,
    Passiv: `Der Text wird im Kurs besprochen.`,
    Konnektoren: `Das Thema ist wichtig, deshalb üben wir es.`,
    "indirekte Frage": `Ich möchte wissen, warum ${topic} wichtig ist.`,
    Relativsatz: `Das ist ein Thema, das oft geprüft wird.`,
    Präteritum: `Früher übte Ben jeden Tag zehn Minuten.`,
    Genitiv: `Die Struktur des Textes ist klar.`,
    Temporalsätze: `Bevor Anna antwortet, liest sie die Aufgabe.`,
    Plusquamperfekt: `Sie hatte den Text gelesen, bevor sie antwortete.`,
    Nominalisierung: `Die Bearbeitung des Themas ${topic} braucht Struktur.`,
    "zweiteilige Konnektoren": `Einerseits ist ${topic} praktisch, andererseits gibt es Fragen.`,
    Passiversatz: `Das Problem lässt sich mit Beispielen erklären.`,
    Argumentstruktur: `Insgesamt ist das Thema relevant, weil es im Alltag vorkommt.`,
    Partizipialattribute: `Die besprochenen Beispiele helfen beim Schreiben.`,
    "Subjektiver Konjunktiv": `Der Text sagt, das Thema sei wichtig.`,
    "Kausale und konzessive Strukturen": `Trotz kleiner Fehler ist die Antwort verständlich.`,
    Infinitivkonstruktionen: `Anna übt, um sicherer zu sprechen.`,
    "Präpositionale Nomen-Verb-Verbindungen": `Ben nimmt an der Diskussion teil.`,
  };

  return examples[topicName] || `Beispiel ${serial + 1}: ${topic} wird im Satz geübt.`;
}

function createLessonVocabulary(level, lessonNumber, topicData) {
  const count = getVocabCount(level);
  const used = usedLessonVocabularyByLevel[level] || new Set();
  const preferred = [...(syllabusVocabulary[level] || []), ...getExpandedVocabularyPool(level)];
  const rotated = rotateArray(preferred, (lessonNumber - 1) * count);
  const selected = [];

  rotated.forEach((entry) => {
    const normalized = normalizeVocabularyEntry(entry);
    if (selected.length >= count) return;
    if (used.has(normalized[0])) return;
    selected.push(normalized);
    used.add(normalized[0]);
  });

  while (selected.length < count) {
    const generated = createTopicVocabularyEntry(topicData, lessonNumber, selected.length + 1);
    if (!used.has(generated[0])) {
      selected.push(generated);
      used.add(generated[0]);
    }
  }

  usedLessonVocabularyByLevel[level] = used;
  return selected;
}

function getExpandedVocabularyPool(level) {
  const scoredRows = vocabularyRows.map((row, index) => ({
    row,
    index,
    score: inferVocabularyLevel(row, index) === level ? 0 : 1,
  }));

  return scoredRows
    .sort((a, b) => a.score - b.score || a.index - b.index)
    .map(({ row }) => [row.german, row.chinese, row.type === "名詞" ? nounPluralMap[row.german] || "-" : ""]);
}

function normalizeVocabularyEntry(entry) {
  return [entry[0], entry[1], entry[2] || ""];
}

function createTopicVocabularyEntry(topicData, lessonNumber, index) {
  const base = topicData.de.split(/[, und]+/).filter(Boolean)[0] || "Thema";
  return [`der ${base}-Ausdruck ${lessonNumber}.${index}`, `${topicData.zh}相關表達 ${index}`, `die ${base}-Ausdrücke ${lessonNumber}.${index}`];
}

function getVocabCount(level) {
  return { A1: 10, A2: 12, B1: 14, B2: 14 }[level] || 10;
}

function getGrammarCount(level) {
  return { A1: 3, A2: 4, B1: 4, B2: 4 }[level] || 3;
}

function createReadingText(level, topic, lessonNumber, vocab = []) {
  const names = ["Anna", "Ben", "Emma", "Tom", "Mia", "Sara", "David", "Julia"];
  const name = names[(lessonNumber - 1) % names.length];
  const friend = names[lessonNumber % names.length];
  const focusWords = vocab.slice(0, 5).map(([word]) => stripVocabularyArticle(word)).join(", ");
  const focusSentence = `Wichtige Wörter in dieser Lektion sind ${focusWords}.`;
  const texts = {
    A1: [
      `${name} lernt heute ${topic}. ${name} schreibt neue Wörter in ein Heft und spricht einfache Sätze laut. Am Ende fragt ${name}: Können Sie das bitte wiederholen?`,
      `${friend} übt mit ${name} kurze Dialoge. Die Sätze sind einfach, aber wichtig: eine Frage stellen, eine Antwort geben und höflich um Hilfe bitten.`,
      focusSentence,
    ],
    A2: [
      `In dieser Lektion geht es um ${topic}. ${name} hat letzte Woche eine ähnliche Situation erlebt und erzählt davon im Deutschkurs. ${name} erklärt, was passiert ist, warum Hilfe nötig war und welche Lösung am Ende funktioniert hat.`,
      `Der Text enthält mehrere Informationen zu Zeit, Ort und Grund. ${friend} muss nicht jedes Wort übersetzen, sondern zuerst die Aufgabe lesen und dann im Text nach den wichtigen Details suchen.`,
      `Am Ende schreibt ${name} eine kurze Nachricht, weil ein Termin geändert werden muss. Die Nachricht ist höflich, klar und enthält einen neuen Vorschlag.`,
      focusSentence,
    ],
    B1: [
      `Das Thema ${topic} kommt häufig im Alltag, in Prüfungen und in Gesprächen vor. ${name} liest einen längeren Text, in dem eine Person ein Problem beschreibt, einen Grund nennt und um eine konkrete Lösung bittet.`,
      `Im Unterricht sammelt die Gruppe Argumente. Einige Lernende finden die Situation einfach, andere sehen mehrere Schwierigkeiten. ${friend} formuliert eine Meinung und begründet sie mit einem Beispiel aus dem Alltag.`,
      `Für die schriftliche Aufgabe achtet sie auf eine klare Struktur: zuerst der Anlass, dann die Erklärung, danach die Bitte oder der Vorschlag. Dadurch wirkt der Text höflich und verständlich.`,
      `Beim Sprechen versucht sie, nicht nur einzelne Wörter zu sagen, sondern ganze Sätze miteinander zu verbinden.`,
      focusSentence,
    ],
    B2: [
      `In dieser Lektion wird ${topic} aus mehreren Perspektiven betrachtet. Der Ausgangstext beschreibt nicht nur eine Alltagssituation, sondern auch gesellschaftliche Folgen, mögliche Vorteile und kritische Gegenargumente.`,
      `${name} markiert zentrale Begriffe und unterscheidet zwischen Fakten, Beispielen und Bewertungen. Besonders wichtig ist, dass die Haltung der Autorin erkannt und die Argumentation nicht nur wortwörtlich, sondern inhaltlich verstanden wird.`,
      `In der Diskussion formuliert sie eine differenzierte Position. Einerseits sieht sie praktische Vorteile, andererseits weist sie auf Bedingungen hin, die erfüllt sein müssen, damit die vorgeschlagene Lösung langfristig sinnvoll bleibt.`,
      `Für die Schreibaufgabe nutzt sie Konnektoren, nominale Wendungen und ein kurzes Fazit. So entsteht ein Text, der nicht nur korrekt, sondern auch zusammenhängend und überzeugend wirkt.`,
      `Die Lektion trainiert deshalb Lesen, Wortschatz, Grammatik und produktive Fertigkeiten gemeinsam.`,
      focusSentence,
    ],
  };

  return rotateArray(texts[level], lessonNumber - 1).join(" ");
}

function stripVocabularyArticle(word) {
  return word.replace(/^(der|die|das)\s+/, "");
}

const lessonProverbs = [
  ["Übung macht den Meister.", "熟能生巧。"],
  ["Aller Anfang ist schwer.", "萬事起頭難。"],
  ["Ohne Fleiß kein Preis.", "不努力就沒有收穫。"],
  ["Viele Wege führen nach Rom.", "條條大路通羅馬。"],
  ["Besser spät als nie.", "遲到總比不到好。"],
  ["Ende gut, alles gut.", "結局好，一切都好。"],
  ["Der frühe Vogel fängt den Wurm.", "早起的人掌握機會。"],
  ["Kleine Schritte führen auch zum Ziel.", "小步前進也能到達目標。"],
  ["Aus Fehlern lernt man.", "人會從錯誤中學習。"],
  ["Geduld bringt Rosen.", "耐心會帶來成果。"],
  ["Reden ist Silber, Schweigen ist Gold.", "言語是銀，沉默是金。"],
  ["Wer A sagt, muss auch B sagen.", "開始了就要負責到底。"],
];

function getLessonProverb(level, lessonNumber) {
  const levelOffset = levelOrder.indexOf(level) * 3;
  const [german, chinese] = lessonProverbs[(lessonNumber - 1 + levelOffset) % lessonProverbs.length];
  return { german, chinese };
}

function createLessonDailyPhrases(level, lessonNumber, topic) {
  const phraseSets = {
    A1: [
      [["Wie heißt das auf Deutsch?", "這個德文怎麼說？"], ["Ich verstehe das Wort nicht.", "我不懂這個字。"], ["Kannst du bitte langsamer sprechen?", "你可以說慢一點嗎？"], ["Ich brauche ein Beispiel.", "我需要一個例子。"]],
      [["Ich heiße Anna.", "我叫 Anna。"], ["Ich komme aus Taiwan.", "我來自台灣。"], ["Ich wohne in Taipei.", "我住在台北。"], ["Freut mich.", "很高興認識你。"]],
      [["Wann beginnt der Kurs?", "課程什麼時候開始？"], ["Wo ist Raum 204?", "204 教室在哪裡？"], ["Der Kurs fällt heute aus.", "今天課程取消。"], ["Bitte bringen Sie ein Buch mit.", "請帶一本書。"]],
      [["Wie spät ist es?", "現在幾點？"], ["Der Termin ist um neun Uhr.", "預約在九點。"], ["Heute ist Montag.", "今天是星期一。"], ["Ich habe am Freitag Zeit.", "我星期五有空。"]],
      [["Das ist meine Mutter.", "這是我媽媽。"], ["Hast du Geschwister?", "你有兄弟姊妹嗎？"], ["Mein Freund wohnt in Berlin.", "我的朋友住在柏林。"], ["Wir besuchen meine Familie.", "我們拜訪我的家人。"]],
      [["Ich hätte gern Wasser.", "我想要水。"], ["Die Rechnung bitte.", "請給我帳單。"], ["Kann ich mit Karte bezahlen?", "我可以刷卡嗎？"], ["Das schmeckt sehr gut.", "這很好吃。"]],
      [["Gehen Sie geradeaus.", "請直走。"], ["Wo ist die Haltestelle?", "站牌在哪裡？"], ["Ich fahre mit dem Bus.", "我搭公車。"], ["Ist der Bahnhof weit?", "火車站遠嗎？"]],
      [["Wie viel kostet das?", "這個多少錢？"], ["Haben Sie das in Blau?", "這個有藍色的嗎？"], ["Ich nehme diese Jacke.", "我要這件外套。"], ["Das ist mir zu teuer.", "這對我太貴了。"]],
      [["Ich stehe um sieben Uhr auf.", "我七點起床。"], ["Wann kaufst du ein?", "你什麼時候採買？"], ["Ich rufe dich später an.", "我晚點打給你。"], ["Am Abend sehe ich fern.", "晚上我看電視。"]],
      [["Es ist heute kalt.", "今天很冷。"], ["Ich trage eine Jacke.", "我穿外套。"], ["Welche Farbe gefällt dir?", "你喜歡哪個顏色？"], ["Der Pullover ist warm.", "毛衣很暖。"]],
      [["Ich habe Kopfschmerzen.", "我頭痛。"], ["Ich brauche einen Arzttermin.", "我需要看診預約。"], ["Tut das weh?", "這會痛嗎？"], ["Ich bin seit gestern krank.", "我從昨天開始生病。"]],
      [["Ich möchte mich anmelden.", "我想報名。"], ["Können Sie das bitte wiederholen?", "可以請您再說一次嗎？"], ["Ich habe noch eine Frage.", "我還有一個問題。"], ["Danke für Ihre Hilfe.", "謝謝您的幫忙。"]],
    ],
    A2: [
      [["Ich habe gestern Deutsch gelernt.", "我昨天學了德文。"], ["Wir sind nach Hause gefahren.", "我們回家了。"], ["Hast du schon gegessen?", "你吃過了嗎？"], ["Ich bin spät angekommen.", "我很晚抵達。"]],
      [["Ich möchte den Termin verschieben.", "我想改預約。"], ["Passt Ihnen Donnerstag?", "星期四您方便嗎？"], ["Ich brauche eine Quittung.", "我需要收據。"], ["Können Sie mir helfen?", "您可以幫我嗎？"]],
      [["Vielen Dank für Ihre Nachricht.", "謝謝您的訊息。"], ["Ich kann leider nicht kommen.", "我很抱歉不能去。"], ["Bitte antworten Sie mir kurz.", "請簡短回覆我。"], ["Anbei finden Sie das Formular.", "附件是表格。"]],
      [["Ist das Zimmer noch frei?", "這個房間還空著嗎？"], ["Wie hoch ist die Miete?", "租金是多少？"], ["Ich suche eine ruhige Unterkunft.", "我找安靜的住宿。"], ["Kann ich die Wohnung besichtigen?", "我可以看房嗎？"]],
      [["Der Zug hat Verspätung.", "火車誤點了。"], ["Mein Anschluss ist weg.", "我的轉乘沒了。"], ["Wo bekomme ich ein neues Ticket?", "我在哪裡拿新票？"], ["Fährt heute noch ein Bus?", "今天還有公車嗎？"]],
      [["Ich muss morgen früh arbeiten.", "我明天一早要工作。"], ["Der Unterricht beginnt um acht.", "課八點開始。"], ["Wir planen ein Projekt.", "我們規劃一個專案。"], ["Ich bereite die Präsentation vor.", "我準備簡報。"]],
      [["Das ist günstiger als gestern.", "這比昨天便宜。"], ["Ich empfehle diese Verbindung.", "我推薦這個交通連線。"], ["Der Weg ist kürzer.", "路比較短。"], ["Nimm lieber den Zug.", "你最好搭火車。"]],
      [["Ich fahre mit dem Fahrrad.", "我騎腳踏車。"], ["Nach der Arbeit gehe ich einkaufen.", "下班後我去採買。"], ["Bei meiner Freundin gibt es Kaffee.", "我朋友那裡有咖啡。"], ["Wir gehen zu den Eltern.", "我們去父母家。"]],
      [["Ich komme später, weil ich arbeite.", "我晚點來，因為我工作。"], ["Ich glaube, dass das möglich ist.", "我相信這是可能的。"], ["Wenn es regnet, bleibe ich zu Hause.", "如果下雨，我待在家。"], ["Sag mir bitte, wann du kommst.", "請告訴我你何時來。"]],
      [["Wo muss ich unterschreiben?", "我必須在哪裡簽名？"], ["Ich fülle das Formular online aus.", "我線上填表。"], ["Brauche ich einen Antrag?", "我需要申請書嗎？"], ["Die Behörde öffnet um neun.", "機關九點開門。"]],
      [["Danke für die Einladung.", "謝謝邀請。"], ["Das passt mir leider nicht.", "這時間我不方便。"], ["Können wir uns nächste Woche treffen?", "我們可以下週見嗎？"], ["Ich sage dir morgen Bescheid.", "我明天告訴你。"]],
      [["Ich möchte die Situation kurz erklären.", "我想簡短說明狀況。"], ["Zuerst lese ich die Aufgabe.", "我先讀題目。"], ["Danach markiere ich die Details.", "之後我標出細節。"], ["Zum Schluss schreibe ich die Antwort.", "最後我寫答案。"]],
    ],
    B1: [
      [["Ich bin damit einverstanden.", "我同意這件事。"], ["Das sehe ich etwas anders.", "我有點不同看法。"], ["Könnten Sie das bitte begründen?", "可以請您說明理由嗎？"], ["Dafür gibt es mehrere Gründe.", "這有幾個理由。"]],
      [["Ich möchte mich beschweren.", "我想投訴。"], ["Die Lieferung ist zu spät angekommen.", "貨物太晚抵達。"], ["Ich bitte um eine schnelle Lösung.", "我請求快速解決。"], ["Vielen Dank im Voraus.", "先謝謝您。"]],
      [["Ich interessiere mich für die Stelle.", "我對這個職位有興趣。"], ["Ich habe Erfahrung im Verkauf.", "我有銷售經驗。"], ["Wann kann ich mich vorstellen?", "我何時可以面試？"], ["Ich schicke Ihnen meinen Lebenslauf.", "我寄履歷給您。"]],
      [["Das Problem lässt sich lösen.", "這個問題可以解決。"], ["Wir sollten zuerst die Ursache finden.", "我們應該先找原因。"], ["Vielleicht gibt es eine Alternative.", "也許有替代方案。"], ["Ich schlage einen neuen Termin vor.", "我建議新的時間。"]],
      [["Letztes Jahr bin ich nach Wien gereist.", "去年我去了維也納。"], ["Die Reise hat mir sehr gefallen.", "我很喜歡這趟旅行。"], ["Besonders interessant war das Museum.", "特別有趣的是博物館。"], ["Am Ende war ich sehr müde.", "最後我很累。"]],
      [["Ich brauche eine Beratung.", "我需要諮詢。"], ["Meine Versicherung bezahlt das nicht.", "我的保險不支付這個。"], ["Welche Unterlagen brauche ich?", "我需要哪些文件？"], ["Ich möchte einen zweiten Termin.", "我想要第二個預約。"]],
      [["Ich lerne besser mit Beispielen.", "我用例子學得比較好。"], ["Der Kurs hilft mir beim Sprechen.", "這門課幫助我口說。"], ["Ich wiederhole jeden Tag zehn Minuten.", "我每天複習十分鐘。"], ["Fehler gehören zum Lernen.", "錯誤是學習的一部分。"]],
      [["Ich nutze das Internet jeden Tag.", "我每天使用網路。"], ["Diese Nachricht wirkt nicht seriös.", "這則訊息看起來不可靠。"], ["Man sollte die Quelle prüfen.", "應該查證來源。"], ["Soziale Medien haben Vor- und Nachteile.", "社群媒體有優缺點。"]],
      [["Ich fahre öfter mit öffentlichen Verkehrsmitteln.", "我更常搭大眾運輸。"], ["Das ist besser für die Umwelt.", "這對環境比較好。"], ["Trotzdem ist das Auto manchmal praktischer.", "儘管如此，汽車有時比較實用。"], ["Die Stadt braucht sichere Radwege.", "城市需要安全自行車道。"]],
      [["Das Formular wird online ausgefüllt.", "表格會在線上填寫。"], ["Die Anmeldung wird automatisch bestätigt.", "報名會自動確認。"], ["Der Termin wird verschoben.", "預約會被改期。"], ["Die Unterlagen werden geprüft.", "文件會被審核。"]],
      [["Könnten Sie mir bitte weiterhelfen?", "可以請您協助我嗎？"], ["Ich würde gern einen Termin vereinbaren.", "我想約一個時間。"], ["Hätten Sie morgen Zeit?", "您明天有空嗎？"], ["Das wäre sehr freundlich.", "那會非常感謝。"]],
      [["Ich möchte zuerst meine Meinung sagen.", "我想先說我的意見。"], ["Danach nenne ich ein Beispiel.", "之後我舉一個例子。"], ["Zum Schluss fasse ich alles zusammen.", "最後我總結。"], ["Haben Sie noch Fragen dazu?", "您對此還有問題嗎？"]],
    ],
    B2: [
      [["Ich möchte zwei Aspekte hervorheben.", "我想強調兩個面向。"], ["Diese Entwicklung hat langfristige Folgen.", "這個發展有長期後果。"], ["Das Argument überzeugt mich nur teilweise.", "這個論點只部分說服我。"], ["Man sollte die Rahmenbedingungen beachten.", "應該注意框架條件。"]],
      [["Datenschutz spielt eine zentrale Rolle.", "資料保護扮演核心角色。"], ["Nutzerinnen und Nutzer brauchen Transparenz.", "使用者需要透明度。"], ["Digitale Angebote dürfen niemanden ausschließen.", "數位服務不應排除任何人。"], ["Persönliche Beratung bleibt wichtig.", "個人諮詢仍然重要。"]],
      [["Nachhaltiger Konsum beginnt im Alltag.", "永續消費從日常開始。"], ["Billig ist nicht immer sinnvoll.", "便宜不一定合理。"], ["Man muss Produktion und Transport mitdenken.", "必須一併考慮生產與運輸。"], ["Verzicht kann auch Freiheit bedeuten.", "放棄也可能意味自由。"]],
      [["Berufliche Entscheidungen hängen von vielen Faktoren ab.", "職涯決定取決於許多因素。"], ["Ein Studium ist nicht der einzige Weg.", "大學不是唯一道路。"], ["Weiterbildung wird immer wichtiger.", "進修越來越重要。"], ["Praktische Erfahrung sollte stärker zählen.", "實務經驗應更被重視。"]],
      [["Bezahlbarer Wohnraum ist ein großes Thema.", "可負擔住宅是重大議題。"], ["Städte müssen lebenswerter werden.", "城市必須變得更宜居。"], ["Kurze Wege verbessern die Lebensqualität.", "短距離動線提升生活品質。"], ["Lärm belastet viele Bewohner.", "噪音困擾許多居民。"]],
      [["Gesundheitspolitik betrifft alle Menschen.", "健康政策影響所有人。"], ["Prävention ist günstiger als Behandlung.", "預防比治療便宜。"], ["Psychische Gesundheit darf nicht unterschätzt werden.", "心理健康不應被低估。"], ["Zugang zu Hilfe muss einfacher werden.", "取得協助必須更容易。"]],
      [["Teilhabe bedeutet mehr als Anwesenheit.", "參與不只是人在場。"], ["Sprache erleichtert Integration.", "語言促進融入。"], ["Kulturelle Vielfalt kann eine Stärke sein.", "文化多樣性可以是優勢。"], ["Vorurteile müssen aktiv abgebaut werden.", "偏見必須主動消除。"]],
      [["Nicht jede Information ist zuverlässig.", "不是每個資訊都可靠。"], ["Bilder können manipuliert werden.", "圖片可能被操弄。"], ["Man sollte verschiedene Quellen vergleichen.", "應比較不同來源。"], ["Medienkompetenz gehört zur Allgemeinbildung.", "媒體素養屬於基本教育。"]],
      [["Flexible Arbeit braucht klare Regeln.", "彈性工作需要明確規則。"], ["Verantwortung darf nicht unsichtbar werden.", "責任不應變得隱形。"], ["Homeoffice verändert die Kommunikation.", "遠距工作改變溝通。"], ["Teams brauchen Vertrauen und Struktur.", "團隊需要信任與結構。"]],
      [["Technischer Fortschritt ist nicht neutral.", "科技進步並非中立。"], ["Risiken müssen offen diskutiert werden.", "風險必須公開討論。"], ["Forschung braucht gesellschaftliche Kontrolle.", "研究需要社會監督。"], ["Innovation sollte dem Menschen dienen.", "創新應服務於人。"]],
      [["Nominalisierungen verdichten Informationen.", "名詞化濃縮資訊。"], ["Ein abstrakter Stil wirkt formeller.", "抽象風格顯得更正式。"], ["Zu viele Nomen machen Texte schwer.", "太多名詞會讓文章變難。"], ["Gute Texte bleiben trotzdem klar.", "好的文章仍然清楚。"]],
      [["Eine gute Argumentation braucht Struktur.", "好的論述需要結構。"], ["Zuerst formuliere ich meine These.", "我先表達論點。"], ["Danach prüfe ich mögliche Einwände.", "之後我檢視可能反對意見。"], ["Am Ende ziehe ich ein begründetes Fazit.", "最後我提出有理由的結論。"]],
    ],
  };

  return phraseSets[level][lessonNumber - 1].map(([german, chinese]) => ({ german, chinese }));
}

function normalizeTopicData(topicData) {
  if (typeof topicData === "string") return { zh: topicData, de: topicData };
  return topicData;
}

function createLessonFocusCards(level, topic, textbook) {
  return [
    {
      tag: "課文",
      title: `${topic} 的閱讀目標`,
      body: "先抓主題、人物、時間、地點和原因，再回頭整理細節。",
      example: textbook.text.split(".")[0] + ".",
    },
    {
      tag: "單字",
      title: "用情境記單字",
      body: "每課單字都應該放回句子中練習，不只背中文意思。",
      example: textbook.vocab.slice(0, 3).map(([word]) => word).join(" / "),
    },
    {
      tag: "文法",
      title: "本課文法任務",
      body: textbook.grammar[0]?.[1] || "把文法放進口說與寫作任務中練習。",
      example: textbook.grammar[0]?.[0] || topic,
    },
  ];
}

function ensureStageCoverage() {
  const stageSlugs = {
    初級: "basic",
    中級: "middle",
    進階: "advanced",
  };

  levelOrder.forEach((level) => {
    const levelLessons = lessons.filter((lesson) => lesson.level === level);
    if (levelLessons.length === 0) return;

    testStages.forEach((stage) => {
      const hasStage = levelLessons.some((lesson) => lessonStages[lesson.id] === stage || lesson.stage === stage);
      if (hasStage) return;

      const baseLesson = levelLessons[0];
      const clone = {
        ...baseLesson,
        id: `${level.toLowerCase()}-${stageSlugs[stage]}-mixed`,
        title: `${level} 綜合應用`,
        description: `${level} ${stage}綜合測驗，混合單字、文法、日常句子和閱讀理解。`,
        isGeneratedTest: true,
        questions: [...baseLesson.questions],
      };
      lessonStages[clone.id] = stage;
      lessons.push(clone);
    });
  });
}

function buildLessonQuestions(lesson, index) {
  const lessonQuestions = buildLessonSpecificQuestions(lesson, index);
  const pool = germanExamPools[lesson.level] || supplementalQuestionPools[lesson.level] || [];
  const rotatedPool = rotateArray(pool, index * 5);
  return dedupeQuestions([...lessonQuestions, ...rotatedPool]).slice(0, 20);
}

function buildLessonSpecificQuestions(lesson, index) {
  const textbook = lesson.textbook || {};
  const vocab = [...(textbook.vocab || []), ...(textbook.extraVocab || [])];
  const grammar = textbook.grammar || [];
  const phrases = lesson.dailyPhrases || [];
  const lessonTag = `${lesson.level} ${lesson.lessonCode}`;
  const questions = [];

  if (textbook.text) {
    questions.push({
      type: "reading",
      skill: "Lesen",
      tags: [lessonTag, "Text"],
      group: lessonTag,
      prompt: `${lessonTag}: Lesen Sie den Text und wählen Sie die richtige Antwort.`,
      passage: textbook.text,
      question: "Worum geht es in dieser Lektion?",
      options: buildOptions(lesson.topicDe, [lesson.topicZh, "Eine andere Alltagssituation", "Eine allgemeine Regel"]),
      answer: lesson.topicDe,
      hint: `Das Thema ist: ${lesson.topicDe}.`,
    });
  }

  vocab.forEach((entry, vocabIndex) => {
    const [word, meaning, plural] = entry;
    const bareWord = stripVocabularyArticle(word);
    const otherMeanings = rotateArray(vocab.map((item) => item[1]), vocabIndex + 1);
    const otherWords = rotateArray(vocab.map((item) => item[0]), vocabIndex + 1);

    questions.push({
      type: "choice",
      skill: "Wortschatz",
      tags: [lessonTag, "Wortschatz"],
      group: lessonTag,
      prompt: `Was bedeutet "${word}"?`,
      options: buildOptions(meaning, otherMeanings),
      answer: meaning,
      hint: `${word}: ${meaning}`,
    });

    questions.push({
      type: "spelling",
      skill: "Wortschatz",
      tags: [lessonTag, "Rechtschreibung"],
      group: lessonTag,
      prompt: `Schreiben Sie das Wort: ${meaning}`,
      answers: [word, bareWord],
      hint: `Richtig ist: ${word}.`,
    });

    if (plural) {
      questions.push({
        type: "cloze",
        skill: "Wortschatz",
        tags: [lessonTag, "Plural"],
        group: lessonTag,
        prompt: `Ergänzen Sie den Plural: ${word} - ___`,
        answer: plural,
        hint: `${word} - ${plural}`,
      });
    } else {
      questions.push({
        type: "choice",
        skill: "Wortschatz",
        tags: [lessonTag, "Wortform"],
        group: lessonTag,
        prompt: `Welche Form passt zu "${meaning}"?`,
        options: buildOptions(word, otherWords),
        answer: word,
        hint: `Richtig ist: ${word}.`,
      });
    }
  });

  grammar.forEach(([title, body, example], grammarIndex) => {
    const cleanTitle = cleanGrammarTitle(title);
    const otherGrammar = rotateArray(grammar.map(([item]) => cleanGrammarTitle(item)), grammarIndex + 1);

    questions.push({
      type: "reading",
      skill: "Sprachbausteine",
      tags: [lessonTag, "Grammatik"],
      group: lessonTag,
      prompt: `${lessonTag}: Welche Grammatik wird hier geübt? ${cleanTitle}`,
      passage: example || body,
      question: body,
      options: buildOptions(cleanTitle, otherGrammar),
      answer: cleanTitle,
      hint: cleanTitle,
    });

    questions.push({
      type: "cloze",
      skill: "Grammatik",
      tags: [lessonTag, "Grammatik"],
      group: lessonTag,
      prompt: `${lessonTag}: Nennen Sie den Grammatikpunkt: ${body}`,
      answer: cleanTitle,
      hint: cleanTitle,
    });
  });

  phrases.forEach((phrase, phraseIndex) => {
    const otherPhrases = rotateArray(phrases.map((item) => item.german), phraseIndex + 1);

    questions.push({
      type: "choice",
      skill: "Hören/Sprechen",
      tags: [lessonTag, "Redemittel"],
      group: lessonTag,
      prompt: `Welche Redemittel passt? ${phrase.chinese}`,
      options: buildOptions(phrase.german, otherPhrases),
      answer: phrase.german,
      hint: phrase.german,
    });
  });

  if (phrases.length >= 3) {
    questions.push({
      type: "match",
      skill: "Redemittel",
      tags: [lessonTag, "Zuordnung"],
      group: lessonTag,
      prompt: `${lessonTag}: Ordnen Sie die Redemittel zu.`,
      pairs: phrases.slice(0, 4).map((phrase) => ({ term: phrase.chinese, answer: phrase.german })),
      hint: "Ordnen Sie Bedeutung und Satz zu.",
    });
  }

  if (textbook.proverb) {
    questions.push({
      type: "reading",
      skill: "Lesen",
      tags: [lessonTag, "Sprichwort"],
      group: lessonTag,
      prompt: `${lessonTag}: Was bedeutet das Sprichwort?`,
      passage: textbook.proverb.german,
      question: "Wählen Sie die passende Bedeutung.",
      options: buildOptions(textbook.proverb.chinese, ["做事要有耐心。", "學習需要練習。", "應該準時到達。"]),
      answer: textbook.proverb.chinese,
      hint: textbook.proverb.chinese,
    });
  }

  return shuffleWithSeed(dedupeQuestions(questions), index + lesson.id.length);
}

function buildOptions(answer, candidates) {
  const fallbackOptions = ["nicht passend", "andere Bedeutung", "andere Form"];
  return [...new Set([answer, ...candidates, ...fallbackOptions].filter(Boolean))]
    .filter((option) => option !== undefined && option !== null)
    .slice(0, 4);
}

function cleanGrammarTitle(title) {
  return title.replace(/^L\d+\.\d+\s+/, "");
}

function dedupeQuestions(questions) {
  const seen = new Set();
  return questions.filter((question) => {
    const answer = Array.isArray(question.answers) ? question.answers.join("|") : question.answer || "";
    const key = [
      question.type,
      question.group,
      question.prompt,
      question.question || "",
      question.passage || "",
      answer,
    ].join("::").toLowerCase();

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getCourseSummary(lesson) {
  const summaries = {
    初級: "基礎句型、核心單字與最常用生活會話。",
    中級: "文法組合、日常任務與較完整句子。",
    進階: "閱讀策略、考試題型與意見表達。",
  };

  return `${lesson.level} ${lesson.lessonCode}：${summaries[lesson.stage]}`;
}

function getLessonTopicData(lesson) {
  if (lesson.topicZh && lesson.topicDe) return { zh: lesson.topicZh, de: lesson.topicDe };

  const topics = {
    "a1-articles": { zh: "冠詞與名詞", de: "Artikel und Nomen" },
    "a1-sentences": { zh: "自我介紹與基本句", de: "Vorstellung und einfache Sätze" },
    "a1-reading": { zh: "公告與短訊閱讀", de: "Hinweise und kurze Nachrichten" },
    "a2-perfect": { zh: "完成式 Perfekt", de: "Perfekt im Alltag" },
    "a2-daily": { zh: "購物與預約", de: "Einkaufen und Termine" },
    "a2-reading": { zh: "通知與 email 閱讀", de: "Mitteilungen und E-Mails" },
    "b1-daily": { zh: "原因、意見與請求", de: "Gründe, Meinungen und Bitten" },
    "b2-travel-talk": { zh: "立場、比較與討論", de: "Positionen, Vergleiche und Diskussionen" },
  };

  if (topics[lesson.id]) return topics[lesson.id];
  return { zh: lesson.title.replace(`${lesson.level} `, ""), de: lesson.title.replace(`${lesson.level} `, "") };
}

function sortLessonsByCode(a, b) {
  return a.lessonNumber - b.lessonNumber;
}

function getLevelFolderLabel(level) {
  const lessonCount = lessons.filter((lesson) => lesson.level === level && !lesson.isComprehensiveExam).length;
  if (activeMainSection === "exam") return `${lessonCount} Kurztest · 3 Prüfung`;
  return `${lessonCount} Lektionen`;
}

function getLessonCards(lesson) {
  const stageCards = stageLearningCards[lesson.level]?.[lesson.stage] || [];
  const generalCards = learningExpansionCards[lesson.level] || [];
  const baseCards = lesson.isGeneratedTest ? [] : lesson.cards.slice(0, 2);
  return [...stageCards, ...baseCards, ...generalCards.slice(0, 1)];
}

function renderTextbookLesson(lesson) {
  const content = lesson.textbook || textbookLessons[lesson.level]?.[lesson.stage];
  if (!content) return;

  lessonReadingEl.innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.text}</p>
  `;

  const hasExtraVocab = Boolean(content.extraVocab?.length);
  const useWideVocab = lesson.level === "B2" && !hasExtraVocab;
  lessonVocabularyEl.classList.toggle("mini-vocab-list--two", useWideVocab);
  lessonVocabularyEl.closest(".textbook-box")?.classList.toggle("textbook-box--wide", useWideVocab);
  if (lessonExtraVocabularyEl.closest(".textbook-box")) {
    lessonExtraVocabularyEl.closest(".textbook-box").hidden = useWideVocab;
  }

  lessonVocabularyEl.innerHTML = content.vocab
    .map(([german, chinese, plural]) => `
      <div>
        <strong>${german}</strong>
        ${plural ? `<small>Plural: ${plural}</small>` : ""}
        <span>${chinese}</span>
      </div>
    `)
    .join("");

  lessonExtraVocabularyEl.innerHTML = (hasExtraVocab ? content.extraVocab : [["-", "本課暫無課外單字", ""]])
    .map(([german, chinese, plural]) => `
      <div>
        <strong>${german}</strong>
        ${plural ? `<small>Plural: ${plural}</small>` : ""}
        <span>${chinese}</span>
      </div>
    `)
    .join("");

  lessonGrammarEl.innerHTML = content.grammar
    .map(([title, body, example]) => `
      <div>
        <strong>${title}</strong>
        <span>${body}</span>
        ${example ? `<em>${example}</em>` : ""}
      </div>
    `)
    .join("");
}

function rotateArray(items, offset) {
  if (items.length === 0) return [];
  const start = offset % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}

function shuffleWithSeed(items, seed) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const swapIndex = seed % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function renderQuestion() {
  const question = activeLesson.questions[currentIndex];
  const preparedQuestion = prepareQuestion(question, currentIndex);
  currentPreparedQuestion = preparedQuestion;
  answered = false;

  scoreEl.textContent = score;
  totalEl.textContent = activeLesson.questions.length;
  progressBar.style.width = `${(currentIndex / activeLesson.questions.length) * 100}%`;
  metaEl.textContent = `Aufgabe ${currentIndex + 1} von ${activeLesson.questions.length} · ${getExamSkillLabel(preparedQuestion)}`;
  textEl.textContent = preparedQuestion.prompt;
  translationEl.textContent = [preparedQuestion.group, preparedQuestion.translation || preparedQuestion.question || ""].filter(Boolean).join(" · ");
  feedbackEl.textContent = getWaitingText(preparedQuestion.type);
  nextButton.disabled = true;
  nextButton.textContent = currentIndex === activeLesson.questions.length - 1 ? "Ergebnis anzeigen" : "Nächste Aufgabe";

  answersEl.innerHTML = "";

  if (preparedQuestion.visual) {
    renderQuestionVisual(preparedQuestion.visual);
  }

  if (preparedQuestion.type === "choice" || preparedQuestion.type === "reading" || preparedQuestion.type === "listening") {
    renderChoiceQuestion(preparedQuestion);
  }

  if (preparedQuestion.type === "cloze" || preparedQuestion.type === "spelling") {
    renderClozeQuestion(preparedQuestion);
  }

  if (preparedQuestion.type === "match") {
    renderMatchQuestion(preparedQuestion);
  }

  if (preparedQuestion.type === "writing" || preparedQuestion.type === "speaking") {
    renderSelfCheckQuestion(preparedQuestion);
  }
}

function prepareQuestion(question, index) {
  const seed = quizSeed + index * 101 + activeLesson.id.length;

  if (question.type === "choice" || question.type === "reading" || question.type === "listening") {
    const primaryAnswer = getPrimaryAnswer(question);
    const options = avoidFirstAnswer(
      shuffleWithSeed(question.options, seed),
      primaryAnswer,
      seed,
    );

    return {
      ...question,
      options,
    };
  }

  if (question.type === "match") {
    const pairs = shuffleWithSeed(question.pairs, seed);
    const optionSet = avoidOriginalMatchOrder(
      shuffleWithSeed([...new Set(question.pairs.map((pair) => pair.answer))], seed + 17),
      pairs,
      seed,
    );

    return {
      ...question,
      pairs,
      optionSet,
    };
  }

  return question;
}

function getPrimaryAnswer(question) {
  return Array.isArray(question.answers) ? question.answers[0] : question.answer;
}

function avoidFirstAnswer(options, answer, seed) {
  if (options.length < 2 || options[0] !== answer) return options;
  const offset = 1 + (seed % (options.length - 1));
  return [...options.slice(offset), ...options.slice(0, offset)];
}

function avoidOriginalMatchOrder(options, pairs, seed) {
  if (options.length < 2) return options;
  const sameOrder = pairs.every((pair, index) => pair.answer === options[index]);
  if (!sameOrder) return options;
  const offset = 1 + (seed % (options.length - 1));
  return [...options.slice(offset), ...options.slice(0, offset)];
}

function renderChoiceQuestion(question) {
  if (question.passage) {
    const passage = document.createElement("p");
    passage.className = "reading-passage";
    passage.textContent = question.passage;
    answersEl.appendChild(passage);
  }

  const grid = document.createElement("div");
  grid.className = "answer-grid";
  let selectedOption = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      selectedOption = option;
      grid.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      submit.disabled = false;
    });
    grid.appendChild(button);
  });

  answersEl.appendChild(grid);

  const submit = document.createElement("button");
  submit.type = "button";
  submit.textContent = "Antwort abgeben";
  submit.disabled = true;
  submit.addEventListener("click", () => answerQuestion(selectedOption, question));
  answersEl.appendChild(submit);
}

function renderQuestionVisual(visual) {
  const card = document.createElement("div");
  card.className = "visual-question";
  card.innerHTML = `
    <div class="visual-icon" aria-hidden="true">${visual.icon}</div>
    <div>
      <strong>${visual.title}</strong>
      <span>${visual.caption || ""}</span>
    </div>
  `;
  answersEl.appendChild(card);
}

function renderSelfCheckQuestion(question) {
  if (question.passage) {
    const passage = document.createElement("p");
    passage.className = "reading-passage";
    passage.textContent = question.passage;
    answersEl.appendChild(passage);
  }

  const card = document.createElement("div");
  card.className = "self-check-card";
  card.innerHTML = `
    <p>${question.task || "Bearbeiten Sie die Aufgabe und vergleichen Sie danach mit dem Beispiel."}</p>
    <div class="model-answer" hidden>
      <strong>Beispiel / Erwartung</strong>
      <span>${question.model || question.answer}</span>
    </div>
  `;

  const reveal = document.createElement("button");
  reveal.type = "button";
  reveal.className = "secondary";
  reveal.textContent = "Beispiel anzeigen";
  reveal.addEventListener("click", () => {
    card.querySelector(".model-answer").hidden = false;
  });

  const done = document.createElement("button");
  done.type = "button";
  done.textContent = "Geübt";
  done.addEventListener("click", () => answerQuestion(question.answer || "__SELF_OK__", question));

  const actions = document.createElement("div");
  actions.className = "self-check-actions";
  actions.append(reveal, done);
  card.appendChild(actions);
  answersEl.appendChild(card);
}

function renderClozeQuestion(question) {
  const form = document.createElement("form");
  form.className = "cloze-form";
  form.innerHTML = `
    <input id="cloze-input" autocomplete="off" aria-label="Antwort eingeben" />
    <button type="submit">Antwort prüfen</button>
  `;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    answerQuestion(input.value.trim(), question);
  });
  answersEl.appendChild(form);
  form.querySelector("input").focus();
}

function renderMatchQuestion(question) {
  const form = document.createElement("form");
  form.className = "match-form";
  const optionSet = question.optionSet || [...new Set(question.pairs.map((pair) => pair.answer))];

  question.pairs.forEach((pair, index) => {
    const row = document.createElement("label");
    row.className = "match-row";
    const options = optionSet
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("");
    row.innerHTML = `
      <span>${pair.term}</span>
      <select aria-label="Antwort für ${pair.term}" data-index="${index}">
        <option value="">Bitte wählen</option>
        ${options}
      </select>
    `;
    form.appendChild(row);
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Zuordnung prüfen";
  form.appendChild(submit);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = [...form.querySelectorAll("select")].map((select) => select.value);
    const isCorrect = question.pairs.every((pair, index) => values[index] === pair.answer);
    answerQuestion(isCorrect ? "__MATCH_OK__" : "__MATCH_WRONG__", question);
  });

  answersEl.appendChild(form);
}

function answerQuestion(value, question) {
  if (answered) return;

  const correct = isCorrectAnswer(value, question);

  answered = true;
  if (correct) score += 1;
  recordAttempt(question, correct, value);

  feedbackEl.innerHTML = correct
    ? `<strong>Richtig.</strong> ${question.hint}`
    : `<strong>Leider falsch.</strong> ${question.hint}`;

  scoreEl.textContent = score;
  nextButton.disabled = false;
  lockCurrentQuestion(question, value);
}

function lockCurrentQuestion(question, value) {
  answersEl.querySelectorAll("button, input, select").forEach((control) => {
    control.disabled = true;
  });

  if (question.type !== "choice" && question.type !== "reading" && question.type !== "listening") return;

  answersEl.querySelectorAll(".answer-grid button").forEach((button) => {
    if (button.textContent === value) {
      button.classList.add("selected", isCorrectAnswer(value, question) ? "correct" : "wrong");
    }

    if (isCorrectAnswer(button.textContent, question) && !isCorrectAnswer(value, question)) {
      button.classList.add("reveal");
    }
  });
}

function isCorrectAnswer(value, question) {
  const accepted = getAcceptedAnswers(question);
  const normalizedValue = normalizeAnswer(value);
  return accepted.some((answer) => normalizeAnswer(answer) === normalizedValue);
}

function getAcceptedAnswers(question) {
  if (Array.isArray(question.answers)) return question.answers;
  return [question.answer || "__MATCH_OK__"];
}

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[。.,!?！？]/g, "")
    .replace(/\s+/g, " ");
}

function getWaitingText(type) {
  const messages = {
    choice: "Wählen Sie die richtige Lösung.",
    cloze: "Schreiben Sie die passende Lösung.",
    spelling: "Schreiben Sie das Wort richtig.",
    match: "Ordnen Sie die passenden Ausdrücke zu.",
    reading: "Lesen Sie den Text und wählen Sie die richtige Antwort.",
    listening: "Lesen Sie das Hörskript wie eine Hörverstehensaufgabe und wählen Sie.",
    writing: "Schreiben Sie eine kurze Antwort und vergleichen Sie mit dem Beispiel.",
    speaking: "Sprechen Sie laut und vergleichen Sie Ihre Antwort mit dem Beispiel.",
  };

  return messages[type] || "Bearbeiten Sie die Aufgabe.";
}

function getExamSkillLabel(question) {
  const labels = {
    choice: "Sprachbausteine",
    cloze: "Schreiben",
    spelling: "Wortschatz",
    match: "Wortschatz",
    reading: "Lesen",
    listening: "Hören",
    writing: "Schreiben",
    speaking: "Sprechen",
  };

  return question.skill || labels[question.type] || "Prüfung";
}

function recordAttempt(question, correct, value) {
  const progress = loadProgress();
  const tags = getQuestionTags(question);
  const entry = {
    time: new Date().toISOString(),
    level: activeLesson.level,
    lesson: activeLesson.lessonCode,
    topic: activeLesson.topic,
    skill: getExamSkillLabel(question),
    tags,
    prompt: question.prompt,
    correct,
    answer: String(value),
  };

  progress.attempts.push(entry);
  progress.attempts = progress.attempts.slice(-500);
  saveProgress(progress);
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressStorageKey)) || { attempts: [] };
  } catch (error) {
    return { attempts: [] };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(progressStorageKey, JSON.stringify(progress));
  } catch (error) {
    // GitHub Pages has no database; if localStorage is blocked, the app simply skips tracking.
  }
}

function getQuestionTags(question) {
  if (question.tags?.length) return question.tags;

  const text = `${question.prompt || ""} ${question.translation || ""} ${question.question || ""}`.toLowerCase();
  const tags = [];
  if (/artikel|der|die|das/.test(text)) tags.push("Artikel");
  if (/perfekt|gegangen|gegessen|partizip/.test(text)) tags.push("Perfekt");
  if (/weil|dass|obwohl|nebensatz/.test(text)) tags.push("Nebensatz");
  if (/termin|reservierung|hotel|zimmer/.test(text)) tags.push("Alltag");
  if (/lesen|text|anzeige|e-mail|hinweis/.test(text) || question.type === "reading") tags.push("Lesen");
  if (question.type === "listening") tags.push("Hören");
  if (question.type === "writing") tags.push("Schreiben");
  if (question.type === "speaking") tags.push("Sprechen");
  return tags.length ? tags : ["Allgemein"];
}

function renderDashboard() {
  const attempts = loadProgress().attempts;
  const total = attempts.length;
  const wrong = attempts.filter((attempt) => !attempt.correct).length;
  const accuracy = total ? Math.round(((total - wrong) / total) * 100) : 0;

  dashboardSummaryEl.innerHTML = `
    <article>
      <strong>${total}</strong>
      <span>作答紀錄</span>
    </article>
    <article>
      <strong>${accuracy}%</strong>
      <span>平均正確率</span>
    </article>
    <article>
      <strong>${wrong}</strong>
      <span>需要補強</span>
    </article>
  `;

  const tagStats = buildTagStats(attempts);
  if (tagStats.length === 0) {
    knowledgeMapEl.innerHTML = `
      <article class="knowledge-card">
        <h3>尚未有作答紀錄</h3>
        <p>請先讓學生完成幾題測驗，這裡就會開始累積弱點地圖。</p>
      </article>
    `;
    return;
  }

  knowledgeMapEl.innerHTML = tagStats
    .map((item) => {
      const rate = Math.round((item.wrong / item.total) * 100);
      return `
        <article class="knowledge-card" data-risk="${rate >= 50 ? "high" : rate >= 25 ? "medium" : "low"}">
          <div>
            <h3>${item.tag}</h3>
            <p>${item.total} 題紀錄，錯 ${item.wrong} 題</p>
          </div>
          <strong>${rate}%</strong>
          <span class="risk-bar"><span style="width:${rate}%"></span></span>
          <small>${getKnowledgeAdvice(item.tag, rate)}</small>
        </article>
      `;
    })
    .join("");
}

function buildTagStats(attempts) {
  const map = new Map();

  attempts.forEach((attempt) => {
    attempt.tags.forEach((tag) => {
      const current = map.get(tag) || { tag, total: 0, wrong: 0 };
      current.total += 1;
      if (!attempt.correct) current.wrong += 1;
      map.set(tag, current);
    });
  });

  return [...map.values()].sort((a, b) => (b.wrong / b.total) - (a.wrong / a.total));
}

function getKnowledgeAdvice(tag, rate) {
  if (rate >= 50) return `建議下次課程優先補強 ${tag}，並加入更多分步練習。`;
  if (rate >= 25) return `${tag} 有零星錯誤，可以安排短複習或錯題回顧。`;
  return `${tag} 目前掌握度穩定，可維持一般複習。`;
}

function renderResult() {
  const percent = Math.round((score / activeLesson.questions.length) * 100);

  progressBar.style.width = "100%";
  metaEl.textContent = "Test beendet";
  textEl.textContent = `${score} / ${activeLesson.questions.length}`;
  translationEl.textContent = `Ergebnis: ${percent}%`;
  answersEl.innerHTML = "";
  feedbackEl.innerHTML = getResultMessage(percent);
  nextButton.disabled = true;
  nextButton.textContent = "Fertig";
}

function getResultMessage(percent) {
  if (percent >= 90) {
    return "<strong>Sehr gut.</strong> Sie können mit dem nächsten Test weitermachen.";
  }

  if (percent >= 60) {
    return "<strong>Gut.</strong> Wiederholen Sie die Beispiele und schwierigen Aufgaben.";
  }

  return "<strong>Weiter üben.</strong> Lesen Sie die Sätze noch einmal und starten Sie den Test erneut.";
}

function goNext() {
  if (!answered) return;

  currentIndex += 1;
  if (currentIndex >= activeLesson.questions.length) {
    renderResult();
    return;
  }

  renderQuestion();
}

homeTab.addEventListener("click", showHome);
learningTab.addEventListener("click", showLearningPath);
examTab.addEventListener("click", showExamGuide);
knowledgeTab.addEventListener("click", showKnowledgeIntro);
startButton.addEventListener("click", startQuiz);
resourceTab.addEventListener("click", showResources);
dashboardTab.addEventListener("click", showDashboard);
backToLessonButton.addEventListener("click", showLesson);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goNext);
resetProgressButton.addEventListener("click", () => {
  saveProgress({ attempts: [] });
  renderDashboard();
});
downloadVocabButton.addEventListener("click", () => {
  downloadCsv("deutsch-vokabeln.csv", formatVocabularyRows(getExpandedVocabularyRows()), [
    { key: "german", label: "德文" },
    { key: "partOfSpeech", label: "詞性" },
    { key: "chinese", label: "中文" },
  ]);
});
downloadVerbsButton.addEventListener("click", () => {
  const rows = verbRows.map((row) => {
    const principal = getVerbPrincipalRow(row);
    return {
      ...row,
      aux: principal.aux,
      participle: principal.participle,
      preteriteIch: principal.ich,
      preteriteDu: principal.du,
      preteriteThird: principal.third,
      preteritePlural: principal.plural,
    };
  });

  downloadCsv("deutsch-verben.csv", rows, [
    { key: "verb", label: "動詞" },
    { key: "chinese", label: "中文" },
    { key: "ich", label: "現在式 ich" },
    { key: "du", label: "現在式 du" },
    { key: "third", label: "現在式 er/sie/es" },
    { key: "plural", label: "現在式 wir/sie/Sie" },
    { key: "aux", label: "Perfekt 助動詞" },
    { key: "participle", label: "Partizip II" },
    { key: "preteriteIch", label: "Präteritum ich" },
    { key: "preteriteDu", label: "Präteritum du" },
    { key: "preteriteThird", label: "Präteritum er/sie/es" },
    { key: "preteritePlural", label: "Präteritum wir/sie/Sie" },
  ]);
});
downloadGrammarButton.addEventListener("click", () => {
  downloadCsv("deutsch-grammatik.csv", grammarOverviewRows, [
    { key: "level", label: "程度" },
    { key: "topic", label: "文法重點" },
    { key: "usage", label: "用法" },
    { key: "example", label: "例句" },
  ]);
});
resourcePageTabs.forEach((tab) => {
  tab.addEventListener("click", () => showResourcePage(tab.dataset.resourcePage));
});
vocabLevelTabsEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-vocab-level]");
  if (!button) return;
  activeVocabLevel = button.dataset.vocabLevel;
  renderResourceTables();
});

initializeLessons();
renderLesson();
renderResourceTables();
showHome();
