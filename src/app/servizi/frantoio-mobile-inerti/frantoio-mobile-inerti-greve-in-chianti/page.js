import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Greve in Chianti",
  canonical: links.servizi["frantoio-mobile-inerti"]["greve-in-chianti"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Greve in Chianti",
  locationNames: { label: "Greve in Chianti", href: "greve-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
