
class Calc{
    constructor(){
        // array of icons to use for buttons icon and id
        this.iconArr = ["AC","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="]; 
        this.numArr = [0];
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
        let txtField = document.createElement("div");
        txtField.setAttribute("class","col-12 text-right border border-dark");
        txtField.innerHTML = this.numArr[0];

        // appends txtfield
        row.appendChild(txtField);

        // loops through icons to create buttons
        for (var i = 0; i < this.iconArr.length; i++) {
            console.log(i);
            let bb = new makeButton(this.iconArr[i]);
            bb.bake();
            row.appendChild(bb.element);
        }

        // appends row to container then container to main
        container.appendChild(row);
        main.appendChild(container);



    }

}

// make a button
class makeButton{
    constructor(icon){
        this.icon = icon;
        this.element = null;
        this.doSomething = this.doSomething.bind(this);
    }

    // need a method for operators and one for numbers
    // creates a button
    bake(){
        let col = document.createElement("div");
        col.setAttribute("class", "col-3 text-center border border-dark");
        col.setAttribute("id", this.icon);
        //console.log(this.icon);
        let p = document.createElement("P")
        p.innerHTML = this.icon;
        col.appendChild(p);
        col.addEventListener("click", this.doSomething);
        this.element = col;
    }

    // check to see if button is correctly targeted
    doSomething(){
        console.log("pressed: " + this.icon);
    }
} 

const c = new Calc();
c.view();
    