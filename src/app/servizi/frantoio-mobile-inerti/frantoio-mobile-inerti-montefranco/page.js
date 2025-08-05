import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montefranco",
  canonical: links.servizi["frantoio-mobile-inerti"]["montefranco"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montefranco",
  locationNames: { label: "Montefranco", href: "montefranco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
