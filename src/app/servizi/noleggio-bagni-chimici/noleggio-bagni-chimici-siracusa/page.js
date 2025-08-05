import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Siracusa",
  canonical: links.servizi["noleggio-bagni-chimici"]["siracusa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Siracusa",
  locationNames: { label: "Siracusa", href: "siracusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
