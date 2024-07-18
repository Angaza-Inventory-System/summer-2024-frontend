import { useState } from "react";
import DateCalendarReferenceDate from "./DateCalendarReferenceDate";
import dayjs, { Dayjs } from "dayjs";
import bg from "./better_better.png";

interface Props {
  jsonHeaders: any;
  backUrl: string;
}
const Form = ({ jsonHeaders, backUrl }: Props) => {
  const [id, setId] = useState<string>();
  const [type, setType] = useState<string>();
  const [make, setMake] = useState<string>();
  const [model, setModel] = useState<string>();
  const [serialNumber, setSerialNumber] = useState<string>();
  const [macId, setMacId] = useState<string>();
  const [manufacture, setManufacture] = useState<number>();
  const [shipmentDate, setShipmentDate] = useState<Dayjs>(dayjs());
  const [dateReceived, setDateReceived] = useState<Dayjs>(dayjs());
  const [receivedBy, setReceivedBy] = useState<number>();
  const [physicalCondition, setPhysicalCondition] = useState<string>();
  const [specifications, setSpecifications] = useState<string>();
  const [operatingSystem, setOperatingSystem] = useState<string>();
  const [accessories, setAccessories] = useState<string>();
  const [donorID, setDonorID] = useState<number>();
  const [dateOfDonation, setDateOfDonation] = useState<Dayjs>(dayjs());
  const [value, setValue] = useState<string>();
  const [location, setLocation] = useState<number>();
  const [assignedUser, setAssignedUser] = useState<number>();
  const [status, setStatus] = useState<string>();
  const [distributor, setDistributor] = useState<string>();
  const [warrantyServiceInfo, setWarrantyServiceInfo] = useState<string>();
  const [notes, setNotes] = useState<string>();
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const add = (event: React.FormEvent) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({
        device_id: id,
        type: type,
        make: make,
        model: model,
        serial_number: serialNumber,
        mac_id: macId,
        year_of_manufacture: manufacture,
        shipment_date: shipmentDate.format("YYYY-MM-DD"),
        date_received: dateReceived.format("YYYY-MM-DD"),
        received_by: receivedBy,
        physical_condition: physicalCondition,
        specifications: specifications,
        operating_system: operatingSystem,
        accessories: accessories,
        donor: donorID,
        date_of_donation: dateOfDonation.format("YYYY-MM-DD"),
        value: value,
        location: location,
        assigned_user: assignedUser,
        status: status,
        distributor: distributor,
        warranty_service_info: warrantyServiceInfo,
        notes: notes,
      }),
    };
    fetch(`${backUrl}/devices/devices/`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setErrors(response);
      });
  };

  try {
    return (
      <>
        <div className="flex w-full justify-center pl-10">
          <img
            alt="background"
            className="absolute inset-0 h-screen w-screen object-cover"
            src={bg}
          />
          <div className="bg-white/2000 relative h-screen w-screen overflow-y-auto rounded-lg p-8">
            <form className="mx-auto w-full max-w-sm" onSubmit={add}>
              <div className="flex flex-col space-y-4">
                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Device ID
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setId(e.target.value)}
                      className={`${errors.device_id ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.device_id && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.device_id.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Type
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setType(e.target.value)}
                      className={`${errors.type ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.type && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.type.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Make
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setMake(e.target.value)}
                      className={`${errors.make ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.make && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.make.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Model
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setModel(e.target.value)}
                      className={`${errors.model ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.model && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.model.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Serial Number
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setSerialNumber(e.target.value)}
                      className={`${errors.type ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.serial_number && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.serial_number.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Mac ID
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setMacId(e.target.value)}
                      className={`${errors.mac_id ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.mac_id && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.mac_id.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Year of Manufacture
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setManufacture(parseInt(e.target.value))}
                      className={`${errors.year_of_manufacture ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.year_of_manufacture && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.year_of_manufacture.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Shipment Date
                  </label>
                  <DateCalendarReferenceDate
                    selectedDate={shipmentDate}
                    setSelectedDate={setShipmentDate}
                  />
                </div>
                <div className="mb-6 flex">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Date Received
                  </label>
                  <DateCalendarReferenceDate
                    selectedDate={dateReceived}
                    setSelectedDate={setDateReceived}
                  />
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Received By
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setReceivedBy(parseInt(e.target.value))}
                      className={`${errors.received_by ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.received_by && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.received_by.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Physical Condition
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setPhysicalCondition(e.target.value)}
                      className={`${errors.physical_condition ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.physical_condition && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.physical_condition.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Specifications
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setSpecifications(e.target.value)}
                      className={`${errors.specifications ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.specifications && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.specifications.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Operating System
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setOperatingSystem(e.target.value)}
                      className={`${errors.operating_system ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.operating_system && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.operating_system.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Accessories
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setAccessories(e.target.value)}
                      className={`${errors.accessories ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.accessories && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.accessories.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Donor ID
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setDonorID(parseInt(e.target.value))}
                      className={`${errors.donor ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.donor && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.donor.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Date Of Donation
                  </label>
                  <DateCalendarReferenceDate
                    selectedDate={dateOfDonation}
                    setSelectedDate={setDateOfDonation}
                  />
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Value
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setValue(e.target.value)}
                      className={`${errors.value ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.value && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.value.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Location
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setLocation(parseInt(e.target.value))}
                      className={`${errors.received_by ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.received_by && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.received_by.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Assigned User
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) =>
                        setAssignedUser(parseInt(e.target.value))
                      }
                      className={`${errors.assigned_user ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.assigned_user && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.assigned_user.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Status
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setStatus(e.target.value)}
                      className={`${errors.status ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.status && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.status.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Distributor
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setDistributor(e.target.value)}
                      className={`${errors.distributor ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.distributor && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.distributor.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Warranty Service Info
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setWarrantyServiceInfo(e.target.value)}
                      className={`${errors.warranty_service_info ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.warranty_service_info && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.warranty_service_info.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <label className="w-32 font-bold text-[#3aaef1ec]">
                    Notes
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setNotes(e.target.value)}
                      className={`${errors.notes ? "border-2 border-red-500" : "border border-gray-300"} rounded p-2`}
                    />
                    {errors.notes && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.notes.map((msg, index) => (
                          <span key={index}>{msg}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

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
  } catch (e) {
    return <div>Form submitted</div>;
  }
};
export default Form;
