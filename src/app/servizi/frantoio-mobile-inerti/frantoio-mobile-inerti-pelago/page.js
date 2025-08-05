import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pelago",
  canonical: links.servizi["frantoio-mobile-inerti"]["pelago"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pelago",
  locationNames: { label: "Pelago", href: "pelago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
