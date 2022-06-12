function aumento(Salary, WorkPlan){
    let NewSalary = 0;
    if(WorkPlan == 'A' || WorkPlan == 'a' ){
        let NewSalary = Salary + Salary* 0.1
        console.log(NewSalary)
    }
    else if(WorkPlan == 'B' || WorkPlan == 'b'){
        let NewSalary =  Salary + Salary*0.15
        console.log(NewSalary)

    }
    else if(WorkPlan == 'C' || WorkPlan == 'c'){
        let NewSalary =  Salary + Salary*0.2
        console.log(NewSalary)
    }
    else{
        console.log("Plano de Trabalho inexistente na tabela.")
    }
}

//Chamada da Função
aumento(2000, 'C')