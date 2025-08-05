import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Torino",
  canonical: links.servizi["disidratazione-fanghi"]["torino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Torino",
  locationNames: { label: "Torino", href: "torino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
