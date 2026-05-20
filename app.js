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
        passage: "Sehr geehrte Frau Keller, ich kann am Montag leider nicht kommen, weil mein Zug Verspätung hat. Kann ich am Dienstag um 10 Uhr kommen? Mit freundlichen Grüßen, Chen",
        question: "Chen 為什麼星期一不能去？",
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

const germanExamPools = createGermanExamPools();

let activeLesson = lessons[0];
let currentIndex = 0;
let score = 0;
let answered = false;

initializeLessons();

const lessonListEl = document.querySelector("#lesson-list");
const levelTextEl = document.querySelector("#level-text");
const lessonBadgeEl = document.querySelector("#lesson-badge");
const lessonTitleEl = document.querySelector("#lesson-title");
const lessonDescriptionEl = document.querySelector("#lesson-description");
const lessonCardsEl = document.querySelector("#lesson-cards");
const dailyPhrasesEl = document.querySelector("#daily-phrases");
const sourceNoteEl = document.querySelector("#source-note");
const startButton = document.querySelector("#start-quiz");
const resourceTab = document.querySelector("#resource-tab");
const backToLessonButton = document.querySelector("#back-to-lesson");
const quizPanel = document.querySelector("#quiz-panel");
const lessonPanel = document.querySelector("#lesson-panel");
const resourcesPanel = document.querySelector("#resources-panel");
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
const vocabTableEl = document.querySelector("#vocab-table");
const verbTableEl = document.querySelector("#verb-table");
const downloadVocabButton = document.querySelector("#download-vocab");
const downloadVerbsButton = document.querySelector("#download-verbs");

function renderLessonList() {
  lessonListEl.innerHTML = "";
  resourceTab.dataset.active = "false";

  levelOrder.forEach((level) => {
    const levelLessons = lessons.filter((lesson) => lesson.level === level);
    if (levelLessons.length === 0) return;

    const courseGroup = document.createElement("section");
    courseGroup.className = "lesson-group";
    courseGroup.innerHTML = `<h3>${level}課程</h3>`;

    levelLessons
      .filter((lesson) => !lesson.isGeneratedTest)
      .forEach((lesson) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-tab";
        button.dataset.active = lesson.id === activeLesson.id && !lessonPanel.hidden;
        button.innerHTML = `<span>${lesson.level}</span><strong>${lesson.shortTitle}</strong><small>${lesson.description}</small>`;
        button.addEventListener("click", () => selectLesson(lesson.id));
        courseGroup.appendChild(button);
      });

    lessonListEl.appendChild(courseGroup);

    const testGroup = document.createElement("section");
    testGroup.className = "lesson-group";
    testGroup.innerHTML = `<h3>${level}測驗</h3>`;

    [...levelLessons]
      .sort((a, b) => testStages.indexOf(a.stage) - testStages.indexOf(b.stage))
      .forEach((lesson) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lesson-tab";
      button.dataset.active = lesson.id === activeLesson.id && !quizPanel.hidden;
      button.innerHTML = `<span>${lesson.level}</span><strong>${lesson.stage}綜合測驗</strong><small>20 Fragen: Lesen, Wortschatz, Grammatik und Sprachbausteine.</small>`;
      button.addEventListener("click", () => selectQuiz(lesson.id));
      testGroup.appendChild(button);
    });

    lessonListEl.appendChild(testGroup);
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
  lessonBadgeEl.textContent = activeLesson.level;
  lessonTitleEl.textContent = `${activeLesson.stage}測驗：${activeLesson.shortTitle}`;
  lessonDescriptionEl.textContent = activeLesson.description;
  sourceNoteEl.textContent = activeLesson.sourceNote;
  startButton.textContent = `開始 ${activeLesson.level} ${activeLesson.stage}測驗`;

  lessonCardsEl.innerHTML = "";
  activeLesson.cards.forEach((card) => {
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

  dailyPhrasesEl.innerHTML = dailyPhraseBanks[activeLesson.level]
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
  quizPanel.hidden = true;
  resourcesPanel.hidden = true;
  lessonPanel.hidden = false;
  resourceTab.dataset.active = "false";
  renderLesson();
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  lessonPanel.hidden = true;
  resourcesPanel.hidden = true;
  quizPanel.hidden = false;
  resourceTab.dataset.active = "false";
  quizTitleEl.textContent = `${activeLesson.level} Prüfung - ${stageGermanLabels[activeLesson.stage]}`;
  renderLessonList();
  renderQuestion();
}

function showResources() {
  lessonPanel.hidden = true;
  quizPanel.hidden = true;
  resourcesPanel.hidden = false;
  resourceTab.dataset.active = "true";
  renderLessonList();
  resourceTab.dataset.active = "true";
  levelTextEl.textContent = "常用單字與動詞：可下載表格複習";
  renderResourceTables();
}

function renderResourceTables() {
  vocabTableEl.innerHTML = vocabularyRows
    .map((row) => `
      <tr>
        <td>${row.type}</td>
        <td>${row.german}</td>
        <td>${row.chinese}</td>
      </tr>
    `)
    .join("");

  verbTableEl.innerHTML = verbRows
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

function initializeLessons() {
  ensureStageCoverage();

  lessons.forEach((lesson, index) => {
    lesson.stage = lessonStages[lesson.id] || testStages[index % testStages.length];
    lesson.badge = lesson.level;
    lesson.shortTitle = lesson.title;
    lesson.questions = buildLessonQuestions(lesson, index);
  });
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
  const pool = germanExamPools[lesson.level] || supplementalQuestionPools[lesson.level] || [];
  const rotatedPool = rotateArray(pool, index * 5);
  return rotatedPool.slice(0, 20);
}

function rotateArray(items, offset) {
  if (items.length === 0) return [];
  const start = offset % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}

function renderQuestion() {
  const question = activeLesson.questions[currentIndex];
  answered = false;

  scoreEl.textContent = score;
  totalEl.textContent = activeLesson.questions.length;
  progressBar.style.width = `${(currentIndex / activeLesson.questions.length) * 100}%`;
  metaEl.textContent = `Aufgabe ${currentIndex + 1} von ${activeLesson.questions.length}`;
  textEl.textContent = question.prompt;
  translationEl.textContent = question.translation || question.question || "";
  feedbackEl.textContent = getWaitingText(question.type);
  nextButton.disabled = true;
  nextButton.textContent = currentIndex === activeLesson.questions.length - 1 ? "Ergebnis anzeigen" : "Nächste Aufgabe";

  answersEl.innerHTML = "";

  if (question.type === "choice" || question.type === "reading") {
    renderChoiceQuestion(question);
  }

  if (question.type === "cloze") {
    renderClozeQuestion(question);
  }

  if (question.type === "match") {
    renderMatchQuestion(question);
  }
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

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(option, question));
    grid.appendChild(button);
  });

  answersEl.appendChild(grid);
}

