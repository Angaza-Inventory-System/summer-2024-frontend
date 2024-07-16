import { useEffect, useState } from "react";
import Field from "./Field";
import DateCalendarReferenceDate from "./DateCalendarReferenceDate";
import dayjs from "dayjs";

const Form = () => {
  const add = (event: React.FormEvent) => {
    event.preventDefault();
    const url = "http://127.0.0.1:8000";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Host: { url },
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMTg0NDQ0LCJpYXQiOjE3MjEwOTgwNDQsImp0aSI6IjQ5ZDc0YmE5MjlhZDRmNTViMDRkMTJiZDA2NWNjMDQxIiwidXNlcl9pZCI6Mn0.0m1OvYI41bAasUG3trmKq9gMQtyyMtIyRFylBAWXOcU",
      },
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
    dayjs().format("2023-01-15"),
  );
  const [dateReceived, setDateReceived] = useState<string>(
    dayjs().format("2023-01-15"),
  );
  const [receivedBy, setReceivedBy] = useState<number>(0);
  const [physicalCondition, setPhysicalCondition] = useState<string>("");
  const [specifications, setSpecifications] = useState<string>("");
  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [accessories, setAccessories] = useState<string>("");
  const [donorID, setDonorID] = useState<number>(0);
  const [dateOfDonation, setDateOfDonation] = useState<string>(
    dayjs().format("2023-01-15"),
  );
  const [value, setValue] = useState<string>("");
  const [location, setLocation] = useState<number>(0);
  const [assignedUser, setAssignedUser] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [distributor, setDistributor] = useState<string>("");
  const [warrantyServiceInfo, setWarrantyServiceInfo] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (!id) {
      newErrors.id = "Device ID is required";
      isValid = false;
    }
    if (manufacture <= 0) {
      newErrors.manufacture = "Years of Manufacture must be a positive number";
      isValid = false;
    }
    if (!shipmentDate || !dayjs(shipmentDate, "YYYY-MM-DD", true).isValid()) {
      newErrors.shipmentDate = "Invalid Shipment Date";
      isValid = false;
    }
    if (donorID <= 0) {
      newErrors.donorID = "Donor ID must be a positive number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) = > {
    event.preventDefault();
    if(validateForm()){
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
    }

  };
  return (
    <>
      <div className="flex w-full justify-center pl-10">
        <img
          alt="background"
          className="absolute inset-0 h-screen w-screen object-cover"
          src="https://cdn.discordapp.com/attachments/1249232893268590684/1254204922782814310/better_better.png?ex=66905fdb&is=668f0e5b&hm=8710dc5025653c1800e362dac25dbe043baacfbfe9f00e3dbc08782e23872049&"
        />
        <div className="bg-white/2000 relative h-screen w-screen overflow-y-auto rounded-lg p-8">
          <form className="mx-auto w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <Field text="Device ID" setValue={setId} error={errors.id} />
              <Field text="Type" setValue={setType} error={errors.type} />
              <Field text="Make" setValue={setMake} error={errors.make} />
              <Field text="Model" setValue={setModel} error={errors.model} />
              <Field text="Serial Number" setValue={setSerialNumber} error={errors.serialNumber} />
              <Field text="Mac ID" setValue={setMacId} error={errors.macId} />
              <Field text="Year Of Manufacture" setValue={setManufacture} error={errors.manufacture} type="number" />
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">Shipment Date</label>
                <DateCalendarReferenceDate date={shipmentDate} setDate={setShipmentDate} />
                {errors.shipmentDate && <div className="text-red-500">{errors.shipmentDate}</div>}
              </div>
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">Date Received</label>
                <DateCalendarReferenceDate date={dateReceived} setDate={setDateReceived} />
                {errors.dateReceived && <div className="text-red-500">{errors.dateReceived}</div>}
              </div>
              <Field text="Received By" setValue={setReceivedBy} type="number" error={errors.receivedBy} />
              <Field text="Physical Condition" setValue={setPhysicalCondition} error={errors.physicalCondition} />
              <Field text="Specifications" setValue={setSpecifications} error={errors.specifications} />
              <Field text="Operating System" setValue={setOperatingSystem} error={errors.operatingSystem} />
              <Field text="Accessories" setValue={setAccessories} error={errors.accessories} />
              <Field text="Donor ID" setValue={setDonorID} type="number" error={errors.donorID} />
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">Date Of Donation</label>
                <DateCalendarReferenceDate date={dateOfDonation} setDate={setDateOfDonation} />
                {errors.dateOfDonation && <div className="text-red-500">{errors.dateOfDonation}</div>}
              </div>
              <Field text="Value" setValue={setValue} error={errors.value} />
              <Field text="Location" setValue={setLocation} type="number" error={errors.location} />
              <Field text="Assigned User" setValue={setAssignedUser} type="number" error={errors.assignedUser} />
              <Field text="Status" setValue={setStatus} error={errors.status} />
              <Field text="Distributor" setValue={setDistributor} error={errors.distributor} />
              <Field text="Warranty Service Info" setValue={setWarrantyServiceInfo} error={errors.warrantyServiceInfo} />
              <Field text="Notes" setValue={setNotes} error={errors.notes} />
              <button
                type="submit"
                className="duration-600 mt-5 h-8 rounded-full bg-blue-500 text-lg font-medium leading-4 text-white transition ease-in hover:scale-105 hover:bg-sky-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  interface FieldProps {
    text: string;
    setValue: (value: any) => void;
    error?: string;
    type?: string;  // Optional prop for input type
  }
  
  const Field: React.FC<FieldProps> = ({ text, setValue, error, type = "text" }) => (
    <div className="mb-6 flex items-center">
      <label className="w-32 font-bold text-[#3aaef1ec]">{text}</label>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        className={`border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );  
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
                <DateCalendarReferenceDate />
              </div>
              <div className="mb-6 flex items-center">
                <label className="w-32 font-bold text-[#3aaef1ec]">
                  Date Received
                </label>
                <DateCalendarReferenceDate />
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
                <DateCalendarReferenceDate />
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
