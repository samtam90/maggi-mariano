import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Avellino",
  canonical: links.servizi["disidratazione-fanghi"]["avellino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Avellino",
  locationNames: { label: "Avellino", href: "avellino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
