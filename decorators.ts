// @Component
// @Selector
// @useState('hello')

// Factory
function Logger(prefix: string) {
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}

@Logger("awesome")
class Foo {}

// Class decorator

function setAPIVersion(apiVersion: string) {
    return (target) => {
        return class extends target {
            version = apiVersion;
        };
    };
}

// decorator - anotar a versão da API
@setAPIVersion("2.0.0")
class API {}

console.log(new API());

// Property decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value: string) => {
            if (value.length < length) {
                console.log(`Erro: você não pode criar ${key} com tamanho menor que ${length}.`);
            } else {
                val = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}

class Movie {
    // validação - se for menor que 5 - erro
    @minLength(50)
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const movie = new Movie("Interstellar");
console.log(movie.title);

// Method decorator

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    // esperar um tempo e aí vai rodar o método (ms)
    @delay(2000)
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();

// Parameter decorator
// Accessor decorator
