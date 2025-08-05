import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castel Ritaldi",
  canonical: links.servizi["disidratazione-fanghi"]["castel-ritaldi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castel Ritaldi",
  locationNames: { label: "Castel Ritaldi", href: "castel-ritaldi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
