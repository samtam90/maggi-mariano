import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Milano",
  canonical: links.servizi["frantoio-mobile-inerti"]["milano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Milano",
  locationNames: { label: "Milano", href: "milano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
