import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Poppi",
  canonical: links.servizi["frantoio-mobile-inerti"]["poppi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Poppi",
  locationNames: { label: "Poppi", href: "poppi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
