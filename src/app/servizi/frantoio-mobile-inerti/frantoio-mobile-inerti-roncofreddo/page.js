import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Roncofreddo",
  canonical: links.servizi["frantoio-mobile-inerti"]["roncofreddo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Roncofreddo",
  locationNames: { label: "Roncofreddo", href: "roncofreddo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
