import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import paymentModels from "@/resources/payment-models.json";

export default function PaymentModels({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(value) => setValue(value)}
      className="w-full flex-wrap flex tablet:gap-3 items-center gap-6"
    >
      {paymentModels.map((item) => {
        return (
          <div key={item.value} className="flex  items-center w-max gap-3">
            <RadioGroupItem
              className="w-5 tablet:w-3.5 tablet:h-3.5 h-5 shadow-none text-gray-700 border border-gray-300"
              value={item.name}
              id={item.name}
              required
            />
            <label
              htmlFor={item.name}
              className="text-base tablet:text-xs font-medium text-gray-700 leading-6"
            >
              {item.name}
            </label>
          </div>
        );
      })}
    </RadioGroup>
  );
}
