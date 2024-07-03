import { useEffect, useState } from "react";
import Field from "./Field";

const Form = () => {
  const add = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: ,
        type: ,
        make: ,
        model: ,
        serial_number: ,
        mac_id: ,
        year_of_manufacture: ,
        shipment_date: ,
        date_received: ,
        received_by: , 
        physical_condition: ,
        specifications: ,
        operating_system: ,
        accessories: ,
        donor: , // Assuming 1 is the ID of an existing Donor
        date_of_donation: ,
        value: ,
        location: ,
        assigned_user: , 
        status: ,
        distributor: ,
        warranty_service_info: ,
        notes: "Handle with care.",
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
  const [recievedBy, setRecievedBy] = useState("");
  const [physicalCondition, setPhysicalCondition] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [operatingS,] = useState("");
  const [donorID, setDonorID] = useState("");
  const [,] = useState("");
  const [,] = useState("");
  const [,] = useState("");
  const [,] = useState("");
  const [,] = useState("");
  const [,] = useState("");
  const [,] = useState("");
  

  return (
    <>
      <div className="flex w-screen justify-center">
        <div className="mx-auto' absolute h-screen w-1/4">
          <form className="mx-auto w-full max-w-sm" onSubmit={() => {}}>
            <div className="flex flex-col pt-10">
              <Field text="Device ID" setValue={setId} />
              <Field text="Type" setValue={setType} />
              <Field text="Make" setValue={setMake} />
              <Field text="Model" setValue={() => {}} />
              <Field text="Serial Number" setValue={() => {}} />
              <Field text="Mac ID" setValue={() => {}} />
              <Field text="Year Of Manufacture" setValue={() => {}} />
              <Field text="Shipment Date" setValue={() => {}} />
              <Field text="Date Received" setValue={() => {}} />
              <Field text="Received By" setValue={() => {}} />
              <Field text="Physical Condition" setValue={() => {}} />
              <Field text="Specifications" setValue={() => {}} />
              <Field text="Operating System" setValue={() => {}} />
              <Field text="Accesories" setValue={() => {}} />
              <Field text="Donor ID" setValue={() => {}} />
              <Field text="Date Of Donation" setValue={() => {}} />
              <Field text="Value" setValue={() => {}} />
              <Field text="Location" setValue={() => {}} />
              <Field text="Assigned User" setValue={() => {}} />
              <Field text="Status" setValue={() => {}} />
              <Field text="Distributor" setValue={() => {}} />
              <Field text="Warranty Service Info" setValue={() => {}} />
              <Field text="" setValue={() => {}} />
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
