import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Asti",
  canonical: links.servizi["frantoio-mobile-inerti"]["asti"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Asti",
  locationNames: { label: "Asti", href: "asti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
