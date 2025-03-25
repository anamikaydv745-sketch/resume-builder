import html2pdf from 'html2pdf.js';

export const handleDownload = async (setIsDownloading) => {
    const element = document.getElementById('preview-page');
  
    if (!element) {
      console.error('Preview element not found.');
      return;
    }
  
    const options = {
      margin: 0,
      filename: 'Syed_Abbas_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    try {
      setIsDownloading(true);
      console.log('Generating PDF...');
      await html2pdf().set(options).from(element).save();
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setIsDownloading(false);
    }
};
  
