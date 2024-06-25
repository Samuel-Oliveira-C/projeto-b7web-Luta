let char = new Socerer("Samuel");

let monster = new BigMonster();

let stage = new Stage(char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
)

stage.start();