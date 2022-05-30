export default class PasswordService {
    static generate (options) {
        let {length , charsets} = options
        let charset = charsets.join('')
        let retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    }
   
    static restore (collage) {
      // ЛОГИКА ВОССТАНОВЛЕНИЯ  КОЛЛАЖА
    }
   
    static duplicate (collage, changeUrl = true) {
      // ЛОГИКА ДУБЛИРОВАНИЯ КОЛЛАЖА
    }
  }