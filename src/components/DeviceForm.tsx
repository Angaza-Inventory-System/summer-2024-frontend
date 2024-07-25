import { useEffect, useState } from "react";
import DateCalendarReferenceDate from "./DateCalendarReferenceDate";
import dayjs, { Dayjs } from "dayjs";
import { Navigate } from "react-router-dom";
import bg from "./better_better.png";
import Cookies from "js-cookie";
import { Dropdown } from "flowbite-react";

interface Props {
  jsonHeaders: { "Content-Type": string; Authorization: string };
  backUrl: string;
}
const DeviceForm = ({ jsonHeaders, backUrl }: Props) => {
  const [id, setId] = useState<string>();
  const [type, setType] = useState<string>();
  const [make, setMake] = useState<string>();
  const [model, setModel] = useState<string>();
  const [serialNumber, setSerialNumber] = useState<string>();
  const [macId, setMacId] = useState<string>();
  const [manufacture, setManufacture] = useState<number>();

  const [physicalCondition, setPhysicalCondition] = useState<string>();
  const [specifications, setSpecifications] = useState<string>();
  const [operatingSystem, setOperatingSystem] = useState<string>();

  const [donor, setDonor] = useState<number>();
  const [dateOfDonation, setDateOfDonation] = useState<Dayjs>(dayjs());
  const [value, setValue] = useState<string>();
  const [warehouse, setWarehouse] = useState<number>();
  const [assignedUser, setAssignedUser] = useState<number>();

  const [distributor, setDistributor] = useState<string>();
  const [warrantyServiceInfo, setWarrantyServiceInfo] = useState<string>();
  const [notes, setNotes] = useState<string>();
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  document.documentElement.classList.remove("dark");

  const add = (event: React.FormEvent) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({
        device_id: id,
        type,
        make,
        model,
        serial_number: serialNumber,
        mac_id: macId,
        year_of_manufacture: manufacture,
        physical_condition: physicalCondition,
        specifications,
        operating_system: operatingSystem,
        donor,
        date_of_donation: dateOfDonation.format("YYYY-MM-DD"),
        value,
        warehouse,
        assigned_user: assignedUser,
        distributor,
        notes,
      }),
    };
    fetch(`${backUrl}/devices/devices/`, requestOptions)
      .then((response) => {
        if (response.status === 403) {
          Cookies.remove("token", { path: "" });
          window.location.reload();
          return;
        }
        return response.json();
      })
      .then((response) => {
        setErrors(response);
      });
  };
  useEffect(() => {
    fetch(`${backUrl}/devices/devices/`, {
      method: "GET",
      headers: jsonHeaders,
    }).then((response) => {
      if (response.status === 403) {
        Cookies.remove("token", { path: "" });
        window.location.reload();
        return;
      }
    });

    document.title = "Device Creation Form";
  }, []);
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
                <div className="flex items-center">
                  <label
                    htmlFor="type"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
                    Type
                  </label>
                  <Dropdown
                    label={type ? type : ""}
                    dismissOnClick={false}
                    color="light"
                    placement="bottom"
                    theme={{
                      floating: {
                        target: "w-[199px] h-[42px]",
                      },
                    }}
                  >
                    <div
                      onClick={() => setType("Computer")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Computer
                    </div>
                    <div
                      onClick={() => setType("Tablet")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Tablet
                    </div>
                    <div
                      onClick={() => setType("Phone")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Phone
                    </div>
                    <div
                      onClick={() => setType("Other")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Other
                    </div>
                  </Dropdown>
                </div>

                <div className="mb-6 flex items-center">
                  <label
                    htmlFor="make"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="model"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="serial number"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="mac ID"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="year of manufacture"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                <div className="mb-6 flex items-center">
                  <label
                    htmlFor="physical condition"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
                    Physical Condition
                  </label>
                  <Dropdown
                    label={physicalCondition ? physicalCondition : ""}
                    dismissOnClick={false}
                    placement="bottom"
                    color="light"
                    theme={{
                      floating: {
                        target: "w-[199px] h-[42px]",
                      },
                    }}
                  >
                    <div
                      onClick={() => setPhysicalCondition("New")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      New
                    </div>
                    <div
                      onClick={() => setPhysicalCondition("Excellent")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Excellent
                    </div>
                    <div
                      onClick={() => setPhysicalCondition("Good")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Good
                    </div>
                    <div
                      onClick={() => setPhysicalCondition("Fair")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Fair
                    </div>
                    <div
                      onClick={() => setPhysicalCondition("Poor")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Poor
                    </div>
                    <div
                      onClick={() => setPhysicalCondition("Broken")}
                      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
                    >
                      Broken
                    </div>
                  </Dropdown>
                </div>

                <div className="mb-6 flex items-center">
                  <label
                    htmlFor="specifications"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="operating system"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="accessories"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="donor"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
                    Donor
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setDonor(parseInt(e.target.value))}
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
                  <label
                    htmlFor="date of donation"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
                    Date Of Donation
                  </label>
                  <DateCalendarReferenceDate
                    selectedDate={dateOfDonation}
                    setSelectedDate={setDateOfDonation}
                  />
                </div>

                <div className="mb-6 flex items-center">
                  <label
                    htmlFor="value"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="warehouse"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
                    Warehouse
                  </label>
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setWarehouse(parseInt(e.target.value))}
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
                  <label
                    htmlFor="assigned user"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
                  <label
                    htmlFor="notes"
                    className="w-32 font-bold text-[#3aaef1ec]"
                  >
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
    return <Navigate to="/" />;
  }
};
export default DeviceForm;
