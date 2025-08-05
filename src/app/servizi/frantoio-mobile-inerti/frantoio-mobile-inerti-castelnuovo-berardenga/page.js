import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castelnuovo Berardenga",
  canonical: links.servizi["frantoio-mobile-inerti"]["castelnuovo-berardenga"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castelnuovo Berardenga",
  locationNames: { label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
