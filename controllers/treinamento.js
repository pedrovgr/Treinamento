angular.module("treinamentoModule", [])

//possível adicionar vários controllers

.controller("treinamentoCtrl", ["$scope", function($scope){
        //Declara o objeto
        $scope.treinamentoObj = [];
        $scope.treinamentoObj.table = [];
        //Inicialização da tabela
        /*$scope.treinamentoObj.table.push("Pedro");
        $scope.treinamentoObj.table.push("Algo");
        $scope.treinamentoObj.table.push("Mais");*/

        //Config da página
        $scope.treinamentoObj.title = "Início";
        $scope.treinamentoObj.subtitle = "Trem bom demais da conta, sô!";
        $scope.treinamentoObj.clicks = 0;
        $scope.treinamentoObj.nome = "Teste"
        $scope.treinamentoObj.strikedSmth = false;
        $scope.addClick = function(){
                $scope.treinamentoObj.clicks += 1;
        };

        //Pegar o dia atual
        var data = new Date;
        var dia = data.getDate();
        if (dia<10){
                dia = "0" + dia;
        }
        var mes = data.getMonth() + 1;
        if (mes<10){
                mes = "0" + mes;
        }
        var ano = data.getFullYear();
        //Atualização do dia para o $scope
        $scope.treinamentoObj.date =   dia + "/" + mes + "/" + ano;

        var clock = document.getElementById("dataAtual");
        var hora = data.getHours();
        if (hora<10){
                hora = "0" + hora;
        }
        var min = data.getMinutes();
        if (min<10){
                min = "0" + min;
        }
        var seg = data.getSeconds();
        if (seg<10){
                seg = "0" + seg;
        }
        
        var horarioCompleto = hora + ":" + min;
        clock.innerText = "Você entrou às " + horarioCompleto;

        //Funções

        $scope.addPerson = function(){
                //Até então só funciona uma vez, não sei pq - resolvido
                if($scope.treinamentoObj.table.includes($scope.treinamentoObj.nome)){
                        alert("Nome já na tabela!");
                        return;  
                }
                else{
                        $scope.treinamentoObj.table.push($scope.treinamentoObj.nome);
                        $scope.treinamentoObj.table.sort();
                }
                console.log($scope.treinamentoObj.table);
        };

        $scope.deletePerson = function(entry){
                if($scope.treinamentoObj.table.includes(entry)){
                        for (var i = 0; i < $scope.treinamentoObj.table.length; i++){
                                if ($scope.treinamentoObj.table[i] == entry){
                                        $scope.treinamentoObj.table.splice(i,1);
                                        return;
                                }
                        } 
                }
                else{
                        alert("Nome não está na tabela");
                        return;
                }
        };

        $scope.strikeSmth = function(){
                $scope.treinamentoObj.strikedSmth = !$scope.treinamentoObj.strikedSmth;
        };

        $scope.alert = function(entry){
                alert(entry);
        };
        console.log($scope.treinamentoObj.table);
}])

.controller("treinamentoListCtrl", ["$scope", function($scope){
        var checked = false;
        $scope.check = function(){
                checked = !checked;
        };


}])

.controller("AppCtr2", ["$scope", function($scope){
        $scope.currentNavItem = "page1";
       
        $scope.goto = function(page) {
        $scope.status = "Goto " + page;
        };
}])

.directive("tbNome", function(){
        return{
                restrict: "E",
                templateURL: "./nome.html"
        }
});

angular.module('BlankApp', ['ngMaterial', 'ngMessages', 'treinamentoModule'])

.controller("AppCtrl", ["$scope", function($scope){
        $scope.currentNavItem = "page1";

        $scope.goto = function(page) {
          $scope.status = "Goto " + page;
        };
}]);

angular.module('navBarDemoBasicUsage', ['ngMaterial'])

.controller('AppCtrl', ["$scope", function($scope){
        $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
      $scope.status = "Goto " + page;
    };
}]);

