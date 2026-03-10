(function(){
  const btn = document.getElementById('btnOpenPdf') || document.getElementById('btnPrint');
  if(btn){
    btn.addEventListener('click', () => {
      const pdf = btn.getAttribute('data-pdf');
      if(pdf){
        window.open(pdf, '_blank');
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => window.print(), 250);
    });
  }
})();
