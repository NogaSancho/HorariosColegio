// Este archivo esta encargado de manejar la logica de los horarios aguamarina basados en el doc que esta en github y en el archivo aguamarina.py
export const aguamarina = (letraFiltro, colorHorario) => {
    switch (colorHorario) {
        case "verde":
            switch (letraFiltro) {
                case "A":
                    letraFiltro = "E"; // E (o H los lunes)
                    colorHorario = "azul";
                    break;
                case "B":
                    letraFiltro = "C"; // C (o H los miercoles)
                    colorHorario = "azul";
                    break;
                case "C":
                    letraFiltro = "B";
                    colorHorario = "azul";
                    break;
                case "D":
                    letraFiltro = "F";
                    colorHorario = "azul";
                    break;
                case "E":
                    letraFiltro = "A";
                    colorHorario = "azul";
                    break;
                case "F":
                    letraFiltro = "D";
                    colorHorario = "azul";
                    break;
                case "G":
                    letraFiltro = "G";
                    colorHorario = "azul";
                    break;
                case "H":
                    letraFiltro = "I";
                    colorHorario = "azul";
                    break;
                case "I":
                    letraFiltro = "H"; // H (o B los miercoles)
                    colorHorario = "azul";
                    break;
                default:
                    return null;
            }
            break;
        case "azul":
            switch (letraFiltro) {
                case "A":
                    letraFiltro = "E"; //E (o H los lunes)
                    colorHorario = "verde";
                    break;
                case "B":
                    letraFiltro = "C"; // C (o I los miercoles)
                    colorHorario = "verde";
                    break;
                case "C":
                    letraFiltro = "B";
                    colorHorario = "verde";
                    break;
                case "D":
                    letraFiltro = "F";
                    colorHorario = "verde";
                    break;
                case "E":
                    letraFiltro = "A";
                    colorHorario = "verde";
                    break;
                case "F":
                    letraFiltro = "D";
                    colorHorario = "verde";
                    break;
                case "G":
                    letraFiltro = "G";
                    colorHorario = "verde";
                    break;
                case "H":
                    letraFiltro = "I"; // I (o B los miercoles)
                    colorHorario = "verde";
                    break;
                case "I":
                    letraFiltro = "H";
                    colorHorario = "verde";
                    break;
                default:
                    return null;
            }
            break;
        case "verde2":
            switch (letraFiltro) {
                case "A":
                    letraFiltro = "E"; // E (o H los lunes)
                    colorHorario = "azul2";
                    break;
                case "B":
                    letraFiltro = "C"; // C (o H los miercoles)
                    colorHorario = "azul2";
                    break;
                case "C":
                    letraFiltro = "B";
                    colorHorario = "azul2";
                    break;
                case "D":
                    letraFiltro = "F";
                    colorHorario = "azul2";
                    break;
                case "E":
                    letraFiltro = "A";
                    colorHorario = "azul2";
                    break;
                case "F":
                    letraFiltro = "D";
                    colorHorario = "azul2";
                    break;
                case "G":
                    letraFiltro = "G";
                    colorHorario = "azul2";
                    break;
                case "H":
                    letraFiltro = "I";
                    colorHorario = "azul2";
                    break;
                case "I":
                    letraFiltro = "H"; // H (o B los miercoles)
                    colorHorario = "azul2";
                    break;
                default:
                    return null;
            }
            break;
        case "azul2":
            switch (letraFiltro) {
                case "A":
                    letraFiltro = "E"; // E (o H los lunes)
                    colorHorario = "verde2";
                    break;
                case "B":
                    letraFiltro = "C"; // C (o I los miercoles)
                    colorHorario = "verde2";
                    break;
                case "C":
                    letraFiltro = "B";
                    colorHorario = "verde2";
                    break;
                case "D":
                    letraFiltro = "F";
                    colorHorario = "verde2";
                    break;
                case "E":
                    letraFiltro = "A";
                    colorHorario = "verde2";
                    break;
                case "F":
                    letraFiltro = "D";
                    colorHorario = "verde2";
                    break;
                case "G":
                    letraFiltro = "G";
                    colorHorario = "verde2";
                    break;
                case "H":
                    letraFiltro = "I"; // I (o B los miercoles)
                    colorHorario = "verde2";
                    break;
                case "I":
                    letraFiltro = "H";
                    colorHorario = "verde2";
                    break;
                default:
                    return null;
            }
    }
    return {letraFiltro, colorHorario};
}
