import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import useText from "../../hooks/textLanguage";
import { PDFVieverEng } from "../../text/pdfViever";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "cmaps/",
  standardFontDataUrl: "standard_fonts/",
};

export default function Sample(props: any) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const pdfVieverText = useText(
    PDFVieverEng,
    PDFVieverEng,
    PDFVieverEng,
    PDFVieverEng,
    PDFVieverEng
  );

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
    setNumPages(nextNumPages);
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber((pageNumber: any) =>
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1
    );

  return (
    <div className="flex gap-3 justify-center items-center">
      <Button
        onClick={goToPrevPage}
        variant="primary"
        className="px-2 py-3 xl:w-fit text-center"
      >
        {" "}
        <Lucide icon="ArrowLeft" className="w-4 h-4 mr-2" />
        {pdfVieverText.prev}
      </Button>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-lg text-black text-opacity-70 text-center">
          {pdfVieverText.page} {pageNumber} {pdfVieverText.of} {numPages}
        </h2>
        <Document
          file={props.file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <Button
        onClick={goToNextPage}
        variant="primary"
        className="px-2 py-3 xl:w-fit text-center"
      >
        {pdfVieverText.next}
        <Lucide icon="ArrowRight" className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
