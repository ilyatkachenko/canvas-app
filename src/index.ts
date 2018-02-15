let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

function app() {
    let blueInput = <HTMLInputElement>document.getElementById("blue-input");
    let blueButton = document.getElementById("blue-button");
    let greenInput = <HTMLInputElement>document.getElementById("green-input");
    let greenButton = document.getElementById("green-button");
    let resultInput = <HTMLInputElement>document.getElementById("result-input");
    let resultButton = document.getElementById("result-button");
    let centerX : number = canvas.width / 2;
    let centerY : number = canvas.height;
    let radius : number = 500;
    let radius2 : number = 440;
    let radius3 : number = 400;
    let radius4 : number = 470;

    canvasBody(centerX, centerY, radius, radius2, radius3, radius4);

    blueButton.addEventListener("click", function () {
        let val: number = parseFloat(blueInput.value);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#532595';
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#472188';
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.closePath();

        blueBar(val);
    });

    greenButton.addEventListener("click", function () {
        let val: number = parseFloat(greenInput.value);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#532595';
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#472188';
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.closePath();

        greenBar(val);
    });

    resultButton.addEventListener("click", function () {
        let val: number = parseFloat(resultInput.value);
        document.getElementById("progressPercent").innerHTML = "0";
        resultBar(val);
    });

    function blueBar(val: number) {
        let width = 0;
        let anim = setInterval(function frame() {
            if (width >= val) {
                clearInterval(anim);
            } else {
                width++;
                let per = (width / 100);
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, -per * Math.PI, true);
                ctx.lineWidth = 28;
                ctx.strokeStyle = '#0196da';
                ctx.setLineDash([4, 2]);
                ctx.stroke();
                ctx.closePath();
            }
        }, 20);
    }

    function greenBar(val: number) {
        let width = 0;
        let anim = setInterval(function frame() {
            if (width >= val) {
                clearInterval(anim);
            } else {
                width++;
                let per = (width / 100) + 1;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius2, Math.PI, per * Math.PI, false);
                ctx.lineWidth = 28;
                ctx.strokeStyle = '#51e4c2';
                ctx.setLineDash([4, 2]);
                ctx.stroke();
                ctx.closePath();
            }
        }, 20);
    }

    function resultBar(val: number) {
        let width = 0;
        let x: number;
        let y: number;

        let anim = setInterval(function frame() {
            if (width >= val) {
                clearInterval(anim);
            } else {
                width++;
                let per = (width / 100) + 0.5;
                let s = -per * Math.PI;
                x = centerX + radius4 * Math.sin(s);
                y = centerY + radius4 * Math.cos(s);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                canvasBody(centerX, centerY, radius, radius2, radius3, radius4);
                ctx.beginPath();
                ctx.arc(x, y, 25, 0, 2 * Math.PI, true);
                ctx.fillStyle = "#fda803";
                ctx.fill();
                ctx.closePath();
                document.getElementById("progressPercent").innerHTML = `${width}`;
            }
        }, 20);
    }
}

function canvasBody(centerX : number, centerY : number, radius : number, radius2 : number, radius3 : number, radius4 : number) {
    ctx.fillStyle = "#6d2eb3";
    ctx.fillRect(0, 0, 1500, 875);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#532595';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#532595';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#472188';
    ctx.setLineDash([2, 4]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius2, 0, 1 * Math.PI, true);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#472188';
    ctx.setLineDash([2, 4]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius3, 0, 1 * Math.PI, true);
    ctx.fillStyle = "#442175";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius4, 0, 1 * Math.PI, true);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#472188';
    ctx.setLineDash([0, 0]);
    ctx.stroke();
    ctx.closePath();
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    app();
}
