import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Buonconvento",
  canonical: links.servizi["noleggio-bagni-chimici"]["buonconvento"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Buonconvento",
  locationNames: { label: "Buonconvento", href: "buonconvento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
