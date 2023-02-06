function luckyTickets() {
    const start = Date.now();
    let i = 0;
    for (let a1 = 0; a1 <= 9; a1++) {
        for (let a2 = 0; a2 <= 9; a2++) {
            for (let a3 = 0; a3 <= 9; a3++) {
                let left = a1 + a2 + a3;
                for (let a4 = 0; a4 <= 9; a4++) {
                    for (let a5 = 0; a5 <= 9; a5++) {
                        let a6 = left - a4 - a5
                        if (a6>=0 && a6<=9) {
                            i++;
                        }
                    }
                }
            }
        }
    }
    const end = Date.now();
    console.log(i, start-end);
    return i;
}

function luckyTickets2() {
    const start = Date.now();
    let i = 0;
    let b1 =0;
    let b2 =0;
    let b3 =0;
    let c1 =0;
    let c2 =0;
    let c3 =0;

    for (let a1 = 0; a1 < 1000; a1++) {
        if(a1<10) {
            b1 = a1;
        }
        if(a1<100) {
            b2 = Math.floor(a1/10);
            b1 = a1 - (b2 * 10);
        }
        if(a1<1000) {
            b3 = Math.floor(a1/100);
            b2 = Math.floor((a1-(b3*100))/10);
            b1 =a1-((b3*100)+(b2*10));
        }
        for (let a2 = 0; a2 < 1000; a2++) {
            if(a2<10) {
                c1 = a2;
            }
            if(a2<100) {
                c2 = Math.floor(a2/10);
                c1 = a2 - (c2 * 10);
            }
            if(a2<1000) {
                c3 = Math.floor(a2/100);
                c2 = Math.floor((a2-(c3*100))/10);
                c1 =a2-((c3*100)+(c2*10));
            }
            if (b1 + b2 + b3 === c1 + c2 + c3) {  i++; }
        }
    }
    const end = Date.now();
    console.log(i, start-end);
    return i;
}



luckyTickets();
luckyTickets2();

let result = 0;
const n = 3;
function nextDigit(nr, sum1, sum2) {

    if(nr === 2 * n) {
        if(sum1 === sum2) {
            result++;
        }
        return;
    }
    for (let a1 = 0; a1 <= 9; a1++) {
        if(nr < n) {
            nextDigit(nr+1, sum1 + a1, sum2);
        } else {
            nextDigit(nr+1, sum1, sum2 + a1);
        }

    }
}
const start = Date.now();
nextDigit(0, 0, 0);
const end = Date.now();
console.log(result, start - end);
