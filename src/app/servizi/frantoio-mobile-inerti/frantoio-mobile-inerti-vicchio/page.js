import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Vicchio",
  canonical: links.servizi["frantoio-mobile-inerti"]["vicchio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Vicchio",
  locationNames: { label: "Vicchio", href: "vicchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
