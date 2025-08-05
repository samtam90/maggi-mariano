import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Como",
  canonical: links.servizi["noleggio-bagni-chimici"]["como"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Como",
  locationNames: { label: "Como", href: "como" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
