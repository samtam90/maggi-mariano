import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Polino",
  canonical: links.servizi["disidratazione-fanghi"]["polino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Polino",
  locationNames: { label: "Polino", href: "polino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
