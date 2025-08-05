import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Padova",
  canonical: links.servizi["disidratazione-fanghi"]["padova"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Padova",
  locationNames: { label: "Padova", href: "padova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});
