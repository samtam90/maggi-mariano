import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pordenone",
  canonical: links.servizi["frantoio-mobile-inerti"]["pordenone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pordenone",
  locationNames: { label: "Pordenone", href: "pordenone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
