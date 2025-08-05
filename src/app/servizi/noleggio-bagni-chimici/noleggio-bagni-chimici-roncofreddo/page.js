import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Roncofreddo",
  canonical: links.servizi["noleggio-bagni-chimici"]["roncofreddo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Roncofreddo",
  locationNames: { label: "Roncofreddo", href: "roncofreddo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
