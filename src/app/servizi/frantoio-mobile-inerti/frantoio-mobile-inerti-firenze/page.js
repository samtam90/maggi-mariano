import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Firenze",
  canonical: links.servizi["frantoio-mobile-inerti"]["firenze"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
