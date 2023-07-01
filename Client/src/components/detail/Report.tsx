import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";

interface ReviewProps {
  isOpen: boolean;
  setIsOpen: any;
  SelectedRatingId: any;
}

const Report = (props: ReviewProps) => {
  const { setIsOpen, isOpen, SelectedRatingId  } = props;
  const [reportText, setReportText] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleReportSubmit = () => {
    console.log("Despachando PUT"); 
    axios
      .put(`http://localhost:3001/rating/${SelectedRatingId}`, {
        report_reason: reportText,
        is_reported: true,
      })
      .then((response) => {
        console.log(response.data);
        closeModal();
      })
      .catch((error) => {
        console.error(error);
        closeModal();
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      className="absolute font-cairo m-0 items-center justify-center bg-white w-[300px] h-56 mt-4 mr-10"
    >
      <p className="bg-tercero h-10 text-white uppercase p-1">
        Reportá esta evaluación
      </p>
      <div className="flex flex-col items-center justify-center mt-4">
        <textarea
          name="report"
          maxLength={200}
          className="w-[260px] h-32 border"
          placeholder="¿Por qué reportas esta opinión?"
          onChange={(e) => setReportText(e.target.value)}
        ></textarea>
        <button
          className="border border-argentina px-4 rounded-md mt-2"
          onClick={handleReportSubmit}
        >
          Reportar
        </button>
      </div>
    </Modal>
  );
};

export default Report;