import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici L'Aquila",
  canonical: links.servizi["noleggio-bagni-chimici"]["l-aquila"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici L'Aquila",
  locationNames: { label: "L'Aquila", href: "l-aquila" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
