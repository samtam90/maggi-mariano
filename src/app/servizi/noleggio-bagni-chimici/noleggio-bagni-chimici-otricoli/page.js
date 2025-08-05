import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Otricoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["otricoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Otricoli",
  locationNames: { label: "Otricoli", href: "otricoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
