import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Trequanda",
  canonical: links.servizi["disidratazione-fanghi"]["trequanda"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Trequanda",
  locationNames: { label: "Trequanda", href: "trequanda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
