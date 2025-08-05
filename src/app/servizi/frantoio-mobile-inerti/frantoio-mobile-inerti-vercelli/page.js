import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Vercelli",
  canonical: links.servizi["frantoio-mobile-inerti"]["vercelli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Vercelli",
  locationNames: { label: "Vercelli", href: "vercelli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
