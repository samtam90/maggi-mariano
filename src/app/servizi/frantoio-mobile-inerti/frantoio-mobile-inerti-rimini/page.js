import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rimini",
  canonical: links.servizi["frantoio-mobile-inerti"]["rimini"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rimini",
  locationNames: { label: "Rimini", href: "rimini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
