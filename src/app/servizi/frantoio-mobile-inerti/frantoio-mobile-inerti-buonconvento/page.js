import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Buonconvento",
  canonical: links.servizi["frantoio-mobile-inerti"]["buonconvento"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Buonconvento",
  locationNames: { label: "Buonconvento", href: "buonconvento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
