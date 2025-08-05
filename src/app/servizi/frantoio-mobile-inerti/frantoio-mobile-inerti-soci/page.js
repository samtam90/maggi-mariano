import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Soci",
  canonical: links.servizi["frantoio-mobile-inerti"]["soci"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Soci",
  locationNames: { label: "Soci", href: "soci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
