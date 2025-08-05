import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ragusa",
  canonical: links.servizi["frantoio-mobile-inerti"]["ragusa"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ragusa",
  locationNames: { label: "Ragusa", href: "ragusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
