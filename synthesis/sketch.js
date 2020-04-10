var a;
var a2;
var b;
var c;
var ci;
var cz;
var ch;
var c2;
var d;
var e;
var e2;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var l2;
var m;
var n;
var ni;
var n2;
var o;
var o2;
var p;
var q;
var r;
var rz;
var s;
var si;
var sz;
var s2;
var t;
var u;
var v;
var w;
var x;
var y;
var z;
var zi;
var z2;
var z3;
var space;
var comma;
var dot;


function preload() {
  a = loadSound("../sounds/a.mp3");
  a2 = loadSound("../sounds/ą.mp3");
  b = loadSound("../sounds/b.mp3");
  c = loadSound("../sounds/c.mp3");
  ci = loadSound("../sounds/ci.mp3");
  cz = loadSound("../sounds/cz.mp3");
  ch = loadSound("../sounds/ch.mp3");
  c2 = loadSound("../sounds/ć.mp3");
  d = loadSound("../sounds/d.mp3");
  e = loadSound("../sounds/e.mp3");
  e2 = loadSound("../sounds/ę.mp3");
  f = loadSound("../sounds/f.mp3");
  g = loadSound("../sounds/g.mp3");
  h = loadSound("../sounds/h.mp3");
  i = loadSound("../sounds/i.mp3");
  j = loadSound("../sounds/j.mp3");
  k = loadSound("../sounds/k.mp3");
  l = loadSound("../sounds/l.mp3");
  l2 = loadSound("../sounds/ł.mp3");
  m = loadSound("../sounds/m.mp3");
  n = loadSound("../sounds/n.mp3");
  ni = loadSound("../sounds/ni.mp3");
  n2 = loadSound("../sounds/ń.mp3");
  o = loadSound("../sounds/o.mp3");
  o2 = loadSound("../sounds/ó.mp3");
  p = loadSound("../sounds/p.mp3");
  q = loadSound("../sounds/q.mp3");
  r = loadSound("../sounds/r.mp3");
  rz = loadSound("../sounds/rz.mp3");
  s = loadSound("../sounds/s.mp3");
  si = loadSound("../sounds/si.mp3");
  sz = loadSound("../sounds/sz.mp3");
  s2 = loadSound("../sounds/ś.mp3");
  t = loadSound("../sounds/t.mp3");
  u = loadSound("../sounds/u.mp3");
  v = loadSound("../sounds/v.mp3");
  w = loadSound("../sounds/w.mp3");
  x = loadSound("../sounds/x.mp3");
  y = loadSound("../sounds/y.mp3");
  z = loadSound("../sounds/z.mp3");
  zi = loadSound("../sounds/zi.mp3");
  z2 = loadSound("../sounds/ź.mp3");
  z3 = loadSound("../sounds/ż.mp3");
  space = loadSound("../sounds/spacja.mp3");
  comma = loadSound("../sounds/przecinek.mp3");
  dot = loadSound("../sounds/kropka.mp3");


}



