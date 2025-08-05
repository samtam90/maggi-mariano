import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Brescia",
  canonical: links.servizi["frantoio-mobile-inerti"]["brescia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Brescia",
  locationNames: { label: "Brescia", href: "brescia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
