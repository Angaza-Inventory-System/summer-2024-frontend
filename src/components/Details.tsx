import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { Device } from "./Device";
import Cookies from "js-cookie";

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
        if (response.status === 403) {
          Cookies.remove("token", { path: "" });
          window.location.reload();
          return;
        }
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
      aria-hidden="true"
      role="dialog"
    >
      <div
        className={`no-scrollbar overflow-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 dark:text-gray-400 ${rowData ? "h-1/3 w-96" : "h-2/3"}`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
        role="dialog"
      >
        <div className="mb-2 font-bold">Device ID:</div> {data?.device_id}
        <div className="mb-2 font-bold">Type:</div> {data?.type}
        <div className="mb-2 font-bold">Make:</div> {data?.make}
        <div className="mb-2 font-bold">Model:</div> {data?.model}
        <div className="mb-2 font-bold">Serial Number:</div>
        {data?.serial_number}
        <div className="mb-2 font-bold">Mac Id:</div> {data?.mac_id}
        <div className="mb-2 font-bold">Year Of Manufacture:</div>
        {data?.year_of_manufacture}
        <div className="mb-2 font-bold">Shipment Date:</div>
        {data?.shipment_date}
        <div className="mb-2 font-bold">Date Received:</div>{" "}
        {data?.date_received}
        <div className="mb-2 font-bold">Physical Condition:</div>
        {data?.physical_condition}
        <div className="mb-2 font-bold">Specifications:</div>
        {data?.specifications}
        <div className="mb-2 font-bold">Operating System:</div>
        {data?.operating_system}
        <div className="mb-2 font-bold">Accessories:</div> {data?.accessories}
        <div className="mb-2 font-bold">Date Of Donation:</div>
        {data?.date_of_donation}
        <div className="mb-2 font-bold">Value:</div> {data?.value}
        <div className="mb-2 font-bold">Status:</div> {data?.status}
        <div className="mb-2 font-bold">Distributor:</div> {data?.distributor}
        <div className="mb-2 font-bold">Warranty Service Info:</div>
        {data?.warranty_service_info}
        <div className="mb-2 font-bold">Notes:</div> {data?.notes}
        <div className="mb-2 font-bold">Received By:</div>
        {data?.received_by}
        <div className="mb-2 font-bold">Donor:</div> {data?.donor}
        <div className="mb-2 font-bold">Location:</div>
        {data?.location}
        <div className="mb-2 font-bold">Assigned User:</div>{" "}
        {data?.assigned_user}
        <div className="flex justify-center rounded-lg p-2 dark:bg-gray-400">
          <QRCode
            bgColor={
              document.documentElement.classList.contains("dark")
                ? "rgb(156 163 175 / var(--tw-text-opacity))"
                : "white"
            }
            fgColor={
              document.documentElement.classList.contains("dark")
                ? "rgb(17 24 39 / var(--tw-bg-opacity))"
                : "black"
            }
            value={`${frontUrl}/${data?.device_id}`}
          />
        </div>
      </div>
    </div>
  );
};
