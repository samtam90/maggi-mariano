import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montecastrilli",
  canonical: links.servizi["frantoio-mobile-inerti"]["montecastrilli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montecastrilli",
  locationNames: { label: "Montecastrilli", href: "montecastrilli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
