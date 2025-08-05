import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Napoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["napoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Napoli",
  locationNames: { label: "Napoli", href: "napoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
