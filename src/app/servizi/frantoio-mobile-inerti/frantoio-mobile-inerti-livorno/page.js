import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Livorno",
  canonical: links.servizi["frantoio-mobile-inerti"]["livorno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Livorno",
  locationNames: { label: "Livorno", href: "livorno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
