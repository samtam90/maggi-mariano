import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Firenzuola",
  canonical: links.servizi["frantoio-mobile-inerti"]["firenzuola"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Firenzuola",
  locationNames: { label: "Firenzuola", href: "firenzuola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
