import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Caserta",
  canonical: links.servizi["frantoio-mobile-inerti"]["caserta"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Caserta",
  locationNames: { label: "Caserta", href: "caserta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
