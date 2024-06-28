import Field from "./Field";

const Form = () => {
  return (
    <>
      <div className="flex w-screen justify-center">
        <div className="mx-auto' absolute h-screen w-1/4">
          <form className="mx-auto w-full max-w-sm" onSubmit={() => {}}>
            <div className="flex flex-col pt-10">
              <Field text="Device ID" setValue={() => {}} />
              <Field text="Type" setValue={() => {}} />
              <Field text="Make" setValue={() => {}} />
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
