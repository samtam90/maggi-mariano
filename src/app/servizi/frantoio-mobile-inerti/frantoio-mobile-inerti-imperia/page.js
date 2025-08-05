import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Imperia",
  canonical: links.servizi["frantoio-mobile-inerti"]["imperia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Imperia",
  locationNames: { label: "Imperia", href: "imperia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
