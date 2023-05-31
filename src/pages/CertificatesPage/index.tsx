import React from "react";
import Heading from "../../components/Heading";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router";
import useText from "../../hooks/textLanguage";
import { CertificatesPageTextEng } from "../../text/certificates/text";
import PageContainer from "../../components/PageContainer";

function index() {
  const navigate = useNavigate();
  const initialPageText = useText(
    CertificatesPageTextEng,
    CertificatesPageTextEng,
    CertificatesPageTextEng,
    CertificatesPageTextEng,
    CertificatesPageTextEng
  );

  return (
    <PageContainer>
      <Heading>{initialPageText.title}</Heading>
      <div className="flex flex-col gap-5 text-center">
        <p className="text-md font-normal text-center">
          {initialPageText.noCertificatesText}
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          variant="primary"
          className="mb-2 mr-2 text-md"
          onClick={() => navigate("/dashboard/courses")}
        >
          {initialPageText.seeCoursesButtonText}{" "}
          <Lucide icon="FileText" className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </PageContainer>
  );
}

export default index;
