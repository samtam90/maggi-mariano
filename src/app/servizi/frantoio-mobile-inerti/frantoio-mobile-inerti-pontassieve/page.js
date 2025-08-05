import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pontassieve",
  canonical: links.servizi["frantoio-mobile-inerti"]["pontassieve"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pontassieve",
  locationNames: { label: "Pontassieve", href: "pontassieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
