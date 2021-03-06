import templateString from './core-hello.html';
import styleString from './core-hello.css';

// Translation map for "Hello World" message in 68 languages
const helloTranslations = {
  af: 'Hello Wêreld',
  sq: 'Përshendetje Botë',
  am: 'ሰላም ልዑል',
  hy: 'Բարեւ աշխարհ',
  eu: 'Kaixo Mundua',
  be: 'Прывітанне Сусвет',
  bn: 'ওহে বিশ্ব',
  bg: 'Здравей свят',
  ca: 'Hola món',
  ny: 'Moni Dziko Lapansi',
  zh: '你好世界',
  hr: 'Pozdrav svijete',
  cs: 'Ahoj světe',
  da: 'Hej Verden',
  nl: 'Hallo Wereld',
  en: 'Hello World',
  et: 'Tere maailm',
  fi: 'Hei maailma',
  fr: 'Bonjour monde',
  ka: 'გამარჯობა მსოფლიო',
  de: 'Hallo Welt',
  el: 'Γειά σου Κόσμε',
  ha: 'Sannu Duniya',
  he: 'שלום עולם',
  hi: 'नमस्ते दुनिया',
  hu: 'Helló Világ',
  is: 'Halló heimur',
  ig: 'Ndewo Ụwa',
  id: 'Halo Dunia',
  it: 'Ciao mondo',
  jp: 'こんにちは世界',
  kk: 'Сәлем Әлем',
  km: 'សួស្តី​ពិភពលោក',
  ky: 'Салам дүйнө',
  lo: 'ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ',
  lv: 'Sveika pasaule',
  lt: 'Labas pasauli',
  lb: 'Moien Welt',
  mk: 'Здраво свету',
  ms: 'Hai dunia',
  ml: 'ഹലോ വേൾഡ്',
  mn: 'Сайн уу дэлхий',
  ne: 'नमस्कार संसार',
  nb: 'Hei Verden',
  fa: 'سلام دنیا',
  pl: 'Witaj świecie',
  pt: 'Olá Mundo',
  pa: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
  ro: 'Salut Lume',
  ru: 'Привет мир',
  sr: 'Здраво Свете',
  si: 'හෙලෝ වර්ල්ඩ්',
  sl: 'Pozdravljen svet',
  es: 'Hola Mundo',
  su: 'Halo Dunya',
  sw: 'Salamu Dunia',
  sv: 'Hej världen',
  tg: 'Салом Ҷаҳон',
  th: 'สวัสดีชาวโลก',
  tk: 'Selam Dünya',
  uk: 'Привіт Світ',
  uz: 'Salom Dunyo',
  vi: 'Chào thế giới',
  cy: 'Helo Byd',
  xh: 'Molo Lizwe',
  yi: 'העלא וועלט',
  yo: 'Mo ki O Ile Aiye',
  zu: 'Sawubona Mhlab',
};

// Create template element
const template = document.createElement('template');
template.innerHTML = templateString;

// Create style element
const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * A hello messsage with a name
 */
class CoreHello extends HTMLElement {
  /**
   * The list of attribute to observe
   */
  static get observedAttributes() {
    return ['rainbow', 'lang'];
  }

  /**
   * Initialize the shadowDOM
   */
  constructor() {
    super();

    // Attach element template to shadow root
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.appendChild(style.cloneNode(true));

    // Get message p element and hello span element
    this._message = shadowRoot.getElementById('message');
    this._hello = shadowRoot.getElementById('hello');
  }

  /**
   * Language of the hello message
   */
  get lang() {
    return this.getAttribute('lang');
  }

  /**
   * If the message has a shadow effect
   */
  get rainbow() {
    return this.hasAttribute('rainbow');
  }

  set lang(val) {
    this._hello.textContent = helloTranslations[val] + ' ';
  }

  set rainbow(val) {
    if (val) {
      this._message.classList.add('rainbow');
    } else {
      this._message.classList.remove('rainbow');
    }
  }

  /**
   * Handle attribute changes
   * @param {string} name name of attribute that changed
   * @param {*} oldValue original value
   * @param {*} newValue updated value
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'rainbow': {
        this.rainbow = newValue == '';
        break;
      }
      case 'lang': {
        const language = this.getAttribute('lang');
        if (helloTranslations[language] != undefined) {
          this.lang = language;
        }
      }
    }
  }
}

// Register the web component
if (!customElements.get('core-hello')) {
  customElements.define('core-hello', CoreHello);
}
