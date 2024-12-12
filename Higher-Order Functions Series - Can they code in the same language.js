function isSameLanguage(list) {
    return list.every(el => el.language === list[0].language);
}