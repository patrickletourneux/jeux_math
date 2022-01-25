// Patrick 01/2022

console.log('math_games')

class Operation {
    static scoreOperations = 0;
    level = 1;
    scoreOperation = 0;
    constructor(name, operator) {
        this.name = name;
        this.operator = operator;
        this.levels = [1,2,3,4,5];
    }
    init() {
        const container = document.getElementById('container_operations');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container_operation')
        divContainer.classList.add(this.name)

        const title = document.createElement('h1');
        title.textContent = this.name;
        divContainer.appendChild(title);

        const divContainerLevels = document.createElement('div');
        divContainerLevels.classList.add('levels');
        divContainerLevels.classList.add(this.name);
        const labelLevel = document.createElement('label');
        labelLevel.for = 'level';
        labelLevel.textContent = 'level  ';
        divContainerLevels.appendChild(labelLevel);
        const selectLevel = document.createElement('select');
        selectLevel.name = 'level';
        selectLevel.id = 'level';
        selectLevel.classList.add(this.name);
        selectLevel.classList.add('level');
        selectLevel.classList.add('select');
        for (let item of this.levels) {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectLevel.appendChild(option);
        }

        divContainerLevels.appendChild(selectLevel);
        divContainer.appendChild(divContainerLevels);


        const line = document.createElement('div');
        line.textContent = '-------------------';
        divContainer.appendChild(line);

        const input1 = document.createElement('input');
        input1.classList.add('input1')
        input1.classList.add(this.name);
        input1.value = this.randomNumber()
        input1.type = 'number'

        divContainer.appendChild(input1);

        const operatorP = document.createElement('p');
        operatorP.classList.add('operatorP');
        operatorP.classList.add(this.name);

        operatorP.textContent = this.operator;
        divContainer.appendChild(operatorP);

        const input2 = document.createElement('input');
        input2.classList.add('input2');
        input2.classList.add(this.name);
        input2.value = this.randomNumber();
        input2.type = 'number';
        divContainer.appendChild(input2);

        const operatorEgal = document.createElement('p');
        operatorEgal.classList.add('operatorEgal');
        operatorEgal.classList.add(this.name);
        operatorEgal.textContent = '=';
        divContainer.appendChild(operatorEgal);

        const result = document.createElement('input');
        result.classList.add('result');
        result.classList.add(this.name);
        result.style.backgroundColor = '#B5CBB7';
        result.type = 'number';
        divContainer.appendChild(result);

        const buttonTest = document.createElement('button');
        buttonTest.textContent = ' test ';
        buttonTest.classList.add('buttonTest');
        buttonTest.classList.add(this.name);
        divContainer.appendChild(buttonTest);

        const line2 = document.createElement('div');
        line2.textContent = '-------------------';
        divContainer.appendChild(line2);

        const divContainerScore = document.createElement('div');
        divContainerScore.classList.add('score');
        divContainerScore.classList.add(this.name);

        const labelScore = document.createElement('label');
        labelScore.for = 'score';
        labelScore.textContent = 'local_score  ';
        divContainerScore.appendChild(labelScore);

        const localScore = document.createElement('input');
        localScore.classList.add(this.name);
        localScore.classList.add('score');
        localScore.classList.add('input');
        localScore.type = 'number';
        localScore.id = 'score';
        localScore.name = 'score';
        localScore.min = 0;
        localScore.max = 100;
        localScore.value = 0;
        divContainerScore.appendChild(localScore);
        divContainer.appendChild(divContainerScore)

        container.appendChild(divContainer);
        this.activEvenement();
    }
    activEvenement() {
        // test button for testing result
        document.querySelector(`.${this.name}.buttonTest`)
            .addEventListener('click', () => {
                console.log('bouton test click');
                // compare result to good result
                const value1 = document.querySelector(`.${this.name}.input1`).value;
                // console.log('value1:', value1)
                const value2 = document.querySelector(`.${this.name}.input2`).value;
                // console.log('value2:', value2)

                const goodResult = eval(`${value1}${this.operator}${value2}`);
                // console.log('goodResult:', goodResult);

                const userResult = document.querySelector(`.${this.name}.result`).value;
                if (userResult == goodResult) {
                    console.log('good result ', goodResult);
                    this.scoreOperation++;
                    console.log('this.scoreOperation', this.scoreOperation);
                    Operation.addOneToGlobalScore();
                    document.getElementById('global_score').textContent = Operation.scoreOperations;
                    document.querySelector(`.${this.name}.result`).style.backgroundColor = "green";
                    document.querySelector(`.${this.name}.score.input`).value = this.scoreOperation;

                } else {
                    console.log('bad result')
                    document.querySelector(`.${this.name}.result`).style.backgroundColor = "red"
                }
                this.resetDelay();
            });
        // level update
        document.querySelector(`.select.level.${this.name}`)
            .addEventListener('change', (event) => {
                this.level = event.target.value
                this.reset();
            });


    }
    static addOneToGlobalScore() {
        Operation.scoreOperations++
        console.log('Operation.scoreOperations', Operation.scoreOperations)
    }
    resetDelay() {
        const instance = this; // need to not us this in  setTimeout because the context change in setTimeout, so this change
        console.log(instance.name)
        setTimeout(function () {
            document.querySelector(`.${instance.name}.input1`).value = instance.randomNumber();
            document.querySelector(`.input2.${instance.name}`).value = instance.randomNumber();
            document.querySelector(`.result.${instance.name}`).value = '';
            document.querySelector(`.result.${instance.name}`).style.backgroundColor = '#818479';
        }, 1000);

    }
    reset() {
        document.querySelector(`.${this.name}.input1`).value = this.randomNumber();
        document.querySelector(`.input2.${this.name}`).value = this.randomNumber();
        document.querySelector(`.result.${this.name}`).value = '';
        document.querySelector(`.result.${this.name}`).style.backgroundColor = '#818479';

    }
    randomNumber() {
        let numberFactor = 0;
        // console.log('randomNumber this.level:', this.level)
        if (this.level == 1) { 
            numberFactor = 10;
        };
        if (this.level == 2) {
            numberFactor = 20;
        };
        if (this.level == 3) {
            numberFactor = 50;
        };
        if (this.level == 4) {
            numberFactor = 100;
        };
        if (this.level == 5) {
            numberFactor = 1000;
        };
        // console.log('numberFactor:', numberFactor)
        const num = Math.round(numberFactor * Math.random());
        // console.log(num)
        return num;
    }

};

const begin = () => {
    const operations = [
        ['addition', '+'],
        ['multiplication', '*'],
        ['soustraction', '-'],
        ['division', '/']
    ]
    for (operation of operations) {
        const newOperation = new Operation(operation[0], operation[1]);
        newOperation.init();
        // newOperation.randomNumber()

    };
}
begin()

// button reset_all
document.getElementById('reset_all')
    .addEventListener('click', (event) => {
        console.log('reset all')
        document.getElementById('container_operations').textContent = '';
        begin();
        Operation.scoreOperations = 0;
        document.getElementById('global_score').textContent = 0;
        document.getElementById('myDarkMode').value = 1;
        document.querySelector('body')
            .classList.remove('darkMode');
        const operations = document.querySelectorAll('.container_operation')
        for (let item of operations) {
            item.classList.remove('darkMode');
        }



    });
document.getElementById('myDarkMode')
    .addEventListener('change', (event) => {
        console.log('darkmode change', event.target.value)
        document.querySelector('body')
            .classList.toggle('darkMode');
        const operations = document.querySelectorAll('.container_operation')
        for (let item of operations) {
            item.classList.toggle('darkMode');
        }

    })