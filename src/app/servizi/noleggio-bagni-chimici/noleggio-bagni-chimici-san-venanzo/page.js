import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Venanzo",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-venanzo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Venanzo",
  locationNames: { label: "San Venanzo", href: "san-venanzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
