class TranslateEnglish {
  constructor() {
    this.list = {}
  }
  set(key, value) {
    this.list[key] = value
  }
  get(key) {
    return this.list[key]
  }
}

window.TranslateEnglish = TranslateEnglish