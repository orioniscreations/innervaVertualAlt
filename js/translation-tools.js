var enButton = document.getElementById('en-btn')
var frButton = document.getElementById('fr-btn')

var i18n = domI18n({
    selector: '[data-translatable]',
    separator: ' // ',
    languages: ['en', 'fr'],
    defaultLanguage: 'en'
})

enButton.onclick = function () {
    i18n.changeLanguage('en')
}
frButton.onclick = function () {
    i18n.changeLanguage('fr')
}