!function(e){/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,n,t,a,u){return jQuery.easing[jQuery.easing.def](e,n,t,a,u)},easeInQuad:function(e,n,t,a,u){return a*(n/=u)*n+t},easeOutQuad:function(e,n,t,a,u){return-a*(n/=u)*(n-2)+t},easeInOutQuad:function(e,n,t,a,u){return(n/=u/2)<1?a/2*n*n+t:-a/2*(--n*(n-2)-1)+t},easeInCubic:function(e,n,t,a,u){return a*(n/=u)*n*n+t},easeOutCubic:function(e,n,t,a,u){return a*((n=n/u-1)*n*n+1)+t},easeInOutCubic:function(e,n,t,a,u){return(n/=u/2)<1?a/2*n*n*n+t:a/2*((n-=2)*n*n+2)+t},easeInQuart:function(e,n,t,a,u){return a*(n/=u)*n*n*n+t},easeOutQuart:function(e,n,t,a,u){return-a*((n=n/u-1)*n*n*n-1)+t},easeInOutQuart:function(e,n,t,a,u){return(n/=u/2)<1?a/2*n*n*n*n+t:-a/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(e,n,t,a,u){return a*(n/=u)*n*n*n*n+t},easeOutQuint:function(e,n,t,a,u){return a*((n=n/u-1)*n*n*n*n+1)+t},easeInOutQuint:function(e,n,t,a,u){return(n/=u/2)<1?a/2*n*n*n*n*n+t:a/2*((n-=2)*n*n*n*n+2)+t},easeInSine:function(e,n,t,a,u){return-a*Math.cos(n/u*(Math.PI/2))+a+t},easeOutSine:function(e,n,t,a,u){return a*Math.sin(n/u*(Math.PI/2))+t},easeInOutSine:function(e,n,t,a,u){return-a/2*(Math.cos(Math.PI*n/u)-1)+t},easeInExpo:function(e,n,t,a,u){return 0==n?t:a*Math.pow(2,10*(n/u-1))+t},easeOutExpo:function(e,n,t,a,u){return n==u?t+a:a*(-Math.pow(2,-10*n/u)+1)+t},easeInOutExpo:function(e,n,t,a,u){return 0==n?t:n==u?t+a:(n/=u/2)<1?a/2*Math.pow(2,10*(n-1))+t:a/2*(-Math.pow(2,-10*--n)+2)+t},easeInCirc:function(e,n,t,a,u){return-a*(Math.sqrt(1-(n/=u)*n)-1)+t},easeOutCirc:function(e,n,t,a,u){return a*Math.sqrt(1-(n=n/u-1)*n)+t},easeInOutCirc:function(e,n,t,a,u){return(n/=u/2)<1?-a/2*(Math.sqrt(1-n*n)-1)+t:a/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(e,n,t,a,u){var r=1.70158,i=0,o=a;if(0==n)return t;if(1==(n/=u))return t+a;if(i||(i=.3*u),o<Math.abs(a)){o=a;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(a/o);return-(o*Math.pow(2,10*(n-=1))*Math.sin(2*(n*u-r)*Math.PI/i))+t},easeOutElastic:function(e,n,t,a,u){var r=1.70158,i=0,o=a;if(0==n)return t;if(1==(n/=u))return t+a;if(i||(i=.3*u),o<Math.abs(a)){o=a;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(a/o);return o*Math.pow(2,-10*n)*Math.sin(2*(n*u-r)*Math.PI/i)+a+t},easeInOutElastic:function(e,n,t,a,u){var r=1.70158,i=0,o=a;if(0==n)return t;if(2==(n/=u/2))return t+a;if(i||(i=.3*u*1.5),o<Math.abs(a)){o=a;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(a/o);return 1>n?-.5*o*Math.pow(2,10*(n-=1))*Math.sin(2*(n*u-r)*Math.PI/i)+t:o*Math.pow(2,-10*(n-=1))*Math.sin(2*(n*u-r)*Math.PI/i)*.5+a+t},easeInBack:function(e,n,t,a,u,r){return void 0==r&&(r=1.70158),a*(n/=u)*n*((r+1)*n-r)+t},easeOutBack:function(e,n,t,a,u,r){return void 0==r&&(r=1.70158),a*((n=n/u-1)*n*((r+1)*n+r)+1)+t},easeInOutBack:function(e,n,t,a,u,r){return void 0==r&&(r=1.70158),(n/=u/2)<1?a/2*n*n*(((r*=1.525)+1)*n-r)+t:a/2*((n-=2)*n*(((r*=1.525)+1)*n+r)+2)+t},easeInBounce:function(e,n,t,a,u){return a-jQuery.easing.easeOutBounce(e,u-n,0,a,u)+t},easeOutBounce:function(e,n,t,a,u){return(n/=u)<1/2.75?7.5625*a*n*n+t:2/2.75>n?a*(7.5625*(n-=1.5/2.75)*n+.75)+t:2.5/2.75>n?a*(7.5625*(n-=2.25/2.75)*n+.9375)+t:a*(7.5625*(n-=2.625/2.75)*n+.984375)+t},easeInOutBounce:function(e,n,t,a,u){return u/2>n?.5*jQuery.easing.easeInBounce(e,2*n,0,a,u)+t:.5*jQuery.easing.easeOutBounce(e,2*n-u,0,a,u)+.5*a+t}}),/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
e.fn.snow=function(n){var t=window.navigator,a=t.userAgent.toLowerCase(),u=/(webkit|gecko|presto|opera|safari|firefox|chrome|applewebkit)[ \/os]*([\d_.]+)/gi;if(u.test(a)){var r=e(window).height(),i=e(document).height(),o=e(document).width(),s={minSize:20,maxSize:50,speed:10*i,frequency:500,color:"#FFFFFF",easing:"linear",position:"absolute"},n=e.extend({},s,n),c=e("<div>").css({position:n.position,top:"-50px","z-index":9999999999}).html("❄"),f="fixed"==n.position?r:i,h=o;e("body").css("overflow-x","hidden");{setInterval(function(){var t=Math.random()*h-100,a=.5+Math.random(),u=n.minSize+Math.random()*n.maxSize,r=f-40,i=t+(10*Math.random()>5?-500:500);c.clone().appendTo("body").css({left:t,opacity:a,"font-size":u,color:n.color}).animate({top:r,left:i,opacity:.2},n.speed,n.easing,function(){e(this).remove()})},n.frequency)}}}}(jQuery);