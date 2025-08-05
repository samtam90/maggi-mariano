import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castelnuovo Berardenga",
  canonical: links.servizi["noleggio-bagni-chimici"]["castelnuovo-berardenga"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castelnuovo Berardenga",
  locationNames: { label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
