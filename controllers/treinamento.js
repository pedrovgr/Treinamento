angular.module("treinamentoModule", [])

.controller("treinamentoCtrl", ["$scope", function($scope){
        $scope.treinamentoObj = [];
        $scope.treinamentoObj.table = [];
        $scope.treinamentoObj.table.push("Pedro");
        $scope.treinamentoObj.table.push("Algo");
        $scope.treinamentoObj.table.push("Mais");
        $scope.treinamentoObj.title = "Início";
        $scope.treinamentoObj.subtitle = "Trem bom demais da conta, sô!";
        $scope.treinamentoObj.clicks = 0;
        $scope.treinamentoObj.nome = "Teste"
        $scope.addClick = function(){
                $scope.treinamentoObj.clicks += 1;
        };
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
        $scope.treinamentoObj.date =   dia + "/" + mes + "/" + ano;
        $scope.addPerson = function(){
                $scope.treinamentoObj.table.push($scope.treinamentoObj.nome);
        };
        $scope.print = function(){
                for (i in table){
                        return true;
                };
        };

}]);