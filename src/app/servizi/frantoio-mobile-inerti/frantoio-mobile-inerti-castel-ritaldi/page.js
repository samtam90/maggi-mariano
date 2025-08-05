import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castel Ritaldi",
  canonical: links.servizi["frantoio-mobile-inerti"]["castel-ritaldi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castel Ritaldi",
  locationNames: { label: "Castel Ritaldi", href: "castel-ritaldi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
