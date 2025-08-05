import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cosenza",
  canonical: links.servizi["disidratazione-fanghi"]["cosenza"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cosenza",
  locationNames: { label: "Cosenza", href: "cosenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
