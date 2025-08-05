import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montaione",
  canonical: links.servizi["frantoio-mobile-inerti"]["montaione"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montaione",
  locationNames: { label: "Montaione", href: "montaione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
