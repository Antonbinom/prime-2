export const machineCranSettings = {
  payment: {
    title: "Оплата",
    inputs: [
      {
        id: "p000",
        name: "game price",
        label: "Цена игры",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
      {
        id: "p001",
        name: "impulse price 1",
        label: "Цена импульса (Вход 1)",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
      {
        id: "p002",
        name: "impulse price 2",
        label: "Цена импульса (Вход 2)",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
      {
        id: "p012",
        name: "terminal amount",
        label: "Сумма на терминале (MDB)",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
    ],
    isLoading: false
  },
  compression: {
    title: "Сила сжатия клешни",
    inputs: [
      {
        id: "p003",
        name: "low position",
        label: "В нижнем положении",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
      {
        id: "p004",
        name: "top position",
        label: "В верхнем положении",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
      {
        id: "p005",
        name: "low position prize",
        label: "В нижнем положении (призовая)",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
      {
        id: "p006",
        name: "top position prize",
        label: "В верхнем положении (призовая)",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "дробь",
      },
    ],
    isLoading: false
  },
  movement: {
    title: "Движение каретки/клешни",
    inputs: [
      // slider input min 0 max 100 %
      // какие min и max?
      {
        id: "p020",
        name: "speedX",
        label: "Скорость 'влево-вправо'",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
        suffix: ' %'
      },
      {
        id: "p021",
        name: "speedZ",
        label: "Скорость 'вперед-назад'",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
        suffix: ' %'
      },
      {
        id: "p022",
        name: "speedY",
        label: "Скорость 'подъем-опускание'",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
        suffix: ' %'
      },
    ],
    isLoading: false
  },
  game: {
    title: "Игра",
    inputs: [
      {
        id: "p007",
        name: "win-win mode",
        label: "Беспроигрышный режим",
        type: "Boolean",
        tooltip: 'подсказка', value: true,
      },
      {
        id: "p008",
        name: "games before prize",
        label: "Кол-во игр до призовой",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
      {
        id: "p009",
        name: "game time",
        label: "Время игры, сек",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
      {
        id: "p010",
        name: "from payment to game",
        label: "Время от оплаты до игры, сек",
        type: "Float",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
    ],
    isLoading: false
  },
  general: {
    title: "Настройки общие",
    inputs: [
      {
        // slide?
        // проценты?
        // орграничения по процентам
        id: "p011",
        name: "prize angle",
        label: "Угол отсека выдачи призов",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
      {
        // проценты или dB
        // slider min 0 max 100 %
        id: "p018",
        name: "player volume",
        label: "Громкость плеера",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
    ],
    isLoading: false
  },
  network: {
    title: "Интернет",
    inputs: [
      {
        // toggler I/O
        id: "p030",
        name: "connection device",
        label: "Модем=0/Внешний WiFi=1",
        type: "Boolean",
        tooltip: 'подсказка', value: false,
        placeholder: "целое",
      },
      {
        id: "p031",
        name: "connection name",
        label: "Имя внешней точки",
        type: "String",
        tooltip: 'подсказка', value: "",
        placeholder: "строка",
        isRequired: true
      },
      {
        id: "p032",
        name: "connection password",
        label: "Пароль внешней точки",
        type: "Password",
        tooltip: 'подсказка', value: "",
        placeholder: "строка",
        isRequired: true
      },
    ],
    isLoading: false,
    isInvalid: false
  },
  power: {
    title: "Контроль питания",
    inputs: [
      {
        id: "p040",
        name: "5V",
        label: "Источник питания '+5', В",
        type: "Float",
        tooltip: 'подсказка', value: null,
        readonly: true
      },
      {
        id: "p041",
        name: "12V",
        label: "Источник питания '+12', В",
        type: "Float",
        tooltip: 'подсказка', value: null,
        readonly: true
      },
      {
        id: "p042",
        name: "12V pulse",
        label: "Источник питания 'Пульс +12', В",
        type: "Float",
        tooltip: 'подсказка', value: null,
        readonly: true
      },
      {
        id: "p043",
        name: "24V",
        label: "Источник питания '+24', В",
        type: "Float",
        tooltip: 'подсказка', value: null,
        readonly: true
      },
      {
        id: "p044",
        name: "48V",
        label: "Источник питания '+48', В",
        type: "Float",
        tooltip: 'подсказка', value: null,
        readonly: true
      },
      {
        id: "p045",
        name: "engine",
        label: "Источник питания 'Двигатели', В",
        type: "Float",
        tooltip: 'подсказка', value: null,
        readonly: true
      },
    ],
    isLoading: false
  },
  protection: {
    title: "Защита механизмов",
    inputs: [
      {
        id: "p025",
        name: "timeoutX",
        label: "Таймаут 'влево-вправо', мс",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
      {
        id: "p026",
        name: "timeoutZ",
        label: "Таймаут 'вперед-назад', мс",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
      {
        id: "p027",
        name: "timeoutY",
        label: "Таймаут 'подъем-опускание', мс",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
    ],
    isLoading: false
  },
  defaultSettings: {
    title: "Настройки по умолчанию",
    inputs: [
      {
        // кнопка для сброса заводских настроек
        id: "p050",
        name: "reset",
        label: "Сброс к заводским настройкам",
        type: "Int",
        tooltip: 'подсказка', value: null,
        placeholder: "целое",
      },
    ],
    isLoading: false
  },
};