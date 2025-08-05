import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Fucecchio",
  canonical: links.servizi["frantoio-mobile-inerti"]["fucecchio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Fucecchio",
  locationNames: { label: "Fucecchio", href: "fucecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
