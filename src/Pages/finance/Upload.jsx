import Sidebar2 from "../../Layouts/Sidebar2";
import "../../styles/dashbaord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Contents from "./Contents";
function Upload() {
  const FileUploadButton = () => {
    const handleButtonClick = () => {
      // Trigger the file input when the button is clicked
      document.getElementById("fileInput").click();
    };
  };

  return (
    <div>
      <div>
        <div className="dashboard">
          <Sidebar2 userRole={localStorage.getItem("role")} />

          <div className="dashboard-content shadow-2xl">
            <div className="w-full">
              <Contents />

              <label
                htmlFor="fileInput"
                className="button-request bg-blue-900 text-white rounded-full py-2 px-8  text-sm cursor-pointer mt-8 mb-8 mr-20"
                data-aos="zoom-in-down"
              >
                <span> Upload file</span>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    console.log("Selected File:", selectedFile);
                  }}
                />
              </label>

              <table className="finance-table mt-28">
                <thead>
                  <tr data-aos="fade-up">
                    <th colSpan={3}>File Uploaded</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-aos="zoom-in-down">
                    <td>20/12/2023</td>
                    <td>
                      {" "}
                      <a href="" className="text-blue-400 text-bold ">
                        receipt.pdf
                      </a>{" "}
                    </td>{" "}
                  </tr>
                  <tr data-aos="zoom-in-down">
                    <td>20/12/2023</td>

                    <td>
                      {" "}
                      <a href="" className="text-blue-400 text-bold">
                        receipt2.pdf
                      </a>{" "}
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-down">
                    <td>20/12/2023</td>

                    <td>
                      {" "}
                      <a href="" className="text-blue-400 text-bold">
                        receipt3.pdf
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
