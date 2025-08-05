import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monte Santa Maria Tiberina",
  canonical: links.servizi["disidratazione-fanghi"]["monte-santa-maria-tiberina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monte Santa Maria Tiberina",
  locationNames: { label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
