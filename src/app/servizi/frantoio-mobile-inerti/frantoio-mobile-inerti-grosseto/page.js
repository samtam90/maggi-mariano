import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Grosseto",
  canonical: links.servizi["frantoio-mobile-inerti"]["grosseto"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Grosseto",
  locationNames: { label: "Grosseto", href: "grosseto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
