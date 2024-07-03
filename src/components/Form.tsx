import { useEffect, useState } from "react";
import Field from "./Field";

const Form = () => {
  const add = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: {id},
        type: {type},
        make: {make},
        model: {model},
        serial_number: {serialNumber},
        mac_id: {macId},
        year_of_manufacture: {manufacture},
        shipment_date: {shipmentDate},
        date_received: {dateReceived},
        received_by: {receivedBy}, 
        physical_condition: {physicalCondition},
        specifications: {specifications},
        operating_system: {operatingSystem},
        accessories: {accessories},
        donor: {donorID},
        date_of_donation: {dateOfDonation},
        value: {value},
        location: {location},
        assigned_user: {assignedUser}, 
        status: {status},
        distributor: {distributor},
        warranty_service_info: {warrantyServiceInfo},
        notes: {notes},
      }),
    };
    fetch("http://127.0.0.1:8000/devices/devices/", requestOptions).then(
      (response) => response.json(),
    );
  };
  useEffect(() => {
    add();
  }, []);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [macId, setMacId] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [shipmentDate, setShipmentDate] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [receivedBy, setReceivedBy] = useState("");
  const [physicalCondition, setPhysicalCondition] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [accessories, setAccessories] = useState("");
  const [donorID, setDonorID] = useState("");
  const [dateOfDonation, setDateOfDonation] = useState("");
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [status, setStatus] = useState("");
  const [distributor, setDistributor] = useState("");
  const [warrantyServiceInfo, setWarrantyServiceInfo] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <>
      <div className="flex w-screen justify-center">
        <div className="mx-auto' absolute h-screen w-1/4">
          <form className="mx-auto w-full max-w-sm">
            <div className="flex flex-col pt-10">
              <Field text="Device ID" setValue={setId} />
              <Field text="Type" setValue={setType} />
              <Field text="Make" setValue={setMake} />
              <Field text="Model" setValue={setModel} />
              <Field text="Serial Number" setValue={setSerialNumber} />
              <Field text="Mac ID" setValue={setMacId} />
              <Field text="Year Of Manufacture" setValue={setManufacture} />
              <Field text="Shipment Date" setValue={setShipmentDate} />
              <Field text="Date Received" setValue={setDateReceived} />
              <Field text="Received By" setValue={setReceivedBy} />
              <Field text="Physical Condition" setValue={setPhysicalCondition} />
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
              <Field text="Warranty Service Info" setValue={setWarrantyServiceInfo} />
              <Field text="Notes" setValue={setNotes} />
            </div>
            <button
              type="submit"
              className="duration-600 mt-5 h-8 rounded-full bg-blue-500 text-lg font-medium leading-4 text-white transition ease-in hover:scale-105 hover:bg-sky-700"
              onClick={add}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <img
        alt="a"
        className="h-screen w-screen"
        src="https://cdn.discordapp.com/attachments/1249232893268590684/1254204922782814310/better_better.png?ex=667f3c5b&is=667deadb&hm=9be0a0caee354981fbd1b351700066fc98db66d3bfc42f33b5fd01d549f1dd11&"
      />
    </>
  );
};
export default Form;
