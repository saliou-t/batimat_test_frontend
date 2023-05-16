
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';


const genratePdf = (vente) => {
    console.log(vente.paiement) 
    const pdfDoc = PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);
    
    page.drawText(`Ticket de caisse - ${vente.reference}`, {
      x: 50,
      y: 700,
      size: 24,
      font: pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });


    const pdfBytes = pdfDoc.save();
  
    return pdfBytes;
}


module.exports = { genratePdf}