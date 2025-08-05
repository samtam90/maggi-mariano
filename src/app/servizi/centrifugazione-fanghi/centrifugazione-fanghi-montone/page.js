import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montone",
  canonical: links.servizi["centrifugazione-fanghi"]["montone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montone",
  locationNames: { label: "Montone", href: "montone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