function renderClozeQuestion(question) {
  const form = document.createElement("form");
  form.className = "cloze-form";
  form.innerHTML = `
    <input id="cloze-input" autocomplete="off" aria-label="填入答案" />
    <button type="submit">送出</button>
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
  const optionSet = [...new Set(question.pairs.map((pair) => pair.answer))];

  question.pairs.forEach((pair, index) => {
    const row = document.createElement("label");
    row.className = "match-row";
    const options = optionSet
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("");
    row.innerHTML = `
      <span>${pair.term}</span>
      <select aria-label="${pair.term} 的答案" data-index="${index}">
        <option value="">選擇</option>
        ${options}
      </select>
    `;
    form.appendChild(row);
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "送出配對";
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

  const normalizedValue = value.toLowerCase();
  const normalizedAnswer = String(question.answer || "__MATCH_OK__").toLowerCase();
  const correct = normalizedValue === normalizedAnswer;

  answered = true;
  if (correct) score += 1;

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

  if (question.type !== "choice" && question.type !== "reading") return;

  answersEl.querySelectorAll(".answer-grid button").forEach((button) => {
    if (button.textContent === value) {
      button.classList.add("selected", value === question.answer ? "correct" : "wrong");
    }

    if (button.textContent === question.answer && value !== question.answer) {
      button.classList.add("reveal");
    }
  });
}

function getWaitingText(type) {
  const messages = {
    choice: "Wählen Sie die richtige Lösung.",
    cloze: "Schreiben Sie die passende Lösung.",
    match: "Ordnen Sie die passenden Ausdrücke zu.",
    reading: "Lesen Sie den Text und wählen Sie die richtige Antwort.",
  };

  return messages[type] || "Bearbeiten Sie die Aufgabe.";
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

startButton.addEventListener("click", startQuiz);
resourceTab.addEventListener("click", showResources);
backToLessonButton.addEventListener("click", showLesson);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goNext);
downloadVocabButton.addEventListener("click", () => {
  downloadCsv("deutsch-vokabeln.csv", vocabularyRows, [
    { key: "type", label: "類型" },
    { key: "german", label: "德文" },
    { key: "chinese", label: "中文" },
  ]);
});
downloadVerbsButton.addEventListener("click", () => {
  downloadCsv("deutsch-verben.csv", verbRows, [
    { key: "verb", label: "動詞" },
    { key: "chinese", label: "中文" },
    { key: "ich", label: "ich" },
    { key: "du", label: "du" },
    { key: "third", label: "er/sie/es" },
    { key: "plural", label: "wir/sie/Sie" },
  ]);
});

renderLesson();
renderResourceTables();
