class Character{

    _life = 1;
    maxLife= 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name= name;
    }

    getLife(){
        return this._life
    }
    setLife(newLife){
        this._life = newLife < 0? 0: newLife; // esse código usa o operador ternario para garantir que nunca fique com vida negativa.
    }
}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 10;
        this.defense = 8;
    }

}

class Socerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 15;
        this.defense = 3;
    }
}

class LittleMonster extends Character{
    constructor(){
        super("Little Monster")
        this.life= 40;
        this.maxLife = this.life;
        this.attack = 4;
        this.defense = 4 ;
    }
}

class BigMonster extends Character{
    constructor(){
        super("Big Monster");
        this.life = 120;
        this.maxLife= this.life;
        this.attack = 16;
        this.defense = 6;
    }
}

class Stage{
    constructor(fighter1,fighter2,fighter1El,fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start(){
        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1,this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2,this.fighter1));
    }

    update(){
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;
        
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked){
        console.log(`O ${attacking.name} está atacando ${attacked.name}`);

        this.update()
    }
    
}
