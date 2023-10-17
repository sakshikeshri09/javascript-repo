
 const button=document.getElementById("generate");
 const input=document.querySelector("input");
 const qrdiv=document.getElementById("qr");


 button.addEventListener("click",function(){
if(input.value.trim!=" ")
{
    qrdiv.innerHTML=`<h1>QR</h1>`;
    const qrcode = new QRCode(qrdiv, {
        text: input.value,
        width: 128,
        height: 128,
       
    });
}
});