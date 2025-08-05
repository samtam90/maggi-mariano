import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monte Santa Maria Tiberina",
  canonical: links.servizi["centrifugazione-fanghi"]["monte-santa-maria-tiberina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monte Santa Maria Tiberina",
  locationNames: { label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
