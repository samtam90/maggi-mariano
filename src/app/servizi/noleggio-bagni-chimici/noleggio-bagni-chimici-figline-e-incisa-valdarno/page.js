import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Figline e Incisa Valdarno",
  canonical: links.servizi["noleggio-bagni-chimici"]["figline-e-incisa-valdarno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Figline e Incisa Valdarno",
  locationNames: { label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
