import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Piegaro",
  canonical: links.servizi["frantoio-mobile-inerti"]["piegaro"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Piegaro",
  locationNames: { label: "Piegaro", href: "piegaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
