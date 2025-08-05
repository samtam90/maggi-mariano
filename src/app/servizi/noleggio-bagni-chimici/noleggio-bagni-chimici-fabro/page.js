import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fabro",
  canonical: links.servizi["noleggio-bagni-chimici"]["fabro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Fabro",
  locationNames: { label: "Fabro", href: "fabro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
