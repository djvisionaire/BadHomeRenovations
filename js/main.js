
document.addEventListener("DOMContentLoaded",()=>{
  const form=document.querySelector("#contactForm");
  if(form) form.addEventListener("submit",e=>{e.preventDefault();form.innerHTML="<h2>Message Ready to Send</h2><p style='color:#657069'>This demo form is ready to connect to your email or CRM.</p><a class='btn green' href='estimate.html'>Request an Estimate</a>"});
  const estimate=document.querySelector("#estimateForm");
  if(estimate) estimate.addEventListener("submit",e=>{e.preventDefault();estimate.innerHTML="<h2>Estimate Request Received</h2><p style='color:#657069'>The demo request was submitted. Connect this form to your email, CRM or form service before launch.</p><a class='btn green' href='index.html'>Return Home</a>"});
});
