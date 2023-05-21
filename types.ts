// boolean
const isOpen: boolean = true

// string
const message: string = `foo ${isOpen}`

// number (int, float, hex)
const total: number = 0xff0

// array
const items: string[] = ["foo", "bar"]
const values: Array<number> = [1, 2, 3]

// tuple
const title: [number, string] = [1, "foo"]

// enum
enum Colors {
    white = "#fff",
    black = "#000"
}

// any
let coisa: any;

// void

// null | undefined

// never
function never(): never {
    throw new Error("error")
}

// object
const cart: object = {
    key: "fi"
}

let message2 = "mensaegem definida"

window.addEventListener("click", (e) => {
    console.log(e.target)
})
