const REGEX_VAULT = {
    codeRegex: /^[A-Z0-9.!?:;()\- \t]{7,8}$/,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobileRegex: /^\+?[0-9]{7,15}$/,
    messageRegex: /^[a-zA-ZĞÜŞİÖÇığüşöç0-9._!?:;() \t]{5,255}$/,
    fullnameRegex: /^[a-zA-ZĞÜŞİÖÇığüşöç0-9._!?:;() \t]{5,255}$/,
}

export { REGEX_VAULT }
