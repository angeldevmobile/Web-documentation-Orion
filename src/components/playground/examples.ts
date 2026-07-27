export interface Example {
  label: string;
  code: string;
}

export const EXAMPLES: Example[] = [
  {
    label: "Hello World",
    code: `-- ¡Bienvenido a Orion!
show "Hola, mundo!"
show "Orion " + str(2025)
`,
  },
  {
    label: "Variables y tipos",
    code: `-- Variables y tipos básicos
nombre: string = "Orion"
version: int = 1
activo: bool = yes
pi: float = 3.14

show nombre
show version
show activo
show pi

-- Interpolación de strings
show "Lenguaje: \${nombre} v\${version}"
`,
  },
  {
    label: "Funciones y recursión",
    code: `fn factorial(n: int) -> int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n - 1)
}

fn fibonacci(n: int) -> int {
    if n <= 1 { return n }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

show "5! = " + str(factorial(5))
show "10! = " + str(factorial(10))

show "Fibonacci:"
for i in 0..10 {
    show fibonacci(i)
}
`,
  },
  {
    label: "Shapes (OOP)",
    code: `shape Animal {
    nombre: string = ""
    sonido: string = ""

    on_create(nombre: string, sonido: string) {
        me.nombre = nombre
        me.sonido = sonido
    }

    act hablar() {
        show me.nombre + " dice: " + me.sonido
    }

    act presentarse() {
        show "Soy " + me.nombre
    }
}

perro = Animal("Rex", "¡Guau!")
gato = Animal("Michi", "¡Miau!")

perro.hablar()
gato.hablar()
perro.presentarse()
`,
  },
  {
    label: "Match expressions",
    code: `-- match compara por igualdad. No hay comodín "_": para la rama
-- por defecto se repite la variable, que siempre coincide consigo misma.
fn describir_dia(dia: string) -> string {
    match dia {
        "lunes"   { return "Inicio de semana" }
        "viernes" { return "¡Por fin viernes!" }
        "sabado"  { return "Fin de semana" }
        "domingo" { return "Descanso" }
        dia       { return "Día normal" }
    }
}

fn clasificar(n: int) -> string {
    match n {
        0 { return "cero" }
        1 { return "uno" }
        n { return "otro" }
    }
}

show describir_dia("lunes")
show describir_dia("viernes")
show describir_dia("martes")

show clasificar(0)
show clasificar(1)
show clasificar(42)
`,
  },
  {
    label: "Listas y colecciones",
    code: `-- Listas
nums = [1, 2, 3, 4, 5]
show "Lista: " + str(nums)
show "Largo: " + str(len(nums))

-- Iterar
suma = 0
for n in nums {
    suma = suma + n
}
show "Suma: " + str(suma)

-- Diccionarios
persona = {
    "nombre": "Angel",
    "edad": 25,
    "activo": yes
}

show persona["nombre"]
show persona["edad"]

-- Iterar dict: for toma una sola variable, así que se recorren las claves
for k in keys(persona) {
    show k + " => " + str(persona[k])
}
`,
  },
  {
    label: "attempt / handle",
    code: `fn dividir(a: int, b: int) -> int {
    if b == 0 {
        error "División por cero"
    }
    return a / b
}

-- Caso exitoso
attempt {
    resultado = dividir(10, 2)
    show "10 / 2 = " + str(resultado)
} handle err {
    show "Error: " + err
}

-- Error capturado
attempt {
    resultado = dividir(5, 0)
    show resultado
} handle err {
    show "Capturado: " + err
}

-- Conversión inválida
attempt {
    n = int("no-es-numero")
    show n
} handle err {
    show "Error de conversión: " + err
}

show "Programa continúa normalmente"
`,
  },
  {
    label: "think (IA integrada)",
    code: `-- think envía una pregunta al modelo de IA integrado.
-- Necesita ANTHROPIC_API_KEY en tu .env; sin ella el intérprete
-- avisa y no ejecuta, así que aquí en el playground no responderá.

-- think es una sentencia, no una expresión: se escribe suelta,
-- no se asigna a una variable.
think "¿Qué es un lenguaje de programación en una oración?"

-- También puedes usar el módulo AI directamente
-- use "ai" as ai
-- show ai.ask("¿Cuál es la capital de Francia?")
`,
  },
];
