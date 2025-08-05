import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Modena",
  canonical: links.servizi["frantoio-mobile-inerti"]["modena"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Modena",
  locationNames: { label: "Modena", href: "modena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["modena"],
      name: "Modena",
  }),
});
