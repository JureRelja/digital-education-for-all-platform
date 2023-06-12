import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import useText from "../../hooks/textLanguage";
import { PDFVieverEn } from "../../text/pdfViever/text";
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
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const pdfVieverText = useText(
    PDFVieverEn,
    PDFVieverEn,
    PDFVieverEn,
    PDFVieverEn,
    PDFVieverEn
  );

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
    setNumPages(nextNumPages);
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber((pageNumber: number) =>
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1
    );

  return (
    <>
      <Button
        onClick={goToPrevPage}
        variant="primary"
        className="px-3 py-3 xl:w-fit absolute top-[50%] left-0 ml-1 z-10"
      >
        <Lucide icon="ArrowLeft" className="w-4 h-4" />
      </Button>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white w-full">
          <h2 className="text-lg text-black text-opacity-70 text-center  pt-4">
            {pdfVieverText.page} {pageNumber} {pdfVieverText.of} {numPages}
          </h2>
        </div>
        <Document
          file={props.file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page
            pageNumber={pageNumber}
            scale={window.innerWidth > 500 ? 1 : 0.5}
          />
        </Document>
      </div>
      <Button
        onClick={goToNextPage}
        variant="primary"
        className="px-3 py-3 xl:w-fit  absolute top-[50%] right-0 mr-1 z-10"
      >
        <Lucide icon="ArrowRight" className="w-4 h-4 " />
      </Button>
    </>
  );
}
