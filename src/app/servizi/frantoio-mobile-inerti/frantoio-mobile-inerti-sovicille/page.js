import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sovicille",
  canonical: links.servizi["frantoio-mobile-inerti"]["sovicille"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sovicille",
  locationNames: { label: "Sovicille", href: "sovicille" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
