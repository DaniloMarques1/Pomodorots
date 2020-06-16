class Helper {
  static padLeft(str: string): string {
    if (str.length === 1)
      return `0${str}`;
    else if (str.length < 1)
      return `00`;

    return str;
  }
}

export default Helper;
