def Aguamarina(horario, letra):
    

    if horario == "verde":
        if letra == "A":
            letra = "E (o H los lunes)"
        elif letra == "B":
            letra = "C (o H los miercoles)"
        elif letra == "C":
            letra = "B"
        elif letra == "D":
            letra = "F"
        elif letra == "E":
            letra = "A"
        elif letra == "F":
            letra = "D"
        elif letra == "G":
            letra = "G"
        elif letra == "H":
            letra = "I"
        elif letra == "I":
            letra = "H (o B los miercoles)"
    elif horario == "azul":
        if letra == "A":
            letra = "E (o H los lunes)"
        elif letra == "B":
            letra = "C (o I los miercoles)"
        elif letra == "C":
            letra = "B"
        elif letra == "D":
            letra = "F"
        elif letra == "E":
            letra = "A"
        elif letra == "F":
            letra = "D"
        elif letra == "G":
            letra = "G"
        elif letra == "H":
            letra = "I (o B los miercoles)"
        elif letra == "I":
            letra = "H"

    return letra

if __name__ == "__main__":
    horario = input("Introduce el horario (verde, azul): ")
    letra = input("Introduce la letra (A, B, C, D, E, F, G, H, I): ")
    HorarioAguamarina= Aguamarina(horario, letra)
    nuevoHorario = ("azul" if horario == "verde" else "verde")
    print(f"si quieres ver la letra {letra} en el horario {horario}, debes cambiarla por la letra {HorarioAguamarina} en el horario {nuevoHorario}")