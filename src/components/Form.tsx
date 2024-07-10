import { useEffect, useState } from "react";
import Field from "./Field";
import DateCalendarReferenceDate from "./DateCalendarReferenceDate"; // Adjust the path as per your project structure
import better_better from "./better_better.png";
import dayjs from "dayjs";

const Form = () => {
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
        shipment_date: shipmentDate,
        date_received: dateReceived,
        received_by: receivedBy,
        physical_condition: physicalCondition,
        specifications: specifications,
        operating_system: operatingSystem,
        accessories: accessories,
        donor: donorID,
        date_of_donation: dateOfDonation,
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

  const [id, setId] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [serialNumber, setSerialNumber] = useState<string>("");
  const [macId, setMacId] = useState<string>("");
  const [manufacture, setManufacture] = useState<number>(0);
  const [shipmentDate, setShipmentDate] = useState<string>(
    dayjs().format("YYYY-MM-DD"),
  );
  const [dateReceived, setDateReceived] = useState<string>("");
  const [receivedBy, setReceivedBy] = useState<number>(0);
  const [physicalCondition, setPhysicalCondition] = useState<string>("");
  const [specifications, setSpecifications] = useState<string>("");
  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [accessories, setAccessories] = useState<string>("");
  const [donorID, setDonorID] = useState<number>(0);
  const [dateOfDonation, setDateOfDonation] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [location, setLocation] = useState<number>(0);
  const [assignedUser, setAssignedUser] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [distributor, setDistributor] = useState<string>("");
  const [warrantyServiceInfo, setWarrantyServiceInfo] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  return (
    <>
      <div className="flex w-full justify-center pl-10">
        <img
          alt="a"
          className="absolute inset-0 h-screen w-screen object-cover"
          src="https://cdn.discordapp.com/attachments/1249232893268590684/1254204922782814310/better_better.png?ex=667f3c5b&is=667deadb&hm=9be0a0caee354981fbd1b351700066fc98db66d3bfc42f33b5fd01d549f1dd11&"
        />
        <div className="relative h-screen w-1/2 overflow-y-auto rounded-lg bg-white bg-opacity-75 p-8">
          <form className="mx-auto w-full max-w-sm">
            <div className="flex flex-col space-y-4">
              <Field text="Device ID" setValue={setId} />
              <Field text="Type" setValue={setType} />
              <Field text="Make" setValue={setMake} />
              <Field text="Model" setValue={setModel} />
              <Field text="Serial Number" setValue={setSerialNumber} />
              <Field text="Mac ID" setValue={setMacId} />
              <Field text="Year Of Manufacture" setValue={setManufacture} />
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600">
                  Shipment Date
                </label>
                <DateCalendarReferenceDate
                  referenceDate={shipmentDate}
                  setReferenceDate={setShipmentDate}
                />
              </div>
              <Field text="Date Received" setValue={setDateReceived} />
              <Field text="Received By" setValue={setReceivedBy} />
              <Field
                text="Physical Condition"
                setValue={setPhysicalCondition}
              />
              <Field text="Specifications" setValue={setSpecifications} />
              <Field text="Operating System" setValue={setOperatingSystem} />
              <Field text="Accesories" setValue={setAccessories} />
              <Field text="Donor ID" setValue={setDonorID} />
              <Field text="Date Of Donation" setValue={setDateOfDonation} />
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
