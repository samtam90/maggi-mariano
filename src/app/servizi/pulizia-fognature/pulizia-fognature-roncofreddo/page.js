import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Roncofreddo",
  canonical: links.servizi["pulizia-fognature"]["roncofreddo"],
});
export default withBaseProps({
  title: "Pulizia fognature Roncofreddo",
  locationNames: { label: "Roncofreddo", href: "roncofreddo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
