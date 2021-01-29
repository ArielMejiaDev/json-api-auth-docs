__NUXT_JSONP__("/es/forgot-password/forgot-password", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{slug:"forgot-password",description:"",title:"Envio de notificación",position:12,category:"Notificación para restablecer contraseña",toc:[{id:o,depth:f,text:p},{id:q,depth:f,text:r},{id:s,depth:f,text:t},{id:u,depth:f,text:v},{id:w,depth:f,text:x},{id:y,depth:f,text:z}],body:{type:"root",children:[{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Este endpoint requiere autenticación, por lo que la solicitud debe incluir un token de portador "},{type:b,tag:m,props:{},children:[{type:a,value:"bearer token"}]},{type:a,value:", este lo puedes generar en los endpoints de inicio de sesión o registro."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:o},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#endpoint",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"El endpoint predeterminado para enviar un correo electrónico para reiniciar la contraseña es:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,"language-text"]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"http:\u002F\u002Fyour-project.test\u002Fapi\u002Fforgot-password\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{id:q},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#m%C3%A9todo-de-ruta",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"El método de ruta es "},{type:b,tag:m,props:{},children:[{type:a,value:"POST"}]}]},{type:a,value:c},{type:b,tag:g,props:{id:s},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#campos-de-usuario",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Los campos obligatorios son:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:"li",props:{},children:[{type:a,value:"email"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:u},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#ejemplo-en-postman",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"img",props:{alt:"Here a postman image to instruct how to send a request to register a user",src:"\u002Fjson-api-auth-docs\u002Fimages\u002Fpostman-forgot-password-screenshot.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:w},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#definir-un-enlace-para-la-notificaci%C3%B3n-de-restablecimiento-de-contrase%C3%B1a",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Esta función envía una notificación por correo electrónico con un enlace para restablecer la contraseña."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Para construir el enlace, toma la URL desde "},{type:b,tag:m,props:{},children:[{type:a,value:"config\u002Fjson-api-auth.php"}]},{type:a,value:" donde se puede establecer el endpoint para la URL del formulario de reinicio de contraseña:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,"language-php"]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[n,"comment"]},children:[{type:a,value:"\u002F*\n|--------------------------------------------------------------------------\n| Json Api Forgot Password Configuration\n|--------------------------------------------------------------------------\n|\n| This value is used to instruct the package the url for the notification\n| This would be a page of your frontend new password form.\n| Its not related to any backend route take that in mind.\n|\n*\u002F"}]},{type:a,value:"\n\n"},{type:b,tag:d,props:{className:[n,E,F]},children:[{type:a,value:"'new_password_form_url'"}]},{type:a,value:G},{type:b,tag:d,props:{className:[n,"operator"]},children:[{type:a,value:"=\u003E"}]},{type:a,value:G},{type:b,tag:d,props:{className:[n,E,F]},children:[{type:a,value:"'https:\u002F\u002Fyour-frontend-app.any\u002Fnew-password'"}]},{type:b,tag:d,props:{className:[n,"punctuation"]},children:[{type:a,value:","}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Esto es útil porque se trata de una función de la API, por lo que el comportamiento no es redirigir a una vista de procesamiento del servidor, el comportamiento esperado es que el enlace vaya a un formulario de restablecimiento de contraseña en una aplicación de frontend totalmente separada del backend."}]},{type:a,value:c},{type:b,tag:g,props:{id:y},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#-c%C3%B3mo-usar-la-funci%C3%B3n-de-olvide-contrase%C3%B1a",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:"iframe",props:{style:"width: 100%",height:315,src:"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FyrKTAUezkkQ",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true},children:[]}]},dir:"\u002Fes\u002Fforgot-password",path:"\u002Fes\u002Fforgot-password\u002Fforgot-password",extension:".md",createdAt:"2021-01-28T18:34:03.972Z",updatedAt:"2021-01-29T03:54:23.837Z",to:"\u002Fforgot-password\u002Fforgot-password"},prev:{slug:"customize-logout",title:"Personalizar el cierre de sesión",to:"\u002Flogout\u002Fcustomize-logout"},next:{slug:"forgot-password-validation",title:"Validación",to:"\u002Fforgot-password\u002Fforgot-password-validation"}}],fetch:[],mutations:[]}}("text","element","\n","span","p",2,"h2","a","true",-1,"icon","icon-link","code","token","endpoint","Endpoint","método-de-ruta","Método de ruta","campos-de-usuario","Campos de usuario","ejemplo-en-postman","Ejemplo en postman","definir-un-enlace-para-la-notificación-de-restablecimiento-de-contraseña","Definir un enlace para la notificación de restablecimiento de contraseña","-cómo-usar-la-función-de-olvide-contraseña","🍿 Cómo usar la función de olvide contraseña","div","nuxt-content-highlight","pre","line-numbers","string","single-quoted-string"," ")));