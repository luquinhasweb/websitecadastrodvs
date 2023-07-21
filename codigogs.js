function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate()
  }
  function getUrl(){
    var url = ScriptApp.getService().getUrl();
    return url;
  }
  function doPost(e){
   
    var nomedoaluno = e.parameter.nomedoaluno;
    var datadenascimento = e.parameter.datadenascimento;
    var nomedoresponsavel = e.parameter.nomedoresponsavel;
    var endereco = e.parameter.endereco;
    var bairro = e.parameter.bairro;
    var numerodacasa = e.parameter.numerodacasa;
    var cidade = e.parameter.cidade;
    var telefoneparacontato = e.parameter.telefoneparacontato;
    var serie = e.parameter.serie;
    var turma = e.parameter.turma;
     var turno = e.parameter.turno;
   
    var planilha = SpreadsheetApp.openById('1eIe1yPHdVqCcO2hXnx17047FyLz5NKIyL6mYWhV4EAc')
  
     var tabela = planilha.getSheetByName('Folha1')
  
     tabela.appendRow([nomedoaluno,datadenascimento,nomedoresponsavel,endereco,bairro,numerodacasa,cidade,telefoneparacontato,serie,turma,turno])
  } 
   
  
  