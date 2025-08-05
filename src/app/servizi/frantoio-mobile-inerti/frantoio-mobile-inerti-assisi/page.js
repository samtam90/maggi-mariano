import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Assisi",
  canonical: links.servizi["frantoio-mobile-inerti"]["assisi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Assisi",
  locationNames: { label: "Assisi", href: "assisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
