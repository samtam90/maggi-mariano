import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montespertoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["montespertoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montespertoli",
  locationNames: { label: "Montespertoli", href: "montespertoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
