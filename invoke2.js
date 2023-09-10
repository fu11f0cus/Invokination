let combs = [
  'qqq', 'qqw', 'qqe', 'www', 'wwq', 'wwe', 
  'qwe', 'eee', 'eeq', 'eew',
  'qwq', 'wqq',//10 11 ghostwalk
  'qeq', 'eqq',//12 13 icewall
  'wqw', 'qww',//14 15 tornado
  'wew', 'eww',//16 17 alacrity
  'wqe', 'ewq', 'qew', 'weq', 'eqw',// 18 19 20 21 22 qwe
  'eqe', 'qee',// 23 24 forge
  'ewe', 'wee'//25 26 meteor
];

  //spheres

function invoke(key) {
  let quas = document.createElement("img");
  quas.src = "Quas_icon.webp";

  let wex = document.createElement("img");
  wex.src = "Wex_icon.webp";

  let exort = document.createElement("img");
  exort.src = "Exort_icon.webp";

  let check = document.querySelector("#check");
  let div = document.querySelector("#div");

  //spellsImg

  let ss = document.querySelector("#ss");//sunstrike
  let cs = document.querySelector("#cs");//coldsnap
  let emp = document.querySelector('#emp');//emp
  let tr = document.querySelector('#tr');//tornado
  let fr = document.querySelector('#fr');//forge
  let mt = document.querySelector('#mt');//meteor
  let gw = document.querySelector('#gw');//ghostwalk
  let iw = document.querySelector('#iw');//icewall
  let al = document.querySelector('#al');//alacrity
  let qwe = document.querySelector('#qwe');//qwe

  let invoke = check.value;
  while (invoke.length < 3) {
    let click = document.createElement('audio');
    click.src = 'click.ogg';
    if (key == "q") {
      div.appendChild(quas);
      //click.play();
    }
    if (key == "w") {
      div.appendChild(wex);
      //click.play();
    }
    if (key == "e") {
      div.appendChild(exort);
      //click.play();
    }
    return key == "q" || key == "w" || key == "e";
  }

  if (invoke == combs[0])
   cs.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[3])
   emp.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[7])
   ss.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[4] || invoke == combs[14] || invoke == combs[15])
    tr.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[9] || invoke == combs[25] || invoke == combs[26])
    mt.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[1] || invoke == combs[10] || invoke == combs[11])
    gw.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[8] || invoke == combs[23] || invoke == combs[24])
    fr.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[2] || invoke == combs[12] || invoke == combs[13])
    iw.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (
    invoke == combs[6]  ||
    invoke == combs[18] ||
    invoke == combs[19] ||
    invoke == combs[20] ||
    invoke == combs[21] ||
    invoke == combs[22]
  )
    qwe.style.cssText = "display: flex; animation: scaleanim .3s linear;";

  if (invoke == combs[5] || invoke == combs[16] || invoke == combs[17])
    al.style.cssText = "display: flex; animation: scaleanim .3s linear;";

    /////////////////

  if (invoke.length > 3) {
    check.value = '';
    div.innerHTML = '';
  }

}
function clear2() {
  let spell = document.querySelectorAll('.spell');
  spell.forEach(spel => {
    spel.style.cssText = 'display: none;';
  })
  clearInterval(cron);
  stop();
  writtencombs = [];
}

let clear = document.querySelector("#clear");
clear.onclick = clear2;

let writtencombs = [];
function addarray() {
  let invalue = document.getElementById('check').value;
  if(invalue.length > 3) {
    let slicedvalue = invalue.slice(0, -1);



    if(slicedvalue == 'qqq') {
      writtencombs.push('coldsnap');
    }
    if(slicedvalue == 'wwq' || slicedvalue == 'qww' || slicedvalue == 'wqw') {
      writtencombs.push('tornado');
    }
    if(slicedvalue == 'eew' || slicedvalue == 'wee' || slicedvalue == 'ewe') {
      writtencombs.push('meteor');
    }
    if(slicedvalue == 'qwe' || slicedvalue == 'ewq' || slicedvalue == 'weq' || slicedvalue == 'qew' || slicedvalue == 'wqe') {
      writtencombs.push('qwe');
    }
    if(slicedvalue == 'eee') {
      writtencombs.push('sunstrike');
    }
    if(slicedvalue == 'www') {
      writtencombs.push('EMP');
    }
    if(slicedvalue == 'qqw' || slicedvalue == 'qwq' || slicedvalue == 'wqq') {
      writtencombs.push('ghostwalk');
    }
    if(slicedvalue == 'qqe' || slicedvalue == 'qeq' || slicedvalue == 'eqq') {
      writtencombs.push('icewall');
    }
    if(slicedvalue == 'wwe' || slicedvalue == 'wew' || slicedvalue == 'eww') {
      writtencombs.push('alacrity');
    }
    if(slicedvalue == 'eeq' || slicedvalue == 'qee' || slicedvalue == 'eqe') {
      writtencombs.push('forge');
    }

    let record = document.getElementById('time');

    if(writtencombs.length == 10) {
      record.innerHTML = `time spent - ${m}m:${s}s:${ms}ms`;
      stop();
      clearInterval(cron);
      alert('good!');
    }



    document.getElementById('check').value = '';
    div.innerHTML = '';
    let audio = document.createElement('audio');
    audio.src = 'ulti.ogg';
    //audio.play();
    let comb1 = ['alacrity', 'coldsnap', 'tornado', 'meteor', 'qwe', 'sunstrike'];
    let comb2 = ['alacrity', 'coldsnap', 'tornado', 'EMP', 'meteor', 'qwe', 'sunstrike'];
    if(writtencombs.toString() == comb1.toString() || writtencombs.toString() == comb2.toString()) {
      console.log(writtencombs);
      alert('congratulations!');
      console.log(`time spent - ${m}m:${s}s:${ms}ms`);
      record.innerHTML = `time spent - ${m}m:${s}s:${ms}ms`;
      stop();
      clearInterval(cron);
    }
  }
}


//document.getElementById("check").addEventListener("input", invoke);
document.getElementById("check").addEventListener("input", addarray);

///timer 

let ms = 0; //milisecond
let s = 0;  //second
let m = 0;  //minute
let cron;
check.onclick = () => start();


function start() {
    stop();
    cron = setInterval(() => { timer(); }, 10);
} 

function timer() {
    if((ms += 10) == 1000) {
        ms = 0;
        s++;
    }
    if(s == 60) {
        s = 0;
        m++;
    }
    document.querySelector('#m').innerHTML = m;
    document.querySelector('#s').innerHTML = s;
    document.querySelector('#ms').innerHTML = ms;
}
function stop() {
    ms = 0;
    s = 0;
    m = 0;
    document.querySelector('#m').innerHTML = '00';
    document.querySelector('#s').innerHTML = '00';
    document.querySelector('#ms').innerHTML = '00';
}

let guidebut = document.getElementById('guidebut');
let spellmenu = document.getElementById('spellmenu');
let count = 0;
guidebut.onclick = function() {
  count++;
  if(count == 1) {
    spellmenu.style.cssText = 'display: flex;'
    check.style.cssText = 'display: none;'
    clear.style.cssText = 'display: none;'
    clear2();
  }
  if(count == 2) {
    count = 0;
    spellmenu.style.cssText = 'display: none;'
    check.style.cssText = 'display: block;'
    clear.style.cssText = 'display: block;'
  }
}