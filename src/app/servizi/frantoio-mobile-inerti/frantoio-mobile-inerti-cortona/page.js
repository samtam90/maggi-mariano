import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cortona",
  canonical: links.servizi["frantoio-mobile-inerti"]["cortona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cortona",
  locationNames: { label: "Cortona", href: "cortona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
