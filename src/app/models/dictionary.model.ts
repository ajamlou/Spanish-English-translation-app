export class Dictionary {
  constructor(public word: string, public translation: string) {}

  static fromJson(json: any) {
    return new Dictionary(json.word, json.translation);
  }
}
