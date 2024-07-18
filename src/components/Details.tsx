import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { Device } from "./Device";

interface Props {
  rowData: Device | undefined;
  onClose: () => void;
  jsonHeaders: { "Content-Type": string; Authorization: string };
  backUrl: string;
  frontUrl: string;
}

export const Details = ({
  rowData,
  onClose,
  jsonHeaders,
  backUrl,
  frontUrl,
}: Props) => {
  const [data, setData] = useState(rowData || undefined);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!rowData) {
        const response = await fetch(`${backUrl}/devices/devices/${id}`, {
          method: "GET",
          headers: jsonHeaders,
        });
        const json = await response.json();
        setData(json);
      }
    };
    fetchData();
  }, [id, rowData]);

  useEffect(() => {
    if (id) document.title = `Device ${id}`;
  }, []);
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75"
      onClick={onClose}
    >
      <div
        className={`no-scrollbar overflow-y-auto rounded-lg bg-white p-6 shadow-lg ${rowData ? "h-1/3 w-96" : "h-full w-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2">
          <div className="font-bold">Device ID:</div> {data?.device_id}
        </div>
        <div className="mb-2">
          <div className="font-bold">Type:</div> {data?.type}
        </div>
        <div className="mb-2">
          <div className="font-bold">Make:</div> {data?.make}
        </div>
        <p className="mb-2">
          <div className="font-bold">Model:</div> {data?.model}
        </p>
        <p className="mb-2">
          <div className="font-bold">Serial Number:</div>
          {data?.serial_number}
        </p>
        <p className="mb-2">
          <div className="font-bold">Mac Id:</div> {data?.mac_id}
        </p>
        <p className="mb-2">
          <div className="font-bold">Year Of Manufacture:</div>
          {data?.year_of_manufacture}
        </p>
        <p className="mb-2">
          <div className="font-bold">Shipment Date:</div>
          {data?.shipment_date}
        </p>
        <p className="mb-2">
          <div className="font-bold">Date Received:</div> {data?.date_received}
        </p>
        <p className="mb-2">
          <div className="font-bold">Physical Condition:</div>
          {data?.physical_condition}
        </p>
        <p className="mb-2">
          <div className="font-bold">Specifications:</div>
          {data?.specifications}
        </p>
        <p className="mb-2">
          <div className="font-bold">Operating System:</div>
          {data?.operating_system}
        </p>
        <p className="mb-2">
          <div className="font-bold">Accessories:</div> {data?.accessories}
        </p>
        <p className="mb-2">
          <div className="font-bold">Date Of Donation:</div>
          {data?.date_of_donation}
        </p>
        <p className="mb-2">
          <div className="font-bold">Value:</div> {data?.value}
        </p>
        <p className="mb-2">
          <div className="font-bold">Status:</div> {data?.status}
        </p>
        <p className="mb-2">
          <div className="font-bold">Distributor:</div> {data?.distributor}
        </p>
        <p className="mb-2">
          <div className="font-bold">Warranty Service Info:</div>
          {data?.warranty_service_info}
        </p>
        <p className="mb-2">
          <div className="font-bold">Notes:</div> {data?.notes}
        </p>
        <p className="mb-2">
          <div className="font-bold">Received By:</div>
          {data?.received_by}
        </p>
        <p className="mb-2">
          <div className="font-bold">Donor:</div> {data?.donor}
        </p>
        <p className="mb-2">
          <div className="font-bold">Location:</div>
          {data?.location}
        </p>
        <p className="mb-2">
          <div className="font-bold">Assigned User:</div> {data?.assigned_user}
        </p>
        <QRCode value={`${frontUrl}/${data?.device_id}`} />
      </div>
    </div>
  );
};
