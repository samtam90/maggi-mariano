import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Impruneta",
  canonical: links.servizi["frantoio-mobile-inerti"]["impruneta"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Impruneta",
  locationNames: { label: "Impruneta", href: "impruneta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
