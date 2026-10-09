import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const RequestShowingForm = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <h3 className="text-2xl font-semibold">Request Showing</h3>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <Input type="text" name="name" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="address" className="text-sm font-medium">
            Address
          </label>
          <Input type="text" name="address" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone number
          </label>
          <Input type="tel" name="phone" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-base text-text-secondary">
          Your preferred time. Reschedule anytime.
        </span>
        <div className="flex flex-wrap gap-4">
          <div className="text-center rounded-full border-2 border-black max-w-40.5 w-full py-2 text-base cursor-pointer">
            ASAP
          </div>
          <div className="text-center rounded-full border-2 border-text-secondary max-w-40.5 w-full py-2 text-base cursor-pointer text-text-secondary">
            Next Week
          </div>
          <div className="text-center rounded-full border-2 border-text-secondary max-w-40.5 w-full py-2 text-base cursor-pointer text-text-secondary">
            This Week
          </div>
          <div className="text-center rounded-full border-2 border-text-secondary max-w-40.5 w-full py-2 text-base cursor-pointer text-text-secondary">
            Select Day
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Do you have any other note?
          </label>
          <Input type="text" name="name" className="h-36" />
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="text-center rounded-full border-2 border-text-secondary max-w-40.5 w-full p-2 text-sm cursor-pointer text-text-secondary">
            Any recent upgrades?
          </div>
          <div className="text-center rounded-full border-2 border-text-secondary max-w-40.5 w-full p-2 text-sm cursor-pointer text-text-secondary">
            Average utility cost?
          </div>
          <div className="text-center rounded-full border-2 border-text-secondary max-w-40.5 w-full p-2 text-sm cursor-pointer text-text-secondary">
            Is it a quite?
          </div>
        </div>
      </div>
      <Button className="w-full mt-2">Request Showing</Button>
    </div>
  );
};

export default RequestShowingForm;
