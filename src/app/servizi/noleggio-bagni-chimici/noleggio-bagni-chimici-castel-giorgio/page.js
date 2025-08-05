import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Giorgio",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-giorgio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castel Giorgio",
  locationNames: { label: "Castel Giorgio", href: "castel-giorgio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
