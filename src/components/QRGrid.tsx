import QRCode from "react-qr-code";

interface Props {
  qrCodes: any;
  frontUrl: string;
}

const QRGrid = ({ qrCodes, frontUrl }: Props) => {
  return (
    <div className="box-border h-[297mm] w-[210mm] p-4">
      <div className="grid grid-cols-2 grid-rows-4 gap-4">
        {
          // @ts-ignore
          qrCodes.map((code, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-black"
            >
              <QRCode value={`${frontUrl}/${code}`} size={128} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default QRGrid;
