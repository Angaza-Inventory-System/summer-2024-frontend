import QRCode from "react-qr-code";

interface Props {
  qrCodes: string[];
  frontUrl: string;
}

const QRGrid = ({ qrCodes, frontUrl }: Props) => {
  return (
    <div className="box-border w-[200mm] p-4">
      <div className="grid grid-cols-2 grid-rows-4 gap-4">
        {qrCodes.map((code, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-black"
          >
            <QRCode value={`${frontUrl}/${code}`} size={120} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRGrid;
