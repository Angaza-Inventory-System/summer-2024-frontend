import { useEffect, useState } from "react";
import Field from "./Field";
import better_better from "./better_better.png";
import DateCalendarReferenceDate from "./DateCalendarReferenceDate";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import dayjs from "dayjs";
const Form = () => {
  const [shipmentDate, setShipmentDate] = useState<dayjs.Dayjs | null>(null);
  const [dateReceived, setDateReceived] = useState<dayjs.Dayjs | null>(null);
  const [dateOfDonation, setDateOfDonation] = useState<dayjs.Dayjs | null>(
    null,
  );

  const add = (event: React.FormEvent) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: id,
        type: type,
        make: make,
        model: model,
        serial_number: serialNumber,
        mac_id: macId,
        year_of_manufacture: manufacture,
        shipment_date: shipmentDate?.format("YYYY-MM-DD"),
        date_received: dateReceived?.format("YYYY-MM-DD"),
        received_by: receivedBy,
        physical_condition: physicalCondition,
        specifications: specifications,
        operating_system: operatingSystem,
        accessories: accessories,
        donor: donorID,
        date_of_donation: dateOfDonation?.format("YYYY-MM-DD"),
        value: value,
        location: location,
        assigned_user: assignedUser,
        status: status,
        distributor: distributor,
        warranty_service_info: warrantyServiceInfo,
        notes: notes,
      }),
    };
    fetch("http://127.0.0.1:8000/devices/devices/", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  const [id, setId] = useState<String>();
  const [type, setType] = useState<String>();
  const [make, setMake] = useState<String>();
  const [model, setModel] = useState<String>();
  const [serialNumber, setSerialNumber] = useState<String>();
  const [macId, setMacId] = useState<String>();
  const [manufacture, setManufacture] = useState<number>();
  const [receivedBy, setReceivedBy] = useState<number>();
  const [physicalCondition, setPhysicalCondition] = useState<String>();
  const [specifications, setSpecifications] = useState<String>();
  const [operatingSystem, setOperatingSystem] = useState<String>();
  const [accessories, setAccessories] = useState<String>();
  const [donorID, setDonorID] = useState<number>();

  const [value, setValue] = useState<String>();
  const [location, setLocation] = useState<number>();
  const [assignedUser, setAssignedUser] = useState<number>();
  const [status, setStatus] = useState<String>();
  const [distributor, setDistributor] = useState<String>();
  const [warrantyServiceInfo, setWarrantyServiceInfo] = useState<String>();
  const [notes, setNotes] = useState<String>();

  return (
    <>
      <div className="flex w-full justify-center pl-10">
        <img
          alt="a"
          className="absolute inset-0 h-screen w-screen object-cover"
          src="https://cdn.discordapp.com/attachments/1249232893268590684/1254204922782814310/better_better.png?ex=66905fdb&is=668f0e5b&hm=8710dc5025653c1800e362dac25dbe043baacfbfe9f00e3dbc08782e23872049&"
        />
        <div className="bg-white/2000 relative h-screen w-screen overflow-y-auto rounded-lg p-8">
          <form className="mx-auto w-full max-w-sm">
            <div className="flex flex-col space-y-4">
              <Field text="Device ID" setValue={setId} />
              <Field text="Type" setValue={setType} />
              <Field text="Make" setValue={setMake} />
              <Field text="Model" setValue={setModel} />
              <Field text="Serial Number" setValue={setSerialNumber} />
              <Field text="Mac ID" setValue={setMacId} />
              <Field text="Year Of Manufacture" setValue={setManufacture} />
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">
                  Shipment Date
                </label>
                <DateCalendarReferenceDate
                  referenceDate={shipmentDate ?? dayjs()}
                  setReferenceDate={setShipmentDate}
                />
                <span className="ml-4">
                  {shipmentDate?.format("YYYY-MM-DD")}
                </span>
              </div>
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">
                  Date Received
                </label>
                <DateCalendarReferenceDate
                  referenceDate={dateReceived ?? dayjs}
                  setReferenceDate={setDateReceived}
                />
                <span className="ml-4">
                  {dateReceived?.format("YYYY-MM-DD")}
                </span>
              </div>
              <Field text="Received By" setValue={setReceivedBy} />
              <Field
                text="Physical Condition"
                setValue={setPhysicalCondition}
              />
              <Field text="Specifications" setValue={setSpecifications} />
              <Field text="Operating System" setValue={setOperatingSystem} />
              <Field text="Accesories" setValue={setAccessories} />
              <Field text="Donor ID" setValue={setDonorID} />
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">
                  Date Of Donation
                </label>
                <DateCalendarReferenceDate
                  referenceDate={dateOfDonation ?? dayjs()}
                  setReferenceDate={setDateOfDonation}
                />
                <span className="ml-4">
                  {dateOfDonation?.format("YYYY-MM-DD")}
                </span>
              </div>
              <Field text="Value" setValue={setValue} />
              <Field text="Location" setValue={setLocation} />
              <Field text="Assigned User" setValue={setAssignedUser} />
              <Field text="Status" setValue={setStatus} />
              <Field text="Distributor" setValue={setDistributor} />
              <Field
                text="Warranty Service Info"
                setValue={setWarrantyServiceInfo}
              />
              <Field text="Notes" setValue={setNotes} />
              <button
                type="submit"
                className="duration-600 mt-5 h-8 rounded-full bg-blue-500 text-lg font-medium leading-4 text-white transition ease-in hover:scale-105 hover:bg-sky-700"
                onClick={add}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
