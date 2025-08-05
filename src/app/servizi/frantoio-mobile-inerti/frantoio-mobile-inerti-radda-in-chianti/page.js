import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Radda in Chianti",
  canonical: links.servizi["frantoio-mobile-inerti"]["radda-in-chianti"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Radda in Chianti",
  locationNames: { label: "Radda in Chianti", href: "radda-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
