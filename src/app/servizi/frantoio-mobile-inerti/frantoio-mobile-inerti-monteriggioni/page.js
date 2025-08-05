import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Monteriggioni",
  canonical: links.servizi["frantoio-mobile-inerti"]["monteriggioni"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Monteriggioni",
  locationNames: { label: "Monteriggioni", href: "monteriggioni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
