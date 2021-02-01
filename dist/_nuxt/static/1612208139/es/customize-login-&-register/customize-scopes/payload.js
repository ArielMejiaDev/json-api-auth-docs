__NUXT_JSONP__("/es/customize-login-&-register/customize-scopes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{document:{slug:"customize-scopes",description:"",title:"Personalizar scopes",position:9,category:"Personalizar inicio de sesión y registro",toc:[],body:{type:"root",children:[{type:b,tag:j,props:{},children:[{type:a,value:"Un enfoque para manejar los permisos es usar "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" en los tokens."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"El paquete considera esto y puede establecer una cantidad de "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" que se agregan cuando un usuario inicia sesión o se registra, puedes agregar un arreglo de "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" que se agregaran al token de usuario."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"En "},{type:b,tag:g,props:{},children:[{type:a,value:"config\u002Fjson-api-auth.php"}]},{type:a,value:t}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F*\n|--------------------------------------------------------------------------\n| Json Api Authentication Scopes\n|--------------------------------------------------------------------------\n|\n| Passport & Sanctum use scopes to validate abilities,\n| Optionally you can add scopes here, that would be added on Login and register\n|\n*\u002F"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'scopes'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"=\u003E"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"Si necesitas manejar una lógica más compleja para asignar "},{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:", siempre puedes personalizar el comportamiento en "},{type:b,tag:g,props:{},children:[{type:a,value:"app\u002Fcontrollers\u002FJsonApiAuth\u002FTraits\u002FHasToShowApiTokens.php"}]},{type:a,value:t}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"protected"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,"class-name","type-declaration"]},children:[{type:a,value:"User"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"$token"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"-\u003E"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'json-api-auth.token_id'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'json-api-auth.scopes'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F Aquí puedes personalizar la forma de agregar scopes a los tokens"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:";"}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:f}]}]}]}]},dir:"\u002Fes\u002Fcustomize-login-&-register",path:"\u002Fes\u002Fcustomize-login-&-register\u002Fcustomize-scopes",extension:".md",createdAt:"2021-01-28T18:34:03.945Z",updatedAt:"2021-01-28T20:20:30.914Z",to:"\u002Fcustomize-login-&-register\u002Fcustomize-scopes"},prev:{slug:"customize-tokens",title:"Personalizar tokens",to:"\u002Fcustomize-login-&-register\u002Fcustomize-tokens"},next:{slug:"logout",title:"Cerrar sesión",to:"\u002Flogout\u002Flogout"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n","code"," ","function","p","scopes","(",")","comment","string","single-quoted-string","operator",",","variable",":","div","nuxt-content-highlight","pre","language-php","line-numbers","\n\n","keyword","createToken","$user","\n    ","\n        ","config")));