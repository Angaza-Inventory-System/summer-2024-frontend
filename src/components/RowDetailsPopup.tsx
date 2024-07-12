export const RowDetailsPopup = ({ rowData, onClose }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="no-scrollbar h-1/3 w-96 overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 text-lg font-semibold">Device Details</div>
        <div className="mb-2">
          <div className="font-bold">Device ID:</div> {rowData.device_id}
        </div>
        <div className="mb-2">
          <div className="font-bold">Type:</div> {rowData.type}
        </div>
        <div className="mb-2">
          <div className="font-bold">Make:</div> {rowData.make}
        </div>
        <p className="mb-2">
          <div className="font-bold">Model:</div> {rowData.model}
        </p>
        <p className="mb-2">
          <div className="font-bold">Serial Number:</div>
          {rowData.serial_number}
        </p>
        <p className="mb-2">
          <div className="font-bold">Mac Id:</div> {rowData.mac_id}
        </p>
        <p className="mb-2">
          <div className="font-bold">Year Of Manufacture:</div>
          {rowData.year_of_manufacture}
        </p>
        <p className="mb-2">
          <div className="font-bold">Shipment Date:</div>
          {rowData.shipment_date}
        </p>
        <p className="mb-2">
          <div className="font-bold">Date Received:</div> {rowData.dateReceived}
        </p>
        <p className="mb-2">
          <div className="font-bold">Physical Condition:</div>
          {rowData.physical_condition}
        </p>
        <p className="mb-2">
          <div className="font-bold">Specifications:</div>
          {rowData.specifications}
        </p>
        <p className="mb-2">
          <div className="font-bold">Operating System:</div>
          {rowData.operating_system}
        </p>
        <p className="mb-2">
          <div className="font-bold">Accessories:</div> {rowData.accessories}
        </p>
        <p className="mb-2">
          <div className="font-bold">Date Of Donation:</div>
          {rowData.date_of_donation}
        </p>
        <p className="mb-2">
          <div className="font-bold">Value:</div> {rowData.value}
        </p>
        <p className="mb-2">
          <div className="font-bold">Status:</div> {rowData.status}
        </p>
        <p className="mb-2">
          <div className="font-bold">Distributor:</div> {rowData.distributor}
        </p>
        <p className="mb-2">
          <div className="font-bold">Warranty Service Info:</div>
          {rowData.warranty_service_info}
        </p>
        <p className="mb-2">
          <div className="font-bold">Notes:</div> {rowData.notes}
        </p>
        <p className="mb-2">
          <div className="font-bold">Received By:</div>
          {rowData.received_by}
        </p>
        <p className="mb-2">
          <div className="font-bold">Donor:</div> {rowData.donor}
        </p>
        <p className="mb-2">
          <div className="font-bold">Location:</div>
          {rowData.location}
        </p>
        <p className="mb-2">
          <div className="font-bold">Assigned User:</div>{" "}
          {rowData.assigned_user}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};
