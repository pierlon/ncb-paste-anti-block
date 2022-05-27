const input = document.getElementById('AuthenticationFG.ACCESS_CODE')

if (input) {
    input.addEventListener('paste', (e) => {
        e.stopImmediatePropagation()
    })
}
