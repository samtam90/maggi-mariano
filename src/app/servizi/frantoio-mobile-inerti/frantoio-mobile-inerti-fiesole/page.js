import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Fiesole",
  canonical: links.servizi["frantoio-mobile-inerti"]["fiesole"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Fiesole",
  locationNames: { label: "Fiesole", href: "fiesole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
