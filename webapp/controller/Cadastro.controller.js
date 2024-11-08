sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
],
function (Controller,Fragment,JSONModel) {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.praticamodel1.controller.Cadastro", {
        onInit: function () {
            var oModel = new JSONModel({
                "Cadastro":[
                    {
                        "nome": 'teste',
                        "dtNasc": '2022-11-10',
                        "sexo":'M',
                        "altura":0
                    }
                ]
            })
            
            this.getView().setModel(oModel,"oModel");

            var oModelNovo = new JSONModel({
                Cadastro:{
                    nome: 'teste',
                    dtNasc: '2022-11-10',
                    sexo:'M',
                    altura:'1,97'
                }
            })

            this.getView().setModel(oModelNovo,"oModelNovo"); 
        },
        onOpenDialogNovo: function (){
            var oView = this.getView();

            if( !oView.byId("dialogNovo")){

                Fragment.load({
                    id: this.getView().getId(),
                    name: "mentoria.fiori.ka.praticamodel1.view.fragments.FormNovo",
                    type: "XML",
                    controller: this
    
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                }.bind(this))

            }else{
                oView.byId("dialogNovo").open();
            }
        },
        onCloseDialogNovo: function (){
            this.getView().byId("dialogNovo").close();
        },
        onSaveDialogNovo: function (oEvent) {
           
            var oTableData = this.getView().getModel("oModel");
            var oModelNovo = this.getView().getModel("oModelNovo");
            var aCadastro = oModelNovo.getProperty("/Cadastro");
            var aTabela = oTableData.getProperty("/Cadastro");
            aTabela.push(aCadastro);
            oTableData.setProperty("/Cadastro", aTabela);

            this.onCloseDialogNovo();
        }
    });
});
