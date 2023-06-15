import { useState } from "react";
import Lucide from "../../base-components/Lucide";
import useText from "../../hooks/textLanguage";
import { CertificatesPageTextEn } from "../../text/certificates/text";
import { PDFDownloadLink, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { Dialog } from "../../base-components/Headless";
import { useSelector } from "react-redux";
import Button from "../../base-components/Button";
import CertificatePDFDesign from "../CertificatePDFDesign";
import Divider from "../Divider";

type Link = {
  courseTitle: string;
};

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  page: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
});

function index(props: Link) {
  const [showPdf, setShowPdf] = useState(false);

  const firstName = useSelector((state: any) => state.user.userData.firstName);
  const lastName = useSelector((state: any) => state.user.userData.lastName);

  const CertificatesPageText = useText(
    CertificatesPageTextEn,
    CertificatesPageTextEn,
    CertificatesPageTextEn,
    CertificatesPageTextEn,
    CertificatesPageTextEn
  );

  return (
    <>
      <Dialog
        size="xl"
        open={showPdf}
        onClose={() => {
          setShowPdf(false);
        }}
      >
        <Dialog.Panel>
          <div className="w-full h-12 relative">
            <a
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setShowPdf(false);
              }}
              className="absolute top-0 right-0 mt-3 mr-3"
              href="#"
            >
              <Lucide icon="X" className="w-8 h-8 text-slate-400" />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 h-[85vh] w-full">
            <PDFViewer style={styles.viewer}>
              <CertificatePDFDesign
                title={props.courseTitle}
                firstName={firstName}
                lastName={lastName}
              />
            </PDFViewer>

            <PDFDownloadLink
              document={
                <CertificatePDFDesign
                  title={props.courseTitle}
                  firstName={firstName}
                  lastName={lastName}
                />
              }
              fileName="Certificate.pdf"
            >
              <Button
                variant="success"
                className="mb-2 mr-2 text-md text-white"
              >
                Download certificate
                <Lucide icon="ArrowDown" className="w-4 h-4 ml-2" />
              </Button>
            </PDFDownloadLink>
          </div>
        </Dialog.Panel>
      </Dialog>

      <a
        href="#"
        className="flex items-center md:mr-6"
        onClick={(event: React.MouseEvent) => setShowPdf(true)}
      >
        {" "}
        <Lucide icon="Archive" className="w-4 h-4 md:mr-1" />
        {CertificatesPageText.getCertificateBtnText}
      </a>
    </>
  );
}

export default index;
