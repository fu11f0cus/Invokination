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

function invoke(key) {
    let quas = document.createElement('img');
    quas.src = 'Quas_icon.webp';

    let wex = document.createElement('img');
    wex.src = 'Wex_icon.webp';

    let exort = document.createElement('img');
    exort.src = 'Exort_icon.webp';


    let check = document.querySelector('#check');
    let div = document.querySelector('#div');
    let div2 = document.querySelector('#div2');
    let div3 = document.querySelector('#div3');
    let ss = document.querySelector('#ss');
    let cs = document.querySelector('#cs');
    let invoke = check.value;
    while(invoke.length < 3) {
        if(key == 'q') {
            div.appendChild(quas);
        }
        if(key == 'w') {
            div.appendChild(wex);
        }
        if(key == 'e') {
            div.appendChild(exort);
        }
        return key == 'q' || key == 'w' || key == 'e';
    }
    //let coldsnap = document.createElement('img');
    //coldsnap.src = 'invoker-cold-snap.webp';

    let emp = document.createElement('img');
    emp.src = 'emp_icon.webp';

    //let sunstrike = document.createElement('img');
    //sunstrike.src = 'sunstrike.webp';

    let tornado = document.createElement('img');
    tornado.src = 'tornado.jpg';

    let meteor = document.createElement('img');
    meteor.src = 'meteor.webp';

    let ghostwalk = document.createElement('img');
    ghostwalk.src = 'ghostwalk.webp';

    let forge = document.createElement('img');
    forge.src = 'forge.webp';

    let icewall = document.createElement('img');
    icewall.src = 'icewall.webp';

    let qwe = document.createElement('img');
    qwe.src = 'qwe.jpg';

    let alacrity = document.createElement('img');
    alacrity.src = 'alacrity.webp';
    if(invoke == combs[0]) 
        cs.style.cssText = 'display: flex;';
        //div2.appendChild(coldsnap);

    if(invoke == combs[3])
        div2.appendChild(emp);

    if(invoke == combs[7])
        ss.style.cssText = 'display: flex;';
        //div2.appendChild(sunstrike);

    if(invoke == combs[4] || invoke == combs[14] || invoke == combs[15])
        div2.appendChild(tornado);

    if(invoke == combs[9] || invoke == combs[25] || invoke == combs[26])
        div2.appendChild(meteor);

    if(invoke == combs[1] || invoke == combs[10] || invoke == combs[11])
        div2.appendChild(ghostwalk);

    if(invoke == combs[8] || invoke == combs[23] || invoke == combs[24])
        div2.appendChild(forge);

    if(invoke == combs[2] || invoke == combs[12] || invoke == combs[13])
        div2.appendChild(icewall);

    if(invoke == combs[6] 
        || invoke == combs[18]
        || invoke == combs[19] 
        || invoke == combs[20] 
        || invoke == combs[21] 
        || invoke == combs[22]
        )
        div2.appendChild(qwe);

    if(invoke == combs[5] || invoke == combs[16] || invoke == combs[17])
        div2.appendChild(alacrity);

    if(invoke.length == 4) {
        check.value = '';
        div.innerHTML = '';
        //div2.innerHTML = '';
        //let audio = document.createElement('audio');
        //audio.src = 'test.ogg';
        //audio.play();
    }
    let clear = document.querySelector('#clear');
    clear.onclick = function() {
        div3.innerHTML = '';
    }
}

document.getElementById('check').addEventListener('input', invoke);





/*document.addEventListener('keydown', function(event) {
    let quass = document.createElement('img');
    let wexx = document.createElement('img');
    let exortt = document.createElement('img');
    quass.src = 'Quas_icon.webp';
    wexx.src = 'Wex_icon.webp';
    exortt.src = 'Exort_icon.webp';
    if(event.code == 'KeyQ')
    document.body.appendChild(quass);

    if(event.code == 'KeyW')
    document.body.appendChild(wexx);

    if(event.code == 'KeyE')
    document.body.appendChild(exortt);
})*/

