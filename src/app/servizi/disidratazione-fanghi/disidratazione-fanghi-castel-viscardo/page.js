import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castel Viscardo",
  canonical: links.servizi["disidratazione-fanghi"]["castel-viscardo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castel Viscardo",
  locationNames: { label: "Castel Viscardo", href: "castel-viscardo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
