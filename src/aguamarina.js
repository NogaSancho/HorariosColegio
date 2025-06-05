// Este archivo esta encargado de manejar la logica de los horarios aguamarina basados en el doc que esta en github y en el archivo aguamarina.py
export const aguamarina = (materia, colorHorario) => {
    switch (colorHorario) {
        case "verde":
            switch (materia.letra) {
                case "A":
                    materia.letra = "E (o H los lunes)";
                    colorHorario = "azul";
                    break;
                case "B":
                    materia.letra = "C (o H los miercoles)";
                    colorHorario = "azul";
                    break;
                case "C":
                    materia.letra = "B";
                    colorHorario = "azul";
                    break;
                case "D":
                    materia.letra = "F";
                    colorHorario = "azul";
                    break;
                case "E":
                    materia.letra = "A";
                    colorHorario = "azul";
                    break;
                case "F":
                    materia.letra = "D";
                    colorHorario = "azul";
                    break;
                case "G":
                    materia.letra = "G";
                    colorHorario = "azul";
                    break;
                case "H":
                    materia.letra = "I";
                    colorHorario = "azul";
                    break;
                case "I":
                    materia.letra = "H (o B los miercoles)";
                    colorHorario = "azul";
                    break;
                default:
                    return null;
            }
            break;
        case "azul":
            switch (materia.letra) {
                case "A":
                    materia.letra = "E (o H los lunes)";
                    colorHorario = "verde";
                    break;
                case "B":
                    materia.letra = "C (o I los miercoles)";
                    colorHorario = "verde";
                    break;
                case "C":
                    materia.letra = "B";
                    colorHorario = "verde";
                    break;
                case "D":
                    materia.letra = "F";
                    colorHorario = "verde";
                    break;
                case "E":
                    materia.letra = "A";
                    colorHorario = "verde";
                    break;
                case "F":
                    materia.letra = "D";
                    colorHorario = "verde";
                    break;
                case "G":
                    materia.letra = "G";
                    colorHorario = "verde";
                    break;
                case "H":
                    materia.letra = "I (o B los miercoles)";
                    colorHorario = "verde";
                    break;
                case "I":
                    materia.letra = "H";
                    colorHorario = "verde";
                    break;
                default:
                    return null;
            }
            break;
        case "verde2":
            switch (materia.letra) {
                case "A":
                    materia.letra = "E (o H los lunes)";
                    colorHorario = "azul2";
                    break;
                case "B":
                    materia.letra = "C (o H los miercoles)";
                    colorHorario = "azul2";
                    break;
                case "C":
                    materia.letra = "B";
                    colorHorario = "azul2";
                    break;
                case "D":
                    materia.letra = "F";
                    colorHorario = "azul2";
                    break;
                case "E":
                    materia.letra = "A";
                    colorHorario = "azul2";
                    break;
                case "F":
                    materia.letra = "D";
                    colorHorario = "azul2";
                    break;
                case "G":
                    materia.letra = "G";
                    colorHorario = "azul2";
                    break;
                case "H":
                    materia.letra = "I";
                    colorHorario = "azul2";
                    break;
                case "I":
                    materia.letra = "H (o B los miercoles)";
                    colorHorario = "azul2";
                    break;
                default:
                    return null;
            }
            break;
        case "azul2":
            switch (materia.letra) {
                case "A":
                    materia.letra = "E (o H los lunes)";
                    colorHorario = "verde2";
                    break;
                case "B":
                    materia.letra = "C (o I los miercoles)";
                    colorHorario = "verde2";
                    break;
                case "C":
                    materia.letra = "B";
                    colorHorario = "verde2";
                    break;
                case "D":
                    materia.letra = "F";
                    colorHorario = "verde2";
                    break;
                case "E":
                    materia.letra = "A";
                    colorHorario = "verde2";
                    break;
                case "F":
                    materia.letra = "D";
                    colorHorario = "verde2";
                    break;
                case "G":
                    materia.letra = "G";
                    colorHorario = "verde2";
                    break;
                case "H":
                    materia.letra = "I (o B los miercoles)";
                    colorHorario = "verde2";
                    break;
                case "I":
                    materia.letra = "H";
                    colorHorario = "verde2";
                    break;
                default:
                    return null;
            }
    }
    return materia.letra, colorHorario;
}
