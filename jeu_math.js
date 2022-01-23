// Patrick 01/2022

console.log('math_games')

class Operation {
    static scoreOperations;
    level = 1;
    scoreOperation=0;
    constructor(name,operator){
        this.name = name;
        this.operator = operator;
        this.levels=[1,2,3];
    }
    init() {
        const container = document.getElementById('container_operations');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container_operation')
        divContainer.classList.add(this.name)

        const title = document.createElement('h1');
        title.textContent=this.name;
        divContainer.appendChild(title);

        const divContainerLevels = document.createElement('div');
        divContainerLevels.classList.add('levels');
        divContainerLevels.classList.add(this.name);
        const labelLevel = document.createElement('label');
        labelLevel.for = 'level';
        labelLevel.textContent='level  ';
        divContainerLevels.appendChild(labelLevel);
        const inputLevel = document.createElement('input');
        inputLevel.type = 'number';
        inputLevel.id = 'level';
        inputLevel.name = 'level';
        inputLevel.min = 1;
        inputLevel.max = 5;
        inputLevel.value = 1;
        inputLevel.classList.add(this.name);
        inputLevel.classList.add('level');
        divContainerLevels.appendChild(inputLevel);
        divContainer.appendChild(divContainerLevels);


        const line = document.createElement('div');
        line.textContent='-------------------';
        divContainer.appendChild(line);

        const input1 = document.createElement('input');
        input1.classList.add('input1')
        input1.classList.add(this.name)
        input1.value = this.randomNumber()

        divContainer.appendChild(input1);

        const operatorP = document.createElement('p');
        operatorP.classList.add('operatorP');
        operatorP.classList.add(this.name);

        operatorP.textContent=this.operator;
        divContainer.appendChild(operatorP);

        const input2 = document.createElement('input');
        input2.classList.add('input2')
        input2.classList.add(this.name)
        input2.value = this.randomNumber()
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
        
        const buttonTest = document.createElement('button');
        buttonTest.textContent = ' test ';
        buttonTest.classList.add('buttonTest');
        buttonTest.classList.add(this.name);
        divContainer.appendChild(buttonTest);


        container.appendChild(divContainer);
        this.activEvenement();
    }
    activEvenement() {
        document.querySelector(`.${this.name}.buttonTest`).addEventListener('click',()=>{
            console.log('bouton test click');
            // compare result to good result
            const value1 = document.querySelector(`.${this.name}.input1`).value;
            // console.log('value1:', value1)
            const value2 = document.querySelector(`.${this.name}.input2`).value;
            // console.log('value2:', value2)

            const goodResult = eval(`${value1}${this.operator}${value2}`);
            // console.log('goodResult:', goodResult);
            
            const userResult = document.querySelector(`.${this.name}.result`).value;
            if (userResult == goodResult){
                console.log('good result ',goodResult)
                this.scoreOperation++
                console.log('this.scoreOperation',this.scoreOperation)
                document.querySelector(`.${this.name}.result`).style.backgroundColor  = "green"
            }else{
                console.log('bad result')
                document.querySelector(`.${this.name}.result`).style.backgroundColor  = "red"
            }


        })

    }
    randomNumber(){
        let numberFactor=0;
        if (this.level = 1){
            numberFactor=1;
        };
        if (this.level = 2){
            numberFactor=10;
        }; // TODO manage other levels
        const num = Math.round(numberFactor*Math.random());
        // console.log(num)
        return num;
    }
        
};


const operations =[['addition','+'],['multiplication','*'],['soustraction','-'],['division','/']]
for (operation of operations){
    const newOperation = new Operation(operation[0],operation[1]);
    newOperation.init();
    // newOperation.randomNumber()

};

