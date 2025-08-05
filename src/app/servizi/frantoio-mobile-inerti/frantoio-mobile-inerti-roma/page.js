import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Roma",
  canonical: links.servizi["frantoio-mobile-inerti"]["roma"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Roma",
  locationNames: { label: "Roma", href: "roma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
