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

        //Funções
        $scope.addPerson = function(){
                //Até então só funciona uma vez, não sei pq
                if($scope.treinamentoObj.table.includes($scope.treinamentoObj.nome)){
                        alert("Nome já na tabela!");
                        return;  
                }
                else{
                        $scope.treinamentoObj.table.push($scope.treinamentoObj.nome);
                }
        };

        $scope.deletePerson = function(){
                if($scope.treinamentoObj.table.includes($scope.treinamentoObj.nome)){
                        for (var i = 0; i < $scope.treinamentoObj.table.length; i++){
                                if ($scope.treinamentoObj.table[i] == $scope.treinamentoObj.nome){
                                        $scope.treinamentoObj.table.splice(i,1);
                                }
                        } 
                }
                else{
                        alert("Nome não está na tabela");
                        return;
                }
        };
}])

.controller("treinamentoListCtrl", ["$scope", function($scope){
        var checked = false;
        $scope.check = function(){
                checked = !checked;
        };

}]);