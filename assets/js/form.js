document.addEventListener("DOMContentLoaded", function() {
  const url = window.location.href;
  
  if ((url.includes('/nl/form-submit') || url.includes('/en/form-submit')) && 
      !url.includes('?redirected=true')) {
    
    if (url.includes('/nl/form-submit')) {
      window.location.href = '/nl/form-submit?redirected=true';  
    } else if (url.includes('/en/form-submit')) {
      window.location.href = '/en/form-submit?redirected=true';
    }
  }
});
