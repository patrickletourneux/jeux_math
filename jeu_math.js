console.log('jeu math')

class Operation {
    constructor(name,operator,level){
        this.name = name;
        this.operator = operator;
        this.level=level;
    }
    init() {
        const container = document.getElementById('container_operations');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container_operation')
        divContainer.classList.add(this.name)

        const title = document.createElement('h1');
        title.textContent=this.name;
        divContainer.appendChild(title);
        const input1 = document.createElement('input');
        input1.classList.add('input1')
        input1.classList.add(this.name)
        divContainer.appendChild(input1);

        const operatorP = document.createElement('p');
        operatorP.classList.add('operatorP');
        operatorP.classList.add(this.name);

        operatorP.textContent=this.operator;
        divContainer.appendChild(operatorP);

        const input2 = document.createElement('input');
        input2.classList.add('input2')
        input2.classList.add(this.name)
        divContainer.appendChild(input2);

        const operatorEgal = document.createElement('p');
        operatorEgal.classList.add('operatorEgal')
        operatorEgal.classList.add(this.name)
        operatorEgal.textContent='=';
        divContainer.appendChild(operatorEgal);

        const result = document.createElement('input');
        result.classList.add('result')
        result.classList.add(this.name)
        divContainer.appendChild(result);

        container.appendChild(divContainer);
    }
    randomNumber(){
        const numberFactor=0;
        if (this.level = 1){
            numberFactor=10;
        }; // TODO manage other levels
        const num = Math.round(numberFactor*Math.random());
        return num;
    }
        
};

const level = 1
const operations =[['addition','+'],['multiplication','*'],['soustraction','-'],['division','/']]
for (operation of operations){
    const newOperation = new Operation(operation[0],operation[1],level);
    newOperation.init();
};

