import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lucca",
  canonical: links.servizi["frantoio-mobile-inerti"]["lucca"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lucca",
  locationNames: { label: "Lucca", href: "lucca" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
