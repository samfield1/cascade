$wnd.jsme.runAsyncCallback8('var n7="!a",o7=\'" fill="\',p7="M",q7="r";function r7(a){var b;b=a.K.c*s7(a.G);a.R=0.06*b;a.M=0.15*b;a.L=0.38*b;a.P=0.47*b;a.Q=I(0.6*b*a.E+0.5);a.O=0.12*b;a.S=0.4*b;a.y=0.5*b+0.5}\nfunction t7(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new u7;v7(a.G,sq(a.G,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);w7(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;x7(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;x7(a,e);w7(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;x7(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;x7(a,e);w7(a,a.J)}\nfunction y7(a,b,c,d){if(v7(a.G,sq(a.G,c,d)))w7(a,-3),x7(a,b),w7(a,a.J);else if(a.r[c]!=a.r[d]){var e,f;e=new u7;f=new u7;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;z7(a,e)&&(w7(a,a.r[c]),x7(a,e));z7(a,f)&&(w7(a,a.r[d]),x7(a,f));w7(a,a.J)}else 0!=a.r[c]?(w7(a,a.r[c]),x7(a,b),w7(a,a.J)):x7(a,b)}\nfunction A7(a,b){var c;for(c=0;c<a.T.c;++c)a.w=B7(a.w,io(a.T,c));var d,e,f,g,h;d=C(Yn,Zm,-1,a.G.o,2);for(c=0;c<a.G.p;++c)0!=(a.G.z[c]&131072)&&(d[D(a.G,0,c)]=!0,d[D(a.G,1,c)]=!0);f=new WK;for(c=0;c<a.G.o;++c)e=0!=(a.G.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=C7(a.K,uo(a.G,c)),h=D7(a.K,vo(a.G,c)),iK(f,g-e,h-e,2*e,2*e),a.w=B7(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction E7(a,b){var c,d;if(0!=(a.B&128))return a.r[b];d=F7(a,b);if(-1==d){c=a.G;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=F7(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction F7(a,b){var c,d,e;d=e=-1;if(0!=(a.B&128))return-1;0!=(a.G.s[b]&134217728)&&(e=Tp(a.G,b),d=Up(a.G,b));c=tp(a.G,b);-1!=c&&(e=~~(a.G.z[c]&3072)>>10,d=Vp(a.G,c));-1!=e&&0!=e&&(e|=d<<8);return e}function G7(a,b){var c;if(0==eo(a.G,b))return!1;for(c=0;c<eo(a.G,b);++c)if(!v7(a.G,ao(a.G,b,c)))return!1;return!0}function H7(a){var b;a.s=C(Yn,Zm,-1,a.G.o,2);for(b=0;b<a.G.p;++b)a.s[D(a.G,0,b)]=!0,a.s[D(a.G,1,b)]=!0}\nfunction I7(a,b,c,d,e){var f,g,h,j,l,n,q;n=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=Co(a.G,b,c);for(j=0;j<a.G.f[b];++j)g=ao(a.G,b,j),h=q,D(a.G,0,g)==b?l=D(a.G,1,g):l=D(a.G,0,g),l!=c&&(g=Co(a.G,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(n=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.M*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(n=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.M*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return n}function J7(a,b,c,d){0==b?(0>c?d.a=a.M:d.a=-a.M,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.M*Math.sin(c)),d.b=a.M*Math.cos(c))}\nfunction K7(a,b,c,d){var e,f,g,h,j,l,n,q;e=new u7;h=new u7;l=new UK;j=new UK;f=D(a.G,0,c);g=D(a.G,1,c);d&&(n=b.a,b.a=b.b,b.b=n,n=b.c,b.c=b.d,b.d=n,n=f,f=g,g=n);if(z7(a,b))if(yo(a.G,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-L7(a,c):L7(a,c);0==d&&(d=1);J7(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,I7(a,f,g,1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,I7(a,f,g,-1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.G.B[c]&&\nM7(e,h);z7(a,e)&&y7(a,e,f,g);64==a.G.B[c]?z7(a,h)&&t7(a,h,f,g):z7(a,h)&&y7(a,h,f,g)}else{J7(a,b.b-b.a,b.d-b.c,l);n=l.a/2;q=l.b/2;d=!1;e.a=b.a+n;e.c=b.c+q;e.b=b.b+n;e.d=b.d+q;if(1<a.G.f[f])if(I7(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new N7(e.a,e.c);h.a=b.a-n;h.c=b.c-q;h.b=b.b-n;h.d=b.d-q;if(1<a.G.f[f])if(I7(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new N7(h.a,h.c),d=!0;26==a.G.B[c]&&M7(e,h);64==\na.G.B[c]?d?(t7(a,e,f,g),y7(a,h,f,g)):(y7(a,e,f,g),t7(a,h,f,g)):(y7(a,e,f,g),y7(a,h,f,g))}}\nfunction O7(a,b){var c,d,e,f,g,h,j,l,n,q,r,t;a.F||(r=D7(a.K,vo(a.G,b)),r=\'<circle id="\'+(null!=a.k?a.k:Vj+P7)+":Atom:"+b+\'" class="event" cx="\'+I(100*C7(a.K,uo(a.G,b)))/100+Da+I(100*r)/100+\'" r="8" fill-opacity="0"/>\',bq(a.b,r));h=null;0!=a.G.q[b]&&(r=1==ir(a.G.q[b])?m:m+ir(a.G.q[b]),h=0>a.G.q[b]?r+hc:r+Sb);g=null;r=a.G.w[b];0!=r&&(0!=(r&2)&&(g=yh),0!=(r&4)&&(g=null==g?n7:g+",!a"),0!=(r&4096)&&(g=null==g?bl:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?di:g+",c":8==e?g=null==g?q7:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+(~~(r&29360128)>>\n22):g+",rs"+(~~(r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.G.v[b]&&(g=null==g?m+a.G.v[b]:g+$b+(m+a.G.v[b]));r=0;if(0!=(a.G.s[b]&48))switch(a.G.s[b]&48){case 16:h=null==h?gm:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.B&64))if(0!=(a.G.s[b]&67108864))e=Xd;else if(0!=~~(a.G.s[b]&98304)>>15)if(2==a.G.f[b])switch(~~(a.G.s[b]&98304)>>15){case 2:e=0!=(a.G.s[b]&4)?yk:ng;break;case 1:e=0!=(a.G.s[b]&4)?Dj:p7;break;default:e=Rb}else switch(~~(a.G.s[b]&98304)>>15){case 1:e=\n0!=(a.G.s[b]&4)?q7:vg;break;case 2:e=0!=(a.G.s[b]&4)?bl:Jg;break;default:e=Rb}0!=(a.B&1792)&&(e=null==e?m+(null==a.G.b.d?-1:a.G.b.d[b]):e+$b+(m+(null==a.G.b.d?-1:a.G.b.d[b])));n=null;0!=(a.B&16)&&0!=ir(a.G.u[b])&&(n=m+ir(a.G.u[b]));l=null;a:{j=a.G;Xn(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<eo(j,j.e[b][d]);++c){if(Hq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(Hq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=F7(a,\nb),-1!=j&&(l=0==j?zh:(1==(j&255)?Cb:vk)+(1+(~~j>>8))));j=0;a.G.E?((6!=a.G.x[b]||!a.s[b])&&0!=(a.G.w[b]&2048)&&0!=a.G.q[b]||0!=(a.G.s[b]&48))&&(j=ip(a.G,b)):(6!=a.G.x[b]||!a.s[b]||0!=(a.G.s[b]&48))&&(j=ip(a.G,b));c=Pp(a.G,b);if(null!=c)j=0;else if(null!=Ep(a.G,b)){d=0!=(a.G.w[b]&1)?"[!":nh;c=a.G;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?m:Iq[c.x[b]];else{t=m;for(q=0;q<c.t[b].length;++q)0<q&&(t+=$b),f=c.t[b][q],t+=Iq[f];c=t}c=d+c+vh;5<c.length&&(c=d+Ep(a.G,b).length+vh);0!=(a.G.w[b]&2048)&&(j=-1)}else 0!=\n(a.G.w[b]&1)?(c=Xd,0!=(a.G.w[b]&2048)&&(j=-1)):(6!=a.G.x[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=Iq[a.G.x[b]]);d=0;!Sp(a.G,b)&0!=(a.G.w[b]&536870912)&&w7(a,-8);if(null!=c)d=Q7(a,c),R7(a,C7(a.K,uo(a.G,b)),D7(a.K,vo(a.G,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.G.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.G.j[b][c]){c=!1;break a}c=!0}c&&(c=C7(a.K,uo(a.G,b)),f=D7(a.K,vo(a.G,b)),bq(a.T,new XK(c-a.O,f-a.O,2*a.O,2*a.O)),a.F||bq(a.N,new S7(c,f,G7(a,b)?-3:a.r[b])))}null!=h&&(T7(a,~~((2*a.Q+1)/3)),f=C7(a.K,uo(a.G,b))+\n((d+Q7(a,h))/2+1),c=D7(a.K,vo(a.G,b))-~~((4*a.o-4)/8),R7(a,f,c,h,!0),T7(a,a.Q));0!=(a.B&2)&&(g=m+b);null!=g&&(T7(a,~~((2*a.Q+1)/3)),f=C7(a.K,uo(a.G,b))-(d+Q7(a,g))/2,c=D7(a.K,vo(a.G,b))-~~((4*a.o-4)/8),R7(a,f,c,g,!0),T7(a,a.Q));null!=e&&(T7(a,~~((2*a.Q+1)/3)),f=C7(a.K,uo(a.G,b))-(d+Q7(a,e))/2,c=D7(a.K,vo(a.G,b))+~~((4*a.o+4)/8),q=a.z,w7(a,448),R7(a,f,c,e,!1),w7(a,q),T7(a,a.Q));null!=n&&(T7(a,~~((2*a.Q+1)/3)),f=C7(a.K,uo(a.G,b))+((d+Q7(a,n))/2+1),c=D7(a.K,vo(a.G,b))+~~((4*a.o+4)/8),q=a.z,w7(a,0>a.G.u[b]?\n384:448),R7(a,f,c,n,!0),w7(a,q),T7(a,a.Q));if(null!=l){var A,u;c=C(to,Sm,-1,eo(a.G,b),1);for(f=0;f<eo(a.G,b);++f)c[f]=Co(a.G,b,bo(a.G,b,f));jp(c);q=U7(c,0);t=V7(c,0,q);for(f=1;f<c.length;++f)A=U7(c,f),u=V7(c,f,A),t<u&&(t=u,q=A);c=q;T7(a,~~((2*a.Q+1)/3));f=C7(a.K,uo(a.G,b))+0.7*a.o*Math.sin(c);c=D7(a.K,vo(a.G,b))+0.7*a.o*Math.cos(c);q=a.z;w7(a,E7(a,b));R7(a,f,c,l,!1);w7(a,q);T7(a,a.Q)}if(!(0==j&&0==r)){l=C(to,Sm,-1,4,1);for(c=0;c<eo(a.G,b);++c){f=ao(a.G,b,c);for(q=0;2>q;++q)D(a.G,q,f)==b&&(t=Co(a.G,\nD(a.G,q,f),D(a.G,1-q,f)),-1.5707963267948966>t?(l[0]-=t+1.5707963267948966,l[3]+=t+3.141592653589793):0>t?(l[2]+=t+1.5707963267948966,l[3]-=t):1.5707963267948966>t?(l[1]+=t,l[2]+=1.5707963267948966-t):(l[0]+=t-1.5707963267948966,l[1]+=3.141592653589793-t))}0==a.G.f[b]?xr(a.G.x[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=n)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=m;0!=j&&(f=Q7(a,vf),n=0,-1==j?(e=fk,T7(a,~~((2*a.Q+1)/3)),n=Q7(a,e)):1<j&&(e=m+j,T7(a,~~((2*a.Q+1)/3)),n=Q7(a,e)),0.6>l[1]||0.6>\nl[3]?(h=D7(a.K,vo(a.G,b)),l[1]<=l[3]?(l[1]+=10,g=C7(a.K,uo(a.G,b))+(d+f)/2):(l[3]+=10,g=C7(a.K,uo(a.G,b))-(d+f)/2-n)):(g=C7(a.K,uo(a.G,b)),l[0]<l[2]?(l[0]+=10,h=D7(a.K,vo(a.G,b))-a.o):(l[2]+=10,h=D7(a.K,vo(a.G,b))+a.o)),0<n&&(c=h+~~((4*a.o+4)/8),R7(a,g+(f+n)/2,c,e,!0),T7(a,a.Q)),R7(a,g,h,vf,!0));e=0;if(0!=r){n=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<n?(e=c,n=l[c],g=l[h]):l[c]==n&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=C7(a.K,uo(a.G,b));h=D7(a.K,vo(a.G,b))-a.O-d/2;break;case 1:g=C7(a.K,uo(a.G,b))+\na.O+d/2;h=D7(a.K,vo(a.G,b));break;case 2:g=C7(a.K,uo(a.G,b));h=D7(a.K,vo(a.G,b))+a.O+d/2;break;default:g=C7(a.K,uo(a.G,b))-a.O-d/2,h=D7(a.K,vo(a.G,b))}if(1==r)bq(a.T,new XK(g-a.O,h-a.O,2*a.O,2*a.O)),a.F||bq(a.N,new S7(g,h,G7(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.O;e=0;g-=a.O;break;case 1:r=0;e=2*a.O;h-=a.O;break;default:r=0,e=2*a.O,h-=a.O}bq(a.T,new XK(g-a.O,h-a.O,2*a.O,2*a.O));a.F||bq(a.N,new S7(g,h,G7(a,b)?-3:a.r[b]));bq(a.T,new XK(g+r-a.O,h+e-a.O,2*a.O,2*a.O));a.F||bq(a.N,new S7(g+\nr,h+e,G7(a,b)?-3:a.r[b]))}}}-8==a.z&&w7(a,-9)}\nfunction W7(a,b){var c,d,e,f,g,h,j,l,n,q,r,t;n=new u7;c=new u7;f=new u7;j=new UK;h=new UK;d=D(a.G,0,b);e=D(a.G,1,b);var A=D7(a.K,vo(a.G,d)),u=C7(a.K,uo(a.G,e)),w=D7(a.K,vo(a.G,e)),A=\'<line id="\'+(null!=a.k?a.k:Vj+P7)+":Bond:"+d+hc+e+\'" class="event" x1="\'+I(100*C7(a.K,uo(a.G,d)))/100+Ra+I(100*A)/100+Qa+I(100*u)/100+Sa+I(100*w)/100+\'" stroke-width="8" stroke-opacity="0"/>\';bq(a.c,A);!Sp(a.G,d)&&!Sp(a.G,e)&&0!=((a.G.w[d]|a.G.w[e])&536870912)&&w7(a,-8);a.q[d]?(n.a=a.q[d].a,n.c=a.q[d].b):(n.a=C7(a.K,\nuo(a.G,d)),n.c=D7(a.K,vo(a.G,d)));a.q[e]?(n.b=a.q[e].a,n.d=a.q[e].b):(n.b=C7(a.K,uo(a.G,e)),n.d=D7(a.K,vo(a.G,e)));if(0!=(a.G.A[b]&16320))z7(a,n)&&(g=m+I(100*n.a)/100,l=m+I(100*n.b)/100,q=m+I(100*n.c)/100,r=m+I(100*n.d)/100,t=\'<line stroke-dasharray="3, 3" x1="\'+g+Ra+q+Qa+l+Sa+r+Na+a.e+\'" stroke-width:\'+I(100*a.n)/100+Va,X7(a,t)),w7(a,-9);else{g=64==a.G.B[b]?0:32==a.G.B[b]?1:fo(a.G,b);switch(g){case 1:switch(a.G.B[b]){case 1:z7(a,n)&&y7(a,n,d,e);break;case 17:Y7(a,n,d,e);break;case 9:h=n.b-n.a;j=\nn.d-n.c;v7(a.G,sq(a.G,d,e))?f=e=-3:(e=a.r[d],f=E7(a,d),e==(a.G.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=n.a+d*h/17-d*j/128,c.c=n.c+d*j/17+d*h/128,c.b=n.a+d*h/17+d*j/128,c.d=n.c+d*j/17-d*h/128,z7(a,c)&&(w7(a,9>d?e:f),x7(a,c),w7(a,a.J));break;case 32:if(z7(a,n)){f=n.b-n.a;j=n.d-n.c;c=Math.sqrt(f*f+j*j);c=2*J(L(N(c/(4*a.R))));f/=c-1;j/=c-1;v7(a.G,sq(a.G,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=n.a-a.R/2;n=n.c-a.R/2;w7(a,d);for(d=0;d<~~(c/2);++d)Z7(a,h,n,a.R),h+=f,n+=j;w7(a,e);for(d=0;d<~~(c/2);++d)Z7(a,h,n,\na.R),h+=f,n+=j;w7(a,a.J)}}break;case 0:case 2:if((a.t[d]||2==a.G.k[d])&&(a.t[e]||2==a.G.k[e])&&!yo(a.G,b)&&2==g){if(!z7(a,n))break;J7(a,n.b-n.a,n.d-n.c,j);h=j.a/2;j=j.b/2;c.a=n.a+h;c.c=n.c+j;c.b=n.b+h;c.d=n.d+j;f.a=n.a-h;f.c=n.c-j;f.b=n.b-h;f.d=n.d-j;26==a.G.B[b]&&M7(c,f);y7(a,c,d,e);y7(a,f,d,e)}else if((a.t[e]||2==a.G.k[e])&&2==g)K7(a,n,b,!1);else if((a.t[d]||2==a.G.k[d])&&2==g)K7(a,n,b,!0);else{l=L7(a,b);0==l&&(l=1);c.a=n.a;c.c=n.c;c.b=n.b;c.d=n.d;J7(a,n.b-n.a,n.d-n.c,j);if(0<l){f.a=n.a+j.a;f.c=\nn.c+j.b;f.b=n.b+j.a;f.d=n.d+j.b;if(I7(a,d,e,1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(I7(a,e,d,-1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=n.a-j.a;f.c=n.c-j.b;f.b=n.b-j.a;f.d=n.d-j.b;if(I7(a,d,e,-1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(I7(a,e,d,1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.G.B[b]&&M7(c,f);z7(a,c)&&y7(a,c,d,e);2==g?z7(a,f)&&y7(a,f,d,e):z7(a,f)&&t7(a,f,d,e)}break;case 3:z7(a,n)&&(y7(a,n,d,e),J7(a,n.b-n.a,n.d-n.c,j),c.a=n.a+j.a,c.c=n.c+j.b,c.b=n.b+j.a,c.d=n.d+j.b,\ny7(a,c,d,e),c.a=n.a-j.a,c.c=n.c-j.b,c.b=n.b-j.a,c.d=n.d-j.b,y7(a,c,d,e))}-8==a.z&&w7(a,-9)}}function R7(a,b,c,d,e){var f;e&&(e=Q7(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Sb||d==hc)&&(f=2*f/3),bq(a.T,new XK(b-e,c-f,2*e,2*f)));a.F||$7(a,d,b,c)}function a8(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction V7(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function b8(a){var b;b=new WK;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function U7(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction Y7(a,b,c,d){var e,f,g;g=new u7;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=b8(g);for(b=0;b<a.T.c;++b)if(e=io(a.T,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(c8(a,g.a,g.c,b)){if(c8(a,g.b,g.d,b))return;d8(a,g,0,b);Y7(a,g,c,d);return}if(c8(a,g.b,g.d,b)){d8(a,g,1,b);Y7(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(to,Sm,-1,3,1);e=C(to,Sm,-1,3,1);f=C(to,Sm,-1,4,1);h=C(to,Sm,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];v7(a.G,sq(a.G,c,d))?g=d=-3:(d=a.r[c],g=E7(a,c),d==(a.G.s[c]&448)&&(d=g));w7(a,d);a.Bd(b,e,3);w7(a,g);a.Bd(f,h,4);w7(a,a.J)}}function c8(a,b,c,d){if(0!=(a.B&1))return!1;a=io(a.T,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function M7(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction L7(a,b){var c,d,e,f,g,h,j,l,n,q;j=C(Yn,Zm,-1,16,2);l=C(Yn,Zm,-1,16,2);c=C(to,Sm,-1,16,1);f=C(to,Sm,-1,2,1);for(h=d=0;2>h;++h){e=D(a.G,h,b);for(n=0;n<a.G.f[e];++n)if(g=ao(a.G,e,n),g!=b){if(4==d)return 0;j[d]=so(a.G,g);l[d]=yo(a.G,g);c[d++]=Co(a.G,e,bo(a.G,e,n))}}f[0]=Co(a.G,D(a.G,0,b),D(a.G,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction z7(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.T.c;++d)if(e=io(a.T,d),gK(e,b.a,b.c))return!1;return!0}f=b8(b);c=!1;b.a>b.b&&(a8(b),c=!0);for(d=0;d<a.T.c;++d)if(e=io(a.T,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(c8(a,b.a,b.c,d)){if(c8(a,b.b,b.d,d))return c&&a8(b),!1;d8(a,b,0,d);d=z7(a,b);c&&a8(b);return d}if(c8(a,b.b,b.d,d))return d8(a,b,1,d),d=z7(a,b),c&&a8(b),d}c&&a8(b);return!0}\nfunction d8(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=io(a.T,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction e8(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+b.b-c;break}case 0:a.x.a=a.w.d+a.w.c/2;a.x.b=a.w.e+a.w.b+c;b&&a.x.b>b.e+b.b-c&&(a.x.b=b.e+b.b-c);break;case 524288:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+c;break}case 262144:a.x.a=a.w.d+a.w.c/2,a.x.b=a.w.e-c,b&&a.x.b<b.e+c&&(a.x.b=b.e+c)}}\nfunction w7(a,b){if(!a.F&&(-10==b&&(a.z=-999,b=a.J),!(b==a.z||-8==a.z&&-9!=b)))switch(-8==b&&(a.I=a.z),-9==b&&(b=a.I),a.z=b,b){case 0:a.Cd((bJ(),jJ));break;case -6:a.Cd(a.A);break;case -4:a.Cd(a.H);break;case -2:a.Cd(a.u);break;case -3:a.Cd(a.v);break;case -7:a.Cd(a.C);break;case -8:a.Cd(a.D);break;case 64:a.Cd(Pn);break;case 128:a.Cd(Qn);break;case 256:a.Cd(Sn);break;case 192:a.Cd(Rn);break;case 320:a.Cd(Tn);break;case 384:a.Cd(Un);break;case 448:a.Cd(Vn);break;case 1:a.Cd((bJ(),gJ));break;default:a.Cd((bJ(),\njJ))}}function f8(a){var b,c,d,e,f;e=C7(a.K,a.G.D[0].a);c=C7(a.K,a.G.D[0].a);f=D7(a.K,a.G.D[0].b);d=D7(a.K,a.G.D[0].b);for(b=0;b<a.G.o;++b)e>C7(a.K,uo(a.G,b))&&(e=C7(a.K,uo(a.G,b))),c<C7(a.K,uo(a.G,b))&&(c=C7(a.K,uo(a.G,b))),f>D7(a.K,vo(a.G,b))&&(f=D7(a.K,vo(a.G,b))),d<D7(a.K,vo(a.G,b))&&(d=D7(a.K,vo(a.G,b)));a.w=new XK(e,f,c-e,d-f)}x(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.x=null;_.y=0;_.z=0;_.A=null;_.B=0;_.C=null;_.D=null;_.E=0;_.F=!1;_.G=null;_.H=null;_.I=0;_.J=0;_.K=null;\n_.L=0;_.M=0;_.N=null;_.O=0;_.P=0;_.Q=0;_.R=0;_.S=0;_.T=null;function S7(a,b,c){this.b=a;this.c=b;this.a=c}x(4,1,{},S7);_.a=0;_.b=0;_.c=0;function u7(){}x(5,1,{},u7);_.a=0;_.b=0;_.c=0;_.d=0;function g8(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function h8(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function C7(a,b){return b*a.c+a.a}function D7(a,b){return b*a.c+a.b}function i8(){this.b=this.a=0;this.c=1}\nfunction j8(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}x(19,1,{},i8,j8);_.tS=function(){return"DepictorTransformation Offset: "+this.a+$b+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function s7(a){return Vq(a,a.o,a.p,24)}function v7(a,b){return 0!=(a.z[b]&262144)}\nfunction x7(a,b){var c,d,e,f;c=m+I(100*b.a)/100;d=m+I(100*b.b)/100;e=m+I(100*b.c)/100;f=m+I(100*b.d)/100;c=Rd+c+Ra+e+Qa+d+Sa+f+\'" style="stroke:\'+a.e+";stroke-width:"+I(100*a.n)/100+Va;X7(a,c)}function $7(a,b,c,d){Q7(a,b);b=Ud+I(100*c)/100+\'" text-anchor="middle" y="\'+I(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+o7+a.e+Ya+b+Qd;X7(a,b)}function Z7(a,b,c,d){b=\'<circle cx="\'+I(100*b)/100+Da+I(100*c)/100+\'" r="\'+I(100*d)/100+o7+a.e+\'" />\';X7(a,b)}\nfunction Q7(a,b){var c;c=fS();if(-1<c&&9>c)return!a.i&&(a.i=($H(),new aI(a.f))),c=sK(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=k8;e||(k8=e=$doc.createElement("canvas"));d=m+d.b+Kk+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new XK(0,0,c.width,0)).c}function T7(a,b){a.o!=b&&(a.o=b,a.f=new PJ(xf,0,b))}\nfunction l8(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:Vj+P7)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Gd(ca)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ca+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:Vj+P7)+" {pointer-events:none; }  #"+(null!=a.k?a.k:Vj+P7)+" .event  { pointer-events:all;}  <\/style>\\n";d+=aa;d+=b;for(c=new gq(a.c);c.b<c.d.xg();)b=hq(c),X7(a,b);for(c=new gq(a.b);c.b<c.d.xg();)b=hq(c),X7(a,b);return d+a.Fd(aa)+a.d.a.a+Pd}\nfunction X7(a,b){Lr(a.d,aa);Lr(a.d,b);Lr(a.d,ba)}x(28,3,{});_.Fd=yJ;_.Gd=yJ;_.Bd=function(a,b,c){var d,e;e=new hC(\'<polygon points="\');for(d=0;d<c;++d){var f=m+I(100*a[d])/100;jw(e.a,f);e.a.a+=$b;f=m+I(100*b[d])/100;jw(e.a,f);e.a.a+=ca}jw(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');X7(this,e.a.a)};_.Cd=function(a){this.e=Tk+(~~a.d>>16&255)+$b+(~~a.d>>8&255)+$b+(a.d&255)+Ob};_.tS=function(){return l8(this)};_.e=Th;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var P7=0;\nfunction m8(a){var b;Xn(a,15);b=a.C&65535;switch(a.C&-65536){case 65536:return null;case 131072:return 1==b?"meso":m+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":m+b+" stereo isomers"}}function n8(){n8=y;o8=z(xJ,Um,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction p8(a,b){n8();var c,d,e,f,g,h;c=!b?1:(o8[0]*(~~b.d>>16&255)+o8[1]*(~~b.d>>8&255)+o8[2]*(b.d&255))/255;f=!a?1:(o8[0]*(~~a.d>>16&255)+o8[1]*(~~a.d>>8&255)+o8[2]*(a.d&255))/255;e=Eq(c-f);if(0.30000001192092896<e)return a;d=C(xJ,Um,-1,3,1);q8(~~b.d>>16&255,~~b.d>>8&255,b.d&255,d);g=C(xJ,Um,-1,3,1);q8(~~a.d>>16&255,~~a.d>>8&255,a.d&255,g);h=Eq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=Eq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;\nelse if(e=(f>c?1<f+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(xJ,Um,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(~~a.d>>24&255)/255,f=c,null==f&&(f=C(xJ,Um,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(~~a.d>>8&255)/255,f[0]=(~~a.d>>16&255)/255),f=!a?1:(o8[0]*(~~a.d>>16&255)+o8[1]*(~~a.d>>8&255)+o8[2]*(a.d&255))/255,0==f)c=new wJ(f,f,f,c[3]);else{d=e/(!a?1:(o8[0]*(~~a.d>>16&255)+o8[1]*(~~a.d>>8&255)+o8[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=o8[e]:(h+=(c[e]-1)*\no8[e],c[e]=1);if(0!=h){for(e=d=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*o8[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/o8[e],1<c[e]&&(c[e]=1))}c=new wJ(c[0],c[1],c[2],c[3])}return c}var o8;function r8(a){bJ();this.d=a|-16777216}\nfunction q8(a,b,c,d){bJ();var e,f,g,h,j,l;null==d&&(d=C(xJ,Um,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}x(491,1,{59:1,68:1,72:1},r8);var k8=null;function N7(a,b){this.a=a;this.b=b}x(543,514,{81:1,82:1},N7);function B7(a,b){var c;c=new WK;hK(a,b,c);return c}x(720,619,sn);\n_.be=function(){var a,b,c;b=yA(this.a,!1,!0);c=null;a=new rs;if(Yr(new os,a,new eL(new jL(b)))){a=new s8(a,b);b=new XK(0,0,400,300);var d;if(0!=a.G.o){a.p=I(b.c);a.j=I(b.b);0==a.G.o?c=null:(f8(a),c=a.K.c*s7(a.G),d=new j8(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(g8(d,a.K),h8(d,a.w)),e8(a,b,c,131072),c=d);Xn(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);H7(a);a.N.$g();a.T.$g();r7(a);T7(a,a.Q);a.F=!0;for(d=0;d<a.G.o;++d)O7(a,d);a.F=!1;d=a.K.c*s7(a.G);A7(a,d);e8(a,b,d,131072);var e;if(e=b){e=\na.w.d;var f=a.w.e,g=a.w.c,h=a.w.b,j,l,n,q;b.mg()||0>=g||0>=h?e=!1:(j=b.d,n=b.e,l=j+b.c,q=n+b.b,e=j<=e&&e+g<=l&&n<=f&&f+h<=q);e=!e}e&&(b=new j8(a.w,b,d),g8(b,a.K),h8(b,a.w),d=a.x,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&g8(b,c))}if(0!=a.G.o){Xn(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);r7(a);b=!1;a.r=C(B,v,-1,a.G.o,1);for(c=0;c<a.G.o;++c)a.r[c]=a.G.s[c]&448,0!=a.r[c]&&(b=!0),Sp(a.G,c)&&(a.r[c]=128),0!=(a.G.s[c]&131072)&&0==(a.B&4096)&&(a.r[c]=256);w7(a,-10);if(a.G.E){d=a.P;w7(a,-7);for(c=\n0;c<a.G.c;++c)0!=(a.G.w[c]&536870912)&&Z7(a,C7(a.K,uo(a.G,c))-d,D7(a.K,vo(a.G,c))-d,2*d);a.n=2*a.P;f=new u7;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.w[c]&a.G.w[d]&536870912)&&(f.a=C7(a.K,uo(a.G,c)),f.c=D7(a.K,vo(a.G,c)),f.b=C7(a.K,uo(a.G,d)),f.d=D7(a.K,vo(a.G,d)),x7(a,f))}a.n=2*a.L;f=new u7;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.z[e]&131072)&&(f.a=C7(a.K,uo(a.G,c)),f.c=D7(a.K,vo(a.G,c)),f.b=C7(a.K,uo(a.G,d)),f.d=D7(a.K,vo(a.G,d)),w7(a,-2),x7(a,f));if(a.G.E){w7(a,320);if(0!=\n(a.B&8))for(c=0;c<a.G.c;++c)0!=(a.G.w[c]&-536870913)&&Z7(a,C7(a.K,uo(a.G,c))-a.S/2,D7(a.K,vo(a.G,c))-a.S/2,a.S);for(e=0;e<a.G.d;++e)0!=a.G.A[e]&&(c=D(a.G,0,e),d=D(a.G,1,e),Z7(a,(C7(a.K,uo(a.G,c))+C7(a.K,uo(a.G,d))-a.S)/2,(D7(a.K,vo(a.G,c))+D7(a.K,vo(a.G,d))-a.S)/2,a.S))}0==(a.B&32)&&(d=m8(a.G),null!=d&&(0==a.x.a&&0==a.x.b&&(c=a.K.c*s7(a.G),f8(a),A7(a,c),e8(a,null,c,0)),T7(a,I(a.y)),w7(a,448),$7(a,d,a.x.a,a.x.b+0.30000001192092896*a.y)));T7(a,a.Q);a.n=a.R;w7(a,a.J);H7(a);a.N.$g();a.T.$g();for(c=0;c<\na.G.o;++c)G7(a,c)?(w7(a,-3),O7(a,c),w7(a,a.J)):0!=a.r[c]?(w7(a,a.r[c]),O7(a,c),w7(a,a.J)):!b&&1!=a.G.x[c]&&6!=a.G.x[c]&&0==(a.B&2048)&&null==Ep(a.G,c)&&a.G.x[c]<Jn.length?(d=a,e=Jn[a.G.x[c]],g=f=void 0,f=(bJ(),cJ),g=new r8(e),e=p8(g,f),d.z=-5,d.e=Tk+(~~e.d>>16&255)+$b+(~~e.d>>8&255)+$b+(e.d&255)+Ob,O7(a,c),w7(a,a.J)):O7(a,c);for(c=new gq(a.N);c.b<c.d.xg();)b=hq(c),w7(a,b.a),Z7(a,b.b-a.O/2,b.c-a.O/2,a.O);w7(a,a.J);c=!1;for(b=0;b<a.G.d;++b)d=null,0!=(a.G.A[b]&16320)?(e=~~(a.G.A[b]&960)>>6,d=(~~(a.G.A[b]&\n960)>>6)+(~~(a.G.A[b]&15360)>>10),d=e==d?nh+e+vh:nh+e+Fd+d+vh):0!=(a.G.A[b]&786432)?d=262144==(a.G.A[b]&786432)?yh:32==(a.G.A[b]&48)?"r!a":n7:0!=(a.G.A[b]&48)&&(d=32==(a.G.A[b]&48)?q7:"!r"),e=~~(a.G.A[b]&114688)>>14,0!=e&&(d=(null==d?m:d)+e),null!=d&&(h=D(a.G,0,b),j=D(a.G,1,b),c||(T7(a,~~((2*a.Q+1)/3)),c=!0),f=(C7(a.K,uo(a.G,h))+C7(a.K,uo(a.G,j)))/2,g=(D7(a.K,vo(a.G,h))+D7(a.K,vo(a.G,j)))/2,e=C7(a.K,uo(a.G,j))-C7(a.K,uo(a.G,h)),j=D7(a.K,vo(a.G,j))-D7(a.K,vo(a.G,h)),h=Math.sqrt(e*e+j*j),n=0.6*Q7(a,\nd),l=0.55*a.o,0!=h&&(0<e?R7(a,f+n*j/h,g-l*e/h,d,!0):R7(a,f-n*j/h,g+l*e/h,d,!0)));c&&T7(a,a.Q);a.q=C(t8,o,82,a.G.o,0);for(b=0;b<a.G.p;++b)(2==a.G.B[b]||26==a.G.B[b]||64==a.G.B[b])&&W7(a,b);for(b=0;b<a.G.p;++b)2!=a.G.B[b]&&26!=a.G.B[b]&&64!=a.G.B[b]&&W7(a,b);if(0==(a.B&64))for(b=0;b<a.G.p;++b)if(0!=~~(a.G.z[b]&48)>>4){switch(~~(a.G.z[b]&48)>>4){case 1:g=2==fo(a.G,b)?gf:0!=(a.G.z[b]&4)?yk:ng;break;case 2:g=2==fo(a.G,b)?"Z":0!=(a.G.z[b]&4)?Dj:p7;break;default:g=Xd}T7(a,~~((2*a.Q+1)/3));w7(a,v7(a.G,b)?\n-3:448);e=D(a.G,0,b);f=D(a.G,1,b);c=(C7(a.K,uo(a.G,e))+C7(a.K,uo(a.G,f)))/2;d=(D7(a.K,vo(a.G,e))+D7(a.K,vo(a.G,f)))/2;h=(C7(a.K,uo(a.G,e))-C7(a.K,uo(a.G,f)))/3;e=(D7(a.K,vo(a.G,e))-D7(a.K,vo(a.G,f)))/3;R7(a,c+e,d-h,g,!0);w7(a,a.J);T7(a,a.Q)}if(0!=(a.B&4)){T7(a,~~((2*a.Q+1)/3));w7(a,384);for(b=0;b<a.G.p;++b)e=D(a.G,0,b),f=D(a.G,1,b),g=0!=(a.G.z[b]&512)?"d":so(a.G,b)?yh:m,c=(C7(a.K,uo(a.G,e))+C7(a.K,uo(a.G,f)))/2,d=(D7(a.K,vo(a.G,e))+D7(a.K,vo(a.G,f)))/2,R7(a,c,d,g+m+b,!0);w7(a,a.J);T7(a,a.Q)}}c=l8(a)}aN(c)};\nfunction s8(a,b){var c;In();this.w=new WK;this.G=a;this.B=0;this.E=1;this.K=new i8;this.T=new Yp;this.N=new Yp;this.t=C(Yn,Zm,-1,this.G.o,2);this.x=new UK;this.J=0;this.z=-1;c=(bJ(),cJ);var d=Mn;n8();this.u=new Ln(I((~~c.d>>16&255)+0.30000001192092896*((~~d.d>>16&255)-(~~c.d>>16&255))),I((~~c.d>>8&255)+0.30000001192092896*((~~d.d>>8&255)-(~~c.d>>8&255))),I((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=p8(Kn,c);this.C=On;this.D=Nn;this.c=new Yp;this.b=new Yp;this.d=new iw;this.f=new PJ(xf,\n0,12);new PJ(xf,0,120);this.k=m;++P7;this.a=b}x(749,28,{},s8);_.Fd=function(a){var b;b=m;null!=this.a&&0<this.a.length&&(b=iS(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",sh),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Gd=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Z(3);Z(28);Z(749);var t8=IT(981,VK);Z(4);Z(5);Z(19);T(SZ)(8);function yJ(){return m};\n//@ sourceURL=8.js\n')
