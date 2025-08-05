import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Scheggino",
  canonical: links.servizi["frantoio-mobile-inerti"]["scheggino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Scheggino",
  locationNames: { label: "Scheggino", href: "scheggino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
