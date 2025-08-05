import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rufina",
  canonical: links.servizi["frantoio-mobile-inerti"]["rufina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rufina",
  locationNames: { label: "Rufina", href: "rufina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
