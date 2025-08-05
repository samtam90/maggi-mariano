import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Londa",
  canonical: links.servizi["frantoio-mobile-inerti"]["londa"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Londa",
  locationNames: { label: "Londa", href: "londa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
