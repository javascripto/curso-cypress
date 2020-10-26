function translate({ sourceLanguage, targetLanguage, text, expectedResult }) {
  const enter = '{enter}',
    input_text = '#source',
    btn_lang_source = '.sl-more',
    btn_lang_target = '.tl-more',
    input_lang_source = '#sl_list-search-box',
    input_lang_target = '#tl_list-search-box',
    input_result = '.result-shield-container';

  cy.visit('https://translate.google.com/')
    .get(btn_lang_source).click()
    .get(input_lang_source).type(sourceLanguage + enter)

  cy.get(btn_lang_target).click()
    .get(input_lang_target).type(targetLanguage + enter)

  cy.get(input_text).type(text)
    .get(input_result).then($el => $el.text()).should('be.equal', expectedResult)
    .get(input_result).then($el => $el.text()).then(console.log)
}

describe('Google Translator', () => {
  it('should translate text', () => {
    translate({
      text: 'teste de tradução',
      sourceLanguage: 'portuguese',
      targetLanguage: 'english',
      expectedResult: 'translation test',
    });
  });

  it('should translate another text', () => {
    translate({
      sourceLanguage: 'portuguese',
      targetLanguage: 'spanish',
      text: 'Bom dia',
      expectedResult: 'Buen día',
    })
  })

  it('should translate another text', () => {
    translate({
      sourceLanguage: 'portuguese',
      targetLanguage: 'german',
      text: 'Bom dia',
      expectedResult: 'Guten Morgen',
    })
  })

  it.only('should translate another text', () => {
    translate({
      sourceLanguage: 'english',
      targetLanguage: 'portuguese',
      text: 'hello my friends, how are you?',
      expectedResult: 'olá meus amigos, tudo bem?',
    })
  })
});
