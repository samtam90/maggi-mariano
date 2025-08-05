import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Spello",
  canonical: links.servizi["disidratazione-fanghi"]["spello"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Spello",
  locationNames: { label: "Spello", href: "spello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
