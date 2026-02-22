import express from "express";

const app = express();
const host = "0.0.0.0";
const porta = 3000;

app.get("/", (req, res) => {
  const data = new Date();
  const ano_atual = data.getFullYear();
  console.log(ano_atual);
  const { idade, sexo, salario_base, ano_de_contratacao, matricula } =
    req.query;

  if (Object.keys(req.query).length === 0) {
    // pra verificar se a URL foi passada vazia (perguntei pra IA como fazer isso)

    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Informe os seus dados na URL</h2>
    <h3>Exemplo: http://localhost:3000/?idade=19&sexo=F&salario_base=1700&ano_de_contratacao=2023&matricula=1</h3>
</body>
</html>`);
  }

  const funcionario = {
    idade: idade,
    sexo: sexo,
    salario_base: salario_base,
    ano_de_contratacao: ano_de_contratacao,
    matricula: matricula,
  };
  const invalido = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Não foi possível realizar o cálculo do reajuste salarial, pois os dados não são válidos.</h2>
</body>
</html>`;
  let salario_novo = salario_base;
  const contratacao = parseInt(funcionario.ano_de_contratacao);
  const matri = parseInt(funcionario.matricula);

  if (funcionario.idade <= 16) {
    return res.send(invalido);
  } else if (contratacao < 1960 || contratacao > ano_atual) {
    return res.send(invalido);
  } else if (matri == 0 && matri != Number.isInteger(matri)) {
    return res.send(invalido);
  } else if (funcionario.salario_base <= 0) {
    return res.send(invalido);
  }

  if (funcionario.idade >= 18 && funcionario.idade <= 39) {
    if (ano_atual - funcionario.ano_de_contratacao <= 10) {
      if (funcionario.sexo === "M") {
        salario_novo = salario_base * 1.1 - 10; // certo
      }
      if (funcionario.sexo === "F") {
        salario_novo = salario_base * 1.08 - 11; // certo
      }
    } else {
      if (funcionario.sexo === "M") {
        salario_novo = salario_base * 1.1 + 17; // certo
      }
      if (funcionario.sexo === "F") {
        salario_novo = salario_base * 1.08 + 16; // certo
      }
    }
  } else if (funcionario.idade >= 40 && funcionario.idade <= 69) {
    if (ano_atual - funcionario.ano_de_contratacao <= 10) {
      if (funcionario.sexo === "M") {
        salario_novo = salario_base * 1.08 - 5; // certo
      }
      if (funcionario.sexo === "F") {
        salario_novo = salario_base * 1.1 - 7; // certo
      }
    } else {
      if (funcionario.sexo === "M") {
        salario_novo = salario_base * 1.08 + 15; // certo
      }
      if (funcionario.sexo === "F") {
        salario_novo = salario_base * 1.1 + 14; // certo
      }
    }
  }
  if (funcionario.idade >= 70 && funcionario.idade <= 99) {
    if (ano_atual - funcionario.ano_de_contratacao <= 10) {
      if (funcionario.sexo === "M") {
        salario_novo = salario_base * 1.15 - 15; // certo
      }
      if (funcionario.sexo === "F") {
        salario_novo = salario_base * 1.17 - 17; // certo
      }
    } else {
      if (funcionario.sexo === "M") {
        salario_novo = salario_base * 1.15 + 13; // certo
      }
      if (funcionario.sexo === "F") {
        salario_novo = salario_base * 1.17 + 12; // certo
      }
    }
  }
  const salario_reajustado = salario_novo.toFixed(2);
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_reajustado}</h2>
</body>
</html>`);
});

app.listen(porta, host, () => {
  console.log(`Servidor escutando em http://${host}:${porta}`);
});
