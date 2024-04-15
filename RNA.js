// Função numero aleatorio 
function randomRanger(min, max) {
    return Math.random () *(max - min) + min;
}

function lerp (a, b, t){
    return a + (b - a) * t;
}

class Neuron {
    constructor(inputs) {
        this.bias = randomRanger(-1, 1);

        this.weightlist = new Array(inputs)
        .fill()
        .map(() => randomRanger(-1, 1));
    }
}

g(signalList = []); {
    let u = 0;

    for (let i = 0; i < this.weightlist.length; i++) {
        u += signalList[i] * this.weightlist[i];
    }

    if (Math.tanh(u) > this.bias) return 1; // Ativado 
    else return 0; //Deativado 
}

mutate (rate = 1 ){
    this.weightlist = this.weightlist.map(() => {
        return lerp (w, randomRanger(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRanger(-1, 1), rate)
}

class RNA {
    constructor(inputCount = 1, leveList = []) {
        this.score = 0;

        this.leveList = leveList.map((l, i) =>{
            const inputSize = i === 0 ? inputCount : levelist[i - 1]

            return new Array(l).fill().map(() => new Neuron(inputSize));
        });
    }
    compute(list = []) {
        for (let i = 0; i< this.levelist.length; i++) {
            const tempList = []

            for (const neuron off this.leveList[i]) {
                if(list.length !== neuron.weightList.length) throw new Error("Entrada invalida");
                tempList.push(neuron.g(list))
            }
            list = tempList;
        }
        return list;
    }
}

mutate(rate = 1); {
    for (const level of this.leveList) {
        for (const neuron of level) neuron.mutate(rate)
    }
}

load(rna); {
    if (!rna) return;
    try{
        this.leveList = rna.map((neuronList) =>{
            return neuronList.map((neuron) => {
                const n = new Neuron();
                n.bias = neuron.bias 
                n.weightlist = neuron.weightList;

                return n;
            });
        });
    } catch (e) {
        return;
    }

    save() {
        return this.leveList;
    }
}

export default RNA;