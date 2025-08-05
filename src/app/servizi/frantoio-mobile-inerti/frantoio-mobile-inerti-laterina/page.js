import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Laterina",
  canonical: links.servizi["frantoio-mobile-inerti"]["laterina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Laterina",
  locationNames: { label: "Laterina", href: "laterina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
