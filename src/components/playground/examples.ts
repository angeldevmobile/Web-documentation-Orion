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
        self.nombre = nombre
        self.sonido = sonido
    }

    act hablar() {
        show self.nombre + " dice: " + self.sonido
    }

    act presentarse() {
        show "Soy " + self.nombre
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
    code: `fn describir_dia(dia: string) -> string {
    match dia {
        "lunes":    { return "Inicio de semana" }
        "viernes":  { return "¡Por fin viernes!" }
        "sabado":   { return "Fin de semana" }
        "domingo":  { return "Descanso" }
        _:          { return "Día normal" }
    }
}

fn clasificar(n: int) -> string {
    match n {
        0:          { return "cero" }
        1:          { return "uno" }
        _:          { return "otro" }
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

-- Iterar dict
for k, v in persona {
    show k + " => " + str(v)
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
    code: `-- think ejecuta una pregunta al modelo de IA integrado
-- (requiere configuración del módulo AI en producción)

respuesta = think "¿Qué es un lenguaje de programación en una oración?"
show respuesta

-- También puedes usar el módulo AI directamente
-- use "ai" as ai
-- show ai.ask("¿Cuál es la capital de Francia?")
`,
  },
];
