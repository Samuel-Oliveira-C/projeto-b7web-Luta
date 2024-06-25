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