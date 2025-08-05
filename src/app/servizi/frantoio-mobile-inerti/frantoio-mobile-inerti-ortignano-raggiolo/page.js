import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ortignano Raggiolo",
  canonical: links.servizi["frantoio-mobile-inerti"]["ortignano-raggiolo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ortignano Raggiolo",
  locationNames: { label: "Ortignano Raggiolo", href: "ortignano-raggiolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
