
class Calc{
    constructor(){
        // array of icons to use for buttons icon and id
        this.iconArr = ["AC","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="]; 
        // this.numArr = ["7","8","9","4","5","6","1","2","3","0"];
        this.txtField = document.createElement("div");
        this.mathArr = ["",""];
        this.opp = "";
        this.oppUsed = false;
        this.calculate = this.calculate.bind(this);
        this.getNum = this.getNum.bind(this);
        this.mathTime = this.mathTime.bind(this);
    }

    view(){
        let main = document.getElementById("main");
        // creates container
        let container = document.createElement("div");
        container.setAttribute("class", "container");

        // creates row
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        // creates text field
        
        this.txtField.setAttribute("class","col-12 text-right border border-dark");
        this.txtField.innerHTML = "0";

        // appends txtfield
        row.appendChild(this.txtField);

        // loops through icons to create buttons
        for (var i = 0; i < this.iconArr.length; i++) {
            // console.log(i);
            let bb = new makeButton(this.iconArr[i], this.getNum, this.mathTime);
            bb.bake();
            row.appendChild(bb.element);
        }

        // appends row to container then container to main
        container.appendChild(row);
        main.appendChild(container);


    }
    getNum(x){
        console.log(x);

        if(this.oppUsed == false){
            console.log(x);
            this.mathArr[0] += x;
            console.log(this.mathArr)
            this.txtField.innerHTML = this.mathArr[0];
        }
        else if (x == "="){
            // console.log(x);
            this.calculate();
            console.log(this.mathArr);
        }
        else{
            console.log(x);
            this.mathArr[1] += x;
            console.log(this.mathArr)
            this.txtField.innerHTML = this.mathArr[1];
        }

    }

    mathTime(x){
        if(x == "AC"){
            this.mathArr[0] = "";
            this.mathArr[1] = "";
            this.txtField.innerHTML = "0";
            this.oppUsed = false;
            this.opp = "";
        }
        else{
            this.oppUsed = true;
            this.opp = x;
            console.log(this.opp);
        }
    }

    calculate(){
        if(this.opp == "+"){
            let j = Number.parseInt(this.mathArr[0])
            let y = Number.parseInt(this.mathArr[1]);
            j += y;
            this.mathArr[0] = j.toString();
            this.txtField.innerHTML = this.mathArr[0];
        }
        if(this.opp == "-"){
            let j = Number.parseInt(this.mathArr[0])
            let y = Number.parseInt(this.mathArr[1]);
            j -= y;
            this.mathArr[0] = j.toString();
            this.txtField.innerHTML = this.mathArr[0];
        }
        if(this.opp == "*"){
            let j = Number.parseInt(this.mathArr[0])
            let y = Number.parseInt(this.mathArr[1]);
            j *= y;
            this.mathArr[0] = j.toString();
            this.txtField.innerHTML = this.mathArr[0];
        }
        if(this.opp == "/"){
            let j = Number.parseInt(this.mathArr[0])
            let y = Number.parseInt(this.mathArr[1]);
            j /= y;
            this.mathArr[0] = j.toString();
            this.txtField.innerHTML = this.mathArr[0];
        }
    }
}

// make a button
class makeButton{
    constructor(icon, getNum, mathTime){
        this.icon = icon;
        this.element = null;
        this.doMath = this.doMath.bind(this);
        this.giveNum = this.giveNum.bind(this);
        this.getNum = getNum;
        this.mathTime = mathTime;
    }

    // creates a button
    bake(){
        let col = document.createElement("div");
        
        if (this.icon == "0"){
            col.setAttribute("class", "col-6 number text-center border border-dark");
            col.addEventListener("click", this.giveNum);
        }
        else if (this.icon == "1"||this.icon == "2"||this.icon == "3"||this.icon == "4"||
            this.icon == "5"||this.icon == "6"||this.icon == "7"||this.icon == "8"||this.icon == "9"){
            col.setAttribute("class", "col-3 number text-center border border-dark");
            col.addEventListener("click", this.giveNum);
        }
        else if (this.icon == "="){
            col.setAttribute("class", "col-3 operator text-center border border-dark");
            col.addEventListener("click", this.giveNum);
        }
        else{
            col.setAttribute("class", "col-3 operator text-center border border-dark");
            col.addEventListener("click", this.doMath);
        }
        //console.log(this.icon);
        
        col.setAttribute("id", this.icon);
        let p = document.createElement("P")
        p.innerHTML = this.icon;
        col.appendChild(p);

        this.element = col;
    }

    giveNum(){
        this.getNum(this.icon);
    }

    // check to see if button is correctly targeted
    doMath(){
        // console.log("pressed: " + this.icon);
        this.mathTime(this.icon)
    }
} 

const c = new Calc();
c.view();
    