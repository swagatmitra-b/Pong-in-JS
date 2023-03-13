export default class Control {
    constructor(batLeft, batRight) {
        document.addEventListener("keydown", (event) => {
            if (event.key == "ArrowUp") {
                batRight.moveUp()
            }
            else if (event.key == "ArrowDown") {
                batRight.moveDown()
            }
            else if (event.key == "w") {
                batLeft.moveUp()
            }
            else if (event.key == "s") {
                batLeft.moveDown()
            }
        })

        document.addEventListener("keyup", (event) => {
            if (event.key == "ArrowUp") {
                batRight.stop()
            }
            else if (event.key == "ArrowDown") {
                batRight.stop()
            }
            else if (event.key == "w") {
                batLeft.stop()
            }
            else if (event.key == "s") {
                batLeft.stop()
            }
        })
    }
}