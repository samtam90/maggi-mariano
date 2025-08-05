import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Giustino",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-giustino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Giustino",
  locationNames: { label: "San Giustino", href: "san-giustino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
