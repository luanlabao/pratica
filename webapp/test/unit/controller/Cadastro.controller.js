/*global QUnit*/

sap.ui.define([
	"mentoriafiorika/praticamodel1/controller/Cadastro.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Cadastro Controller");

	QUnit.test("I should test the Cadastro controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
