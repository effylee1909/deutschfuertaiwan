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
const presentVerbTableEl = document.querySelector("#present-verb-table");
const perfectVerbTableEl = document.querySelector("#perfect-verb-table");
const preteriteVerbTableEl = document.querySelector("#preterite-verb-table");
const grammarOverviewTableEl = document.querySelector("#grammar-overview-table");
const downloadVocabButton = document.querySelector("#download-vocab");
const downloadVerbsButton = document.querySelector("#download-verbs");
const downloadGrammarButton = document.querySelector("#download-grammar");
const resourcePageTabs = document.querySelectorAll(".resource-page-tab");
const resourcePagePanels = document.querySelectorAll("[data-resource-page-panel]");
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
    levelGroup.open = activeLesson.level === level || level === "A1";
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

  vocabLevelTablesEl.innerHTML = levelOrder
    .map((level) => `
      <section>
        <h4>${level} 單字表</h4>
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
              ${vocabByLevel[level]
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
    `)
    .join("");

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
    名詞: "N.",
    動詞: "V.",
    形容詞: "Adj.",
    "副詞/連接詞": "Adv./Konj.",
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

function groupVocabularyByLevel() {
  return vocabularyRows.reduce((groups, row, index) => {
    const level = row.level || inferVocabularyLevel(row, index);
    groups[level].push(row);
    return groups;
  }, { A1: [], A2: [], B1: [], B2: [] });
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
    if (lesson.level === "A1" && lesson.textbook?.storyTitleZh) {
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

function createTextbookContent(level, lessonNumber, topicData) {
  const normalizedTopic = normalizeTopicData(topicData);
  const plan = level === "A1" ? a1LessonPlans[lessonNumber - 1] : null;
  const vocab = plan ? plan.vocab : createLessonVocabulary(level, lessonNumber, normalizedTopic);
  const grammar = createLessonGrammar(level, lessonNumber, normalizedTopic);
  return {
    title: plan ? `${level} L${lessonNumber}: ${plan.titleZh} · ${plan.titleDe}` : `${level} L${lessonNumber}: ${normalizedTopic.zh} · ${normalizedTopic.de}`,
    text: plan ? `${plan.text} ${a1LessonDetails[lessonNumber - 1]}` : createReadingText(level, normalizedTopic.de, lessonNumber, vocab),
    focus: plan ? plan.focusZh : normalizedTopic.zh,
    storyTitleZh: plan?.titleZh,
    storyTitleDe: plan?.titleDe,
    vocab,
    extraVocab: plan ? plan.extraVocab : [],
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

  lessonVocabularyEl.innerHTML = content.vocab
    .map(([german, chinese, plural]) => `
      <div>
        <strong>${german}</strong>
        ${plural ? `<small>Plural: ${plural}</small>` : ""}
        <span>${chinese}</span>
      </div>
    `)
    .join("");

  lessonExtraVocabularyEl.innerHTML = (content.extraVocab?.length ? content.extraVocab : [["-", "本課暫無課外單字", ""]])
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
  downloadCsv("deutsch-vokabeln.csv", formatVocabularyRows(vocabularyRows), [
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

initializeLessons();
renderLesson();
renderResourceTables();
showHome();
