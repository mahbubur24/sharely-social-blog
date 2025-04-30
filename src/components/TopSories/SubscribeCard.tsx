
import Button from "../shared/ButtonProps";
import Input from "../shared/InputProps";

export default function NewsletterSubscribe() {
  return (
    <div className="bg-[#cf412b] text-white p-8 rounded-md space-y-6">
      <div className="space-y-2">
        <p className="text-[14px] font-bold uppercase tracking-wider mb-8">
          Never miss a headline!
        </p>
        <h2 className="text-3xl font-semibold leading-tight mb-6">
          Subscribe to our <br /> newsletter for daily updates.
        </h2>
        <p className="text-lg text-white/80 mb-5">
          Get the latest stories delivered straight to your inbox.
        </p>
      </div>

      <form className="space-y-4">
        <Input
          type="email"
          placeholder="email@example.com"
          className="border-0 focus-visible:outline-none focus-visible:ring-0 rounded-none w-full px-5"
        />
        <Button
          type="submit"
          className=""
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
