import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rassina",
  canonical: links.servizi["centrifugazione-fanghi"]["rassina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rassina",
  locationNames: { label: "Rassina", href: "rassina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
