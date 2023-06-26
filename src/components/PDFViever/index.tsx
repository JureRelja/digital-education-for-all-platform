import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import useText from "../../hooks/textLanguage";
import { PDFVieverEn } from "../../text/pdfViever/text";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import LoadingIcon from "../../base-components/LoadingIcon";
import { twMerge } from "tailwind-merge";

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
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [mobileZoom, setMobileZoom] = useState(0.5);

  const pdfVieverText = useText(
    PDFVieverEn,
    PDFVieverEn,
    PDFVieverEn,
    PDFVieverEn,
    PDFVieverEn
  );

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
    setLoading(false);
    setNumPages(nextNumPages);
  }

  const goToPrevPage = () =>
    setPageNumber((pageNumber: number) =>
      pageNumber - 1 <= 1 ? 1 : pageNumber - 1
    );

  const goToNextPage = () =>
    setPageNumber((pageNumber: number) =>
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1
    );

  const zoomIn = () => {
    setZoom((prev) => prev + 0.5);
    setMobileZoom((prev) => prev + 0.25);
  };

  const zoomOut = () => {
    setZoom((prev) => (prev > 0.5 ? prev - 0.5 : prev));
    setMobileZoom((prev) => (prev > 0.25 ? prev - 0.25 : prev));
  };

  return (
    <div className={twMerge([loading ? "w-full sm:w-[460px] h-[95vh]" : ""])}>
      {loading && (
        <LoadingIcon
          icon="oval"
          className="w-10 h-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          color="#1E3A8A"
        />
      )}
      {!loading && (
        <Button
          onClick={goToPrevPage}
          variant="primary"
          className="px-3 py-3 xl:w-fit absolute top-[50%] left-0 ml-1 z-10"
        >
          <Lucide icon="ArrowLeft" className="w-4 h-4" />
        </Button>
      )}
      <div className="flex flex-col justify-center items-center">
        {!loading && (
          <div className="bg-white w-full">
            <h2 className="text-lg text-black font-semibold text-opacity-70 text-center  pt-4">
              {pdfVieverText.page} {pageNumber} {pdfVieverText.of} {numPages}
            </h2>
          </div>
        )}
        {!loading && (
          <div className="flex gap-2">
            <Button
              onClick={zoomIn}
              variant="primary"
              className="px-2 py-2 xl:w-fit  ml-1 z-10"
            >
              <Lucide icon="ZoomIn" className="w-4 h-4" />
            </Button>
            <Button
              onClick={zoomOut}
              variant="primary"
              className="px-2 py-2 xl:w-fit  left-0 ml-1 z-10"
            >
              <Lucide icon="ZoomOut" className="w-4 h-4" />
            </Button>
          </div>
        )}
        <Document
          file={props.file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page
            pageNumber={pageNumber}
            scale={window.innerWidth > 500 ? zoom : mobileZoom}
          />
        </Document>
      </div>
      {!loading && (
        <Button
          onClick={goToNextPage}
          variant="primary"
          className="px-3 py-3 xl:w-fit  absolute top-[50%] right-0 mr-1 z-10"
        >
          <Lucide icon="ArrowRight" className="w-4 h-4 " />
        </Button>
      )}
    </div>
  );
}
