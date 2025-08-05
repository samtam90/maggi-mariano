import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Godenzo",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-godenzo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Godenzo",
  locationNames: { label: "San Godenzo", href: "san-godenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
