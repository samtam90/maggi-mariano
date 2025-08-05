import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cremona",
  canonical: links.servizi["frantoio-mobile-inerti"]["cremona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cremona",
  locationNames: { label: "Cremona", href: "cremona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["cremona"],
      name: "Cremona",
  }),
});
