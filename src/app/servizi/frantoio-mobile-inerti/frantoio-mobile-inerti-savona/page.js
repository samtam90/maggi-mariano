import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Savona",
  canonical: links.servizi["frantoio-mobile-inerti"]["savona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Savona",
  locationNames: { label: "Savona", href: "savona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
