import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Messina",
  canonical: links.servizi["frantoio-mobile-inerti"]["messina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Messina",
  locationNames: { label: "Messina", href: "messina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
