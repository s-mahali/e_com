import banner_icon from "../assets/div.banner-icon.png"
import divicon1 from "../assets/div_icon1.png"
import divicon2 from "../assets/div_icon2.png"
import divicon4 from "../assets/div_icon4.png"
import divicon5 from "../assets/div_icon5.png"
const features = [
  {
    icon: <img src={divicon1} className="w-10 h-10 text-[#3BB77E]" />,
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
  },
  {
    icon: <img src={divicon2} className="w-10 h-10 text-[#3BB77E]" />,
    title: "Free delivery",
    subtitle: "24/7 amazing services",
  },
  {
    icon: <img src={banner_icon} className="w-10 h-10 text-[#3BB77E]" />,
    title: "Great daily deal",
    subtitle: "When you sign up",
  },
  {
    icon: <img src={divicon4} className="w-10 h-10 text-[#3BB77E]" />,
    title: "Wide assortment",
    subtitle: "Mega Discounts",
  },
  {
    icon: <img src={divicon5} className="w-10 h-10 text-[#3BB77E]" />,
    title: "Easy returns",
    subtitle: "Within 30 days",
  },
];

const FeaturePanel = () => {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-2 bg-white ">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-[#F4F6FA] rounded-xl px-6 py-4 min-w-[250px] shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="bg-[#D9F3E9] p-2 rounded-lg">{item.icon}</div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
            <span className="text-xs text-gray-500">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturePanel;
