import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vibo Valentia",
  canonical: links.servizi["noleggio-bagni-chimici"]["vibo-valentia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Vibo Valentia",
  locationNames: { label: "Vibo Valentia", href: "vibo-valentia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
