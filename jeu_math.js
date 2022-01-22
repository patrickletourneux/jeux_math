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
        operatorP.textContent=this.operator;
        divContainer.appendChild(operatorP);

        const input2 = document.createElement('input');
        input2.classList.add('input2')
        input2.classList.add(this.name)
        divContainer.appendChild(input2);

        const operatorEgal = document.createElement('p');
        operatorEgal.textContent='=';
        divContainer.appendChild(operatorEgal);

        const result = document.createElement('input');
        result.classList.add('result')
        result.classList.add(this.name)
        divContainer.appendChild(result);

        container.appendChild(divContainer);
    }
        
};

const operatorAddition = new Operation('addition','+',1);
operatorAddition.init();
const operatorMultiplication = new Operation('multiplication','*',1);
operatorMultiplication.init();
