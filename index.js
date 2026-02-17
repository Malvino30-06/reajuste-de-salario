import express from "express";

const app = express();
const host = "0.0.0.0";
const porta = 3000;

app.get("/", (req, res) => {
  const ano_atual = 2026;
  const { idade, sexo, salario_base, ano_de_contratacao, matricula } =
    req.query;

  const funcionario = {
    idade: idade,
    sexo: sexo,
    salario_base: salario_base,
    ano_de_contratacao: ano_de_contratacao,
    matricula: matricula,
  };
  let salario_novo = salario_base;
  if (
    (funcionario.idade >= 18 && funcionario.idade <= 39) ||
    2025 - funcionario.ano_de_contratacao <= 10
  ) {
    if (funcionario.sexo === "M") {
      salario_novo = salario_base * 1.1 - 10;
      return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_novo.toFixed(2)}</h2>
</body>
</html>`);
    }
    if (funcionario.sexo === "F") {
      salario_novo = salario_base * 1.08 - 11;
      return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_novo.toFixed(2)}</h2>
</body>
</html>`);
    }
  } else if (
    (funcionario.idade >= 40 && funcionario.idade <= 69) ||
    2025 - funcionario.ano_de_contratacao <= 10
  ) {
    if (funcionario.sexo === "M") {
      salario_novo = salario_base * 1.08 - 5;
      return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_novo.toFixed(2)}</h2>
</body>
</html>`);
    }
    if (funcionario.sexo === "F") {
      salario_novo = salario_base * 1.1 - 7;
      return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_novo.toFixed(2)}</h2>
</body>
</html>`);
    }
  }

  if (
    (funcionario.idade >= 70 && funcionario.idade <= 99) ||
    ano_atual - funcionario.ano_de_contratacao <= 10
  ) {
    if (funcionario.sexo === "M") {
      salario_novo = salario_base * 1.15 - 15;
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_novo.toFixed(2)}</h2>
</body>
</html>`);
    }
    if (funcionario.sexo === "F") {
      salario_novo = salario_base * 1.17 - 17;
      res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Seu salário reajustado é R$${salario_novo.toFixed(2)}</h2>
</body>
</html>`);
    }
  } else {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Olá, querido funcionário!</h1>
    <h2>Informe os seus dados na URL</h2>
    <h3>Exemplo: http://localhost:3000/?idade=18&sexo=F&salario_base=1700&anoContratacao=2014&matricula=12345 ...</h3>
</body>
</html>`);
  }
  if (funcionario.idade < 18) {
    res.send(`<!DOCTYPE html>
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
</html>`);
  }
});

app.listen(porta, host, () => {
  console.log(`Servidor escutando em http://${host}:${porta}`);
});
