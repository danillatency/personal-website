for (let type in mongodb.patterns)
    for (let family in mongodb.patterns[type])
        for (let pattern of mongodb.patterns[type][family]) {
            let elem = document.createElement("div")
            elem.classList.add("patterns-box__pattern")
            let sharedElements = [
                document.createElement("p"),
                document.createElement("div"),
                document.createElement("p")
            ]
            sharedElements[0].classList.add("self-align-left")
            sharedElements[0].classList.add("main-font")
            sharedElements[0].innerHTML = `<span class="bold">${pattern.name} —</span>\n${pattern.description}`
            sharedElements[1].classList.add("line_mini")
            sharedElements[2].classList.add("self-align-left")
            sharedElements[2].classList.add("main-font")
            sharedElements[2].innerHTML = `<span class="bold">Family: </span> ${family}`
            let margin = document.createElement("div")
            margin.classList.add("vertical-space-50")
            if (type == "useful") {
                document.querySelector("#useful").appendChild(elem)
                if (pattern.id != 10)
                    document.querySelector("#useful").appendChild(margin)
            } else {
                document.querySelector("#useless").appendChild(elem)
                if (pattern.id != 23)
                    document.querySelector("#useless").appendChild(margin)
            }
            for (let i = 0; i < 3; i++)
                elem.appendChild(sharedElements[i])
            if ("reason" in pattern) {
                let stick = document.createElement("div")
                stick.classList.add("line_mini")
                let message = document.createElement("p")
                message.classList.add("self-align-left")
                message.classList.add("main-font")
                message.innerHTML = `<span class="bold">Reason:</span> ${pattern.reason}`
                elem.appendChild(stick)
                elem.appendChild(message)
            }
            if ("similarities" in pattern) {
                let pattenButton = document.createElement("div")
                pattenButton.classList.add("patterns-box__pattern__button")
                pattenButton.innerHTML = `<p>Same as</p>
                    <img class="icon-drop animated icon-drop_undropped" src="images/DropBlack.svg" alt="Drop">`
                elem.appendChild(pattenButton)
                let wrapper = document.createElement("div")
                wrapper.classList.add("anicropper")
                wrapper.classList.add("animated")
                wrapper.classList.add("anicropper_zero")
                elem.appendChild(wrapper)
                let simpleList = document.createElement("div")
                simpleList.classList.add("animated")
                simpleList.classList.add("slide")
                wrapper.appendChild(simpleList)
                for (let similarity_id of pattern.similarities) {
                    simplifiedPattern = makeSimplifiedPatternById(similarity_id)
                    simpleList.appendChild(simplifiedPattern)
                }
            }
        }
function makeSimplifiedPatternById(similarity_id) {
    for (let type in mongodb.patterns)
        for (let family in mongodb.patterns[type])
            for (let pattern of mongodb.patterns[type][family])
                if (pattern.id == similarity_id) {
                    let simplifiedPattern = document.createElement("div")
                    simplifiedPattern.classList.add("patterns-box__pattern")
                    simplifiedPattern.innerHTML = `<p class="self-align-left main-font">
                                <span class="bold">${pattern.name} —</span>
                                ${pattern.description}
                            </p>`
                    return simplifiedPattern
                }
}
for (let [i, elem] of document.querySelectorAll(".headings-font").entries())
    elem.parentElement.children[1].addEventListener("click", () => {
        elem.parentElement.children[1].children[0].classList.toggle("icon-drop_undropped")
        if (i == 0)
            document.querySelector("#first").classList.toggle("anicropper_zero")
        else 
            document.querySelector("#second").classList.toggle("anicropper_zero")
        document.querySelectorAll(".patterns-box")[i].classList.toggle("slide")
        setTimeout(() => window.dispatchEvent(new Event("resize")), 500)
    })
for (let [i, elem] of document.querySelectorAll(".patterns-box__pattern__button").entries())
    elem.addEventListener("click", () => {
        elem.children[1].classList.toggle("icon-drop_undropped")
        elem.parentElement.children[elem.parentElement.children.length - 1].classList.toggle("anicropper_zero")
        elem.parentElement.children[elem.parentElement.children.length - 1].children[0].classList.toggle("slide")
        setTimeout(() => window.dispatchEvent(new Event("resize")), 500)
    })

window.addEventListener("resize", () => {
    for (let elem of document.querySelectorAll(".anicropper"))
        elem.style = `height: ${elem.children[0].clientHeight}px;`
})

setTimeout(() => window.dispatchEvent(new Event("resize")), 500)
