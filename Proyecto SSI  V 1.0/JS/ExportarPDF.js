function genPDF(){
    var doc=new jsPDF();
    let mensaje=document.getElementsByClassName('div-empleados').value;
    doc.text(20,20,mensaje);
    doc.addPage();
    doc.text(20,20,'Mi trabajo!!');
    doc.save('Test.pdf');
}