import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rassina",
  canonical: links.servizi["disidratazione-fanghi"]["rassina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rassina",
  locationNames: { label: "Rassina", href: "rassina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
