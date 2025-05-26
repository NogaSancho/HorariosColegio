const materias= {
    materias8vo: [
        {
            nombre: "Math",
            letra: "A",
        },
        {
            nombre : "Science",
            letra: "B"
        }

    ],
    materias9no: [

    ],
    materias10mo:[

    ],
    materias11verde:[
        {
            "Ciencias Ambientales (Pre AP)": {
                letra: "A",
                area: "Ciencias",
                semestre:"1"
            }
        },
        {
            "Química Avanzada": {
                letra:"A" ,
                area: "Ciencias",
                semestre:"1"
            }
        },
        {
            "Física Avanzada": { 
            letra:"A" ,
            area: "Ciencias",
            semestre:"1"
            }
        },
        {
            "Ingeniería y Tecnología":{
            letra:"A" ,
            area: "Ciencias",
            semestre:"1"
            }
        }, 
        {
            "STEM":{
            letra:"A" ,
            area: "Ciencias",
            semestre:"1"
            }
        }, 
        {
            "Funciones, Trigonometría y Probabilidad":{
            letra:"B" ,
            area: "Matemáticas",
            semestre:"1"
        }
        }, 
        {
            "Cálculo Diferencial":{ //Nota: Hay dos cálculos en este espacio
            letra:"B" ,
            area: "Matemáticas",
            semestre:"1"
            }
        }, 
        {
            "Estadística":{  
            letra:"B" ,
            area: "Matemáticas",
            semestre:"1"
            }
        }, 
        {
            "Public Speaking and Leadership":{
            letra:"C" ,
            area: "Inglés",
            semestre:"1"
            }
        }, 
        {
            "AP English Literature and Composition":{
            letra:"C" ,
            area: "Inglés",
            semestre:"1"
            }
        }, 
        {
            nombre:"Journalism" ,
            letra:"C" ,
            area: "Inglés",
            semestre:"1"
        }, 
        {
            nombre:"World Mythology" ,
            letra:"C" ,
            area: "Inglés",
            semestre:"1"
        }, 
        {
            nombre:"AP Research" ,
            letra:"C" ,
            area: "Inglés",
            semestre:"1"
        }, 
        {
            nombre:"Emprendimiento" ,
            letra:"D" ,
            area: "Sociales",
            semestre:"1"
        }, 
        {
            nombre:"Actualidad Colombiana y Ciudadanía" ,
            letra:"D" ,
            area: "Sociales",
            semestre:"1"
        }, 
        {
            nombre:"Políticas Públicas y Gobierno" ,
            letra:"D" ,
            area: "Sociales",
            semestre:"1"
        }, 
        {
            nombre:"International Relations (Pre AP)" ,
            letra:"D" ,
            area: "Sociales",
            semestre:"1"
        }, 
        {
            nombre:"Economía Colombiana" ,
            letra:"D" ,
            area: "Sociales",
            semestre:"1"
        }, 
        {
            nombre:"Portugués Intermedio I" ,
            letra:"E" ,
            area: "Tercera Lengua",
            semestre:"1"
        }, 
        {
            nombre:"Francés Intermedio I" ,
            letra:"E" ,
            area: "Tercera Lengua",
            semestre:"1"
        }, 
        {
            nombre:"Literatura y Cultura Hispanoamericanas (Pre AP)" ,
            letra:"F" ,
            area: "Español",
            semestre:"1"
        }, 
        {
            nombre:"Apreciación del Cine" ,
            letra:"F" ,
            area: "Español",
            semestre:"1"
        }, 
        {
            nombre:"Fundamentos de la Filosofía" ,
            letra:"F" ,
            area: "Español",
            semestre:"1"
        }, 
        {
            nombre:"Filosofía y Argumentación" ,
            letra:"F" ,
            area: "Español",
            semestre:"1"
        }, 
        {
            nombre:"Literatura Colombiana" ,
            letra:"F" ,
            area: "Español",
            semestre:"1"
        }, 
        {
            nombre:"Ética" , //Nota: Hay 3 éticas
            letra:"G" ,
            area: "?", //Ayuda la G que area es
            semestre:"1"
        }, 
        {
            nombre:"Gimnasia Mixta" ,
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Entrenamiento Funcional Mixto" ,
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Fútbol Femenino" ,
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Baloncesto Femenino" ,
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Voleibol Mixto" ,
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Baloncesto Masculino" ,
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Fútbol Masculino" , //Nota: Hay 2 Futbol
            letra:"H" ,
            area: "Educación Física y Deportes",
            semestre:"1"
        }, 
        {
            nombre:"Orquesta Sinfónica" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Banda Sinfónica (Trompetas)" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Banda Sinfónica (Clarinetes y Saxofones)" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Banda Sinfónica (Flautas)" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Ensamble Instrumental 1" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Ensamble Instrumental 2" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Coro" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Danza" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"AP Music Theory" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Taller de Creación" , //Nota: Hay 2 talleres de creacion
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Taller de Cerámica" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Taller de Escultura" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, 
        {
            nombre:"Taller de Diseño Gráfico Digital" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, {
            nombre:"Taller de Fundamentos de Diseño Industrial" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, {
            nombre:"Taller de Pintura" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        }, {
            nombre:"AP Studio Art" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
        },
        {
            nombre:"Asamblea" ,
            letra:"J" ,
            area: "Asamblea",
            semestre:"1"
        }, 
        {
            nombre:"Consejería" ,
            letra:"K" ,
            area: "Consejería",
            semestre:"1"
        }
    ],
    materias11azul:[
        
           {
            nombre:"" ,
            letra:"I" ,
            area: "Arte y Música",
            semestre:"1"
           },
    ]
}
