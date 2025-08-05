import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Figline e Incisa Valdarno",
  canonical: links.servizi["disidratazione-fanghi"]["figline-e-incisa-valdarno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Figline e Incisa Valdarno",
  locationNames: { label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
