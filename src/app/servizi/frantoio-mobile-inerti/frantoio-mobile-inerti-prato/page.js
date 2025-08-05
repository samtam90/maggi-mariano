import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Prato",
  canonical: links.servizi["frantoio-mobile-inerti"]["prato"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Prato",
  locationNames: { label: "Prato", href: "prato" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
