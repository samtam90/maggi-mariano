import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Taranto",
  canonical: links.servizi["frantoio-mobile-inerti"]["taranto"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Taranto",
  locationNames: { label: "Taranto", href: "taranto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});
