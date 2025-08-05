import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sondrio",
  canonical: links.servizi["frantoio-mobile-inerti"]["sondrio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sondrio",
  locationNames: { label: "Sondrio", href: "sondrio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["sondrio"],
      name: "Sondrio",
  }),
});
