import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lecco",
  canonical: links.servizi["frantoio-mobile-inerti"]["lecco"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lecco",
  locationNames: { label: "Lecco", href: "lecco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
