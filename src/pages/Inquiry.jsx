import Layout from "../components/Layout";
import Button from "../components/Button";

const Inquiry = () => {
  const items = ["ENTITY", "JURISDICTION", "OBJECTIVE"];

  return (
    <Layout>
      <div className="w-full max-w-md space-y-10 px-4">
        <p className="text-xs tracking-wide text-accent">
          PROTOCOL: INQUIRY
        </p>

        {items.map((item, i) => (
          <div key={item} className="space-y-2">
            <p className="text-xs text-muted">
              INDEX 0{i + 1}: {item}
            </p>
            <div className="h-px bg-gray-700" />
          </div>
        ))}

        <Button label="Initiate Evaluation →" />
      </div>
    </Layout>
  );
};

export default Inquiry;
