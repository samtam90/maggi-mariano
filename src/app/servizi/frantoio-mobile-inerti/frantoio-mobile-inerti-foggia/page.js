import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Foggia",
  canonical: links.servizi["frantoio-mobile-inerti"]["foggia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Foggia",
  locationNames: { label: "Foggia", href: "foggia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
