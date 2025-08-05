import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bibbiena",
  canonical: links.servizi["frantoio-mobile-inerti"]["bibbiena"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bibbiena",
  locationNames: { label: "Bibbiena", href: "bibbiena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
