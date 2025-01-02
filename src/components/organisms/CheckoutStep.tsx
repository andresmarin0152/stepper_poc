import { Checkbox } from "@/components/ui/checkbox";
import { PRICING_DETAILS, COMPLEMENTS, PLAN } from "@/utils/checkoutOptions";

const CheckoutStep = () => {
  return (
    <article className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">4. Checkout</h1>
      <section className="flex flex-row gap-4">
        <section className="w-2/3 pt-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold border-b-2 pb-2">PLAN</h1>
            <div className="flex flex-row items-center gap-4 border-b-2 py-2">
              <Checkbox id="option" className="w-5 h-5" />
              <p>{PLAN.ADVANCED.title}</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold border-b-2 pb-2">COMPLEMENTS</h1>
            <div className="flex flex-row items-center gap-4  py-2">
              <Checkbox id="option" className="w-5 h-5" />
              <p>{COMPLEMENTS.STORE.title}</p>
            </div>
            <div className="flex flex-row items-center gap-4  py-2">
              <Checkbox id="option" className="w-5 h-5" />
              <p>{COMPLEMENTS.PROFILE.title}</p>
            </div>
          </div>
        </section>
        <section className="w-1/3 flex flex-col">
          <p className="text-end font-semibold text-3xl">Pricing details</p>
          <div className="bg-slate-200  rounded-md p-8 flex flex-col">
            <div className="flex flex-row items-center justify-between gap-4 pt-2">
              <p>{PRICING_DETAILS.PLAN.title}</p>
              <p>$12</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 pb-2">
              <p>{PRICING_DETAILS.COMPLEMENTS.title}</p>
              <p>$12</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 pt-2">
              <p>{PRICING_DETAILS.SUBTOTAL.title}</p>
              <p>$12</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 pb-2">
              <p>{PRICING_DETAILS.TAX.title}</p>
              <p>$12</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 py-2 font-semibold text-lg">
              <p>{PRICING_DETAILS.TOTAL.title}</p>
              <p>$12</p>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};

export default CheckoutStep;
