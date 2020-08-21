class Helper {
  static padLeft(str: string): string {
    if (str.length === 1)
      return `0${str}`;
    else if (str.length < 1)
      return `00`;

    return str;
  }

  static formatTime(minute: string, second: string): string {
    return `${Helper.padLeft(minute.toString())}:${Helper.padLeft(second.toString())}`;
  }

}

export default Helper;
