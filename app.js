const screen = document.getElementById('screen')
    const btn = document.getElementById('btn')
    const RandomColor = function () {
        const hex = '0123456789ABCDF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color
    };
    btn.addEventListener("click", () => {
        screen.style.backgroundColor = RandomColor()
    })