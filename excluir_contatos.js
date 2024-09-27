// Define as DEs com base na Chave Externa e Inicializa
var deX = DataExtension.Init("001");
var deY = DataExtension.Init("000");

// Obtém os dados da DE X e coloca
var contactsX = deX.Rows.Retrieve();

// Percorrer cada contato da DE X
for (var i = 0; i < contactsX.length; i++) {
  var emailX = contactsX[i].email;

  // Verifica se o contato da DE X está na DE Y com base no email, e retorna o valor da linha
  var contactInY = deY.Rows.Lookup(["email"], [emailX]);

  // Se o contato estiver na DE Y, remove ele
  if (contactInY.length > 0) {
    deY.Rows.Remove(["email"], [emailX]);
  }
}
