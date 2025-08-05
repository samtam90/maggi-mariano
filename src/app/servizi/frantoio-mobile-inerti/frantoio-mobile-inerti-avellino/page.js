import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Avellino",
  canonical: links.servizi["frantoio-mobile-inerti"]["avellino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Avellino",
  locationNames: { label: "Avellino", href: "avellino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