async function say() {
  index = 0;
  var txt = document.getElementById("text").value.toString().toLowerCase();
  // var text_to_say = "";
  var text_to_say = txt;
  // for (var idx = 0; idx < txt.length; idx++) {
  //   if (idx == txt.length - 1) text_to_say += "i " + txt.slice(idx, txt.length) + " ";
  //   else
  //     text_to_say += txt.slice(idx, txt.length) + ", ";
  // }


  console.log(text_to_say);
  for (var idx = 0; idx < text_to_say.length; idx++) {
    switch (text_to_say.charAt(idx)) {
      case "a":
        a.play();
        await sleep(a.duration());
        break;
      case "ą":
        a2.play();
        await sleep(a2.duration());
        break;
      case "b":
        b.play();
        await sleep(b.duration());
        break;
      case "c":
        if (idx + 1 < text_to_say.length) {
          if (text_to_say.charAt(idx + 1) == "i") {
            ci.play();
            await sleep(ci.duration());
            idx++;
          } else if (text_to_say.charAt(idx + 1) == "h") {
            ch.play();
            await sleep(ch.duration());
            idx++;
          } else if (text_to_say.charAt(idx + 1) == "z") {
            cz.play();
            await sleep(cz.duration());
            idx++;
          } else {
            c.play();
            await sleep(c.duration());
          }
        } else {
          c.play();
          await sleep(c.duration());
        }
        break;
      case "ć":
        c2.play();
        await sleep(c2.duration());
        break;
      case "d":
        d.play();
        await sleep(d.duration());
        break;
      case "e":
        e.play();
        await sleep(e.duration());
        break;
      case "ę":
        e2.play();
        await sleep(e2.duration());
        break;
      case "f":
        f.play();
        await sleep(f.duration());
        break;
      case "g":
        g.play();
        await sleep(g.duration());
        break;
      case "h":
        h.play();
        await sleep(h.duration());
        break;
      case "i":
        i.play();
        await sleep(i.duration());
        break;
      case "j":
        j.play();
        await sleep(j.duration());
        break;
      case "k":
        k.play();
        await sleep(k.duration());
        break;
      case "l":
        l.play();
        await sleep(l.duration());
        break;
      case "ł":
        l2.play();
        await sleep(l2.duration());
        break;
      case "m":
        m.play();
        await sleep(m.duration());
        break;
      case "n":
        if (idx + 1 < text_to_say.length) {
          if (text_to_say.charAt(idx + 1) == "i") {
            ni.play();
            await sleep(ni.duration());
            idx++;
          } else {
            n.play();
            await sleep(n.duration());
          }

        } else {
          n.play();
          await sleep(n.duration());
        }
        break;
      case "ń":
        n2.play();
        await sleep(n2.duration());
        break;
      case "o":
        o.play();
        await sleep(o.duration());
        break;
      case "ó":
        o2.play();
        await sleep(o2.duration());
        break;
      case "p":
        p.play();
        await sleep(p.duration());
        break;
      case "q":
        q.play();
        await sleep(q.duration());
        break;
      case "r":
        if (idx + 1 < text_to_say.length) {
          if (text_to_say.charAt(idx + 1) == "z") {
            rz.play();
            await sleep(rz.duration());
            idx++;
          } else {
            r.play();
            await sleep(r.duration());
          }

        } else {
          r.play();
          await sleep(r.duration());
        }
        break;
      case "s":
        if (idx + 1 < text_to_say.length) {
          if (text_to_say.charAt(idx + 1) == "i") {
            si.play();
            await sleep(si.duration());
            idx++;
          } else if (text_to_say.charAt(idx + 1) == "z") {
            sz.play();
            await sleep(sz.duration());
            idx++;
          } else {
            s.play();
            await sleep(s.duration());
          }
        } else {
          s.play();
          await sleep(s.duration());
        }
        break;
      case "ś":
        s2.play();
        await sleep(s2.duration());
        break;
      case "t":
        t.play();
        await sleep(t.duration());
        break;
      case "u":
        u.play();
        await sleep(u.duration());
        break;
      case "v":
        v.play();
        await sleep(v.duration());
        break;
      case "w":
        w.play();
        await sleep(w.duration());
        break;
      case "x":
        x.play();
        await sleep(x.duration());
        break;
      case "y":
        y.play();
        await sleep(y.duration());
        break;
      case "z":
        if (idx + 1 < text_to_say.length) {
          if (text_to_say.charAt(idx + 1) == "i") {
            zi.play();
            await sleep(zi.duration());
            idx++;
          } else {
            z.play();
            await sleep(z.duration());
          }
        } else {
          z.play();
          await sleep(z.duration());
        }
        break;
      case "ź":
        z2.play();
        await sleep(z2.duration());
        break;
      case "ż":
        z3.play();
        await sleep(z3.duration());
        break;
      case " ":
        space.play();
        await sleep(space.duration());
        break;
      case ",":
        comma.play();
        await sleep(comma.duration());
        break;
      case ".":
        dot.play();
        await sleep(dot.duration());
        break;
      case "!":
        dot.play();
        await sleep(dot.duration());
        break;
      case "?":
        dot.play();
        await sleep(dot.duration());
        break;
      case ";":
        dot.play();
        await sleep(dot.duration());
        break;
      case ":":
        dot.play();
        await sleep(dot.duration());
        break;
      case "\n":
        dot.play();
        await sleep(dot.duration());
        break;

    }
  }

}

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, (s * 1000) - 55));
}

function setup() {
  // put setup code here
}