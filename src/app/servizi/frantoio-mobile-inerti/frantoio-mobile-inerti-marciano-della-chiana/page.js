import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Marciano della Chiana",
  canonical: links.servizi["frantoio-mobile-inerti"]["marciano-della-chiana"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Marciano della Chiana",
  locationNames: { label: "Marciano della Chiana", href: "marciano-della-chiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
