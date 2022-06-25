const form = document.querySelector('form[name="AuthenticationFG"]')

if (form) {
    const inputName = document.getElementById('AuthenticationFG.USER_PRINCIPAL')
    const inputPass = document.getElementById('AuthenticationFG.ACCESS_CODE')

    if (inputName && !inputPass) {
        inputName.addEventListener('paste', (e) => {
            e.stopImmediatePropagation()
        })

        inputName.setAttribute('autocomplete', 'username')
    }

    if (inputPass) {
        inputPass.addEventListener('paste', (e) => {
            e.stopImmediatePropagation()
        })

        inputPass.setAttribute('autocomplete', 'password')
    }
    
    const inputDummies = Array.from(document.querySelectorAll('input:not([required])[type="password"]'))
    inputDummies.forEach(dummy => dummy.setAttribute('type', 'hidden'))
}
