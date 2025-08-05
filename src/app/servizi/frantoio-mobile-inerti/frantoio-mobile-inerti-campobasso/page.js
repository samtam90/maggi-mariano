import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Campobasso",
  canonical: links.servizi["frantoio-mobile-inerti"]["campobasso"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Campobasso",
  locationNames: { label: "Campobasso", href: "campobasso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
