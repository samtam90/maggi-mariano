import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Foligno",
  canonical: links.servizi["frantoio-mobile-inerti"]["foligno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Foligno",
  locationNames: { label: "Foligno", href: "foligno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
