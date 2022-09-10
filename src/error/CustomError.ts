export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}
export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome de banda já existente");
  }
}
export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado");
  }
}

export class invalidTime extends CustomError {
  constructor() {
    super(400, "Horário inválido");
  }
}

export class MissingToken extends CustomError {
  constructor() {
    super(400, "Favor fornecer um token para acesso");
  }
}

export class InvalidFields extends CustomError {
  constructor() {
    super(400, "Campos inválidos.");
  }
}

export class InvalidWeekday extends CustomError {
  constructor() {
    super(400, "O week_day é inválido!! Selecione: FRIDAY, SATURDAY ou SUNDAY");
  }
}
// export class BandAlreadyRegistered extends CustomError {
//   constructor() {
//     super(409, "Banda Já Cadastrada");
//   }
// }

// export class TimeAlreadyRegistered extends CustomError {
//   constructor() {
//     super(409, "Data e horário já registrados no cronograma de shows");
//   }
// }

// export class InvalidID extends CustomError {
//   constructor() {
//     super(400, "ID inválido");
//   }
// }

// export class InvalidShow extends CustomError {
//   constructor() {
//     super(400, "Show não encontrado no banco de dados");
//   }
// }


